import type { Metadata } from "next"
import Script from "next/script"
import { allBlogPosts } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import Newsletter from "@/components/newsletter"
import Image from "next/image"
import ErrorBoundary from "@/components/error-boundary"

export const metadata: Metadata = {
  title: "Marketing Insights | Rhode Island Digital Marketing Blog",
  description:
    "Expert marketing insights and strategies for Rhode Island businesses. Learn about SEO, social media, content marketing, and more from local experts.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Marketing Insights | Rhode Island Digital Marketing Blog",
    description:
      "Expert marketing insights and strategies for Rhode Island businesses. Learn about SEO, social media, content marketing, and more from local experts.",
    url: "https://rimarkettrends.com/blog",
    type: "website",
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

export default function BlogPage() {
  const newportHarborImage = "/images/providence-night.png"

  return (
    <ErrorBoundary>
      <div className="pt-20 pb-20">
        <Script
          id="blog-listing-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Rhode Island Marketing Insights",
              description: "Expert marketing insights and strategies for Rhode Island businesses.",
              url: "https://rimarkettrends.com/blog",
              publisher: {
                "@type": "Organization",
                name: "RIMarketTrends.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://rimarkettrends.com/images/rimarket-trends-logo.png",
                },
              },
              blogPosts: allBlogPosts.slice(0, 10).map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                description: post.description,
                datePublished: post.date,
                url: `https://rimarkettrends.com/blog/${post.slug}`,
                image: post.imageUrl,
                author: {
                  "@type": "Organization",
                  name: "RIMarketTrends.com",
                },
              })),
            }),
          }}
        />

        <div className="container mx-auto px-4">
          <div className="relative mb-16 rounded-2xl overflow-hidden shadow-xl">
            <div className="h-72 md:h-96 relative">
              <Image
                src={newportHarborImage || "/placeholder.svg"}
                alt="Providence, Rhode Island skyline at night"
                fill
                className="object-cover"
                sizes="100vw"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 md:px-16">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle"></span>
                      Expert Marketing Insights
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                      Rhode Island Marketing Insights
                    </h1>
                    <p className="text-lg text-white/80">
                      Expert strategies for Rhode Island businesses to thrive in the digital landscape
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post) => (
              <div key={post.slug}>
                <BlogCard
                  title={post.title}
                  description={post.description}
                  slug={post.slug}
                  date={post.date}
                  imageUrl={post.imageUrl}
                  category={post.category || "Marketing"}
                />
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto">
            <Newsletter />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
