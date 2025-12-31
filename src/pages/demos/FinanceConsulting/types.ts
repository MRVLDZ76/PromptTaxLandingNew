import {ReactNode} from "react";
import {IconType} from "react-icons";

export type ServiceType = {
    icon?: ReactNode,
    image?: string
    title: string
    description?: string
    url?: string
    features: {
        icon: IconType,
        title: string
    }[]
}

export type WorkFlowStepType = {
    image?: string
    stepNumber?: number
    icon: IconType
    title: string
    description: string
}

export type ClientType = {
    icon?: string
    image?: string
    name?: string
    externalLink?: string
    url?: string
}