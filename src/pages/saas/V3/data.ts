import { bellIcon, fileIcon, locationIcon, messageIcon, peopleIcon, rocketIcon } from "@/assets/data/icons";

import {StatisticType, ClientType, FeatureType, PricingBundleType} from "@/pages/saas/V3/types";

export const clients: ClientType[] = [
    {image: "/brands/Plaid/Plaid_id25TiQUJW_4.png"},
    {image: "/brands/QuickBooks/Intuit QuickBooks_idH8urRJxv_1.png"},
    {image: "/brands/Stripe/Stripe_Logo_1.png"},
    {image: "/brands/Vezgo/Vezgo_idrYY4b6sd_0.png"},
    {image: "/brands/TaxBandits/TaxBandits_idPPawre1l_0.png"}
]

export const statData: StatisticType[] = [
    {
        title: "Tax returns filed",
        stat: 50,
        suffix: "K+"
    },
    {
        title: "Time saved vs manual",
        stat: 95,
        suffix: "%"
    },
    {
        title: "Crypto transactions processed",
        stat: 1,
        suffix: "M+"
    },
    {
        title: "Active CPA users",
        stat: 2500,
        suffix: "+"
    }
]

export const features: FeatureType[] = [
    {
        title: "Multi-Exchange Aggregation",
        description: "Automatically sync transactions from Coinbase, Binance, Kraken, and 15+ exchanges. Unified portfolio view across all platforms.",
        icon: fileIcon,
    },
    {
        title: "Cost Basis Tracking",
        description: "Track cost basis across exchanges using FIFO, LIFO, or HIFO methods. Automatic wash sale detection and adjustment for accurate reporting.",
        icon: rocketIcon,
    },
    {
        title: "Tax Loss Harvesting",
        description: "Identify opportunities to harvest losses and reduce tax liability. Real-time alerts for optimal trading decisions with tax implications.",
        icon: peopleIcon,
    },
    {
        title: "DeFi Protocol Support",
        description: "Track staking, liquidity pools, yield farming, and lending across major DeFi platforms. Automatic income classification and reporting.",
        icon: locationIcon,
    },
    {
        title: "Real-Time Tax Liability",
        description: "Monitor your tax liability in real-time as you trade. Live updates on capital gains, losses, and quarterly estimate calculations.",
        icon: bellIcon,
    },
    {
        title: "IRS Form Generation",
        description: "Auto-generate IRS Form 8949 and Schedule D with complete transaction details. Audit-ready documentation and supporting schedules included.",
        icon: messageIcon,
    }
]

export const pricingBundles: PricingBundleType[] = [
    {
        id: 'crypto_1',
        title: 'Starter Bundle',
        subtitle: 'Perfect for casual crypto investors with occasional trades',
        transactionRange: '1-100 transactions per year',
        features: [
            'IRS Form 8949 - Capital Gains & Losses',
            'Schedule D - Tax Computation',
            'Complete transaction summary report',
            'Cost basis detail breakdown',
            'FIFO/LIFO/HIFO calculation methods',
            'Exchange reconciliation report',
            'Instant PDF download',
            'Email delivery & cloud backup'
        ],
        price: '$29.99',
        pricePerMonth: 'one-time per tax year',
        ctaText: 'Get Your Tax Bundle',
        stripePriceId: 'prod_TcGEIXOswFHrBB'
    },
    {
        id: 'crypto_2',
        title: 'Professional Bundle',
        subtitle: 'Most popular choice for active crypto traders and investors',
        transactionRange: '101-1,000 transactions per year',
        features: [
            'Everything in Starter Bundle',
            'IRS Form 8949 - Capital Gains & Losses',
            'Schedule D - Tax Computation',
            'Advanced transaction analytics',
            'Multi-exchange consolidation',
            'Wash sale detection & reporting',
            'Capital gains optimization insights',
            'Priority email support',
            'Audit-ready documentation'
        ],
        price: '$69.99',
        pricePerMonth: 'one-time per tax year',
        ctaText: 'Get Professional Bundle',
        recommended: true,
        stripePriceId: 'prod_TcGFwJz2UOqwIh'
    },
    {
        id: 'crypto_3',
        title: 'Enterprise Bundle',
        subtitle: 'Comprehensive solution for day traders and high-volume investors',
        transactionRange: '1,001-5,000 transactions per year',
        features: [
            'Everything in Professional Bundle',
            'IRS Form 8949 - Complete Filing',
            'Schedule D with detailed schedules',
            'Advanced wash sale analysis',
            'Tax loss harvesting opportunities',
            'Multi-wallet & DEX support',
            'Staking & DeFi income tracking',
            'NFT transaction support',
            'Dedicated tax specialist review',
            'Audit protection assistance'
        ],
        price: '$199.00',
        pricePerMonth: 'one-time per tax year',
        ctaText: 'Get Enterprise Bundle',
        stripePriceId: 'prod_TcGGgbGmXIe3SN'
    },
    {
        id: 'crypto_u',
        title: 'Unlimited Bundle',
        subtitle: 'White-glove service for institutional traders and crypto professionals',
        transactionRange: 'Unlimited transactions',
        features: [
            'Everything in Enterprise Bundle',
            'Unlimited transaction processing',
            'IRS Form 8949 - Unlimited schedules',
            'Full Schedule D preparation',
            'Complex DeFi protocol support',
            'Custom reporting & analytics',
            'Priority phone & video support',
            'Dedicated CPA consultation (1 hour)',
            'IRS audit representation',
            'Multi-year tax planning guidance',
            'API access for automation'
        ],
        price: 'Contact Us',
        pricePerMonth: 'custom pricing',
        ctaText: 'Contact Sales',
        stripePriceId: 'prod_TcGYRxsMTyQD9s'
    }
]