import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const mockWorkspaces = [
  { id: '1', name: 'Acme Studio', email: 'admin@acme.com', plans: 'Starter' },
]

export function AdminUsersPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">User management</h1>
        <p className="text-muted-foreground">Customer workspaces and support tools.</p>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search workspaces..." className="max-w-sm" />
        <Button variant="outline">Filters</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workspaces</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left text-sm text-muted-foreground">
                  <th className="pb-2 font-medium">Name</th>
                  <th className="pb-2 font-medium">Contact</th>
                  <th className="pb-2 font-medium">Plan</th>
                  <th className="pb-2 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockWorkspaces.map((w) => (
                  <tr key={w.id} className="border-b border-border">
                    <td className="py-3 font-medium">{w.name}</td>
                    <td className="py-3 text-sm">{w.email}</td>
                    <td className="py-3 text-sm">{w.plans}</td>
                    <td className="py-3 text-right">
                      <Button variant="ghost" size="sm">Impersonate</Button>
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
