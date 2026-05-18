import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Basic email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
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

    // Initialize Resend lazily so missing env var doesn't crash at module load
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Rose Hill Review <onboarding@resend.dev>',
      to: 'ryan@ryanestes.info',
      subject: `New Rose Hill Review subscriber: ${cleanName}`,
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
              <td style="padding: 12px 0; color: #747F93; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; color: #19243F; font-size: 14px; font-weight: 500;">${cleanEmail}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 13px; color: #747F93;">
            Submitted via rosehillreview.com
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
