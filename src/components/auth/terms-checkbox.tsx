import * as React from 'react'
import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

export interface TermsCheckboxProps extends Omit<React.ComponentPropsWithoutRef<typeof Checkbox>, 'children'> {
  id?: string
  error?: string
  className?: string
}

export const TermsCheckbox = React.forwardRef<HTMLInputElement, TermsCheckboxProps>(
  (
    {
      id = 'auth-terms',
      checked,
      onCheckedChange,
      error,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('space-y-2', className)}>
        <div className="flex items-start gap-3">
          <Checkbox
            ref={ref}
            id={id}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
            className="mt-0.5"
            {...props}
          />
          <Label htmlFor={id} className="text-sm font-normal text-foreground cursor-pointer leading-tight">
            I agree to the{' '}
            <Link
              to="/terms"
              className="text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link
              to="/privacy"
              className="text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Privacy Policy
            </Link>
          </Label>
        </div>
        {error && (
          <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)
TermsCheckbox.displayName = 'TermsCheckbox'
