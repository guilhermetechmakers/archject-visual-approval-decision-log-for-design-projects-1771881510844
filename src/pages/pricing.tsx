import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'

const tiers = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    features: [
      'Up to 3 active projects',
      'Unlimited decisions per project',
      'Client approval links',
      'PDF export',
    ],
    cta: { label: 'Start free', href: '/signup' },
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29/mo',
    features: [
      'Unlimited projects',
      'Unlimited team members',
      'Full audit trail & exports',
      'Priority support',
    ],
    cta: { label: 'View plans', href: '/signup' },
    recommended: true,
  },
]

export function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            to="/"
            className="text-xl font-semibold text-foreground hover:opacity-90"
          >
            Archject
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button size="sm" className="rounded-full" asChild>
              <Link to="/signup">Start free</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Simple pricing
          </h1>
          <p className="mt-4 text-muted-foreground">
            Start free. Upgrade when you need more projects and team members.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={
                tier.recommended ? 'ring-2 ring-primary' : ''
              }
            >
              <CardContent className="p-6">
                {tier.recommended && (
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Recommended
                  </span>
                )}
                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  {tier.name}
                </h2>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {tier.price}
                </p>
                <ul className="mt-6 space-y-3" role="list">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full rounded-full"
                  variant={tier.recommended ? 'default' : 'outline'}
                  asChild
                >
                  <Link to={tier.cta.href}>{tier.cta.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/dashboard/billing" className="text-primary hover:underline">
            Manage billing
          </Link>
        </p>
      </main>
    </div>
  )
}
