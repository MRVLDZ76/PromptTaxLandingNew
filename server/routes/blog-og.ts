import fs from "node:fs";
import path from "node:path";
import type { Express, Request, Response, NextFunction } from "express";
import { sharedBlogPostMap } from "@shared/blog-metadata";

const SITE_ORIGIN = process.env.PUBLIC_SITE_URL || "https://prompt.tax";
const TWITTER_HANDLE = process.env.TWITTER_HANDLE || "@prompttax";

const HTML_HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "no-store, no-cache, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
  "Surrogate-Control": "no-store",
  "X-Robots-Tag": "all",
  Vary: "User-Agent",
};

const TEMPLATE_CACHE: { html: string | null; mtimeMs: number } = {
  html: null,
  mtimeMs: 0,
};

function loadTemplate(templatePath: string): string {
  const stats = fs.statSync(templatePath);
  if (!TEMPLATE_CACHE.html || stats.mtimeMs !== TEMPLATE_CACHE.mtimeMs) {
    TEMPLATE_CACHE.html = fs.readFileSync(templatePath, "utf-8");
    TEMPLATE_CACHE.mtimeMs = stats.mtimeMs;
  }
  return TEMPLATE_CACHE.html;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toAbsoluteUrl(src?: string) {
  if (!src) return `${SITE_ORIGIN}/logos/logo.png`;
  if (src.startsWith("http")) return src;
  return `${SITE_ORIGIN}${src}`;
}

function withCacheBuster(url: string, version: string) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${encodeURIComponent(version)}`;
}

function buildMetaTags(slug: string) {
  const post = sharedBlogPostMap[slug];
  if (!post) {
    return null;
  }

  const blogUrl = `${SITE_ORIGIN}/blog/${slug}/`;
  const description = escapeHtml(post.seo?.description || post.excerpt);
  const keywords = post.seo?.keywords?.length
    ? escapeHtml(post.seo.keywords.join(", "))
    : undefined;
  const version = post.seo?.version || post.date;
  
  // Different images for different platforms
  const ogImageBase = toAbsoluteUrl(post.seo?.ogImage || post.thumbnail);
  const linkedInImageBase = toAbsoluteUrl(post.seo?.linkedInImage || post.seo?.ogImage || post.thumbnail);
  const twitterImageBase = toAbsoluteUrl(post.seo?.twitterImage || post.seo?.ogImage || post.thumbnail);
  
  const ogImage = withCacheBuster(ogImageBase, version);
  const linkedInImage = withCacheBuster(linkedInImageBase, version);
  const twitterImage = withCacheBuster(twitterImageBase, version);
  
  const ogImageAlt = escapeHtml(post.title);
  const author = escapeHtml(post.author);
  const title = escapeHtml(post.title);
  const published = new Date(post.date).toISOString();
  const primaryTag = post.tags?.[0] ? escapeHtml(post.tags[0]) : undefined;
  const articleTags = (post.tags || []).map(tag => `<meta property="article:tag" content="${escapeHtml(tag)}">`).join("\n    ");

  return `
    <!-- SERVER-SIDE BLOG META -->
    <title>${title} | Prompt Tax</title>
    <meta name="description" content="${description}">
    <meta name="author" content="${author}">
    ${keywords ? `<meta name="keywords" content="${keywords}">` : ""}
    <link rel="canonical" href="${blogUrl}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:locale" content="en_US">
    <meta property="og:url" content="${blogUrl}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:secure_url" content="${ogImage}">
    <meta property="og:image:alt" content="${ogImageAlt}">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Prompt Tax">
    <meta property="article:published_time" content="${published}">
    <meta property="article:modified_time" content="${published}">
    <meta property="article:author" content="${author}">
    ${primaryTag ? `<meta property="article:section" content="${primaryTag}">` : ""}
    ${articleTags}

    <!-- LinkedIn Specific (uses same og: properties but we ensure LinkedIn image is loaded) -->
    ${post.seo?.linkedInImage ? `<meta property="og:image" content="${linkedInImage}" data-linkedin="true">` : ""}

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${blogUrl}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${twitterImage}">
    <meta name="twitter:image:alt" content="${ogImageAlt}">
    <meta name="twitter:site" content="${TWITTER_HANDLE}">
    <meta name="twitter:creator" content="${TWITTER_HANDLE}">
    
    <!-- Additional metadata for better indexing -->
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta property="og:updated_time" content="${published}">
    <!-- END SERVER-SIDE BLOG META -->
  `;
}

function stripExistingMeta(html: string): string {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta[^>]*(name|property)=["'](og:|twitter:|title|description|keywords|author|robots)["'][^>]*>/gi, "")
    .replace(/<link[^>]*rel=["']canonical["'][^>]*>/gi, "");
}

export function registerBlogOgRoute(app: Express, distPath: string) {
  const templatePath = path.join(distPath, "index.html");

  const handler = (req: Request, res: Response, next: NextFunction) => {
    const slug = (req.params.slug || "").replace(/\/$/, "");
    const metaTags = buildMetaTags(slug);

    if (!metaTags) {
      return next();
    }

    try {
      const template = loadTemplate(templatePath);
      const sanitized = stripExistingMeta(template).replace("<head>", `<head>\n${metaTags}`);
      res.set(HTML_HEADERS);
      return res.send(sanitized);
    } catch (error) {
      console.error("[Blog-OG] Failed to render", error);
      return next(error);
    }
  };

  app.get("/blog/:slug", handler);
  app.get("/blog/:slug/", handler);
}
