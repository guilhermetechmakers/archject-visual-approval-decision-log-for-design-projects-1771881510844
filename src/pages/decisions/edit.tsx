import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function EditDecisionPage() {
  const { decisionId } = useParams<{ decisionId: string }>()

  return (
    <div className="mx-auto max-w-2xl space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link to={`/dashboard/decisions/${decisionId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold text-foreground">Edit decision</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" defaultValue="Kitchen finish options" />
          </div>
          <div className="space-y-2">
            <Label>Reissue share link</Label>
            <p className="text-sm text-muted-foreground">
              Generate a new client link if the previous one expired or was revoked.
            </p>
            <Button variant="outline" size="sm">Reissue link</Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline" asChild>
          <Link to={`/dashboard/decisions/${decisionId}`}>Cancel</Link>
        </Button>
        <Button>Save changes</Button>
      </div>
    </div>
  )
}
