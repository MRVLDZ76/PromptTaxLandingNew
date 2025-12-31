import type { IconType } from "react-icons";

export type FollowUsType = {
  icon: IconType,
  variant: string;
  link?: string;
}

export type WorkType = {
  title: string;
  description: string;
  image: string;
}

export type LocationType = {
  countryName: string;
  address: string;
  number: string;
  image: string;
}