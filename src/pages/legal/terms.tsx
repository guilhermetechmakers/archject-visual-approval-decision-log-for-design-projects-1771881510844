import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function TermsPage() {
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
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: February 2025.</p>

        <h2>1. Acceptance</h2>
        <p>
          By using Archject you agree to these terms. If you are using the service on behalf of an organization,
          you represent that you have authority to bind that organization.
        </p>

        <h2>2. Use of the service</h2>
        <p>
          You must use the service in compliance with applicable laws and not misuse, abuse, or attempt to
          gain unauthorized access to our systems or other users’ data.
        </p>

        <h2>3. Intellectual property</h2>
        <p>
          You retain ownership of your content. You grant us a limited license to host, process, and display
          your content as necessary to provide the service.
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
