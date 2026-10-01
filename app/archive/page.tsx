import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllIssues } from '@/lib/issues'

export const metadata: Metadata = {
  title: 'Full archive',
  description:
    'Every issue of the Rose Hill Review, the weekly psychedelic medicine brief from Rose Hill Life Sciences.',
}

export default function ArchivePage() {
  const issues = getAllIssues()

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
          <Link href="/archive" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-dark)' }}>
            Archive
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
          maxWidth: '1200px',
          margin: '0 auto',
        }}
        className="archive-section"
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
          Full archive &middot; {issues.length} issues
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
            fontWeight: 200,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            fontSize: 'clamp(48px, 6vw, 88px)',
            color: 'var(--navy-dark)',
            marginBottom: '24px',
          }}
        >
          Every issue of the{' '}
          <span className="gradient-text">Rose Hill Review.</span>
        </h1>
        <p style={{ fontSize: '18px', lineHeight: 1.55, color: 'var(--navy-med)', maxWidth: '640px' }}>
          The full run of the weekly brief on psychedelic medicine, newest first.
        </p>
      </section>

      {/* Issue list */}
      <section
        style={{
          paddingBottom: '120px',
          paddingLeft: '56px',
          paddingRight: '56px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
        className="archive-section"
      >
        <div style={{ borderTop: '1px solid rgba(25, 36, 63, 0.1)' }}>
          {issues.map((issue) => (
            <Link
              key={issue.slug}
              href={`/issues/${issue.slug}`}
              className="archive-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '96px 1fr 48px',
                gap: '32px',
                alignItems: 'center',
                padding: '32px 0',
                borderBottom: '1px solid rgba(25, 36, 63, 0.1)',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                  fontSize: '40px',
                  fontWeight: 200,
                  letterSpacing: '-0.04em',
                  color: 'var(--navy-lite)',
                }}
              >
                {issue.issueNumber}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--navy-lite)',
                  }}
                >
                  {issue.category} &middot;{' '}
                  {new Date(`${issue.publishedDate}T12:00:00Z`).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    timeZone: 'UTC',
                  })}{' '}
                  &middot; {issue.readTime}
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                    fontSize: '26px',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: 'var(--navy-dark)',
                    lineHeight: 1.2,
                  }}
                >
                  {issue.title}
                </h2>
                <p style={{ fontSize: '15px', lineHeight: 1.55, color: 'var(--navy-med)' }}>{issue.excerpt}</p>
                <span style={{ fontSize: '13px', color: 'var(--navy-lite)', fontWeight: 500 }}>By {issue.author}</span>
              </div>
              <div className="arrow-circle">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="var(--navy-med)" width="12" height="12">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
        <style>{`
          .archive-row { transition: background 0.3s ease; }
          .archive-row:hover h2 { color: var(--navy-med); }
          .archive-row:hover .arrow-circle { background: var(--navy-dark); border-color: var(--navy-dark); }
          .archive-row:hover .arrow-circle svg { stroke: white; }
          @media (max-width: 640px) {
            .archive-section { padding-left: 24px !important; padding-right: 24px !important; }
            .archive-row { grid-template-columns: 1fr !important; gap: 12px !important; }
            .archive-row .arrow-circle { display: none; }
          }
        `}</style>
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
