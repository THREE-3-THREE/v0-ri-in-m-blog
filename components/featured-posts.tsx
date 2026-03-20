"use client"

import { useRef, useEffect, useState } from "react"
import BlogCard from "./blog-card"
import { blogPosts } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FeaturedPosts() {
  // Get the 3 most recent posts
  const featuredPosts = blogPosts.slice(0, 3)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entries[0].target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              <span className="gradient-text">Featured</span> Insights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Discover our most popular insights on Rhode Island marketing strategies and trends
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300"
          >
            <Link href="/blog">View All Insights</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredPosts.map((post, index) => (
            <div key={post.slug}>
              <BlogCard
                title={post.title}
                description={post.description}
                slug={post.slug}
                date={post.date}
                imageUrl={post.imageUrl}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
