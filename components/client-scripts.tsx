"use client"
import { useEffect } from "react"

export default function ClientScripts() {
  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      // Intersection Observer for lazy loading
      document.addEventListener("DOMContentLoaded", () => {
        const lazyImages = document.querySelectorAll(".lazy-load")

        if ("IntersectionObserver" in window) {
          const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target
                img.classList.add("loaded")
                imageObserver.unobserve(img)
              }
            })
          })

          lazyImages.forEach((img) => imageObserver.observe(img))
        }
      })

      // Preconnect to important domains
      const links = [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "preconnect", href: "https://images.pexels.com" },
      ]

      links.forEach((link) => {
        const linkEl = document.createElement("link")
        Object.keys(link).forEach((attr) => {
          linkEl[attr] = link[attr]
        })
        document.head.appendChild(linkEl)
      })

      // Add structured data breadcrumbs dynamically based on current page
      const path = window.location.pathname
      if (path !== "/") {
        const segments = path.split("/").filter(Boolean)
        const breadcrumbList = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://rimarkettrends.com",
            },
          ],
        }

        let currentPath = ""
        segments.forEach((segment, index) => {
          currentPath += "/" + segment
          breadcrumbList.itemListElement.push({
            "@type": "ListItem",
            position: index + 2,
            name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
            item: "https://rimarkettrends.com" + currentPath,
          })
        })

        const script = document.createElement("script")
        script.type = "application/ld+json"
        script.text = JSON.stringify(breadcrumbList)
        document.head.appendChild(script)
      }
    }
  }, [])

  return null
}
