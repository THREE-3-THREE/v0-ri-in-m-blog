"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface StatItemProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  duration?: number
}

function StatItem({ value, label, suffix = "", prefix = "", duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  const countingRef = useRef(false)

  useEffect(() => {
    if (inView && !countingRef.current) {
      countingRef.current = true
      let start = 0
      const end = value
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold mb-2 text-primary dark:text-primary/90">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Our Impact on Rhode Island Businesses
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatItem value={500} label="RI Businesses Helped" suffix="+" />
            <StatItem value={85} label="Average Traffic Increase" suffix="%" />
            <StatItem value={3200} label="Keywords Ranked" suffix="+" />
            <StatItem value={12} label="Years of Experience" />
          </div>
        </div>
      </div>
    </section>
  )
}
