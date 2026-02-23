import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Share2, Download, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockDecision = {
  id: '1',
  title: 'Kitchen finish options',
  status: 'pending',
  options: [
    { id: 'a', label: 'Option A', description: 'Light oak veneer' },
    { id: 'b', label: 'Option B', description: 'Matte white laminate' },
  ],
}

export function DecisionDetailPage() {
  const { decisionId } = useParams<{ decisionId: string }>()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/dashboard/decisions">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-semibold text-foreground">{mockDecision.title}</h1>
            <p className="text-sm text-muted-foreground">Decision ID: {decisionId}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share client link
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to={`/dashboard/decisions/${decisionId}/edit`}>Edit</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visual comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {mockDecision.options.map((opt) => (
                  <div
                    key={opt.id}
                    className="aspect-video rounded-lg border border-border bg-muted flex items-center justify-center text-muted-foreground"
                  >
                    Option image placeholder
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Comments & annotations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No comments yet.</p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Approval log</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Awaiting client approval.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="inline-flex items-center gap-2 rounded-full bg-warning/20 px-3 py-1 text-sm font-medium text-foreground">
                Pending
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
