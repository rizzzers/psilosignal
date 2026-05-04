'use client'

import { useState } from 'react'

interface SignupFormProps {
  variant?: 'hero' | 'cta'
}

export default function SignupForm({ variant = 'hero' }: SignupFormProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function isValidEmail(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMessage('')

    if (!firstName.trim()) {
      setErrorMessage('Please enter your first name.')
      return
    }
    if (!isValidEmail(email.trim())) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim() }),
      })

      if (res.ok) {
        setStatus('success')
        setFirstName('')
        setEmail('')
      } else {
        const data = await res.json()
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '24px',
          textAlign: 'center',
          background: variant === 'cta' ? 'rgba(255,253,243,0.08)' : 'var(--linen)',
          borderRadius: '12px',
          color: variant === 'cta' ? 'var(--white)' : 'var(--navy-dark)',
        }}
      >
        <p style={{ fontWeight: 600, fontSize: '17px', marginBottom: '6px' }}>
          Thanks! You&apos;re on the list.
        </p>
        <p style={{ fontSize: '14px', opacity: 0.75 }}>
          Look for Vol. 048 in your inbox this Tuesday.
        </p>
      </div>
    )
  }

  if (variant === 'cta') {
    return (
      <form onSubmit={handleSubmit} noValidate>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            maxWidth: '540px',
            margin: '0 auto',
            flexWrap: 'wrap',
          }}
        >
          <input
            className="cta-input"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            aria-label="First name"
          />
          <input
            className="cta-input"
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '18px 32px',
              background: 'var(--white)',
              color: 'var(--navy-dark)',
              border: 'none',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: 600,
              transition: 'transform 0.15s ease',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              opacity: status === 'loading' ? 0.7 : 1,
            }}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {errorMessage && (
          <p
            style={{
              textAlign: 'center',
              marginTop: '12px',
              fontSize: '14px',
              color: '#F2C875',
            }}
          >
            {errorMessage}
          </p>
        )}
      </form>
    )
  }

  // Hero variant
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '10px',
          marginBottom: '10px',
        }}
        className="signup-row"
      >
        <input
          className="signup-input"
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          aria-label="First name"
        />
        <input
          className="signup-input"
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          width: '100%',
          padding: '18px',
          background: 'var(--navy-dark)',
          color: 'var(--white)',
          border: 'none',
          borderRadius: '12px',
          fontSize: '15px',
          fontWeight: 500,
          transition: 'background 0.2s ease',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          opacity: status === 'loading' ? 0.7 : 1,
        }}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe to Psilosignal'}
      </button>
      {errorMessage && (
        <p
          style={{
            textAlign: 'center',
            marginTop: '12px',
            fontSize: '14px',
            color: '#e05252',
          }}
        >
          {errorMessage}
        </p>
      )}
      <style>{`
        @media (max-width: 640px) {
          .signup-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </form>
  )
}
