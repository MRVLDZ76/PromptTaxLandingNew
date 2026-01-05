import { useParams, Navigate } from 'react-router-dom';
import { getPostBySlug } from '@/types/blog';
import { lazy, Suspense } from 'react';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog/grid" replace />;
  }

  const postMetadata = getPostBySlug(slug);
  
  if (!postMetadata) {
    return <Navigate to="/blog/grid" replace />;
  }

  // Dynamically import the post content component
  // Error handling is done by ErrorBoundary in BlogLayout
  const PostContent = lazy(() => 
    import(`./posts/${slug}.tsx`)
      .catch((error) => {
        console.error('Failed to load blog post:', slug, error);
        // Return a fallback component instead of trying to set state
        return {
          default: () => (
            <div className="container py-8 text-center">
              <h2>Post Not Available</h2>
              <p className="text-muted mb-4">
                We're having trouble loading this post. Please try again later.
              </p>
              <a href="/blog/grid" className="btn btn-primary">Return to Blog</a>
            </div>
          )
        };
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
