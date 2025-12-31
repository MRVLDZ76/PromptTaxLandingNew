import type { User } from "@/types/user";

export type StepType = {
  stepNumber: string;
  title: string;
  description: string;
}

export type pricingPlanType = {
  duration: "month" | "annual";
  price: number;
  features: string[]
}

export type TestimonialType = {
  user: User,
  comment: string
  rating: number
}