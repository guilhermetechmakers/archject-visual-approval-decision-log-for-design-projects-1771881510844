import * as React from 'react'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function EmailVerificationPage() {
  const [resent, setResent] = React.useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="text-xl font-semibold text-foreground">Archject</Link>
        </div>
        <Card>
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/20 text-success">
              <Mail className="h-6 w-6" />
            </div>
            <CardTitle className="text-center">Verify your email</CardTitle>
            <CardDescription className="text-center">
              We’ve sent a verification link to your email. Click the link to activate your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setResent(true)}
            >
              Resend verification email
            </Button>
            {resent && (
              <p className="flex items-center gap-2 text-sm text-success">
                <CheckCircle className="h-4 w-4" />
                Link sent again. Check your inbox.
              </p>
            )}
            <Button asChild className="w-full">
              <Link to="/dashboard">Continue to dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
