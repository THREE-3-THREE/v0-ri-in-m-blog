"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/90 py-3 shadow-sm backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-800/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center relative z-10">
            <div className="relative w-[400px] h-[80px]">
              <Image
                src="/images/rimarket-trends-logo.png"
                alt="RIMarketTrends.com Logo"
                fill
                className="object-contain"
                sizes="400px"
                priority
                unoptimized={true}
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center space-x-0.5 mr-1">
              <Link
                href="/"
                className="px-2 py-1.5 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="px-2 py-1.5 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
              >
                Insights
              </Link>
              <Link
                href="/about"
                className="px-2 py-1.5 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
              >
                About
              </Link>
            </nav>

            <ThemeToggle />

            <Button asChild size="sm" className="ml-3">
              <Link href="https://amentiai.com/#contact">Contact Us</Link>
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              className="ml-2 p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white dark:bg-gray-950 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col space-y-6 text-lg">
            <Link
              href="/"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/about"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>

          <div className="mt-auto mb-8">
            <Button asChild className="w-full">
              <Link href="https://amentiai.com/#contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
