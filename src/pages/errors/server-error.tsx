import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ServerErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <AlertCircle className="h-16 w-16 text-destructive" />
      <h1 className="mt-4 text-2xl font-semibold text-foreground">Something went wrong</h1>
      <p className="mt-2 text-center text-muted-foreground">
        We’re sorry. An error occurred. Please try again or contact support if the problem persists.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={() => window.location.reload()}>Try again</Button>
        <Button variant="outline" asChild>
          <Link to="/">Go home</Link>
        </Button>
      </div>
    </div>
  )
}
