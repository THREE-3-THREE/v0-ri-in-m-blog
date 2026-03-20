"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote:
      "The SEO insights from RIMarketTrends.com transformed our Providence law firm's online presence. We jumped to the first page of Google for our key practice areas and saw a 180% increase in qualified leads within four months.",
    author: "David Chen",
    title: "Managing Partner, Chen & Associates Law",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    quote:
      "The strategies we learned from their content helped us increase our local search visibility by over 200%. Our Newport restaurant is now booked solid every weekend!",
    author: "Michael Rodriguez",
    title: "Manager, Seaside Dining",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    quote:
      "As a small business in Warwick, we struggled to compete online until we implemented the local marketing tactics from RIMarketTrends. The results have been incredible.",
    author: "Jennifer Williams",
    title: "CEO, RI Tech Solutions",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
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

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-950 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-full"></div>

      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from Rhode Island businesses that have transformed their digital presence with our marketing insights
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full"
                >
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden glass-card">
                    <div className="grid md:grid-cols-5">
                      <div className="md:col-span-2 relative h-64 md:h-auto">
                        {testimonials[currentIndex].isLogo ? (
                          <div className="flex items-center justify-center h-full bg-white p-8">
                            <Image
                              src={testimonials[currentIndex].image || "/placeholder.svg"}
                              alt={`${testimonials[currentIndex].author}, ${testimonials[currentIndex].title}`}
                              width={300}
                              height={200}
                              className="object-contain max-h-full animate-float"
                              sizes="(max-width: 768px) 100vw, 40vw"
                              quality={90}
                            />
                          </div>
                        ) : (
                          <>
                            <Image
                              src={testimonials[currentIndex].image || "/placeholder.svg"}
                              alt={`${testimonials[currentIndex].author}, ${testimonials[currentIndex].title}`}
                              fill
                              className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 40vw"
                              quality={90}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t"></div>
                          </>
                        )}
                      </div>
                      <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center relative">
                        <Quote className="text-primary/20 dark:text-primary/10 absolute top-6 left-6 w-16 h-16 animate-pulse-subtle" />
                        <blockquote className="relative z-10">
                          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                            "{testimonials[currentIndex].quote}"
                          </p>
                          <footer>
                            <p className="font-semibold text-gray-900 dark:text-white">
                              {testimonials[currentIndex].author}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].title}</p>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentIndex === index
                      ? "bg-primary scale-125 w-8"
                      : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
