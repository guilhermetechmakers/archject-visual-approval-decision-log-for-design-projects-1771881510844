import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CheckoutPage() {
  return (
    <div className="mx-auto max-w-xl space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Checkout</h1>
        <p className="text-muted-foreground">Complete your subscription.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Order summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">Pro plan — $29/month</p>
            <p className="text-sm text-muted-foreground">Unlimited projects and decisions.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment</CardTitle>
            <CardDescription>Card details (Stripe)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Card number</Label>
              <Input placeholder="4242 4242 4242 4242" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Expiry</Label>
                <Input placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label>CVC</Label>
                <Input placeholder="123" />
              </div>
            </div>
            <Button className="w-full">Subscribe</Button>
          </CardContent>
        </Card>
      </div>

      <Button variant="outline" asChild>
        <Link to="/dashboard/billing">Back to billing</Link>
      </Button>
    </div>
  )
}
