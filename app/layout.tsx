import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "RIMarketTrends.com | Rhode Island Internet Marketing Blog",
  description:
    "Expert internet marketing insights for Rhode Island businesses. Local SEO, social media, content marketing strategies tailored for Ocean State companies.",
  keywords:
    "Rhode Island marketing, RI SEO, Providence digital marketing, Ocean State internet marketing, Rhode Island web design",
  authors: [{ name: "RIMarketTrends Team" }],
  creator: "RIMarketTrends.com",
  publisher: "RIMarketTrends.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rimarkettrends.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "RIMarketTrends.com | Rhode Island Internet Marketing Blog",
    description:
      "Expert internet marketing insights for Rhode Island businesses. Local SEO, social media, content marketing strategies tailored for Ocean State companies.",
    url: "https://rimarkettrends.com",
    siteName: "RIMarketTrends.com",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/rimarket-trends-logo.png",
        width: 800,
        height: 600,
        alt: "RIMarketTrends.com Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIMarketTrends.com | Rhode Island Internet Marketing Blog",
    description:
      "Expert internet marketing insights for Rhode Island businesses. Local SEO, social media, content marketing strategies tailored for Ocean State companies.",
    images: ["/images/rimarket-trends-logo.png"],
  },
  icons: {
    icon: "/images/rimarket-trends-logo.png",
    shortcut: "/images/rimarket-trends-logo.png",
    apple: "/images/rimarket-trends-logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Schema.org structured data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RIMarketTrends.com",
              url: "https://rimarkettrends.com",
              logo: "https://rimarkettrends.com/images/rimarket-trends-logo.png",
              sameAs: [
                "https://twitter.com/rimarkettrends",
                "https://www.facebook.com/rimarkettrends",
                "https://www.linkedin.com/company/rimarkettrends",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "Providence",
                addressRegion: "RI",
                postalCode: "02903",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-401-555-1234",
                contactType: "customer service",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
