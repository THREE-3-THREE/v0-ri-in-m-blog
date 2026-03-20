"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions but no content
    return <Button variant="ghost" size="icon" className="w-9 h-9 opacity-0" aria-hidden="true" />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
      suppressHydrationWarning
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 animate-scale" />
      ) : (
        <Moon className="h-4 w-4 animate-scale" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
