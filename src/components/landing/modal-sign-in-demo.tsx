import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const demoRequestSchema = z.object({
  email: z.string().email('Enter a valid email'),
  company: z.string().min(1, 'Company name is required'),
  message: z.string().optional(),
})

type DemoRequestForm = z.infer<typeof demoRequestSchema>

export interface ModalSignInDemoProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ModalSignInDemo({ open, onOpenChange }: ModalSignInDemoProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<DemoRequestForm>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: { email: '', company: '', message: '' },
  })

  const onSubmit = async (_data: DemoRequestForm) => {
    setIsSubmitting(true)
    try {
      // Placeholder: no API yet
      await new Promise((r) => setTimeout(r, 500))
      toast.success('Demo request received. We’ll be in touch soon.')
      form.reset()
      onOpenChange(false)
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md"
        aria-describedby="demo-dialog-desc"
      >
        <DialogHeader>
          <DialogTitle>Request a demo</DialogTitle>
          <DialogDescription id="demo-dialog-desc">
            Tell us a bit about your team and we’ll set up a personalized walkthrough.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 space-y-4"
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
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending…' : 'Request demo'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
