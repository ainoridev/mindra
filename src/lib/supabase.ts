const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export function getSupabaseConfig() {
  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(
      'Missing Supabase config: VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY',
    )
  }

  return { supabaseUrl, supabasePublishableKey }
}
