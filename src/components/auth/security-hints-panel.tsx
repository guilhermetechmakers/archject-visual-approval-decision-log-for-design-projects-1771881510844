import { Shield, KeyRound } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface SecurityHintsPanelProps {
  className?: string
}

/**
 * Optional panel: 2FA enrollment CTA and enterprise SSO guidance.
 */
export function SecurityHintsPanel({ className }: SecurityHintsPanelProps) {
  return (
    <Card className={cn('rounded-xl border-border bg-muted/30', className)}>
      <CardHeader className="pb-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Shield className="h-4 w-4" aria-hidden />
        </div>
        <CardTitle className="text-base">Security</CardTitle>
        <CardDescription>
          Optional security options for your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex gap-2">
          <KeyRound className="h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-muted-foreground">
            Two-factor authentication can be enabled in account settings after sign up.
          </p>
        </div>
        <p className="text-muted-foreground">
          Enterprise SSO is available for teams. Contact your admin or reach out to support for setup.
        </p>
      </CardContent>
    </Card>
  )
}
