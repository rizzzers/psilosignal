import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Basic email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }
    const { firstName, email } = body

    // Server-side validation
    if (!firstName || typeof firstName !== 'string' || firstName.trim().length === 0) {
      return NextResponse.json(
        { error: 'First name is required.' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    const cleanName = firstName.trim()
    const cleanEmail = email.trim().toLowerCase()

    // Actually subscribe them on Kit (this previously only fired the internal
    // notification below and never enrolled the visitor at all).
    //
    // Uses the generic /v4/subscribers endpoint rather than
    // /v4/forms/{id}/subscribers: the latter 404s ("Form ID not found") for
    // both forms on this account because they're "embed"-type forms, which
    // Kit's API does not support subscribing to directly. Creating the
    // subscriber account-wide is the reliable path regardless of form type.
    // A Kit failure must never block the team notification below, so record it
    // and report it in the email instead of returning early.
    let kitStatus = 'Added to Kit'
    const kitApiKey = process.env.KIT_API_KEY
    if (kitApiKey) {
      const kitRes = await fetch('https://api.kit.com/v4/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kit-Api-Key': kitApiKey,
        },
        body: JSON.stringify({ email_address: cleanEmail, first_name: cleanName, state: 'active' }),
      })
      if (!kitRes.ok) {
        const errBody = await kitRes.text()
        console.error('Kit subscribe error:', kitRes.status, errBody)
        kitStatus = `NOT added to Kit (Kit returned ${kitRes.status}); add manually if valid`
      }
    } else {
      console.error('KIT_API_KEY is not set; skipping actual Kit subscription.')
      kitStatus = 'NOT added to Kit (KIT_API_KEY not set)'
    }

    // Initialize Resend lazily so missing env var doesn't crash at module load
    const resend = new Resend(process.env.RESEND_API_KEY)

    const result = await resend.emails.send({
      from: 'Rose Hill Life Sciences <notifications@ryanestes.info>',
      to: ['ryan@inboxalchemy.co'],
      // newsletter@rosehillreview.com is the client's newsletter login, so they get a copy too.
      cc: ['fernanda@inboxalchemy.co', 'marie@inboxalchemy.co', 'newsletter@rosehillreview.com'],
      subject: 'Rose Hill Review - New Subscriber',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
          <h2 style="font-size: 20px; font-weight: 600; color: #19243F; margin-bottom: 16px;">
            New subscriber on Rose Hill Review
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #747F93; font-size: 14px; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #19243F; font-size: 14px; font-weight: 500;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #747F93; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #19243F; font-size: 14px; font-weight: 500;">${cleanEmail}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #747F93; font-size: 14px;">Kit</td>
              <td style="padding: 12px 0; color: #19243F; font-size: 14px;">${kitStatus}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 13px; color: #747F93;">
            Submitted via rosehillreview.com
          </p>
        </div>
      `,
    })

    if (result.error) {
      console.error('Subscribe error (Resend API):', result.error)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
