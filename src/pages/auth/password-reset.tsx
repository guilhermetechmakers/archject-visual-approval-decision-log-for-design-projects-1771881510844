import * as React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const requestSchema = z.object({ email: z.string().email('Enter a valid email') })

type RequestForm = z.infer<typeof requestSchema>

export function PasswordResetPage() {
  const [sent, setSent] = React.useState(false)
  const requestForm = useForm<RequestForm>({
    resolver: zodResolver(requestSchema),
    defaultValues: { email: '' },
  })

  const onRequest = (data: RequestForm) => {
    console.log(data)
    setSent(true)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="text-xl font-semibold text-foreground">Archject</Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Password reset</CardTitle>
            <CardDescription>
              {sent
                ? 'Check your email for a reset link.'
                : 'Enter your email and we’ll send you a link to reset your password.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {sent ? (
              <p className="text-sm text-muted-foreground">
                Didn’t receive an email?{' '}
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => setSent(false)}
                >
                  Try again
                </button>
              </p>
            ) : (
              <form onSubmit={requestForm.handleSubmit(onRequest)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@studio.com" {...requestForm.register('email')} />
                  {requestForm.formState.errors.email && (
                    <p className="text-sm text-destructive">{requestForm.formState.errors.email.message}</p>
                  )}
                </div>
                <Button type="submit" className="w-full">Send reset link</Button>
              </form>
            )}
          </CardContent>
        </Card>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/login" className="hover:text-foreground">Back to log in</Link>
        </p>
      </div>
    </div>
  )
}
