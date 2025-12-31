import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllPosts, BlogPostMetadata } from '@/types/blog'
import { useMemo } from 'react'

interface SidebarProps {
  currentPost?: BlogPostMetadata;
}

const Sidebar = ({ currentPost }: SidebarProps) => {
  // Get all posts for related posts and tags
  const allPosts = useMemo(() => getAllPosts(), []);
  
  // Get related posts (same tags or recent posts, excluding current)
  const relatedPosts = useMemo(() => {
    if (currentPost?.tags && currentPost.tags.length > 0) {
      // Find posts with matching tags
      const postsWithMatchingTags = allPosts.filter(post => 
        post.slug !== currentPost.slug && 
        post.tags?.some(tag => currentPost.tags?.includes(tag))
      ).slice(0, 5);
      
      // If we have matching posts, return them
      if (postsWithMatchingTags.length > 0) {
        return postsWithMatchingTags;
      }
    }
    
    // Otherwise return recent posts (excluding current)
    return allPosts.filter(post => post.slug !== currentPost?.slug).slice(0, 5);
  }, [allPosts, currentPost]);
  
  // Get popular tags from all posts
  const popularTags = useMemo(() => {
    const tagCounts = new Map<string, number>();
    
    allPosts.forEach(post => {
      post.tags?.forEach(tag => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    
    // Sort by count and return top tags
    return Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag)
      .slice(0, 12);
  }, [allPosts]);

  const authorName = currentPost?.author || 'Prompt Tax Team';
  const authorInitials = authorName.split(' ').map(n => n[0]).join('');

  return (
    <Col lg={4} className="ps-xl-6">
      <Card className="card-body d-inline-block bg-light border p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="avatar avatar-lg flex-shrink-0 me-2">
            <div className="avatar-img rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center">
              <span className="fw-bold fs-5">{authorInitials}</span>
            </div>
          </div>
          <div className="ms-2">
            <h6 className="mb-0">{authorName}</h6>
            <small>Tax Technology Specialist</small>
          </div>
        </div>
        <p>Expert in AI-powered tax automation and cryptocurrency tax compliance solutions.</p>
      </Card>
      
      {relatedPosts.length > 0 && (
        <div className="align-items-center mt-5">
          <h6 className="mb-3 d-inline-block">Related posts:</h6>
          <ul className="list-group list-group-flush">
            {relatedPosts.map((post) => (
              <li className="list-group-item ps-0" key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="heading-color text-primary-hover fw-semibold">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {popularTags.length > 0 && (
        <div className="align-items-center mt-5">
          <h6 className="mb-3 d-inline-block">Popular Tags:</h6>
          <ul className="list-inline mb-0">
            {popularTags.map((tag) => (
              <li className="list-inline-item" key={tag}>
                <Link className="btn btn-light btn-sm" to={`/blog/grid?tag=${encodeURIComponent(tag)}`}>
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Col>
  )
}

export default Sidebar