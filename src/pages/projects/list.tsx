import { Link } from 'react-router-dom'
import { FolderOpen, Plus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockProjects = [
  { id: '1', name: 'Riverside House', decisionsCount: 5 },
  { id: '2', name: 'Office Fit-out', decisionsCount: 2 },
]

export function ProjectsListPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Projects</h1>
        <Button asChild>
          <Link to="/dashboard/decisions/new">
            <Plus className="mr-2 h-4 w-4" />
            New decision
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your projects</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockProjects.map((project) => (
              <li key={project.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div className="flex items-center gap-3">
                  <FolderOpen className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{project.name}</p>
                    <p className="text-sm text-muted-foreground">{project.decisionsCount} decisions</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/dashboard/projects/${project.id}`}>Open workspace</Link>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
