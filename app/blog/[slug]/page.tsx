import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://www.rosehillreview.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rose Hill Life Sciences',
      url: 'https://rosehill.life',
    },
    datePublished: post.publishedDate,
    url: `https://www.rosehillreview.com/blog/${post.slug}`,
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    other: {
      'application/ld+json': JSON.stringify(articleSchema),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
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
          <span>Rose Hill Review</span>
        </Link>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link
            href="/blog"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--navy-med)',
            }}
          >
            All posts
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

      {/* Article header */}
      <article>
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
              gap: '16px',
              alignItems: 'center',
              marginBottom: '32px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                padding: '6px 14px',
                background: 'var(--sky-blue)',
                borderRadius: '100px',
              }}
            >
              {post.category}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontSize: '13px',
                color: 'var(--navy-lite)',
              }}
            >
              {post.readTime}
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
              lineHeight: 1.1,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              color: 'var(--navy-dark)',
              marginBottom: '24px',
            }}
          >
            {post.title}
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
            {post.excerpt}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(25, 36, 63, 0.1)',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontSize: '14px',
                color: 'var(--white)',
                fontWeight: 500,
                background: 'linear-gradient(135deg, var(--lavender), var(--sky-blue))',
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              DS
            </div>
            <div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--navy-dark)',
                }}
              >
                {post.author}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--navy-lite)' }}>
                Rose Hill Life Sciences
              </div>
            </div>
          </div>
        </header>

        {/* Article visual */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto 64px',
            paddingLeft: '56px',
            paddingRight: '56px',
          }}
        >
          <div
            className="blog-card-visual-1"
            style={{
              aspectRatio: '16/7',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div className="grain" aria-hidden="true" />
          </div>
        </div>

        {/* Article body */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            paddingLeft: '56px',
            paddingRight: '56px',
            paddingBottom: '120px',
          }}
        >
          <div className="prose-blog">
            <MDXRemote source={post.content} />
          </div>

          {/* Subscribe CTA */}
          <div
            style={{
              marginTop: '64px',
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
              Enjoy this read?
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
              Get this analysis every Tuesday,{' '}
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
              {/* TODO: update subscriber count */}
              Join 8,400+ readers who rely on the Rose Hill Review for honest, cited coverage of psychedelic medicine.
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

          {/* Back to blog */}
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link
              href="/blog"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--sky-blue)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Back to all posts
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
            Back to Rose Hill Review
          </Link>
        </div>
      </footer>
    </>
  )
}
