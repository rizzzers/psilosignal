import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Survey answers include free text, so escape everything before it goes into the email HTML.
function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function clean(value: unknown, max = 300): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const role = clean(body.role)
    const depth = clean(body.depth)
    const frequency = clean(body.frequency)
    const question = clean(body.question, 1000)
    const topics = Array.isArray(body.topics)
      ? body.topics.filter((t: unknown) => typeof t === 'string').slice(0, 3).map((t: string) => clean(t))
      : []

    if (!role || !depth || !frequency || topics.length === 0) {
      return NextResponse.json(
        { error: 'Please answer every question before submitting.' },
        { status: 400 }
      )
    }

    const rows: [string, string][] = [
      ['Role', role],
      ['Topics', topics.join('; ')],
      ['Depth', depth],
      ['Frequency', frequency],
      ['Their question', question || '(none)'],
    ]

    // Initialize Resend lazily so missing env var doesn't crash at module load
    const resend = new Resend(process.env.RESEND_API_KEY)

    const result = await resend.emails.send({
      from: 'Rose Hill Life Sciences <notifications@ryanestes.info>',
      to: ['ryan@inboxalchemy.co'],
      // newsletter@rosehillreview.com is the client's newsletter login, so they get a copy too.
      cc: ['fernanda@inboxalchemy.co', 'marie@inboxalchemy.co', 'newsletter@rosehillreview.com'],
      subject: 'Rose Hill Review - New Survey Response',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px;">
          <h2 style="font-size: 20px; font-weight: 600; color: #19243F; margin-bottom: 16px;">
            New reader survey response
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${rows
              .map(
                ([label, value]) => `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #747F93; font-size: 14px; width: 130px; vertical-align: top;">${label}</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #19243F; font-size: 14px; font-weight: 500;">${escapeHtml(value)}</td>
            </tr>`
              )
              .join('')}
          </table>
          <p style="margin-top: 24px; font-size: 13px; color: #747F93;">
            Submitted via rosehillreview.com/survey
          </p>
        </div>
      `,
    })

    if (result.error) {
      console.error('Survey error (Resend API):', result.error)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Survey error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
