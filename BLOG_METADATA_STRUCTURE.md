# Blog Metadata & Social Media Integration

## Overview
All blog posts now have complete Open Graph (OG) metadata for optimal social media sharing across Facebook, LinkedIn, Twitter, and other platforms.

## Social Media Image Specifications

### Facebook / Open Graph (OG)
- **Dimension**: 1200x630 pixels
- **Field**: `seo.ogImage`
- **Format**: JPEG
- **Example**: `crypto-blog-og-1200x630.jpg`

### LinkedIn
- **Dimension**: 1200x627 pixels
- **Field**: `seo.linkedInImage`
- **Format**: JPEG
- **Example**: `crypto-blog-linkedin-1200x627.jpg`
- **Note**: LinkedIn uses OpenGraph tags but prefers 1200x627 for optimal display

### Twitter
- **Dimension**: 1200x675 pixels (or 1200x630)
- **Field**: `seo.twitterImage`
- **Format**: JPEG
- **Example**: `crypto-blog-twitter-1200x675.jpg`
- **Card Type**: `summary_large_image`

## Blog Post Metadata Structure

Each blog post includes:

```typescript
{
  slug: 'blog-post-slug',
  title: 'Blog Post Title',
  excerpt: 'Short description for preview cards',
  author: 'Prompt Tax Team',
  date: '2025-01-15',
  readTime: '8 min read',
  thumbnail: 'https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/hero-image.jpg',
  tags: ['Tag1', 'Tag2'],
  seo: {
    description: 'SEO meta description',
    keywords: ['keyword1', 'keyword2'],
    ogImage: 'https://.../-og-1200x630.jpg',       // Facebook
    linkedInImage: 'https://.../-linkedin-1200x627.jpg',  // LinkedIn
    twitterImage: 'https://.../-twitter-1200x675.jpg',    // Twitter
    version: '1.0'
  }
}
```

## Server-Side OG Tag Injection

The server (`server/routes/blog-og.ts`) automatically injects the following meta tags for each blog post:

### Standard Meta Tags
- `<title>` - Page title
- `<meta name="description">` - SEO description
- `<meta name="keywords">` - SEO keywords
- `<link rel="canonical">` - Canonical URL

### Open Graph (Facebook, LinkedIn)
- `og:type` - article
- `og:url` - Blog post URL
- `og:title` - Post title
- `og:description` - Post description
- `og:image` - Image with dimensions (1200x630 for FB, 1200x627 for LinkedIn)
- `og:image:secure_url` - HTTPS image URL
- `og:image:alt` - Image alt text
- `og:image:type` - image/jpeg
- `og:image:width` - 1200
- `og:image:height` - 630 (or 627 for LinkedIn)
- `og:site_name` - Prompt Tax
- `article:published_time` - ISO date
- `article:author` - Author name
- `article:section` - Primary tag
- `article:tag` - All tags

### Twitter Card
- `twitter:card` - summary_large_image
- `twitter:url` - Blog post URL
- `twitter:title` - Post title
- `twitter:description` - Post description
- `twitter:image` - Twitter-specific image
- `twitter:image:alt` - Image alt text
- `twitter:site` - @prompttax
- `twitter:creator` - @prompttax

## Current Blog Posts with Full Metadata

### 1. Crypto Tax Nightmare Solved (2025)
- **OG Image**: `crypto-blog-og-1200x630.jpg`
- **LinkedIn**: `crypto-blog-linkedin-1200x627.jpg`
- **Twitter**: `crypto-blog-twitter-1200x675.jpg`

### 2. AI K-1 Generator
- **OG Image**: `k1-generator-og-1200x630.jpg`
- **LinkedIn**: `k1-generator-linkedin-1200x627.jpg`
- **Twitter**: `k1-generator-twitter-1200x675.jpg`

### 3. Simplify K-1 Form Processing
- **OG Image**: `k1-crypto-og-1200x630.jpg`
- **LinkedIn**: `k1-crypto-linkedin-1200x627.jpg`
- **Twitter**: `k1-crypto-twitter-1200x675.jpg`

### 4. Crypto Tax AI Automation Case Study
- **OG Image**: `crypto-blog-og-1200x630.jpg`
- **LinkedIn**: `crypto-blog-linkedin-1200x627.jpg`
- **Twitter**: `crypto-blog-twitter-1200x675.jpg`

## Testing Social Media Sharing

To test your blog post metadata:

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator

Simply paste your blog post URL (e.g., `https://prompt.tax/blog/crypto-tax-nightmare-solved-2025`) to see how it appears.

## Cache Busting

All images include version-based cache busting:
- Format: `image-url.jpg?v=1.0`
- Updates when `seo.version` changes
- Ensures fresh images after updates

## CDN Structure

All images are hosted on DigitalOcean Spaces:
```
https://businessesppall.nyc3.cdn.digitaloceanspaces.com/prompttax/logos/og/
├── crypto-blog-og-1200x630.jpg
├── crypto-blog-linkedin-1200x627.jpg
├── crypto-blog-twitter-1200x675.jpg
├── k1-generator-og-1200x630.jpg
├── k1-generator-linkedin-1200x627.jpg
├── k1-generator-twitter-1200x675.jpg
├── k1-crypto-og-1200x630.jpg
├── k1-crypto-linkedin-1200x627.jpg
├── k1-crypto-twitter-1200x675.jpg
└── ... (more blog images)
```

## Notes

- All metadata is injected server-side for proper crawler detection
- Images are optimized for each platform's requirements
- Metadata syncs automatically between client (`src/types/blog.ts`) and server (`shared/blog-metadata.ts`)
- Each platform receives its optimal image dimensions for best display quality
