import { useParams } from 'react-router-dom'
import { LayoutGrid } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockOptions = [
  { id: 'a', label: 'Option A' },
  { id: 'b', label: 'Option B' },
]

export function ClientPortalPage() {
  const { token: _token } = useParams<{ token: string }>()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <span className="font-semibold text-foreground">Archject</span>
          <span className="text-sm text-muted-foreground">Review & approve</span>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-foreground">Kitchen finish options</h1>
          <p className="mt-2 text-muted-foreground">Please compare the options below and approve your choice.</p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
              {mockOptions.map((opt) => (
                <div
                  key={opt.id}
                  className="aspect-video rounded-lg border border-border bg-muted flex flex-col items-center justify-center gap-2"
                >
                  <LayoutGrid className="h-8 w-8 text-muted-foreground" />
                  <span className="text-sm font-medium">{opt.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg">Approve Option A</Button>
          <Button variant="outline" size="lg">Approve Option B</Button>
          <Button variant="secondary" size="lg">Request changes</Button>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Your response will be recorded with a timestamp for the project record.
        </p>
      </main>
    </div>
  )
}
