/**
 * Supabase client factory. When VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
 * are set, use: import { createClient } from '@supabase/supabase-js'
 * and return createClient(url, anonKey). This stub avoids requiring the
 * package until Supabase is configured.
 */
export function getSupabaseUrl(): string | undefined {
  return import.meta.env.VITE_SUPABASE_URL
}

export function getSupabaseAnonKey(): string | undefined {
  return import.meta.env.VITE_SUPABASE_ANON_KEY
}
