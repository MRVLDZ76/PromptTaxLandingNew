import type { Context } from "https://edge.netlify.com";
import { sharedBlogPostMap } from "../../shared/blog-metadata.ts";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Only process blog post URLs
  if (!pathname.startsWith('/blog/')) {
    return;
  }

  // Extract slug from URL (e.g., /blog/costly-tax-filing-errors-cpa-review-saves-thousands)
  const slug = pathname.replace('/blog/', '');
  
  // Skip if it's the blog index or other non-post pages
  if (!slug || slug === 'grid' || slug === 'list' || slug === 'single') {
    return;
  }

  // Get blog post metadata
  const post = sharedBlogPostMap[slug];
  
  if (!post) {
    // If post not found, let the app handle it
    return;
  }

  // Get the original HTML response
  const response = await context.next();
  const html = await response.text();

  // Build the dynamic meta tags
  const siteUrl = url.origin;
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const description = post.seo?.description || post.excerpt;
  const ogImage = post.seo?.ogImage || post.thumbnail || `${siteUrl}/images/default-og.jpg`;
  const linkedInImage = post.seo?.linkedInImage || post.seo?.ogImage || post.thumbnail || ogImage;
  const twitterImage = post.seo?.twitterImage || post.seo?.ogImage || post.thumbnail || ogImage;
  const keywords = post.seo?.keywords?.join(', ') || '';
  const publishedTime = new Date(post.date).toISOString();

  // Replace the default meta tags with blog-specific ones
  let updatedHtml = html;

  // Replace title
  updatedHtml = updatedHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${post.title} | Prompt Tax</title>`
  );

  // Replace description
  updatedHtml = updatedHtml.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeHtml(description)}">`
  );

  // Replace keywords if exists
  if (keywords) {
    updatedHtml = updatedHtml.replace(
      /<meta name="keywords" content="[^"]*">/,
      `<meta name="keywords" content="${escapeHtml(keywords)}">`
    );
  }

  // Replace canonical URL
  updatedHtml = updatedHtml.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${canonicalUrl}">`
  );

  // Replace Open Graph tags
  updatedHtml = updatedHtml.replace(
    /<meta property="og:type" content="[^"]*">/,
    `<meta property="og:type" content="article">`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="${canonicalUrl}">`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${escapeHtml(post.title)}">`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${escapeHtml(description)}">`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="og:image" content="[^"]*">/,
    `<meta property="og:image" content="${ogImage}">`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="og:image:secure_url" content="[^"]*">/,
    `<meta property="og:image:secure_url" content="${ogImage}">`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="og:image:alt" content="[^"]*">/,
    `<meta property="og:image:alt" content="${escapeHtml(post.title)}">`
  );

  // Add article-specific meta tags before the closing </head> tag
  const articleMetaTags = `
    <meta property="article:published_time" content="${publishedTime}">
    <meta property="article:modified_time" content="${publishedTime}">
    <meta property="article:author" content="${escapeHtml(post.author)}">
    ${post.tags ? post.tags.map(tag => `<meta property="article:tag" content="${escapeHtml(tag)}">`).join('\n    ') : ''}
  `;

  updatedHtml = updatedHtml.replace('</head>', `${articleMetaTags}</head>`);

  // Replace Twitter Card tags
  updatedHtml = updatedHtml.replace(
    /<meta property="twitter:url" content="[^"]*">/,
    `<meta property="twitter:url" content="${canonicalUrl}">`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="twitter:title" content="[^"]*">/,
    `<meta property="twitter:title" content="${escapeHtml(post.title)}">`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="twitter:description" content="[^"]*">/,
    `<meta property="twitter:description" content="${escapeHtml(description)}">`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="twitter:image" content="[^"]*">/,
    `<meta property="twitter:image" content="${twitterImage}">`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="twitter:image:alt" content="[^"]*">/,
    `<meta property="twitter:image:alt" content="${escapeHtml(post.title)}">`
  );

  // Return the modified HTML
  return new Response(updatedHtml, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
};

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export const config = { path: "/blog/*" };
