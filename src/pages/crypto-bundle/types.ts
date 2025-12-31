export interface FeatureType {
  title: string
  description: string
  icon: JSX.Element
  cta?: string
}

export interface FAQType {
  question: string
  answer: string
}

export interface PricingTierType {
  name: string
  badge: string
  price: number
  period: string
  features: {
    text: string
    included: boolean
  }[]
  buttonText: string
  buttonLink: string
  featured?: boolean
}

export interface StepType {
  number: number
  icon: string
  title: string
  description: string
}

export interface TechFeatureType {
  title: string
  code: string
  description: string
}
