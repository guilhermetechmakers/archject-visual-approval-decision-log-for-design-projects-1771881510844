import { Link } from 'react-router-dom'
import type { TestimonialItem } from './types'

export interface LogosTestimonialsProps {
  logos: string[]
  testimonials: TestimonialItem[]
}

export function LogosTestimonials({
  logos,
  testimonials,
}: LogosTestimonialsProps) {
  return (
    <section
      className="border-b border-border bg-background px-4 py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          id="testimonials-heading"
          className="text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          Trusted by design teams
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Architecture and design studios ship decisions faster with Archject.
        </p>

        {/* Logo strip */}
        {logos.length > 0 && (
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12"
            aria-label="Customer logos"
          >
            {logos.map((url, i) => (
              <div
                key={i}
                className="flex h-10 w-32 items-center justify-center grayscale opacity-70 transition-opacity hover:opacity-100"
              >
                <img
                  src={url}
                  alt=""
                  className="max-h-8 w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <p className="text-foreground">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic">
                  <span className="font-medium text-foreground">{t.author}</span>
                  {t.company && (
                    <span className="text-muted-foreground"> — {t.company}</span>
                  )}
                </cite>
                {t.caseStudyUrl && (
                  <Link
                    to={t.caseStudyUrl}
                    className="mt-2 inline-block text-sm text-primary hover:underline"
                  >
                    Read case study
                  </Link>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
