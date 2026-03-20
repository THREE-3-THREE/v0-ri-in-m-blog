import Link from "next/link"
import Image from "next/image"
import { Twitter } from "lucide-react"
import React from "react"
import Script from "next/script"

export default function Footer() {
  // Function to convert keyword to URL slug
  const keywordToSlug = (keyword: string) => {
    return keyword
      .toLowerCase()
      .replace(/[^\w\s]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
  }

  return (
    <footer className="bg-gray-50/80 dark:bg-gray-950 pt-16 border-t border-gray-200 dark:border-gray-800/60 backdrop-blur-sm">
      <Script
        id="footer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WPFooter",
            copyrightYear: "2026",
            copyrightHolder: {
              "@type": "Organization",
              name: "RIMarketTrends.com",
            },
          }),
        }}
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <section className="space-y-4" aria-label="About RIMarketTrends">
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-[450px] h-[110px]">
                <Image
                  src="/images/rimarket-trends-logo.png"
                  alt="RIMarketTrends.com Logo"
                  fill
                  className="object-contain"
                  sizes="450px"
                  unoptimized={true}
                />
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Expert internet marketing insights for Rhode Island businesses, helping you navigate the digital landscape
              with confidence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </section>

          <nav aria-label="Quick Links">
            <h3 className="font-semibold text-lg mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://amentiai.com/#contact"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="font-semibold text-lg mb-4 dark:text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://amentiai.com/services/seo"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="https://amentiai.com/services/social-media"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  Social Media
                </Link>
              </li>
              <li>
                <Link
                  href="https://amentiai.com/services/ppc"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  PPC Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="https://amentiai.com/services/web-design"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  Web Design
                </Link>
              </li>
            </ul>
          </nav>

          <section aria-label="Contact Information">
            <h3 className="font-semibold text-lg mb-4 dark:text-white">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400 space-y-3">
              <p>123 Main Street</p>
              <p>Providence, RI 02903</p>
              <p>
                <a
                  href="mailto:info@amentiai.com"
                  className="hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  info@amentiai.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+14015551234"
                  className="hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  (401) 555-1234
                </a>
              </p>
            </address>
          </section>
        </div>

        {/* Keywords Section */}
        <section
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
          aria-label="Related Topics"
        >
          <h4 className="sr-only">Related Topics</h4>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-8 text-xs text-gray-500 dark:text-gray-400">
            {[
              "Providence SEO Company",
              "Website Design Providence RI",
              "Digital Marketing Providence RI",
              "SEO Services Rhode Island",
              "Local SEO Providence RI",
              "Marketing Agency Providence RI",
              "Rhode Island Web Development",
              "PPC Management Providence",
              "Social Media Marketing RI",
              "Affordable Web Design RI",
              "Best SEO Agency RI",
              "Search Engine Optimization Providence",
              "RI Small Business Marketing",
              "Ecommerce Website Design RI",
              "Content Marketing Providence",
              "Providence WordPress Developer",
              "Online Marketing Services RI",
              "Branding Agency Providence",
              "Westerly Rhode Island Internet Marketing",
              "Rhode Island Internet Marketing",
              "Connecticut Internet Marketing",
              "Massachusetts Internet Marketing",
              "Westerly Rhode Island SEO",
              "Rhode Island SEO",
              "Connecticut SEO",
              "Massachusetts SEO",
              "USA SEO",
              "USA Internet Marketing",
              "Newport RI SEO",
              "Cranston Digital Marketing",
              "Warwick Web Design",
              "East Greenwich SEO Services",
              "Pawtucket Website Development",
              "North Kingstown Digital Agency",
              "South County RI Marketing",
              "Hartford CT SEO Company",
              "Boston MA Digital Marketing",
              "New England SEO Services",
              "Google Ads Management RI",
              "Facebook Ads Providence",
              "E-commerce SEO Rhode Island",
              "Shopify Experts Providence",
              "WordPress SEO Rhode Island",
              "Mobile Website Design RI",
              "Responsive Web Design Providence",
              "SEO Consultant Rhode Island",
              "Local Business SEO RI",
              "Technical SEO Services Providence",
            ].map((keyword, index, array) => (
              <React.Fragment key={keyword}>
                <Link
                  href={`/blog/${keywordToSlug(keyword)}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {keyword}
                </Link>
                {index < array.length - 1 && " • "}
              </React.Fragment>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            &copy; <time dateTime="2026">2026</time> RIMarketTrends.com. powered by{" "}
            <Link
              href="/blog/providence-seo-company"
              className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
              Amenti AI
            </Link>
          </p>
        </section>
      </div>
    </footer>
  )
}
