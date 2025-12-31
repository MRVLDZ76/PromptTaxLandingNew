import {User} from "@/types/user"
import type {ReactNode} from 'react'

export type ClientType = {
    icon?: string
    image?: string
    name?: string
    url?: string
}

export type ServiceType = {
    icon?: ReactNode,
    image?: string
    title: string
    description?: string
    url?: string
}

export type FeatureType = ServiceType

export type ProjectType = {
    image: string
    name: string
    description?: string
    category?: string
    tags?: string[]
    url: string
    createdBy?: {
        user?: User
        team?: User[]
    }
    createdAt?: string
    status?: 'published' | 'private'
}

export type RecentProjectType = {
    categoryClass: string
} & ProjectType

export type CompanyType = {
    icon?: string
    image?: string
    name: string
    externalLink?: string
    url?: string
}

type AuthorType = {
    company?: CompanyType
} & User

export type TestimonialType = {
    userId?: AuthorType['id']
    user: AuthorType
    title?: string
    comment: string
    rating?: number
}

export type BlogType = {
    image: string
    title: string
    description?: string
    category?: string
    tags?: string[]
    url: string
    publishedBy?: AuthorType
    publishedAt?: string
}