import { useParams, Navigate } from 'react-router-dom';
import { getPostBySlug } from '@/types/blog';
import { lazy, Suspense } from 'react';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const postMetadata = getPostBySlug(slug);
  
  if (!postMetadata) {
    return <Navigate to="/blog" replace />;
  }

  // Dynamically import the post content component
  const PostContent = lazy(() => 
    import(`./posts/${slug}.tsx`)
      .catch(() => import('./posts/PostNotFound'))
  );

  return (
    <Suspense fallback={
      <div className="min-h-screen d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">Loading post...</p>
        </div>
      </div>
    }>
      <PostContent metadata={postMetadata} />
    </Suspense>
  );
}
