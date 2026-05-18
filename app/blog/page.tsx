import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Long-form analysis on psychedelic medicine: clinical trials, regulation, and industry credibility. Published by Rose Hill Life Sciences.',
}

const VISUAL_CLASSES = [
  'blog-card-visual-1',
  'blog-card-visual-2',
  'blog-card-visual-3',
]

export default function BlogIndexPage() {
  const posts = getAllPosts()

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
          <Link href="/blog" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-dark)' }}>
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
          paddingBottom: '80px',
          paddingLeft: '56px',
          paddingRight: '56px',
          maxWidth: '1200px',
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
          From the blog
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
          Deeper reads, when{' '}
          <span className="gradient-text">500 words isn&apos;t enough.</span>
        </h1>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.55,
            color: 'var(--navy-med)',
            maxWidth: '640px',
          }}
        >
          Long-form analysis from Rose Hill Life Sciences on clinical trials, regulation, and the operators building credibly in psychedelic medicine.
        </p>
      </section>

      {/* Posts grid */}
      <section
        style={{
          paddingBottom: '120px',
          paddingLeft: '56px',
          paddingRight: '56px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="blog-index-grid"
        >
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                background: 'var(--white)',
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid rgba(25, 36, 63, 0.06)',
              }}
              className="blog-card"
            >
              <div
                className={VISUAL_CLASSES[i % VISUAL_CLASSES.length]}
                style={{ aspectRatio: '16/10', position: 'relative', overflow: 'hidden' }}
              >
                <div className="grain" aria-hidden="true" />
                <span
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--white)',
                    padding: '6px 14px',
                    background: 'rgba(25, 36, 63, 0.55)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '100px',
                  }}
                >
                  {post.category}
                </span>
              </div>
              <div
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  gap: '16px',
                }}
              >
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
                  {post.readTime} &middot;{' '}
                  {new Date(post.publishedDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                    fontSize: '22px',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: 'var(--navy-dark)',
                    lineHeight: 1.2,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.55,
                    color: 'var(--navy-med)',
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(25, 36, 63, 0.08)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      color: 'var(--navy-lite)',
                      fontWeight: 500,
                    }}
                  >
                    By {post.author}
                  </span>
                  <div className="arrow-circle">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      stroke="var(--navy-med)"
                      width="12"
                      height="12"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <style>{`
          @media (max-width: 1024px) { .blog-index-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 640px) { .blog-index-grid { grid-template-columns: 1fr !important; } }
          .blog-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -20px rgba(25, 36, 63, 0.12); }
          .blog-card:hover .arrow-circle { background: var(--navy-dark); border-color: var(--navy-dark); }
          .blog-card:hover .arrow-circle svg { stroke: white; }
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
