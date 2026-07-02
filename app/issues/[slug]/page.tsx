import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getIssueBySlug, getAllIssues } from '@/lib/issues'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const issues = getAllIssues()
  return issues.map((issue) => ({ slug: issue.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const issue = getIssueBySlug(slug)
  if (!issue) return {}
  return {
    title: issue.title,
    description: issue.excerpt,
    openGraph: {
      title: issue.title,
      description: issue.excerpt,
      type: 'article',
      publishedTime: issue.publishedDate,
      authors: [issue.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: issue.title,
      description: issue.excerpt,
    },
  }
}

export default async function IssuePage({ params }: Props) {
  const { slug } = await params
  const issue = getIssueBySlug(slug)
  if (!issue) notFound()

  const formattedDate = new Date(issue.publishedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

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
          <span>Psilosignal</span>
        </Link>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link
            href="/#issues"
            style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-med)' }}
          >
            All issues
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

      <article>
        {/* Header */}
        <header
          style={{
            paddingTop: '140px',
            paddingBottom: '64px',
            paddingLeft: '56px',
            paddingRight: '56px',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              marginBottom: '32px',
              flexWrap: 'wrap',
            }}
          >
            {issue.issueNumber && (
              <span
                style={{
                  fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--navy-lite)',
                  padding: '5px 12px',
                  border: '1px solid rgba(25, 36, 63, 0.15)',
                  borderRadius: '100px',
                }}
              >
                Issue #{issue.issueNumber}
              </span>
            )}
            <span
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                padding: '5px 12px',
                background: 'var(--sky-blue)',
                borderRadius: '100px',
              }}
            >
              {issue.category}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontSize: '13px',
                color: 'var(--navy-lite)',
              }}
            >
              {issue.readTime}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontSize: '13px',
                color: 'var(--navy-lite)',
              }}
            >
              {formattedDate}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              color: 'var(--navy-dark)',
              marginBottom: '24px',
            }}
          >
            {issue.title}
          </h1>

          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.55,
              color: 'var(--navy-med)',
              marginBottom: '40px',
              maxWidth: '680px',
            }}
          >
            {issue.subtitle}
          </p>

          {/* Author */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(25, 36, 63, 0.1)',
            }}
          >
            <Image
              src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/user/profile_picture/74e0cf8f-bc36-4e15-a523-03d659cdaa7a/thumb_domenic.jpg"
              alt="Domenic Suppa"
              width={42}
              height={42}
              style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy-dark)' }}>
                {issue.author}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--navy-lite)' }}>
                Co-founder, Rose Hill Life Sciences
              </div>
            </div>
          </div>
        </header>

        {/* Hero visual */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto 64px',
            paddingLeft: '56px',
            paddingRight: '56px',
          }}
        >
          <div
            style={{
              aspectRatio: '16/7',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              background: 'linear-gradient(135deg, var(--navy-dark) 0%, #2a3454 50%, var(--navy-med) 100%)',
            }}
          >
            <div className="grain-strong" aria-hidden="true" />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--lavender)',
                  opacity: 0.9,
                }}
              >
                The Rose Hill Review
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                  fontSize: 'clamp(56px, 10vw, 120px)',
                  fontWeight: 200,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: 'var(--white)',
                  opacity: 0.15,
                }}
              >
                {issue.issueNumber || '001'}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            paddingLeft: '56px',
            paddingRight: '56px',
            paddingBottom: '80px',
          }}
        >
          <div className="prose-blog prose-issue">
            <MDXRemote source={issue.content} />
          </div>

          {/* Author sign-off */}
          <div
            style={{
              marginTop: '64px',
              padding: '40px',
              background: 'var(--linen)',
              borderRadius: '20px',
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start',
            }}
          >
            <Image
              src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80,width=1920,height=3840/uploads/asset/file/dcf21ac8-39c5-4bde-a9d2-6dd111d3e9ae/domenic.webp"
              alt="Domenic Suppa"
              width={80}
              height={80}
              style={{ borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
            />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--navy-dark)',
                  marginBottom: '4px',
                }}
              >
                Domenic Suppa
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--navy-lite)',
                  marginBottom: '12px',
                }}
              >
                Co-founder, Rose Hill Life Sciences
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--navy-med)', margin: 0 }}>
                Advancing the development of novel psychedelic-based therapeutics.
              </p>
            </div>
          </div>

          {/* Subscribe CTA */}
          <div
            style={{
              marginTop: '32px',
              padding: '48px',
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
              Enjoy this issue?
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 300,
                letterSpacing: '-0.025em',
                color: 'var(--navy-dark)',
                marginBottom: '16px',
                lineHeight: 1.2,
              }}
            >
              Get this analysis every week,{' '}
              <span className="gradient-text">in your inbox.</span>
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--navy-med)',
                marginBottom: '32px',
                maxWidth: '480px',
                margin: '0 auto 32px',
              }}
            >
              Clinical science, veteran data, and honest coverage of psychedelic medicine — every Tuesday.
            </p>
            <Link
              href="/#subscribe"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                background: 'var(--navy-dark)',
                color: 'var(--white)',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Subscribe free
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link
              href="/#issues"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--sky-blue)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Browse all issues
            </Link>
          </div>
        </div>
      </article>

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
            Back to Psilosignal
          </Link>
        </div>
      </footer>

      <style>{`
        @media (max-width: 640px) {
          article header { padding-left: 24px !important; padding-right: 24px !important; }
          article > div { padding-left: 24px !important; padding-right: 24px !important; }
        }
        .prose-issue h2 {
          font-family: var(--font-inter-tight), system-ui, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--sky-blue);
          margin-top: 56px;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(25, 36, 63, 0.1);
        }
        .prose-issue h2:first-child { margin-top: 0; }
        .prose-issue p { font-size: 17px; line-height: 1.7; color: var(--navy-med); margin-bottom: 20px; }
        .prose-issue strong { color: var(--navy-dark); font-weight: 600; }
        .prose-issue blockquote {
          margin: 32px 0;
          padding: 24px 32px;
          background: var(--linen);
          border-left: 3px solid var(--lavender);
          border-radius: 0 12px 12px 0;
          font-size: 18px;
          font-style: italic;
          color: var(--navy-dark);
          font-weight: 300;
        }
        .prose-issue a { color: var(--sky-blue); text-decoration: underline; text-underline-offset: 3px; }
        .prose-issue a:hover { color: var(--lavender); }
        .prose-issue hr { border: none; border-top: 1px solid rgba(25, 36, 63, 0.1); margin: 48px 0; }
        .prose-issue ol, .prose-issue ul { padding-left: 0; list-style: none; }
        .prose-issue li { font-size: 17px; line-height: 1.7; color: var(--navy-med); margin-bottom: 12px; padding-left: 0; }
        .prose-issue em { color: var(--navy-lite); font-style: italic; font-size: 14px; }
        .prose-issue sup { font-size: 11px; color: var(--sky-blue); }
      `}</style>
    </>
  )
}
