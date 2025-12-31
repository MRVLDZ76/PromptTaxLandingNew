import { BsInfinity, BsShieldCheck, BsCalculator, BsPerson, BsLink45Deg, BsGear } from "react-icons/bs"
import type { FeatureType, FAQType, PricingTierType, StepType, TechFeatureType } from "./types"

export const features: FeatureType[] = [
  {
    title: "Flexible Transaction Tiers",
    description: "Choose the tier that fits your needs: Starter (1-100 transactions) for $29.99, Professional (101-1,000 transactions) for $69.99, or Enterprise (1,001-3,000 transactions) for $199. Our batch pagination system automatically splits Form 8949 into properly formatted pages with 11 transactions each—no manual work required.",
    icon: <BsInfinity size={36} />,
    cta: "Learn more",
  },
  {
    title: "IRS-Compliant Forms",
    description: "We use the official 2025 IRS Form 8949 template (f8949.pdf) with precise field mapping. Every column (a-h) correctly populated, totals isolated to last page only—no footer collisions.",
    icon: <BsShieldCheck size={36} />,
    cta: "View sample",
  },
  {
    title: "Schedule D Integration",
    description: "Form 8949 totals automatically flow to Schedule D Lines 1b and 8b. Short-term and long-term gains calculated separately with wash sale adjustments included.",
    icon: <BsCalculator size={36} />,
    cta: "See integration",
  },
  {
    title: "Professional CPA Review",
    description: "Upgrade to have a licensed CPA review your crypto tax package before filing. Get professional verification, tax strategy advice, and peace of mind for $149.",
    icon: <BsPerson size={36} />,
    cta: "Add CPA review",
  },
  {
    title: "Seamless 1040 Integration",
    description: "Your crypto gains automatically populate Form 1040 Line 7. Continue with our AI-powered tax prep to complete your entire return—W-2s, deductions, credits, and more.",
    icon: <BsLink45Deg size={36} />,
    cta: "Complete your return",
  },
  {
    title: "Smart CSV Parsing",
    description: "Upload CSV exports from Coinbase, Binance, Kraken, or any exchange. Our AI parser identifies columns, maps data, and handles wash sales automatically.",
    icon: <BsGear size={36} />,
    cta: "Upload CSV",
  }
]

export const steps: StepType[] = [
  {
    number: 1,
    icon: "upload",
    title: "Upload Your Transactions",
    description: "Import CSV from your exchange or manually enter trades. We support Coinbase, Binance, Kraken, and custom formats.",
  },
  {
    number: 2,
    icon: "robot",
    title: "AI Processes Everything",
    description: "Our system calculates gains/losses, identifies wash sales, applies basis adjustments, and generates Form 8949 pages with correct field mapping.",
  },
  {
    number: 3,
    icon: "download",
    title: "Download & File",
    description: "Get your complete tax bundle: Form 8949 (all pages), Schedule D, and integration with Form 1040. Optional CPA review available.",
  }
]

export const pricingTiers: PricingTierType[] = [
  {
    name: "Starter Bundle",
    badge: "1-100 transactions",
    price: 29.99,
    period: "/ return",
    features: [
      { text: "Up to 100 transactions", included: true },
      { text: "Form 8949 generation", included: true },
      { text: "Schedule D integration", included: true },
      { text: "Wash sale detection", included: true },
      { text: "Email support", included: true },
      { text: "CPA review (+$149)", included: false },
    ],
    buttonText: "Get Started",
    buttonLink: "/signup?plan=starter",
  },
  {
    name: "Professional Bundle",
    badge: "Most popular",
    price: 69.99,
    period: "/ return",
    features: [
      { text: "101 - 1,000 transactions", included: true },
      { text: "Form 8949 generation", included: true },
      { text: "Schedule D integration", included: true },
      { text: "Wash sale detection", included: true },
      { text: "Advanced reporting", included: true },
      { text: "Priority email support", included: true },
      { text: "CPA review (+$149)", included: false },
    ],
    buttonText: "Get Started",
    buttonLink: "/signup?plan=professional",
    featured: true,
  },
  {
    name: "Enterprise Bundle",
    badge: "High volume",
    price: 199.00,
    period: "/ return",
    features: [
      { text: "1,001 - 3,000 transactions", included: true },
      { text: "Form 8949 generation", included: true },
      { text: "Schedule D integration", included: true },
      { text: "Wash sale detection", included: true },
      { text: "Advanced reporting", included: true },
      { text: "Priority phone support", included: true },
      { text: "CPA review (+$149)", included: false },
    ],
    buttonText: "Get Started",
    buttonLink: "/signup?plan=enterprise",
  }
]

