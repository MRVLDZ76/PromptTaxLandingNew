import type { IconType } from "react-icons"
import { User } from "@/types/user"

export type ClientType = {
  icon?: string
  image?: string
  name?: string
  url?: string
}

export type ServiceType = {
  title: string
  description: string
  icon: IconType
  url?: string
}

export type TestimonialType = {
  userId?: User['id']
  user: User
  title?: string
  comment: string
  rating?: number
}