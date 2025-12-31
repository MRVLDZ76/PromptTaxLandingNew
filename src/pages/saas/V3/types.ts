import {ReactNode} from "react";

export type ClientType = {
    icon?: string
    image?: string
    name?: string
    externalLink?: string
    url?: string
}

export type StatisticType = {
    title: string
    description?: string
    stat: number
    prefix?: string
    suffix?: string
}

export type FeatureType = {
    icon: ReactNode,
    image?: string
    title: string
    description?: string
    url?: string
}

export type PricingBundleType = {
    id: string
    title: string
    subtitle: string
    transactionRange: string
    features: string[]
    price: string
    pricePerMonth: string
    ctaText: string
    recommended?: boolean
    stripePriceId: string
}