import { useParams, Navigate } from 'react-router-dom';
import { getPostBySlug } from '@/blog/posts';
import BlogPostTemplate from '@/components/BlogPostTemplate';
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
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-muted-foreground">Loading post...</p>
        </div>
      </div>
    }>
      <PostContent metadata={postMetadata} />
    </Suspense>
  );
}
