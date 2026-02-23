/** Landing page shared types for modular sections */
import type { ComponentType } from 'react'

export interface CTAItem {
  label: string
  href: string
}

export interface HeroBlockProps {
  title: string
  subtitle: string
  ctaPrimary: CTAItem
  ctaSecondary: CTAItem
  media?: {
    type: 'image' | 'video'
    src: string
    alt?: string
  }
}

export interface FeatureItem {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface HowItWorksStep {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export interface TemplateItem {
  id: string
  name: string
  thumbnailUrl: string
  description: string
}

export interface PricingTier {
  id: string
  name: string
  price: string
  features: string[]
  cta: CTAItem
  recommended?: boolean
}

export interface TestimonialItem {
  id: string
  text: string
  author: string
  company?: string
  caseStudyUrl?: string
}
