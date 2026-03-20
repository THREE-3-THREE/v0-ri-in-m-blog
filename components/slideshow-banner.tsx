"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
// Note: Navigation is handled by the global Navbar component in layout.tsx

export default function SlideshowBanner() {
  const slides = [
    {
      image: "/images/providence-night.png",
      title: "Rhode Island's Premier",
      subtitle: "Internet Marketing Insights",
      ctaText: "Explore Insights",
      ctaLink: "/blog",
      position: "center",
      overlay: "bg-black/30",
    },
    {
      image: "/images/providence-daytime.png",
      title: "Elevate Your Business",
      subtitle: "With Proven RI Marketing Strategies",
      ctaText: "Discover How",
      ctaLink: "/blog/seo-strategies-rhode-island-small-businesses",
      position: "right",
      overlay: "bg-gradient-to-r from-black/30 via-black/20 to-transparent",
    },
    {
      image: "/images/providence-statehouse.png",
      title: "Connect With Your Community",
      subtitle: "Local Marketing That Drives Results",
      ctaText: "Get Started",
      ctaLink: "/blog/social-media-marketing-tips-rhode-island-businesses",
      position: "left",
      overlay: "bg-gradient-to-l from-black/30 via-black/20 to-transparent",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState([false, false, false])
  const slidesRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handleImageLoad = (index) => {
    const newImagesLoaded = [...imagesLoaded]
    newImagesLoaded[index] = true
    setImagesLoaded(newImagesLoaded)
  }

  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [isTransitioning, isHovering])

  return (
    <section
      className="relative pt-20 pb-20 md:pb-28 lg:pb-32 overflow-hidden h-[700px] md:h-[800px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={currentSlide === index ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={cn("absolute inset-0", currentSlide === index ? "z-10" : "z-0")}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg?height=1200&width=1600&query=Providence%20Rhode%20Island"}
                alt={`Providence, Rhode Island ${
                  index === 0 ? "skyline at night" : index === 1 ? "downtown skyline" : "State House and riverfront"
                }`}
                fill
                className="object-cover"
                priority={index === 0 || index === currentSlide}
                sizes="100vw"
                quality={90}
                onLoad={() => handleImageLoad(index)}
                onError={(e) => {
                  console.error(`Failed to load image: ${slide.image}`)
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.src = `/placeholder.svg?height=1200&width=1600&query=Providence%20Rhode%20Island%20${index === 0 ? "night" : index === 1 ? "day" : "statehouse"}`
                }}
              />
              <div className={`absolute inset-0 ${slide.overlay}`}></div>
            </div>

            {/* Moved content up by reducing mt-64 to mt-32 */}
            <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center mt-32">
              <div
                className={cn(
                  "max-w-4xl",
                  slide.position === "center" ? "mx-auto text-center" : "",
                  slide.position === "right" ? "ml-auto mr-0 text-right" : "",
                  slide.position === "left" ? "mr-auto ml-0 text-left" : "",
                )}
              >
                {currentSlide === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {index === 0 ? (
                      // First slide styling
                      <div className="bg-black/50 p-6 md:p-8 rounded-xl max-w-3xl mx-auto backdrop-blur-sm glass-card">
                        <h1 className="text-white">
                          <span className="block mb-2 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
                            {slide.title}
                          </span>
                          <span className="text-2xl md:text-3xl lg:text-4xl font-bold">{slide.subtitle}</span>
                        </h1>

                        <div className="mt-6 md:mt-8">
                          <Button
                            asChild
                            size="lg"
                            className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-base btn-animated"
                          >
                            <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                          </Button>
                        </div>
                      </div>
                    ) : index === 1 ? (
                      // Second slide styling
                      <div className="max-w-xl">
                        <div className="p-6 md:p-8 rounded-xl backdrop-blur-sm bg-black/50 border border-white/10 shadow-2xl glass-card">
                          <h1 className="text-white">
                            <span className="block mb-2 text-3xl md:text-4xl lg:text-5xl font-bold">{slide.title}</span>
                            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-100">
                              {slide.subtitle}
                            </span>
                          </h1>
                          <p className="mt-4 text-white/90 text-base md:text-lg">
                            Our proven strategies have helped hundreds of Rhode Island businesses increase their
                            visibility and grow their customer base.
                          </p>
                          <div className="mt-6 md:mt-8">
                            <Button
                              asChild
                              size="lg"
                              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base border-0 btn-animated"
                            >
                              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Third slide styling
                      <div className="max-w-xl">
                        <div className="p-6 md:p-8 rounded-xl backdrop-blur-sm bg-black/50 border border-green-500/20 shadow-2xl glass-card">
                          <h1 className="text-white">
                            <span className="block mb-2 text-3xl md:text-4xl lg:text-5xl font-bold">{slide.title}</span>
                            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-green-100">
                              {slide.subtitle}
                            </span>
                          </h1>
                          <p className="mt-4 text-white/90 text-base md:text-lg">
                            From the State House to the smallest storefront, our local marketing strategies help Rhode
                            Island businesses build meaningful connections with their communities.
                          </p>
                          <div className="mt-6 md:mt-8 flex items-center gap-4">
                            <Button
                              asChild
                              size="lg"
                              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base border-0 btn-animated"
                            >
                              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                            </Button>
                            <div className="text-xs text-white/70 italic">Featured: RI State House</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black p-3 rounded-full transition-all duration-300 shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black p-3 rounded-full transition-all duration-300 shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </motion.button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (isTransitioning) return
              setIsTransitioning(true)
              setCurrentSlide(index)
              setTimeout(() => setIsTransitioning(false), 500)
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 shadow-md",
              currentSlide === index ? "bg-white scale-125 w-8" : "bg-white/80 hover:bg-white",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
