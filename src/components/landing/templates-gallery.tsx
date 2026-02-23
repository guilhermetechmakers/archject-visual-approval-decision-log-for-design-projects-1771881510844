import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { TemplateItem } from './types'
import { cn } from '@/lib/utils'

export interface TemplatesGalleryProps {
  templates: TemplateItem[]
  id?: string
}

export function TemplatesGallery({
  templates,
  id = 'templates',
}: TemplatesGalleryProps) {
  const [selected, setSelected] = useState<TemplateItem | null>(null)

  return (
    <>
      <section
        id={id}
        className="scroll-mt-20 border-b border-border bg-background px-4 py-16 md:py-24"
        aria-labelledby="templates-heading"
      >
        <div className="container mx-auto max-w-6xl">
          <h2
            id="templates-heading"
            className="text-center text-3xl font-bold text-foreground md:text-4xl"
          >
            Templates & examples
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Jump-start decisions with ready-made templates for finishes, layouts, and change requests.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template, index) => (
              <button
                key={template.id}
                type="button"
                onClick={() => setSelected(template)}
                className={cn(
                  'group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-card transition-all duration-200',
                  'hover:shadow-card-hover hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                  'animate-fade-in-up'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={`View ${template.name} template`}
              >
                <div className="aspect-video w-full overflow-hidden bg-secondary">
                  <img
                    src={template.thumbnailUrl}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {template.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {template.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg" aria-describedby="template-dialog-desc">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription id="template-dialog-desc">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-secondary">
                <img
                  src={selected.thumbnailUrl}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
