import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import config from '../../env.config'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Ricardo Mendes - Head de Produtos | Especialista em Pagamentos Recorrentes',
    template: '%s | Ricardo Mendes'
  },
  description: 'Head de Produtos na Bemobi com mais de 10 anos de experiência liderando equipes de produtos. Especialista em implementação de pagamentos recorrentes e otimização de sistemas de billing.',
  keywords: [
    'head de produtos',
    'product manager',
    'pagamentos recorrentes',
    'billing',
    'gestão de produtos',
    'bemobi',
    'ricardo mendes',
    'payment systems',
    'product strategy',
    'fintech'
  ],
  authors: [{ name: 'Ricardo Mendes' }],
  creator: 'Ricardo Mendes',
  publisher: 'Ricardo Mendes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(config.siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: config.siteUrl,
    title: 'Ricardo Mendes - Head de Produtos | Especialista em Pagamentos Recorrentes',
    description: 'Head de Produtos na Bemobi com mais de 10 anos de experiência liderando equipes de produtos. Especialista em implementação de pagamentos recorrentes.',
    siteName: config.siteName,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ricardo Mendes - Head de Produtos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricardo Mendes - Head de Produtos | Especialista em Pagamentos Recorrentes',
    description: 'Head de Produtos na Bemobi com mais de 10 anos de experiência liderando equipes de produtos.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'google-site-verification-code', // Substituir pelo código real
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ricardo Mendes",
              "jobTitle": "Head de Produtos",
              "worksFor": {
                "@type": "Organization",
                "name": "Bemobi"
              },
              "url": config.siteUrl,
              "sameAs": [
                config.linkedinUrl
              ],
              "knowsAbout": [
                "Product Management",
                "Pagamentos Recorrentes",
                "Billing Systems",
                "Product Strategy",
                "Fintech"
              ],
              "description": "Head de Produtos na Bemobi com mais de 10 anos de experiência liderando equipes de produtos, especialista em pagamentos recorrentes."
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 