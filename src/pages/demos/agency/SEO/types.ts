import {User} from "@/types/user";
import {DateType} from "@/types";
import {IconType} from "react-icons";

export type TestimonialType = {
    userId?: User['id']
    user: User
    title?: string
    comment: string
    rating?: number
}

export type CompanyType = {
    icon?: string
    image?: string
    name?: string
    externalLink?: string
    url?: string
}

export type CaseStudyType = {
    image?: string
    title?: string
    description?: string
    category?: string
    tags?: string[]
    url: string
    publishedBy?: User
    publishedAt?: DateType
    company: CompanyType
}

export type StepType = {
    stepNumber?: number
    icon?: IconType
    title: string
    description: string
}

export type SocialMediaType = {
    icon: IconType
    image?: string
    name?: string
    externalLink?: string
    url?: string
}

export type MemberType = {
    avatar: string
    firstName: string
    lastName: string
    role?: string
    socialLinks: SocialMediaType[]
}
