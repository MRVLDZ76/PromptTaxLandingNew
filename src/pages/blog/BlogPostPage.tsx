import { useParams, Navigate } from 'react-router-dom';
import { getPostBySlug } from '@/types/blog';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [hasError, setHasError] = useState(false);
  
  // Reset error state when slug changes
  useEffect(() => {
    setHasError(false);
  }, [slug]);
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const postMetadata = getPostBySlug(slug);
  
  if (!postMetadata) {
    return <Navigate to="/blog" replace />;
  }

  // Error boundary fallback
  if (hasError) {
    return (
      <Container className="py-8 text-center">
        <h2>Unable to load post</h2>
        <p className="text-muted mb-4">This post is temporarily unavailable.</p>
        <a href="/blog" className="btn btn-primary">Return to Blog</a>
      </Container>
    );
  }

  // Dynamically import the post content component
  const PostContent = lazy(() => 
    import(`./posts/${slug}.tsx`)
      .catch((error) => {
        console.error('Failed to load post:', error);
        setHasError(true);
        return import('./posts/PostNotFound').catch(() => {
          // Ultimate fallback
          return { default: () => (
            <Container className="py-8 text-center">
              <h2>Post Not Found</h2>
              <p className="text-muted mb-4">The post you're looking for doesn't exist.</p>
              <a href="/blog" className="btn btn-primary">Return to Blog</a>
            </Container>
          )};
        });
      })
  );

  return (
    <Suspense fallback={
      <div className="min-h-screen d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-4" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted fs-5">Loading post...</p>
        </div>
      </div>
    }>
      <PostContent metadata={postMetadata} />
    </Suspense>
  );
}
