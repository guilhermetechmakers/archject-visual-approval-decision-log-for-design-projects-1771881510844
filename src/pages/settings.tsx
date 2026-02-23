import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Workspace and account configuration.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Branding</CardTitle>
          <CardDescription>Logo and workspace name for client-facing links.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Workspace name</Label>
            <Input defaultValue="My Studio" />
          </div>
          <div className="space-y-2">
            <Label>Logo</Label>
            <div className="rounded-lg border-2 border-dashed border-border p-6 text-center text-sm text-muted-foreground">
              Upload logo (optional)
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>When to receive email notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="rounded border-border" />
            <span className="text-sm">When a client views or responds to a decision</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="rounded border-border" />
            <span className="text-sm">Reminder when a decision is due soon</span>
          </label>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data & privacy</CardTitle>
          <CardDescription>Export or delete your data.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline">Export my data</Button>
          <Button variant="destructive">Delete account</Button>
        </CardContent>
      </Card>

      <Button variant="outline" asChild>
        <Link to="/dashboard/billing">Billing & subscription</Link>
      </Button>
    </div>
  )
}
