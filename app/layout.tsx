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
    default: 'Psilosignal - Weekly clarity on psychedelic medicine',
    template: '%s | Psilosignal',
  },
  description:
    'A weekly newsletter on the science, regulation, and human story of psychedelic medicine. Written by Domenic Suppa of Rose Hill Health Holdings. Every Tuesday.',
  keywords: [
    'psychedelic medicine',
    'psilocybin',
    'MDMA therapy',
    'ketamine',
    'clinical trials',
    'FDA',
    'newsletter',
    'Domenic Suppa',
    'Rose Hill Health Holdings',
  ],
  authors: [{ name: 'Domenic Suppa', url: 'https://psilosignal.com' }],
  creator: 'Domenic Suppa',
  publisher: 'Rose Hill Health Holdings',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://psilosignal.com',
    siteName: 'Psilosignal',
    title: 'Psilosignal - Weekly clarity on psychedelic medicine',
    description:
      'A weekly newsletter on the science, regulation, and human story of psychedelic medicine. Written by Domenic Suppa of Rose Hill Health Holdings.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Psilosignal newsletter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psilosignal - Weekly clarity on psychedelic medicine',
    description:
      'A weekly newsletter on the science, regulation, and human story of psychedelic medicine. Written by Domenic Suppa of Rose Hill Health Holdings.',
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
  name: 'Rose Hill Health Holdings',
  url: 'https://rosehill.life',
  description:
    'An operator in the emerging psychedelic medicine space, building credible infrastructure for the field.',
  sameAs: [
    'https://twitter.com/RHLifeSciences',
    'https://linkedin.com/company/rosehilllifesciences/',
  ],
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Domenic Suppa',
  jobTitle: 'Chief Operating Officer',
  worksFor: {
    '@type': 'Organization',
    name: 'Rose Hill Health Holdings',
  },
  url: 'https://psilosignal.com',
  sameAs: ['https://www.linkedin.com/in/domenic-suppa-19550316/'],
  description:
    'Co-founder and COO of Rose Hill Health Holdings. Author of Psilosignal, a weekly newsletter on psychedelic medicine.',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
