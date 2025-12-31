import {IconType} from "react-icons";
import {User} from "@/types/user";
import {DateType} from "@/types";

export type ClientType = {
    icon?: string
    image?: string
    name?: string
    externalLink?: string
    url?: string
}

export type WorkFlowStepType = {
    image: string
    stepNumber?: number
    icon?: IconType
    title: string
    description: string
}

export type ToolType = {
    icon?: IconType
    image?: string
    name?: string
    description?: string
    url: string
    externalLink?: string
}

export type StatisticType = {
    title: string
    description?: string
    stat: number
    prefix?: string
    suffix?: string
}

export type CompanyType = {
    icon?: string
    image?: string
    name?: string
    externalLink?: string
    url?: string
}

type AuthorType = {
    company: CompanyType
} & User

export type TestimonialType = {
    userId?: AuthorType['id']
    user: AuthorType
    title?: string
    comment: string
    rating?: number
}

export type BlogType = {
    image?: string
    title?: string
    description?: string
    category?: string
    tags?: string[]
    url: string
    publishedBy?: User
    publishedAt?: DateType
}