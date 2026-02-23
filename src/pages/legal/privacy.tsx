import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function PrivacyPage() {
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
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: February 2025.</p>

        <h2>1. Data we collect</h2>
        <p>
          We collect account information (email, name), workspace and project data, decision content and approvals,
          and usage data necessary to operate the service.
        </p>

        <h2>2. How we use your data</h2>
        <p>
          We use your data to provide the Archject service, send transactional emails, improve our product,
          and comply with legal obligations.
        </p>

        <h2>3. Data sharing</h2>
        <p>
          We do not sell your data. We may share data with service providers (hosting, email, analytics) under
          strict agreements. We may disclose data when required by law.
        </p>

        <h2>4. Your rights (GDPR)</h2>
        <p>
          You may access, correct, export, or request deletion of your personal data from your account settings
          or by contacting us.
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
