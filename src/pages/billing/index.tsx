import { Link } from 'react-router-dom'
import { CreditCard, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function BillingPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Billing</h1>
        <p className="text-muted-foreground">Manage your subscription and invoices.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current plan</CardTitle>
          <CardDescription>You are on the Starter plan.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Includes 3 projects, 50 decisions per month, and export to PDF/CSV.
          </p>
          <Button asChild>
            <Link to="/dashboard/checkout">Change plan</Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment method
          </CardTitle>
          <CardDescription>Update your payment details.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">Update payment method</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Invoices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No invoices yet.</p>
          <Button variant="outline" className="mt-2" asChild>
            <Link to="/dashboard/transactions">View transaction history</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
