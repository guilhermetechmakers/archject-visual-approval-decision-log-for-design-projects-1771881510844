import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const mockUsers = [
  { id: '1', name: 'Jane Smith', email: 'jane@studio.com', role: 'Project Lead' },
  { id: '2', name: 'Bob Wilson', email: 'bob@studio.com', role: 'Coordinator' },
]

export function TeamUsersPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Team & users</h1>
          <p className="text-muted-foreground">Manage workspace users and roles.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Invite member</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite team member</DialogTitle>
              <DialogDescription>Send an invite by email. They can join as Project Lead or Coordinator.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="colleague@studio.com"
                  className="flex h-10 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Role</label>
                <select className="flex h-10 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm">
                  <option>Project Lead</option>
                  <option>Coordinator</option>
                </select>
              </div>
              <Button className="w-full">Send invite</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Members</CardTitle>
          <CardDescription>Users with access to this workspace.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockUsers.map((u) => (
              <li
                key={u.id}
                className="flex items-center justify-between rounded-lg border border-border p-3"
              >
                <div>
                  <p className="font-medium text-foreground">{u.name}</p>
                  <p className="text-sm text-muted-foreground">{u.email} · {u.role}</p>
                </div>
                <Button variant="ghost" size="sm">Edit role</Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            SSO and advanced role templates can be configured in enterprise plans.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
