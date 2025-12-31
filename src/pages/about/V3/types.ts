import type { User } from "@/types/user";
import type { ReactNode } from "react";

export type FeatureType = {
  title: string;
  description: string;
  icon: ReactNode;
}

export type MemberType = {
  firstName: string;
  lastName: string;
  role: string;
  image: string;
}

export type StepType = {
  stepNumber: string;
  title: string;
}


type AuthorType = {
  companyName?: string
} & User

export type TestimonialType = {
  user: AuthorType
  comment: string
  rating: number
}