// Blog post types and metadata

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  thumbnail?: string;
  tags?: string[];
  readTime?: string;
  seo?: {
    description?: string;
    keywords?: string[];
    ogImage?: string;          // Facebook/OpenGraph - 1200x630
    linkedInImage?: string;    // LinkedIn - 1200x627
    twitterImage?: string;     // Twitter - 1200x630 or 1200x675
    version?: string;
  };
}

// Blog posts registry
const blogPosts: BlogPostMetadata[] = [
  {
    slug: 'crypto-tax-nightmare-solved-2025',
    title: 'Crypto Tax Nightmare Solved: AI-Powered Tax Prep Saves 40+ Hours',
    excerpt: 'If you\'ve traded crypto in 2025, you know crypto taxes are a nightmare. Multiple exchanges, thousands of transactions, DeFi protocols - and the IRS expects perfect accuracy. Learn how AI automation can save you 40+ hours.',
    author: 'Prompt Tax Team',
    date: '2025-01-15',
    readTime: '8 min read',
    thumbnail: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/crypto-tax-hero-2026.jpg',
    tags: ['Crypto Tax', 'AI Automation', 'Tax Software', '2025'],
    seo: {
      description: 'Discover how AI-powered tax automation solves the crypto tax nightmare. Save 40+ hours on tax prep with intelligent crypto transaction processing for 2025.',
      keywords: ['crypto tax', 'crypto tax software', 'AI tax automation', 'cryptocurrency taxes 2025', 'crypto tax prep'],
      ogImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/crypto-blog-og-1200x630.jpg',
      linkedInImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/crypto-blog-linkedin-1200x627.jpg',
      twitterImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/crypto-blog-twitter-1200x675.jpg',
      version: '1.0'
    }
  },
  {
    slug: 'ai-k1-generator-partnership-tax-revolution',
    title: 'AI K-1 Generator: The Partnership Tax Revolution CPAs Have Been Waiting For',
    excerpt: 'Partnership K-1 forms are notoriously complex and time-consuming. Discover how AI-powered K-1 generation is revolutionizing partnership tax preparation for CPAs and tax professionals.',
    author: 'Prompt Tax Team',
    date: '2025-01-10',
    readTime: '7 min read',
    thumbnail: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/k1-generator-hero.jpg',
    tags: ['K-1 Forms', 'Partnership Tax', 'AI Tax Tools', 'CPAs'],
    seo: {
      description: 'AI-powered K-1 generator revolutionizes partnership tax preparation. Automate complex K-1 form processing and save hours on partnership tax returns.',
      keywords: ['K-1 generator', 'AI K-1', 'partnership tax', 'K-1 automation', 'tax software for CPAs'],
      ogImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/k1-generator-og-1200x630.jpg',
      linkedInImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/k1-generator-linkedin-1200x627.jpg',
      twitterImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/k1-generator-twitter-1200x675.jpg',
      version: '1.0'
    }
  },
  {
    slug: 'simplify-k1-form-processing-crypto-tax-season',
    title: 'How to Simplify K-1 Form Processing During Crypto Tax Season',
    excerpt: 'K-1 forms meet crypto taxes: the ultimate complexity challenge. Learn practical strategies to streamline K-1 processing when dealing with cryptocurrency partnerships and investments.',
    author: 'Prompt Tax Team',
    date: '2025-01-05',
    readTime: '6 min read',
    thumbnail: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/k1-crypto-hero.jpg',
    tags: ['K-1 Forms', 'Crypto Tax', 'Tax Season', 'Automation'],
    seo: {
      description: 'Master K-1 form processing for crypto tax season. Practical strategies and AI tools to simplify complex partnership tax returns involving cryptocurrency.',
      keywords: ['K-1 processing', 'crypto K-1', 'partnership crypto taxes', 'tax season automation'],
      ogImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/k1-crypto-og-1200x630.jpg',
      linkedInImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/k1-blog-linkedin-1200x627.jpg',
      twitterImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/k1-crypto-twitter-1200x675.jpg',
      version: '1.0'
    }
  },
  {
    slug: 'crypto-tax-ai-automation-saves-15-hours',
    title: 'Crypto Tax AI Automation: How We Saved 15+ Hours Per Client',
    excerpt: 'Real-world case study: How AI automation transformed our crypto tax workflow, reducing preparation time from 18 hours to just 3 hours per client while improving accuracy.',
    author: 'Prompt Tax Team',
    date: '2024-12-28',
    readTime: '5 min read',
    thumbnail: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/crypto-blog-og-1200x630.jpg',
    tags: ['Case Study', 'Crypto Tax', 'AI Automation', 'Efficiency'],
    seo: {
      description: 'Case study: How AI automation reduced crypto tax preparation time by 15+ hours per client while improving accuracy and compliance.',
      keywords: ['crypto tax automation', 'AI tax case study', 'tax efficiency', 'crypto tax workflow'],
      ogImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/crypto-blog-og-1200x630.jpgg',
      linkedInImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/crypto-blog-linkedin-1200x627.jpg',
      twitterImage: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/crypto-blog-twitter-1200x675.jpg',
      version: '1.0'
    }
  }
];

// Helper functions
export function getAllPosts(): BlogPostMetadata[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPostMetadata | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByTag(tag: string): BlogPostMetadata[] {
  return blogPosts
    .filter(post => post.tags?.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentPosts(limit: number = 5): BlogPostMetadata[] {
  return getAllPosts().slice(0, limit);
}

// Sync client metadata with server
// import { sharedBlogPostMap } from '@shared/blog-metadata';
// blogPosts.forEach(post => {
//   sharedBlogPostMap[post.slug] = {
//     slug: post.slug,
//     title: post.title,
//     excerpt: post.excerpt,
//     author: post.author,
//     date: post.date,
//     thumbnail: post.thumbnail,
//     tags: post.tags,
//     seo: post.seo
//   };
// });
