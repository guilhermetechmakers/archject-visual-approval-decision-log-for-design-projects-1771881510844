import * as React from 'react'
import { Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface WorkspaceFlowPanelProps {
  /** Create new workspace */
  onCreateWorkspace?: (name: string) => void | Promise<void>
  /** Join existing (e.g. invite code) - placeholder */
  onJoinWorkspace?: (code: string) => void | Promise<void>
  isLoading?: boolean
  error?: string
  className?: string
}

type Step = 'create' | 'join'

export function WorkspaceFlowPanel({
  onCreateWorkspace,
  onJoinWorkspace,
  isLoading = false,
  error,
  className,
}: WorkspaceFlowPanelProps) {
  const [step, setStep] = React.useState<Step>('create')
  const [name, setName] = React.useState('')
  const [joinCode, setJoinCode] = React.useState('')

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    onCreateWorkspace?.(trimmed)
  }

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = joinCode.trim()
    if (!trimmed) return
    onJoinWorkspace?.(trimmed)
  }

  return (
    <Card className={cn('border-border bg-card shadow-card', className)}>
      <CardHeader>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Building2 className="h-5 w-5" aria-hidden />
        </div>
        <CardTitle className="text-lg">Workspace</CardTitle>
        <CardDescription>
          Create a workspace to organize your projects and decisions, or join an existing one with an invite code.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex rounded-full bg-muted p-1">
          <button
            type="button"
            onClick={() => setStep('create')}
            className={cn(
              'flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all',
              step === 'create'
                ? 'bg-primary text-primary-foreground shadow'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Create workspace
          </button>
          <button
            type="button"
            onClick={() => setStep('join')}
            className={cn(
              'flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all',
              step === 'join'
                ? 'bg-primary text-primary-foreground shadow'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Join with code
          </button>
        </div>

        {step === 'create' && (
          <form onSubmit={handleCreate} className="space-y-4 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="workspace-name">Workspace name</Label>
              <Input
                id="workspace-name"
                type="text"
                placeholder="My Studio"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={64}
                aria-invalid={!!error}
              />
            </div>
            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full rounded-full" disabled={isLoading || !name.trim()}>
              {isLoading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                'Create workspace'
              )}
            </Button>
          </form>
        )}

        {step === 'join' && (
          <form onSubmit={handleJoin} className="space-y-4 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="invite-code">Invite code</Label>
              <Input
                id="invite-code"
                type="text"
                placeholder="Enter code"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
                aria-invalid={!!error}
              />
            </div>
            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
            <Button type="submit" variant="outline" className="w-full rounded-full" disabled={isLoading || !joinCode.trim()}>
              {isLoading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                'Join workspace'
              )}
            </Button>
            <p className="text-xs text-muted-foreground">
              Don’t have a code? Ask your team admin to send you an invite.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
