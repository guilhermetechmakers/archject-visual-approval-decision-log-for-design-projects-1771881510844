/**
 * Password strength for signup: min 8 chars, number or special char.
 * Returns 0–4 for UI meter.
 */
export function getPasswordStrength(password: string): number {
  if (!password) return 0
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return Math.min(score, 4)
}

const LABELS = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'] as const

export function getPasswordStrengthLabel(score: number): string {
  return LABELS[Math.min(score, 4)]
}

/** 0–4 indexable labels for strength meter (0 = Very weak, 4 = Strong) */
export const PASSWORD_STRENGTH_LABELS: Record<number, string> = LABELS.reduce(
  (acc, label, i) => ({ ...acc, [i]: label }),
  {} as Record<number, string>
)
