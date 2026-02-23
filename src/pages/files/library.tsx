import { useParams, Link } from 'react-router-dom'
import { Upload, FileText, ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockFiles = [
  { id: '1', name: 'Floor plan.pdf', size: '2.4 MB', updated: 'Today' },
  { id: '2', name: 'Elevation A.png', size: '1.1 MB', updated: 'Yesterday' },
]

export function FilesLibraryPage() {
  const { projectId } = useParams<{ projectId: string }>()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link to={`/dashboard/projects/${projectId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Files & drawings</h1>
          <p className="text-muted-foreground">Project assets. Link files to decisions.</p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-8 text-center">
            <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-2 text-sm font-medium text-foreground">Upload files</p>
            <p className="text-sm text-muted-foreground">Drag and drop or click to browse</p>
            <Button className="mt-4">Select files</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent files</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {mockFiles.map((f) => (
              <li
                key={f.id}
                className="flex items-center justify-between rounded-lg border border-border p-3"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{f.name}</p>
                    <p className="text-sm text-muted-foreground">{f.size} · {f.updated}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Link to decision</Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
