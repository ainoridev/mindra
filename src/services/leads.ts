export interface WaitlistLeadInput {
  fullName: string
  email: string
  interests: string
}

export async function createWaitlistLead(input: WaitlistLeadInput): Promise<void> {
  const leadsApiUrl =
    import.meta.env.VITE_LEADS_API_URL?.trim() ||
    'https://vischagrspcscgqylmkj.supabase.co/waitlist_leads'

  const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim()
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  if (publishableKey) {
    headers.apikey = publishableKey
    headers.Authorization = `Bearer ${publishableKey}`
  }

  const response = await fetch(leadsApiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      full_name: input.fullName,
      email: input.email,
      interests: input.interests,
      source: 'landing_web',
    }),
  })

  if (!response.ok) {
    const detail = await response.text()
    throw new Error(detail || 'Supabase insert failed')
  }
}
