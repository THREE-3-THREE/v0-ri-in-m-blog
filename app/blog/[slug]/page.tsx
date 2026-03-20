import { allBlogPosts } from "@/lib/blog-data"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import SocialShare from "@/components/social-share"
import Newsletter from "@/components/newsletter"
import ReactMarkdown from "react-markdown"
import Script from "next/script"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Update the generateMetadata function to use our improved keyword handling
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = params

  // Try to find an existing blog post
  const post = allBlogPosts.find((post) => post.slug === slug)

  if (post) {
    return {
      title: `${post.title} | RIMarketTrends.com`,
      description: post.description,
      alternates: {
        canonical: `/blog/${slug}`,
      },
      openGraph: {
        title: `${post.title} | RIMarketTrends.com`,
        description: post.description,
        url: `https://rimarkettrends.com/blog/${slug}`,
        type: "article",
        publishedTime: post.date,
        images: [
          {
            url: post.imageUrl || `https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1200`,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} | RIMarketTrends.com`,
        description: post.description,
        images: [post.imageUrl || `https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1200`],
      },
    }
  }

  // If no post found, create a title from the slug
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${title} | Expert Rhode Island Marketing Services`,
    description: `Learn about ${title} and how professional ${title} services can help your Rhode Island business grow online.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${title} | Expert Rhode Island Marketing Services`,
      description: `Learn about ${title} and how professional ${title} services can help your Rhode Island business grow online.`,
      url: `https://rimarkettrends.com/blog/${slug}`,
      type: "article",
      images: [
        {
          url: `https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1200`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Update the dynamic post generation in the component
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params

  // Try to find an existing blog post
  const post = allBlogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const currentPost = post

  // Get related posts (excluding current post and placeholders)
  const relatedPosts = allBlogPosts.filter((p) => p.slug !== slug && !p.isDynamic).slice(0, 2)

  // Use the post's imageUrl or a default placeholder
  const postImage = currentPost.imageUrl || `https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1200`

  // Format the date on the server to avoid client/server mismatch
  const formattedDate = formatDate(currentPost.date)

  return (
    <div className="pt-0 pb-20">
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: currentPost.title,
            description: currentPost.description,
            image: postImage,
            datePublished: currentPost.date,
            dateModified: currentPost.date,
            author: {
              "@type": "Organization",
              name: "RIMarketTrends.com",
              url: "https://rimarkettrends.com",
            },
            publisher: {
              "@type": "Organization",
              name: "RIMarketTrends.com",
              logo: {
                "@type": "ImageObject",
                url: "https://rimarkettrends.com/images/rimarket-trends-logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://rimarkettrends.com/blog/${params.slug}`,
            },
            keywords: [
              "Rhode Island marketing",
              "digital marketing",
              "SEO",
              "content marketing",
              "Providence marketing",
              params.slug.replace(/-/g, " "),
            ],
          }),
        }}
        strategy="afterInteractive"
      />
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
              className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200 font-semibold"
            >
              Insights
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Button asChild size="sm">
              <Link href="https://amentiai.com/#contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <article className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 mb-6 transition-colors duration-200"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to all insights
          </Link>

          <div className="mb-8">
            <div className="flex items-center mb-4 text-sm">
              <time dateTime={currentPost.date} className="text-gray-500 dark:text-gray-400">
                {formattedDate}
              </time>
              <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
              <span className="text-primary dark:text-primary/80">
                {currentPost.category || "Rhode Island Marketing"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">{currentPost.title}</h1>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 ring-1 ring-gray-200 dark:ring-gray-800">
            <div className="aspect-[16/9] relative">
              <Image
                src={postImage || "/placeholder.svg"}
                alt={currentPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                quality={95}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* Replace dangerouslySetInnerHTML with ReactMarkdown */}
            <ReactMarkdown>{currentPost.content}</ReactMarkdown>
          </div>

          <SocialShare title={currentPost.title} url={`https://rimarkettrends.com/blog/${params.slug}`} />

          <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-800" />

          <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => {
                // Use the related post's imageUrl or a default image
                const relatedPostImage = relatedPost.imageUrl || "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1200"

                return (
                  <div
                    key={relatedPost.slug}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link href={`/blog/${relatedPost.slug}`} className="block">
                      <div className="relative h-48 w-full group">
                        <Image
                          src={relatedPostImage || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 400px"
                          quality={85}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-semibold mb-2 hover:text-primary dark:hover:text-primary/80 transition-colors duration-200 dark:text-white">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          {relatedPost.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-16">
            <Newsletter />
          </div>

          <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Need help with your Rhode Island marketing?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our team of experts specializes in helping Rhode Island businesses grow their online presence with proven
              strategies tailored to your specific needs.
            </p>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="https://amentiai.com/#contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
