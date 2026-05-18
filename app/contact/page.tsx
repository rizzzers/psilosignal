'use client'

import Link from 'next/link'
import { useState } from 'react'

const INQUIRY_TYPES = [
  { value: '', label: 'Select inquiry type' },
  { value: 'patient-advocate', label: 'Patient or Advocate' },
  { value: 'investor-operator', label: 'Investor or Operator' },
  { value: 'researcher-clinician', label: 'Researcher or Clinician' },
  { value: 'press-media', label: 'Press or Media' },
  { value: 'partnership', label: 'Partnership Inquiry' },
  { value: 'general', label: 'General Inquiry' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', inquiryType: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      } else {
        setStatus('success')
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    border: '1px solid rgba(25, 36, 63, 0.15)',
    borderRadius: '10px',
    fontSize: '15px',
    color: 'var(--navy-dark)',
    background: 'var(--white)',
    outline: 'none',
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    boxSizing: 'border-box',
    appearance: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--navy-med)',
    marginBottom: '8px',
  }

  return (
    <>
      {/* Nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '24px 56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255, 253, 243, 0.7)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: '1px solid rgba(25, 36, 63, 0.05)',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
            fontSize: '20px',
            fontWeight: 500,
            letterSpacing: '-0.025em',
            color: 'var(--navy-dark)',
          }}
        >
          <span className="nav-brand-mark" aria-hidden="true" />
          <span>Rose Hill Review</span>
        </Link>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <Link href="/#how" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-med)' }}>
            How it works
          </Link>
          <Link href="/blog" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-med)' }}>
            Blog
          </Link>
          <Link
            href="/#subscribe"
            style={{
              padding: '10px 20px',
              background: 'var(--navy-dark)',
              color: 'var(--white)',
              borderRadius: '100px',
              fontSize: '13px',
              fontWeight: 500,
            }}
          >
            Subscribe
          </Link>
        </div>
        <style>{`@media (max-width: 640px) { nav { padding: 18px 24px !important; } }`}</style>
      </nav>

      {/* Header */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '64px',
          paddingLeft: '56px',
          paddingRight: '56px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--navy-lite)',
            marginBottom: '24px',
          }}
        >
          Get in touch
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
            fontWeight: 200,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            fontSize: 'clamp(48px, 6vw, 80px)',
            color: 'var(--navy-dark)',
            marginBottom: '24px',
          }}
        >
          Contact{' '}
          <span className="gradient-text">Rose Hill.</span>
        </h1>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.55,
            color: 'var(--navy-med)',
            maxWidth: '560px',
          }}
        >
          Whether you are a patient, investor, researcher, or member of the press, we want to hear from you. Select your inquiry type below and we will route your message to the right person.
        </p>
      </section>

      {/* Form */}
      <section
        style={{
          paddingBottom: '120px',
          paddingLeft: '56px',
          paddingRight: '56px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {status === 'success' ? (
          <div
            style={{
              padding: '64px 48px',
              background: 'var(--linen)',
              borderRadius: '24px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--navy-lite)',
                marginBottom: '16px',
              }}
            >
              Message received
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                fontSize: 'clamp(28px, 3vw, 40px)',
                color: 'var(--navy-dark)',
                marginBottom: '16px',
                lineHeight: 1.15,
              }}
            >
              Thank you for reaching out.
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--navy-med)', marginBottom: '32px' }}>
              We will be in touch shortly.
            </p>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: 'var(--navy-dark)',
                color: 'var(--white)',
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Back to home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div
              style={{
                display: 'grid',
                gap: '24px',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-row">
                <div>
                  <label htmlFor="name" style={labelStyle}>Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-row">
                <div>
                  <label htmlFor="organization" style={labelStyle}>Organization <span style={{ color: 'var(--navy-lite)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                  <input
                    id="organization"
                    type="text"
                    placeholder="Company or institution"
                    value={form.organization}
                    onChange={(e) => setForm((f) => ({ ...f, organization: e.target.value }))}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="inquiryType" style={labelStyle}>Inquiry type</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      id="inquiryType"
                      value={form.inquiryType}
                      onChange={(e) => setForm((f) => ({ ...f, inquiryType: e.target.value }))}
                      required
                      style={{
                        ...inputStyle,
                        cursor: 'pointer',
                        color: form.inquiryType ? 'var(--navy-dark)' : 'var(--navy-lite)',
                        paddingRight: '40px',
                      }}
                    >
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t.value} value={t.value} disabled={!t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--navy-lite)"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  placeholder="How can we help?"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                />
              </div>

              {status === 'error' && (
                <p style={{ fontSize: '14px', color: '#c0392b', fontWeight: 500 }}>{errorMsg}</p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    padding: '16px 40px',
                    background: status === 'submitting' ? 'var(--navy-med)' : 'var(--navy-dark)',
                    color: 'var(--white)',
                    border: 'none',
                    borderRadius: '100px',
                    fontSize: '15px',
                    fontWeight: 500,
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                    letterSpacing: '-0.01em',
                    transition: 'background 0.2s ease',
                  }}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>
              </div>
            </div>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer
        style={{
          background: 'var(--navy-dark)',
          color: 'rgba(239, 237, 228, 0.6)',
          padding: '40px 56px',
          borderTop: '1px solid rgba(239, 237, 228, 0.08)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: 'rgba(239, 237, 228, 0.5)',
          }}
        >
          <span>&copy; 2026 Rose Hill Life Sciences</span>
          <Link href="/" style={{ color: 'rgba(239, 237, 228, 0.6)' }}>
            Back to Rose Hill Review
          </Link>
        </div>
      </footer>

      <style>{`
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </>
  )
}
