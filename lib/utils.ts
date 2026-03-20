import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { allBlogPosts } from "./blog-data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Use a consistent date format that won't change between server and client
export function formatDate(dateString: string) {
  // Use a fixed format that will be consistent between server and client
  const date = new Date(dateString)

  // Format manually to avoid locale differences
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const day = date.getUTCDate()
  const month = months[date.getUTCMonth()]
  const year = date.getUTCFullYear()

  return `${month} ${day}, ${year}`
}

// Default fallback image
export function getPlaceholderImage(): string {
  return "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg"
}

// Generate blur placeholder data URLs
export function getBlurDataURL(): string {
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
}

// Function to convert a string to a slug
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// Update keywordToSlug function to be consistent throughout the app
export function keywordToSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
}

// Available images for keyword articles — high-quality Pexels photos
const availableImages = [
  "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1200",
]

// Function to deterministically select an image for a keyword
function getImageForKeyword(keyword: string): string {
  // Create a simple hash of the keyword
  let hash = 0
  for (let i = 0; i < keyword.length; i++) {
    hash = (hash << 5) - hash + keyword.charCodeAt(i)
    hash = hash & hash // Convert to 32bit integer
  }

  // Use the hash to select an image
  const imageIndex = Math.abs(hash % availableImages.length)
  return availableImages[imageIndex]
}

// Add function to generate dynamic content for keyword articles
export function generateKeywordArticleContent(keyword: string): string {
  // Use a fixed keyword for the link to avoid hydration issues
  const linkKeyword = "Providence SEO Company"

  return `
# ${keyword}

## Expert ${keyword} Services for Rhode Island Businesses

Are you looking for top-quality ${keyword} services in Rhode Island? You've come to the right place. In today's competitive digital landscape, having a strong online presence is essential for businesses of all sizes, and our expert team specializes in delivering exceptional ${keyword} solutions tailored to the unique needs of Rhode Island businesses.

## Why ${keyword} Matters for Rhode Island Businesses

In the competitive Rhode Island market, effective ${keyword} strategies can make the difference between thriving and merely surviving. Our approach combines industry best practices with deep local knowledge to create solutions that drive real results for businesses throughout Providence, Newport, Warwick, and all Rhode Island communities.

### The Benefits of Professional ${keyword} Services

When you partner with experts for your ${keyword} needs, you'll experience numerous advantages:

1. **Increased Local Visibility**: Our tailored strategies help Rhode Island businesses appear prominently in local searches
2. **Higher Quality Traffic**: Attract visitors who are actively searching for your products or services in Rhode Island
3. **Improved Conversion Rates**: Turn more of your website visitors into paying customers
4. **Enhanced Brand Reputation**: Build credibility and trust with your Rhode Island audience
5. **Data-Driven Results**: Make decisions based on analytics and proven performance metrics

## Our ${keyword} Process

Our comprehensive approach to ${keyword} for Rhode Island businesses includes:

### 1. In-Depth Analysis

We begin with a thorough assessment of your current online presence, competitive landscape, and specific goals for your Rhode Island business.

### 2. Strategic Planning

Based on our findings, we develop a customized strategy designed to achieve your objectives in the Rhode Island market.

### 3. Expert Implementation

Our team of specialists executes your strategy with precision, using industry best practices and innovative techniques.

### 4. Continuous Optimization

We constantly monitor performance and make data-driven adjustments to maximize your results.

### 5. Transparent Reporting

Regular reports keep you informed about your progress and the return on your investment.

## Why Choose Us for ${keyword} in Rhode Island

Our team brings unmatched expertise in ${keyword} combined with deep knowledge of the Rhode Island market. We understand the unique challenges and opportunities that local businesses face, and we're committed to helping you achieve sustainable growth.

## Ready to Transform Your ${keyword} Strategy?

If you're ready to take your Rhode Island business to the next level with professional ${keyword} services, we're here to help. Contact our [${linkKeyword}](https://amentiai.com) team today for a free consultation and discover how our tailored solutions can drive growth for your business.
`
}

// Add this helper function to generate dynamic blog post data
export function generateDynamicBlogPost(keyword: string) {
  const slug = keyword
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens

  // Use a fixed date to avoid hydration issues
  const date = "2025-01-01T00:00:00Z"

  // Use a deterministic approach instead of random
  const linkKeyword = "Providence SEO Company" // Always use the same keyword

  // Get a deterministic image for this keyword
  const imageUrl = getImageForKeyword(keyword)

  return {
    title: keyword,
    slug: slug,
    date: date,
    description: `Expert ${keyword} services and strategies for Rhode Island businesses. Learn how our tailored solutions can help you grow your business.`,
    imageUrl: imageUrl, // Use a real image instead of placeholder
    content: generateKeywordArticleContent(keyword),
    isDynamic: true,
    linkKeyword: linkKeyword,
  }
}

export const blogPosts = allBlogPosts
