import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://psilosignal.com'),
  title: {
    default: 'Rose Hill Review — A Psychedelic Brief',
    template: '%s | Rose Hill Review',
  },
  description:
    'A weekly brief on the science, regulation, and human story of psychedelic medicine. Published by Rose Hill Life Sciences. Every Tuesday.',
  keywords: [
    'psychedelic medicine',
    'psilocybin',
    'MDMA therapy',
    'ketamine',
    'clinical trials',
    'FDA',
    'newsletter',
    'Rose Hill Life Sciences',
    'Rose Hill Review',
    'psychedelic brief',
  ],
  authors: [{ name: 'Rose Hill Life Sciences', url: 'https://psilosignal.com' }],
  creator: 'Rose Hill Life Sciences',
  publisher: 'Rose Hill Life Sciences',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://psilosignal.com',
    siteName: 'Rose Hill Review',
    title: 'Rose Hill Review — A Psychedelic Brief',
    description:
      'A weekly brief on the science, regulation, and human story of psychedelic medicine. Published by Rose Hill Life Sciences.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rose Hill Review newsletter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rose Hill Review — A Psychedelic Brief',
    description:
      'A weekly brief on the science, regulation, and human story of psychedelic medicine. Published by Rose Hill Life Sciences.',
    images: ['/og-image.png'],
    creator: '@RHLifeSciences',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rose Hill Life Sciences',
  url: 'https://rosehill.life',
  description:
    'An operator in the emerging psychedelic medicine space, building credible infrastructure for the field.',
  sameAs: [
    'https://twitter.com/RHLifeSciences',
    'https://linkedin.com/company/rosehilllifesciences/',
  ],
}

const newsletterSchema = {
  '@context': 'https://schema.org',
  '@type': 'Periodical',
  name: 'Rose Hill Review',
  description: 'A weekly brief on the science, regulation, and human story of psychedelic medicine.',
  publisher: {
    '@type': 'Organization',
    name: 'Rose Hill Life Sciences',
    url: 'https://rosehill.life',
  },
  url: 'https://psilosignal.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable}`}
      style={
        {
          '--body': 'var(--font-inter), system-ui, sans-serif',
          '--display': 'var(--font-inter-tight), system-ui, sans-serif',
        } as React.CSSProperties
      }
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(newsletterSchema) }}
        />
      </head>
      <body
        style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  )
}
