// Shared blog metadata for server-side rendering and client routing

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  thumbnail?: string;
  tags?: string[];
  seo?: {
    description?: string;
    keywords?: string[];
    ogImage?: string;          // Facebook/OpenGraph - 1200x630
    linkedInImage?: string;    // LinkedIn - 1200x627
    twitterImage?: string;     // Twitter - 1200x630 or 1200x675
    version?: string;
  };
}

// Map of blog posts by slug for quick lookup
export const sharedBlogPostMap: Record<string, BlogPost> = {
  // Add your blog posts here
  // Example:
  // "getting-started": {
  //   slug: "getting-started",
  //   title: "Getting Started with Prompt Tax",
  //   excerpt: "Learn how to use AI prompts for tax preparation",
  //   author: "Prompt Tax Team",
  //   date: "2024-01-01",
  //   thumbnail: "/images/blog/getting-started.jpg",
  //   tags: ["Getting Started", "AI", "Tax"],
  //   seo: {
  //     description: "Complete guide to getting started with Prompt Tax",
  //     keywords: ["AI tax", "tax preparation", "automation"],
  //     version: "1.0"
  //   }
  // }
};

export const blogPosts: BlogPost[] = Object.values(sharedBlogPostMap);
