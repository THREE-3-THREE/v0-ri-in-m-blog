import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-32 pb-20">
      <div className="animate-fade-in">
        <h1 className="text-8xl font-bold mb-4 text-primary dark:text-primary/80">404</h1>
        <h2 className="text-3xl font-semibold mb-6 dark:text-white">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="default" className="shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/blog">Browse Articles</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
