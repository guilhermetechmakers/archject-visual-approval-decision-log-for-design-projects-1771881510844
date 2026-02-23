import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

export type AuthTabValue = 'login' | 'signup'

export interface AuthTabsProps {
  value: AuthTabValue
  onValueChange: (value: AuthTabValue) => void
  loginContent: React.ReactNode
  signupContent: React.ReactNode
  className?: string
}

export function AuthTabs({
  value,
  onValueChange,
  loginContent,
  signupContent,
  className,
}: AuthTabsProps) {
  return (
    <Tabs
      value={value}
      onValueChange={(v) => onValueChange(v as AuthTabValue)}
      className={cn('w-full', className)}
    >
      <TabsList className="grid w-full grid-cols-2 rounded-full bg-muted p-1" role="tablist" aria-label="Login or Sign up">
        <TabsTrigger
          value="login"
          role="tab"
          aria-selected={value === 'login'}
          className="rounded-full transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow"
        >
          Log in
        </TabsTrigger>
        <TabsTrigger
          value="signup"
          role="tab"
          aria-selected={value === 'signup'}
          className="rounded-full transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow"
        >
          Sign up
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login" className="mt-6 animate-fade-in focus-visible:outline-none">
        {loginContent}
      </TabsContent>
      <TabsContent value="signup" className="mt-6 animate-fade-in focus-visible:outline-none">
        {signupContent}
      </TabsContent>
    </Tabs>
  )
}