export const technicalFeatures: TechFeatureType[] = [
  {
    title: "🎯 Precise Field Mapping",
    code: `f1_03-10: Row 1 (columns a-h)
f1_11-18: Row 2 (8-field stride)
f1_92-95: Line 2 totals (isolated)`,
    description: "Official IRS template with exact field names",
  },
  {
    title: "📄 Smart Pagination",
    code: `MAX_TRANSACTIONS_PER_PAGE = 11
pages = (total + 11 - 1) // 11
Fresh template per batch`,
    description: "No footer collisions, clean page breaks",
  },
  {
    title: "💰 Accurate Totals",
    code: `Proceeds: Sum(all transactions)
Basis: Sum(cost basis)
Gain/Loss: Proceeds - Basis + Adj`,
    description: "Totals calculated from ALL lots, not just last page",
  },
  {
    title: "🔄 Wash Sale Engine",
    code: `30-day window detection
Basis adjustment propagation
Code 'W' flag on Form 8949`,
    description: "IRS-compliant wash sale identification",
  }
]

export const faqs: FAQType[] = [
  {
    question: "How many transactions can I process?",
    answer: "We offer three tiers to fit your needs: Starter (1-100 transactions) for $29.99, Professional (101-1,000 transactions) for $69.99, and Enterprise (1,001-3,000 transactions) for $199. Our batch pagination system automatically splits Form 8949 into properly formatted pages with 11 transactions each, preventing footer collisions.",
  },
  {
    question: "Is this IRS-compliant?",
    answer: "Yes. We use the official 2025 IRS Form 8949 template (f8949.pdf) with exact field mapping. Each column (a-h) is correctly populated, totals appear only on the last page, and all calculations follow IRS Publication 544 guidelines.",
  },
  {
    question: "Do you handle wash sales?",
    answer: "Absolutely. Our wash sale engine detects substantially identical purchases within 30 days, calculates basis adjustments, propagates disallowed losses, and marks transactions with Code 'W' on Form 8949—exactly as the IRS requires.",
  },
  {
    question: "What formats do you accept?",
    answer: "We accept CSV exports from all major exchanges (Coinbase, Binance, Kraken, Gemini, etc.). Our AI parser identifies columns automatically. You can also manually enter transactions or use our API for custom integrations.",
  },
  {
    question: "What does CPA review include?",
    answer: "For an additional $149, our licensed CPAs verify all calculations, check for missing transactions, identify tax-saving opportunities, ensure IRS compliance, and provide a signed review letter. They're available for questions via email or phone consultation.",
  },
  {
    question: "Can I use this with other tax software?",
    answer: "Yes. Download your Form 8949 and Schedule D as PDF, then upload to TurboTax, H&R Block, or give to your accountant. Or continue with Prompt Tax's full 1040 preparation for seamless integration.",
  },
  {
    question: "What about NFT sales and staking income?",
    answer: "NFT sales are treated as capital gains (Form 8949). Staking rewards are ordinary income (Schedule 1). Our system handles both—crypto gains go to Form 8949, staking income to Schedule 1 Line 8z.",
  },
  {
    question: "How long does generation take?",
    answer: "Instant. Upload your CSV, and we generate Form 8949 in 2-5 seconds (even for 1,000+ transactions). CPA review (if added) takes 24-48 hours during tax season, 12-24 hours off-season.",
  }
]
