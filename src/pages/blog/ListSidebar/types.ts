import type { User } from "@/types/user";

export type BlogCategoryType = {
  category: string;
  image: string
}

export type BlogType={
  title:string;
  publishedBy:User,
  category:string;
  image:string;
  isSponsored?:boolean,
}