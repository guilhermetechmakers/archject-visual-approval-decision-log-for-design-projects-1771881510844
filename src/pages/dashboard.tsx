import { Link } from 'react-router-dom'
import { FileCheck, FolderOpen, Plus, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const awaitingApprovals = [
  { id: '1', title: 'Kitchen finish options', project: 'Riverside House', due: 'Tomorrow' },
  { id: '2', title: 'Bathroom tile selection', project: 'Riverside House', due: 'In 3 days' },
]

const recentProjects = [
  { id: '1', name: 'Riverside House', decisionsCount: 5 },
  { id: '2', name: 'Office Fit-out', decisionsCount: 2 },
]

export function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your projects and pending approvals.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Awaiting approval</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2</div>
            <p className="text-xs text-muted-foreground">Decisions pending client response</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active projects</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2</div>
            <p className="text-xs text-muted-foreground">Projects in progress</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Awaiting approvals</CardTitle>
            <CardDescription>Decisions waiting for client response</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {awaitingApprovals.map((item) => (
                <li key={item.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.project} · Due {item.due}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/dashboard/decisions/${item.id}`}>View</Link>
                  </Button>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-4 w-full" asChild>
              <Link to="/dashboard/decisions">View all decisions</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent projects</CardTitle>
            <CardDescription>Your project workspaces</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recentProjects.map((project) => (
                <li key={project.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div>
                    <p className="font-medium text-foreground">{project.name}</p>
                    <p className="text-sm text-muted-foreground">{project.decisionsCount} decisions</p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/dashboard/projects/${project.id}`}>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
            <Button className="mt-4 w-full" asChild>
              <Link to="/dashboard/decisions/new">
                <Plus className="mr-2 h-4 w-4" />
                New decision
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
