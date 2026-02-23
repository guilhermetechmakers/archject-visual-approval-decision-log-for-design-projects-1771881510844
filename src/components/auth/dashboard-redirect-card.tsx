import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface DashboardRedirectCardProps {
  className?: string
}

/** Post-auth card guiding user to dashboard. */
export function DashboardRedirectCard({ className }: DashboardRedirectCardProps) {
  return (
    <Card className={cn('rounded-xl shadow-card border-border', className)}>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-4">
          You’re all set. Go to your dashboard to create projects and decisions.
        </p>
        <Button asChild className="w-full rounded-full" size="lg">
          <Link to="/dashboard">
            Go to dashboard
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
