import Link from 'next/link'
import SignupForm from '../components/SignupForm'

export default function SubscribePage() {
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
          <Link href="/#how" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-med)' }} className="nav-hide">
            How it works
          </Link>
          <Link href="/blog" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-med)' }} className="nav-hide">
            Blog
          </Link>
          <Link href="/contact" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-med)' }} className="nav-hide">
            Contact
          </Link>
          <span
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
          </span>
        </div>
        <style>{`@media (max-width: 640px) { .nav-hide { display: none !important; } nav { padding: 18px 24px !important; } }`}</style>
      </nav>

      {/* Header */}
      <section
        style={{
          paddingTop: '180px',
          paddingLeft: '56px',
          paddingRight: '56px',
          paddingBottom: 0,
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: 'var(--navy-med)',
            marginBottom: '40px',
            padding: '8px 18px',
            background: 'var(--linen)',
            borderRadius: '100px',
          }}
        >
          <span className="pulse-dot" aria-hidden="true" />
          Get the next issue, free
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
            fontWeight: 200,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            fontSize: 'clamp(48px, 7vw, 96px)',
            marginBottom: '24px',
            color: 'var(--navy-dark)',
          }}
        >
          Subscribe to <span className="gradient-text">Rose Hill Review.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(18px, 1.6vw, 22px)',
            lineHeight: 1.5,
            color: 'var(--navy-med)',
            maxWidth: '560px',
            margin: '0 auto 48px',
            fontWeight: 400,
          }}
        >
          Every Tuesday, one email that separates real breakthroughs in psychedelic medicine from marketing hype, in plain language, with the citations to back it up.
        </p>

        <div style={{ maxWidth: '520px', margin: '0 auto 24px' }}>
          <SignupForm variant="hero" />
        </div>

        <div
          style={{
            textAlign: 'center',
            marginBottom: '96px',
            fontSize: '13px',
            color: 'var(--navy-lite)',
          }}
        >
          {/* TODO: update subscriber count */}
          Join <strong style={{ color: 'var(--navy-dark)', fontWeight: 500 }}>8,400+ readers</strong> &middot; One email per week &middot; Unsubscribe anytime
        </div>
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
    </>
  )
}
