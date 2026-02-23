import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const demoRequestSchema = z.object({
  email: z.string().email('Enter a valid email'),
  company: z.string().min(1, 'Company name is required'),
  message: z.string().optional(),
})

type DemoRequestForm = z.infer<typeof demoRequestSchema>

export function DemoRequestPage() {
  const form = useForm<DemoRequestForm>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: { email: '', company: '', message: '' },
  })

  const onSubmit = (_data: DemoRequestForm) => {
    // Placeholder: no API yet
    toast.success('Demo request received. We’ll be in touch soon.')
    form.reset()
  }

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

      <main className="container mx-auto max-w-md px-4 py-16">
        <Button variant="ghost" size="sm" className="mb-8 -ml-2" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Request a demo</CardTitle>
            <CardDescription>
              Tell us about your team and we’ll set up a personalized walkthrough of Archject.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="demo-email">Work email</Label>
                <Input
                  id="demo-email"
                  type="email"
                  placeholder="you@studio.com"
                  className="rounded-lg"
                  {...form.register('email')}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-company">Company / studio</Label>
                <Input
                  id="demo-company"
                  type="text"
                  placeholder="Your studio name"
                  className="rounded-lg"
                  {...form.register('company')}
                />
                {form.formState.errors.company && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.company.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-message">Message (optional)</Label>
                <textarea
                  id="demo-message"
                  rows={3}
                  className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="What would you like to see?"
                  {...form.register('message')}
                />
              </div>
              <Button type="submit" className="w-full rounded-full">
                Request demo
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
