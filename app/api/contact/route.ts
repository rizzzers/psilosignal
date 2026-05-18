import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const VALID_INQUIRY_TYPES = new Set([
  'patient-advocate',
  'investor-operator',
  'researcher-clinician',
  'press-media',
  'partnership',
  'general',
])

const INQUIRY_LABELS: Record<string, string> = {
  'patient-advocate': 'Patient or Advocate',
  'investor-operator': 'Investor or Operator',
  'researcher-clinician': 'Researcher or Clinician',
  'press-media': 'Press or Media',
  'partnership': 'Partnership Inquiry',
  'general': 'General Inquiry',
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, organization, inquiryType, message } = body

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }

    if (!inquiryType || !VALID_INQUIRY_TYPES.has(inquiryType)) {
      return NextResponse.json({ error: 'Please select an inquiry type.' }, { status: 400 })
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    }

    const cleanName = name.trim()
    const cleanEmail = email.trim().toLowerCase()
    const cleanOrg = organization?.trim() || ''
    const cleanMessage = message.trim()
    const inquiryLabel = INQUIRY_LABELS[inquiryType]

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Rose Hill Review <onboarding@resend.dev>',
      to: ['ryan@ryanestes.info', 'fernanda@ryanestes.info'],
      subject: `[${inquiryLabel}] Contact from ${cleanName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px;">
          <h2 style="font-size: 20px; font-weight: 600; color: #19243F; margin-bottom: 16px;">
            New contact inquiry — Rose Hill Review
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #747F93; font-size: 14px; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #19243F; font-size: 14px; font-weight: 500;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #747F93; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #19243F; font-size: 14px; font-weight: 500;">${cleanEmail}</td>
            </tr>
            ${cleanOrg ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #747F93; font-size: 14px;">Organization</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #19243F; font-size: 14px; font-weight: 500;">${cleanOrg}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #747F93; font-size: 14px;">Inquiry type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EFEDE4; color: #19243F; font-size: 14px; font-weight: 500;">${inquiryLabel}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <div style="font-size: 13px; color: #747F93; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.08em;">Message</div>
            <div style="font-size: 15px; color: #19243F; line-height: 1.6; white-space: pre-wrap;">${cleanMessage}</div>
          </div>
          <p style="margin-top: 32px; font-size: 13px; color: #747F93; border-top: 1px solid #EFEDE4; padding-top: 16px;">
            Submitted via rosehillreview.com
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
