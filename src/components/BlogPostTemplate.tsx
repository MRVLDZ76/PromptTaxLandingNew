import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import {BsFacebook, BsInstagram, BsShare, BsWhatsapp } from 'react-icons/bs';
import { FaRegPaste, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BlogPostMetadata } from '@/types/blog';
import Sidebar from '@/pages/blog/single/V2/components/Sidebar';

interface BlogPostTemplateProps {
  metadata: BlogPostMetadata;
  children: ReactNode;
}

export default function BlogPostTemplate({ metadata, children }: BlogPostTemplateProps) {
  // Build canonical URL - use relative path for SSR safety
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://prompt.tax';
  const canonicalUrl = `${siteUrl}/blog/${metadata.slug}`;
  
  // Get images with fallbacks
  const ogImage = metadata.seo?.ogImage || metadata.thumbnail || `${siteUrl}/images/default-og.jpg`;
  const linkedInImage = metadata.seo?.linkedInImage || metadata.seo?.ogImage || metadata.thumbnail || ogImage;
  const twitterImage = metadata.seo?.twitterImage || metadata.seo?.ogImage || metadata.thumbnail || ogImage;
  
  // SEO data
  const description = metadata.seo?.description || metadata.excerpt;
  const keywords = metadata.seo?.keywords?.join(', ') || '';
  const publishedTime = new Date(metadata.date).toISOString();
  
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{metadata.title} | Prompt Tax</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="author" content={metadata.author} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:alt" content={metadata.title} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Prompt Tax" />
        
        {/* Article Specific */}
        <meta property="article:published_time" content={publishedTime} />
        <meta property="article:modified_time" content={publishedTime} />
        <meta property="article:author" content={metadata.author} />
        {metadata.tags && metadata.tags[0] && (
          <meta property="article:section" content={metadata.tags[0]} />
        )}
        {metadata.tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* LinkedIn specific (uses same og: properties but ensure LinkedIn image) */}
        {metadata.seo?.linkedInImage && (
          <meta property="og:image" content={linkedInImage} data-linkedin="true" />
        )}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:image:alt" content={metadata.title} />
        <meta name="twitter:site" content="@prompttax" />
        <meta name="twitter:creator" content="@prompttax" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:updated_time" content={publishedTime} />
      </Helmet>

      <section className="pt-lg-8">
      <Container className="pt-4 pt-lg-0">
        <Row className="g-4 g-sm-7">
          <Col lg={8}>
            {/* Breadcrumb */}
            <div className="d-flex position-relative z-index-9">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots mb-1">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/blog/grid">Blog</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{metadata.title}</li>
                </ol>
              </nav>
            </div>

              {/* Title */}
              <h1 className="h2 mb-0">{metadata.title}</h1>

              {/* Meta Info */}
              <div className="d-flex align-items-center flex-wrap mt-4">
                {metadata.tags && metadata.tags.length > 0 && (
                  <>
                    {metadata.tags.slice(0, 2).map((tag, idx) => (
                      <Link key={idx} to={`/blog?tag=${encodeURIComponent(tag)}`} className="badge text-bg-dark mb-0 me-2">
                        {tag}
                      </Link>
                    ))}
                    <span className="text-secondary opacity-3 mx-3">|</span>
                  </>
                )}
                
                <Dropdown>
                  <DropdownToggle as="a" href="#" className="arrow-none text-secondary text-primary-hover icons-center">
                    <BsShare className="me-2" />Share
                  </DropdownToggle>
                  <DropdownMenu className="min-w-auto">
                    <li><DropdownItem href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank"><BsFacebook className="fa-fw me-2" />Facebook</DropdownItem></li>
                    <li><DropdownItem href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(metadata.title)}`} target="_blank"><BsInstagram className="fa-fw me-2" />Twitter</DropdownItem></li>
                    <li><DropdownItem href={`https://wa.me/?text=${encodeURIComponent(metadata.title + ' ' + window.location.href)}`} target="_blank"><BsWhatsapp className="fa-fw me-2" />WhatsApp</DropdownItem></li>
                    <li><DropdownItem href="#" onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText(window.location.href); }}><FaRegPaste className="fa-fw me-2" />Copy link</DropdownItem></li>
                  </DropdownMenu>
                </Dropdown>

                {metadata.readTime && (
                  <>
                    <span className="text-secondary opacity-3 mx-3">|</span>
                    <span className="text-secondary">{metadata.readTime}</span>
                  </>
                )}

                {metadata.date && (
                  <>
                    <span className="text-secondary opacity-3 mx-3">|</span>
                    <span className="text-secondary">{new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </>
                )}
              </div>

              {/* Featured Image */}
              {metadata.thumbnail && (
                <img src={metadata.thumbnail} className="img-fluid rounded mt-5" alt={metadata.title} />
              )}

              {/* Blog Content */}
              <div className="mt-5 blog-content">
                {children}
              </div>

              {/* Helpful Section */}
              <div className="bg-light border rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5">
                <h6 className="mb-0">Was this article helpful?</h6>
                <div className="btn-group mt-3 mt-md-0" role="group" aria-label="Feedback">
                  <input type="radio" className="btn-check" name="helpful" id="helpful-yes" />
                  <label className="btn btn-outline-secondary icons-center gap-2 btn-sm mb-0" htmlFor="helpful-yes">
                    <FaRegThumbsUp className="me-1" /> Yes
                  </label>
                  <input type="radio" className="btn-check" name="helpful" id="helpful-no" />
                  <label className="btn btn-outline-secondary icons-center gap-2 btn-sm mb-0" htmlFor="helpful-no">
                    No <FaRegThumbsDown className="ms-1" />
                  </label>
                </div>
              </div>

              {/* Author Info */}
              {metadata.author && (
                <div className="border rounded p-4 mt-5">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-lg flex-shrink-0 me-3">
                      <div className="avatar-img rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center">
                        <span className="fw-bold">{metadata.author.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">{metadata.author}</h6>
                      <p className="small text-muted mb-0">Tax Technology Specialist</p>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            {/* Sidebar */}
            <Sidebar currentPost={metadata} />
          </Row>
        </Container>
      </section>
    </>
  );
}
