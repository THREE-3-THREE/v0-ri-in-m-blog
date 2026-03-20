"use client"

import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SocialShareProps {
  title: string
  url: string
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 py-6">
      <span className="text-gray-700 dark:text-gray-300 font-medium">Share this article:</span>
      <div className="flex items-center gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded-full transition-colors duration-200"
          aria-label="Share on Twitter"
        >
          <Twitter size={18} />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded-full transition-colors duration-200"
          aria-label="Share on Facebook"
        >
          <Facebook size={18} />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded-full transition-colors duration-200"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <Button variant="outline" size="sm" onClick={copyToClipboard} className="ml-1 flex items-center gap-1 text-sm">
          <LinkIcon size={16} />
          {copied ? "Copied!" : "Copy link"}
        </Button>
      </div>
    </div>
  )
}
