import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
// import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LoadingScreen } from '@/components/LoadingScreen'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ConsentBanner } from '@/components/ConsentBanner'
import { SecurityGuard } from '@/components/SecurityGuard'
import { WhatsNewTab } from '@/components/WhatsNewTab'
import { UpdateBanner } from '@/components/UpdateBanner'
import { Inter, Syne } from 'next/font/google'
import { SITE_URL } from '@/lib/constants'
import { socialProfiles } from '@/lib/seo'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Open Box Community | Free Discord for Developers, Gamers & Students in India',
    template: '%s | Open Box',
  },
  description: 'Join Open Box, a free multi-server Discord community for developers, gamers and students in India. Explore Junction, OB Dev and OB GG, and join events.',
  keywords: ['Open Box', 'Open Box Community', 'Discord community India', 'developer community India', 'gaming community India', 'student community India', 'free Discord community'],
  authors: [{ name: 'Open Box', url: SITE_URL }],
  creator: 'Open Box',
  icons: {
    icon: '/images/OB.png',
    apple: '/images/OB.png',
    shortcut: '/images/OB.png',
  },
  openGraph: {
    title: 'Open Box Community | Free Discord for Developers, Gamers & Students in India',
    description: 'Join Open Box, a free multi-server Discord community for developers, gamers and students in India. Explore Junction, OB Dev and OB GG, and join events.',
    url: SITE_URL,
    siteName: 'Open Box',
    images: [{ url: `${SITE_URL}/images/og-default.png`, width: 1200, height: 630, alt: 'Open Box Community' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Box Community | Free Discord for Developers, Gamers & Students in India',
    description: 'Join Open Box, a free multi-server Discord community for developers, gamers and students in India. Explore Junction, OB Dev and OB GG, and join events.',
    images: ['/images/og-default.png'],
    site: '@Openboxcomm',
    creator: '@Openboxcomm',
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true }, 'max-image-preview': 'large', 'max-snippet': -1 },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Open Box',
      alternateName: 'Open Box Community',
      description: 'A free multi-server Discord community for developers, gamers and students in India.',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/OB.png`, width: 512, height: 512 },
      image: { '@type': 'ImageObject', url: `${SITE_URL}/images/og-default.png`, width: 1200, height: 630 },
      sameAs: Object.values(socialProfiles),
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        email: 'admin@openboxcomm.in',
        url: `${SITE_URL}/contact-us`,
      },
      foundingDate: '2021-01-01',
      areaServed: 'IN',
      knowsAbout: ['Gaming', 'Software Development', 'Community Building', 'Education'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Open Box',
      description: 'A free multi-server Discord community for developers, gamers and students in India.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/servers?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#050505" />
        <meta name="msvalidate.01" content="E7F02EAA1582F97200DE2848358DE313" />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6088953454914497"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5B33KBB4');`}
        </Script>
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-58P0FR4M2T"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-58P0FR4M2T');
          `}
        </Script>
        <script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5B33KBB4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider>
          <SecurityGuard />
          <ScrollToTop />
          <LoadingScreen />
          <Navbar />
          <main className="pt-16 min-h-screen">{children}</main>
          <WhatsNewTab />
          <Footer />
          <ConsentBanner />
          <UpdateBanner />
        </ThemeProvider>
        <SpeedInsights />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}