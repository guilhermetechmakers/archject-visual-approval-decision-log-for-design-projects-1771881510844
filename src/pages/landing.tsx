import { Link } from 'react-router-dom'
import { ArrowRight, FileCheck, Shield, Download } from 'lucide-react'
import { LandingHeader } from '@/components/layout/landing-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/30 to-background px-4 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
              Visual approval & decision log for design projects
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
              Replace scattered emails and PDFs with a structured, time-stamped workflow. Get client approvals via zero-friction links and export defensible Decision Logs.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
              <Button size="lg" asChild>
                <Link to="/signup">
                  Get started free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/login">Log in</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How it works - 3 steps */}
        <section className="border-b border-border px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              How it works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Create decisions, share a link, capture approvals—then export your audit trail.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { step: 1, title: 'Create', desc: 'Add options, images, and specs. Set approvers and due dates.', icon: FileCheck },
                { step: 2, title: 'Share', desc: 'Send a branded no-login link. Clients review on any device.', icon: Shield },
                { step: 3, title: 'Export', desc: 'Download Decision Logs as PDF, CSV, or JSON for contracts.', icon: Download },
              ].map(({ step, title, desc, icon: Icon }) => (
                <Card key={step} className="animate-fade-in-up">
                  <CardContent className="pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Ready to streamline approvals?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join architecture and design studios who ship decisions faster.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <Link to="/signup">Create your workspace</Link>
            </Button>
          </div>
        </section>

        <footer className="border-t border-border px-4 py-8">
          <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">© Archject</span>
            <nav className="flex gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground">Cookies</Link>
              <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground">Help</Link>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  )
}
