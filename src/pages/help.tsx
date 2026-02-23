import { Link } from 'react-router-dom'
import { Book, MessageCircle, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="font-semibold text-foreground">Archject</Link>
          <Link to="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-foreground">Help & documentation</h1>
        <p className="mt-2 text-muted-foreground">Getting started, FAQ, and support.</p>

        <div className="mt-8">
          <Input placeholder="Search help articles..." className="max-w-md" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Book className="h-8 w-8 text-primary" />
              <CardTitle>Getting started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create a project, add a decision with options, and share the client link.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary" />
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Common questions about approvals, exports, and billing.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Contact support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Can’t find what you need? Send us a message and we’ll get back to you.
            </p>
            <Button>Contact support</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
