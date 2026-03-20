import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Newsletter from "@/components/newsletter"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "About RIMarketTrends.com | Rhode Island Marketing Experts",
  description:
    "Learn about RIMarketTrends.com, Rhode Island's premier digital marketing resource. Our team of experts specializes in helping Ocean State businesses succeed online.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About RIMarketTrends.com | Rhode Island Marketing Experts",
    description:
      "Learn about RIMarketTrends.com, Rhode Island's premier digital marketing resource. Our team of experts specializes in helping Ocean State businesses succeed online.",
    url: "https://rimarkettrends.com/about",
    type: "website",
    images: [
      {
        url: "/images/newport-bridge.png",
        width: 1200,
        height: 630,
        alt: "Newport Bridge, Rhode Island - iconic landmark connecting Newport and Jamestown",
      },
    ],
  },
}

export default function AboutPage() {
  // Use high-quality professional images
  const newportBridgeImage = "/images/newport-bridge.png"
  const marketingTeamImage =
    "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=2000&dpr=1"

  return (
    <div className="pt-0 pb-20">
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About RIMarketTrends.com",
            description: "Learn about RIMarketTrends.com, Rhode Island's premier digital marketing resource.",
            url: "https://rimarkettrends.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "RIMarketTrends.com",
              description: "Rhode Island Internet Marketing Experts",
              url: "https://rimarkettrends.com",
              logo: "https://rimarkettrends.com/images/rimarket-trends-logo.png",
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
              sameAs: [
                "https://twitter.com/rimarkettrends",
                "https://www.facebook.com/rimarkettrends",
                "https://www.linkedin.com/company/rimarkettrends",
              ],
            },
          }),
        }}
      />
      {/* Rest of the component */}
      <div className="m-0 p-0">
        {/* Navigation Menu */}
        <div className="flex justify-between items-start p-0 m-0">
          <Link href="/">
            <div className="relative w-[800px] h-[200px]">
              <Image
                src="/images/rimarket-trends-logo.png"
                alt="RIMarketTrends.com Logo"
                fill
                className="object-contain object-left-top"
                sizes="800px"
                priority
                unoptimized={true}
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 mt-8 mr-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
            >
              Insights
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200 font-semibold"
            >
              About
            </Link>
            <Button asChild size="sm">
              <Link href="https://amentiai.com/#contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      </div>

      <section className="mt-20 mb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">About RIMarketTrends.com</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Dedicated to helping Rhode Island businesses succeed in the digital landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Our mission is to provide Rhode Island businesses with actionable, expert marketing insights that drive
                real results. We understand the unique challenges and opportunities that come with marketing in the
                Ocean State.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Whether you're a small business in Providence, a restaurant in Newport, or a service provider in
                Warwick, our content is designed to help you navigate the digital landscape and connect with more local
                customers.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We believe that effective marketing shouldn't be complicated or mysterious. Our goal is to demystify
                digital marketing and provide clear, practical advice that Rhode Island businesses can implement right
                away.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={newportBridgeImage || "/placeholder.svg"}
                    alt="Newport Bridge, Rhode Island - iconic landmark connecting Newport and Jamestown"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium text-shadow">Connecting Rhode Island businesses to digital success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Local SEO",
                description:
                  "We specialize in helping Rhode Island businesses improve their visibility in local search results, making it easier for nearby customers to find you.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary dark:text-primary/80"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                ),
              },
              {
                title: "Social Media",
                description:
                  "Our team knows how to create engaging social media strategies that connect with Rhode Island audiences and build meaningful relationships.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary dark:text-primary/80"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                ),
              },
              {
                title: "Email Marketing",
                description:
                  "We help Rhode Island businesses build and nurture customer relationships through strategic, targeted email campaigns.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary dark:text-primary/80"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                ),
              },
              {
                title: "Content Marketing",
                description:
                  "We create compelling content strategies that resonate with Rhode Island audiences and establish your business as an industry authority.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary dark:text-primary/80"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                ),
              },
              {
                title: "PPC Advertising",
                description:
                  "We develop targeted pay-per-click campaigns that maximize your ROI and drive qualified traffic to your Rhode Island business.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary dark:text-primary/80"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                ),
              },
              {
                title: "Web Design",
                description:
                  "We create beautiful, functional websites that represent your Rhode Island business and convert visitors into customers.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary dark:text-primary/80"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`
                  bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up
                  ${index % 3 === 0 ? "[animation-delay:100ms]" : ""} 
                  ${index % 3 === 1 ? "[animation-delay:200ms]" : ""} 
                  ${index % 3 === 2 ? "[animation-delay:300ms]" : ""}
                `}
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/5 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">Why Choose Us</h2>
              <ul className="space-y-6">
                {[
                  "Deep understanding of Rhode Island's business landscape",
                  "Proven track record of success with local businesses",
                  "Customized strategies tailored to your specific goals",
                  "Transparent communication and reporting",
                  "Continuous optimization based on performance data",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">
                      <CheckCircle2 size={20} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={marketingTeamImage || "/placeholder.svg"}
                    alt="Rhode Island digital marketing specialists collaborating on SEO strategy for local businesses"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium text-shadow">Our team of Rhode Island marketing experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Newsletter />
          </div>
        </div>
      </section>
    </div>
  )
}
