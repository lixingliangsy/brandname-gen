export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  "name": "BrandName Gen",
  "slug": "brandname-gen",
  "tagline": "10 brand names on the spot",
  "description": "Give an industry and a vibe; get 10 on-brand name ideas you can riff on. For founders naming a product, newsletter, or side project.",
  "toolTitle": "Brainstorm names",
  "resultLabel": "Name ideas",
  "ctaLabel": "Generate names",
  "features": [
    "Instant 10 names",
    "Vibe-aware",
    "Copy list",
    "No thesaurus needed"
  ],
  "inputs": [
    {
      "key": "industry",
      "label": "Industry",
      "type": "input",
      "placeholder": "e.g. Coffee"
    },
    {
      "key": "vibe",
      "label": "Vibe",
      "type": "select",
      "options": [
        "Cozy",
        "Bold",
        "Minimal",
        "Playful"
      ]
    }
  ],
  "systemPrompt": "You are a brand naming assistant. Given an industry and vibe, propose 10 distinct, brandable names with a one-line rationale each.",
  "pricing": [
    {
      "tier": "Free",
      "price": "$0",
      "desc": "Unlimited"
    },
    {
      "tier": "Pro",
      "price": "$9/mo",
      "desc": "Domain checks, variants"
    },
    {
      "tier": "Team",
      "price": "$29/mo",
      "desc": "Bulk, save lists, API"
    }
  ],
  mock: (inputs: Record<string, string>): string => {
  const industry = inputs['industry'] || 'Coffee'
  const vibe = inputs['vibe'] || 'Cozy'
  const names = [industry + 'ly', 'Nova' + industry, industry + 'hood', 'Brew' + vibe, vibe + 'Craft', 'Daily' + industry, industry + 'Lab', 'The' + industry + 'Bar', vibe + 'Bean', industry + 'Co']
  return 'BRAND NAMES for "' + industry + '" (' + vibe + '):\n' + names.map((n, i) => (i + 1) + '. ' + n).join('\n') + '\n\n---\n(Mock list. Add OPENAI_API_KEY for 20 checked, available-domain-suggested names.)'
  }
}
