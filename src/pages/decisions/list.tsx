import { Link } from 'react-router-dom'
import { Search, Filter, Plus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const mockDecisions = [
  { id: '1', title: 'Kitchen finish options', status: 'pending', project: 'Riverside House' },
  { id: '2', title: 'Bathroom tile selection', status: 'approved', project: 'Riverside House' },
]

export function DecisionsListPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Decisions</h1>
        <Button asChild>
          <Link to="/dashboard/decisions/new">
            <Plus className="mr-2 h-4 w-4" />
            New decision
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search decisions..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Title</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Project</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Status</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockDecisions.map((d) => (
                  <tr key={d.id} className="border-b border-border hover:bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">{d.title}</td>
                    <td className="px-4 py-3 text-muted-foreground">{d.project}</td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          d.status === 'approved'
                            ? 'text-success'
                            : 'text-warning'
                        }
                      >
                        {d.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/dashboard/decisions/${d.id}`}>Open</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
