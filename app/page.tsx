import SlideshowBanner from "@/components/slideshow-banner"
import FeaturedPosts from "@/components/featured-posts"
import Newsletter from "@/components/newsletter"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import Script from "next/script"
import type { Metadata } from "next"
import ErrorBoundary from "@/components/error-boundary"
import ClientScripts from "@/components/client-scripts"

export const metadata: Metadata = {
  title: "RIMarketTrends.com | Rhode Island Internet Marketing Experts",
  description:
    "Expert digital marketing strategies for Rhode Island businesses. Specialized in local SEO, social media, and web design for Ocean State companies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RIMarketTrends.com | Rhode Island Internet Marketing Experts",
    description:
      "Expert digital marketing strategies for Rhode Island businesses. Specialized in local SEO, social media, and web design for Ocean State companies.",
    url: "https://rimarkettrends.com",
    images: [
      {
        url: "/images/providence-night.png",
        width: 1200,
        height: 630,
        alt: "Providence, Rhode Island skyline at night",
      },
    ],
  },
}

export default function Home() {
  // Use high-quality professional images
  const businessMeetingImage =
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=2000&dpr=1"
  const digitalMarketingImage =
    "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=2000&dpr=1"

  return (
    <ErrorBoundary>
      <div className="overflow-hidden">
        <Script
          id="homepage-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "RIMarketTrends.com | Rhode Island Internet Marketing Experts",
              description:
                "Expert digital marketing strategies for Rhode Island businesses. Specialized in local SEO, social media, and web design for Ocean State companies.",
              url: "https://rimarkettrends.com",
              mainEntity: {
                "@type": "Organization",
                name: "RIMarketTrends.com",
                description: "Rhode Island Internet Marketing Experts",
                url: "https://rimarkettrends.com",
                logo: "https://rimarkettrends.com/images/rimarket-trends-logo.png",
              },
            }),
          }}
        />
        <SlideshowBanner />
        <FeaturedPosts />

        <section className="py-24 bg-white dark:bg-gray-950">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  Expert Marketing Team
                </div>
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Rhode Island Internet Marketing Experts</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  We provide specialized digital marketing services tailored to the unique needs of Rhode Island
                  businesses. From local SEO to social media management, our team helps Ocean State companies thrive
                  online.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Customized strategies for Rhode Island businesses",
                    "Deep understanding of local market dynamics",
                    "Proven results for businesses across the state",
                    "Transparent reporting and communication",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">
                        <CheckCircle2 size={18} />
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={businessMeetingImage || "/placeholder.svg"}
                      alt="Providence Rhode Island marketing experts discussing digital strategy for local businesses"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={90}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-medium text-shadow">Expert marketing strategies for Rhode Island businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Stats />

        <Testimonials />

        <section className="py-24 bg-gray-50/60 dark:bg-gray-900/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10 pointer-events-none"></div>
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200/80 dark:ring-gray-800/80 group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={digitalMarketingImage || "/placeholder.svg"}
                      alt="Rhode Island SEO and digital marketing analytics dashboard showing performance metrics for local businesses"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 bg-primary/30 dark:bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-secondary/30 dark:bg-secondary/20 rounded-full blur-xl"></div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Why Rhode Island Businesses Choose Us</h2>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Local Market Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our deep understanding of Rhode Island's unique business landscape gives you a competitive edge in
                      the local market.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Customized Strategies</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We develop tailored marketing plans that align with your specific business goals and target
                      audience.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Proven Results</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our track record of success with Rhode Island businesses speaks for itself, with measurable ROI
                      and growth.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild>
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Newsletter />
            </div>
          </div>
        </section>

        <ClientScripts />
      </div>
    </ErrorBoundary>
  )
}
