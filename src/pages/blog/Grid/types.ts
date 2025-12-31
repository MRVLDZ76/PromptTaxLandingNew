import type { User } from "@/types/user";

export type BlogType = {
  title: string;
  description?: string;
  publishedBy: User;
  category: string;
  image: string;
  date?: string;
  time?: string;
  slug?: string;
}