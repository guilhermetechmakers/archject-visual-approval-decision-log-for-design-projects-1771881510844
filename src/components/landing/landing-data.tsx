/**
 * Landing page content and section data.
 * Replace template thumbnail URLs and logo URLs with real assets when available.
 */

import {
  Eye,
  Link2,
  FileCheck,
  Download,
  ClipboardList,
  Share2,
  ThumbsUp,
  FileDown,
} from 'lucide-react'
import type {
  HeroBlockProps,
  FeatureItem,
  HowItWorksStep,
  TemplateItem,
  PricingTier,
  TestimonialItem,
} from '@/components/landing/types'

export const heroData: HeroBlockProps = {
  title: 'Visual approval & decision log for design projects',
  subtitle:
    'Replace scattered emails and PDFs with a structured, time-stamped workflow. Get client approvals via zero-friction links and export defensible Decision Logs.',
  ctaPrimary: { label: 'Start free', href: '/signup' },
  ctaSecondary: { label: 'Request demo', href: '/demo-request' },
  // Optional: add media when asset is ready
  // media: { type: 'image', src: '/hero.png', alt: 'Archject dashboard' },
}

export const featuresData: FeatureItem[] = [
  {
    icon: Eye,
    title: 'Visual decisions',
    description:
      'Present options with images, specs, and notes. Clients see exactly what they’re approving.',
  },
  {
    icon: Link2,
    title: 'Client links',
    description:
      'Share a branded, no-login link. Clients review on any device and approve in one click.',
  },
  {
    icon: FileCheck,
    title: 'Audit trail',
    description:
      'Every decision is time-stamped and attributed. Full history for contracts and compliance.',
  },
  {
    icon: Download,
    title: 'Exports',
    description:
      'Download Decision Logs as PDF, CSV, or JSON. Ready for deliverables and handoffs.',
  },
]

export const howItWorksData: HowItWorksStep[] = [
  {
    title: 'Create decision',
    description:
      'Add options, images, and specs. Set approvers and due dates.',
    icon: ClipboardList,
  },
  {
    title: 'Share link',
    description:
      'Send a branded no-login link. Clients review on any device.',
    icon: Share2,
  },
  {
    title: 'Client approves',
    description:
      'Clients approve or comment. You get notified and nothing gets lost in email.',
    icon: ThumbsUp,
  },
  {
    title: 'Export',
    description:
      'Download Decision Logs as PDF, CSV, or JSON for contracts.',
    icon: FileDown,
  },
]

const placeholderThumb = (text: string) =>
  `https://placehold.co/400x225/e6e8f0/6b7280?text=${encodeURIComponent(text)}`

export const templatesData: TemplateItem[] = [
  {
    id: 'finishes',
    name: 'Finishes & materials',
    thumbnailUrl: placeholderThumb('Finishes'),
    description:
      'Present material and finish options with images and specs for client sign-off.',
  },
  {
    id: 'layout',
    name: 'Layout options',
    thumbnailUrl: placeholderThumb('Layout'),
    description:
      'Compare layout variants with clear visuals and approval in one place.',
  },
  {
    id: 'change-requests',
    name: 'Change requests',
    thumbnailUrl: placeholderThumb('Change requests'),
    description:
      'Log change requests with before/after and track approval status.',
  },
]

export const pricingData: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    features: [
      'Up to 3 active projects',
      'Unlimited decisions per project',
      'Client approval links',
      'PDF export',
    ],
    cta: { label: 'Start free', href: '/signup' },
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29/mo',
    features: [
      'Unlimited projects',
      'Unlimited team members',
      'Full audit trail & exports',
      'Priority support',
    ],
    cta: { label: 'View plans', href: '/pricing' },
    recommended: true,
  },
]

/** Placeholder logo URLs; replace with real customer logos. */
export const logosData: string[] = [
  placeholderThumb('Studio A'),
  placeholderThumb('Studio B'),
  placeholderThumb('Studio C'),
]

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    text: 'Archject cut our approval back-and-forth by half. Clients love the simple link—no logins, no confusion.',
    author: 'Alex Chen',
    company: 'Chen & Partners',
    caseStudyUrl: '#',
  },
  {
    id: '2',
    text: 'Finally, a single place for decisions and a proper audit trail. Exports are ready for our contracts team.',
    author: 'Jordan Lee',
    company: 'Lee Design Studio',
    caseStudyUrl: '#',
  },
]
