import { Link, useParams } from 'react-router-dom'
import { FileCheck, FolderOpen, Plus, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockDecisions = [
  { id: '1', title: 'Kitchen finish options', status: 'pending' },
  { id: '2', title: 'Bathroom tile selection', status: 'approved' },
]

export function ProjectWorkspacePage() {
  const { projectId } = useParams<{ projectId: string }>()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Project workspace</h1>
          <p className="text-muted-foreground">Project ID: {projectId}</p>
        </div>
        <Button asChild>
          <Link to="/dashboard/decisions/new">
            <Plus className="mr-2 h-4 w-4" />
            New decision
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Decisions</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Files</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Decisions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {mockDecisions.map((d) => (
              <li key={d.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="font-medium text-foreground">{d.title}</span>
                <span className={`text-sm ${d.status === 'approved' ? 'text-success' : 'text-warning'}`}>
                  {d.status}
                </span>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/dashboard/decisions/${d.id}`}>Open</Link>
                </Button>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="mt-4" asChild>
            <Link to={`/dashboard/projects/${projectId}/files`}>
              <FolderOpen className="mr-2 h-4 w-4" />
              Files & drawings
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
