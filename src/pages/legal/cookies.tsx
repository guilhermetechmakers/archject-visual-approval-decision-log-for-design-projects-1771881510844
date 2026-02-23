import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="font-semibold text-foreground">Archject</Link>
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-12 prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold">Cookie Policy</h1>
        <p className="text-muted-foreground">Last updated: February 2025.</p>

        <h2>1. What we use cookies for</h2>
        <p>
          We use cookies and similar technologies for authentication, preferences, security, and analytics
          to provide and improve the service.
        </p>

        <h2>2. Categories</h2>
        <p>
          Essential cookies are required for the site to function. Analytics cookies help us understand
          usage. You can manage preferences in your account or cookie banner.
        </p>

        <h2>3. Managing cookies</h2>
        <p>
          You can change your cookie choices at any time. Disabling certain cookies may affect
          functionality.
        </p>

        <p className="mt-8">
          <Button variant="outline" asChild>
            <Link to="/">Back to home</Link>
          </Button>
        </p>
      </main>
    </div>
  )
}
