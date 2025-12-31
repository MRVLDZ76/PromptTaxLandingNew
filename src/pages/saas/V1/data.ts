import {BsCheckCircleFill} from "react-icons/bs";

import {BlogType, ClientType, FeatureType, PricingPlanType, StatisticType} from "@/pages/saas/V1/types";


export const clients: ClientType[] = [
    {image: "/brands/QuickBooks/Intuit QuickBooks_idH8urRJxv_1.png"},
    {image: "/brands/Stripe/Stripe_Logo_1.png"},
    {image: "/brands/Plaid/Plaid_idJQvBI5Ez_2.png"},
    {image: "/brands/TaxBandits/TaxBandits_idbSMq3sh5_1.png"},
    {image: "/brands/azure/Microsoft Azure Portal_id1k_hXKx1_2.png"},
    {image: "/brands/aws/Amazon Web Services_idS5TK0MYh_2.png"},
]

export const features: FeatureType[] = [
    {
        title: "How do I upload my K-1 to PromptTax?",
        description: "Upload your K-1 PDF in seconds: Go to the K-1 section in your dashboard → Upload the PDF - We use AI Vision to extract all data from boxes 1-20 → Review extracted data - Verify entity name, EIN, your name, and income/loss amounts → Correct low-confidence fields - We highlight fields that need manual review. Our AI reads both Form 1065 and 1120-S K-1s automatically. No manual data entry!"
    },
    {
        title: "What forms does PromptTax generate for K-1 data?",
        description: "We automatically generate all required tax forms: Schedule E (Part II): Supplemental Income - Partnership/S-Corp income/loss flows here → Form 6198: At-Risk Limitations (if you fail the at-risk test) → Form 8582: Passive Activity Loss Limitations (if you fail the material participation test) → Form 1040 integration: Net income/loss flows to Line 5 (Schedule E) of your Form 1040. All forms are IRS-compliant PDFs ready to e-file or mail."
    },
    {
        title: "Can I upload multiple K-1s?",
        description: "Yes! Upload unlimited K-1s: Multiple partnerships: If you're a partner in several LLCs, upload each K-1 → Auto-aggregation: We combine all K-1 income/losses for Schedule E → Separate tracking: Each entity's basis, at-risk, and passive limits are tracked individually → Form 1040 sync: Total net income/loss flows to your tax return automatically. Process all your K-1s in minutes, not hours."
    },
    {
        title: "How do I continue to Form 1040 after processing my K-1?",
        description: "After we process your K-1 and run the 3-test validation: Download Schedule E PDF - Save your completed Schedule E (Part II) for your records → Click \"Continue to Form 1040\" - Your K-1 data is already synced to your tax return → Review integrated data - See your Schedule E income on Line 5 of Form 1040 → Complete the rest of your return - Add W-2s, deductions, credits, etc. The K-1 data flows seamlessly into your 1040 - no manual copying needed!"
    }
]

export const statData: StatisticType[] = [
    {
        title: "K-1s Generated",
        stat: 15000,
        suffix: "+",
    },
    {
        title: "Hours Saved",
        stat: 50000,
        suffix: "+",
    },
    {
        title: "IRS Compliance Rate",
        stat: 99.9,
        suffix: "%",
    },
    {
        title: "Partnership Returns Filed",
        stat: 5000,
        suffix: "+",
    }
]


export const pricingData: PricingPlanType[] = [
    {
        title: "Standard Review",
        price: 179,
        features: [
            {icon: BsCheckCircleFill, title: "Complete 1040 return review"},
            {icon: BsCheckCircleFill, title: "Crypto transactions included"},
            {icon: BsCheckCircleFill, title: "K-1 forms review (up to 2)"},
            {icon: BsCheckCircleFill, title: "Schedule C, D, E review"},
            {icon: BsCheckCircleFill, title: "CPA written feedback & recommendations"},
            {icon: BsCheckCircleFill, title: "No e-filing service"},
            {icon: BsCheckCircleFill, title: "48-hour turnaround"},
        ]
    },
    {
        title: "Premium Review + E-File",
        isPopular: true,
        price: 329,
        features: [
            {icon: BsCheckCircleFill, title: "Everything in Standard Review"},
            {icon: BsCheckCircleFill, title: "Professional e-filing service"},
            {icon: BsCheckCircleFill, title: "K-1 forms review (up to 5)"},
            {icon: BsCheckCircleFill, title: "State return review & e-file"},
            {icon: BsCheckCircleFill, title: "30-minute CPA consultation call"},
            {icon: BsCheckCircleFill, title: "Amended return support (if needed)"},
            {icon: BsCheckCircleFill, title: "24-hour turnaround"},
        ],
    },
    {
        title: "Complex Return + White Glove",
        price: 549,
        features: [
            {icon: BsCheckCircleFill, title: "Everything in Premium Review"},
            {icon: BsCheckCircleFill, title: "Unlimited K-1, rental properties"},
            {icon: BsCheckCircleFill, title: "Multi-state tax optimization"},
            {icon: BsCheckCircleFill, title: "Foreign income & FBAR review"},
            {icon: BsCheckCircleFill, title: "60-minute CPA strategy session"},
            {icon: BsCheckCircleFill, title: "Priority support & direct CPA access"},
            {icon: BsCheckCircleFill, title: "12-hour express turnaround"},
            {icon: BsCheckCircleFill, title: "Audit protection guidance"},
        ],
    },
]


export const blogs: BlogType[] = [
    {
        title: "Bootstrap Made Easy - Customizing Your HTML theme Like a Pro",
        publishedBy: {
            firstName: "Jacqueline",
            lastName: "Miller",
        },
        publishedAt: {
            date: 8,
            month: "April",
            year: 2023,
        },
        url: '/blog/single/v1',
    },
    {
        title: "Effortless Web Design with Mizzle - Unlock Your Creative Potential",
        publishedBy: {
            firstName: "Allen",
            lastName: "Smith",
        },
        publishedAt: {
            date: 13,
            month: "April",
            year: 2023,
        },
        url: '/blog/single/v1',
    },
    {
        title: "Mastering HTML Website Templates - Unleash Your Creativity with Bootstrap",
        publishedBy: {
            firstName: "Jacqueline",
            lastName: "Miller",
        },
        publishedAt: {
            date: 15,
            month: "April",
            year: 2023,
        },
        url: '/blog/single/v1',
    },
]