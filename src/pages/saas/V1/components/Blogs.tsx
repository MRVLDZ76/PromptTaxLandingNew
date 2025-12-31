import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllPosts } from '@/types/blog'
import BlogCard from '@/pages/blog/Grid/components/BlogCard'

const Blogs = () => {
  // Get all posts and filter for K-1 and Partnership Tax related content
  const allPosts = getAllPosts();
  const k1RelatedPosts = allPosts
    .filter(post => 
      post.tags?.some(tag => 
        tag.toLowerCase().includes('k-1') || 
        tag.toLowerCase().includes('partnership') ||
        tag.toLowerCase().includes('cpa')
      )
    )
    .slice(0, 3); // Show top 3 K-1 related posts

  return (
    <section className="pt-0">
      <Container>
        <div className="text-center mb-5">
          <h2 className="mb-3">Tax Insights & Resources</h2>
          <p className="mb-0">Stay informed with the latest K-1 tax tips and partnership accounting guidance</p>
        </div>
        
        <Row className="g-4 g-sm-5">
          {k1RelatedPosts.map((post) => (
            <Col md={6} lg={4} key={post.slug}>
              <BlogCard blog={{
                title: post.title,
                description: post.excerpt,
                category: post.tags?.[0] || 'Tax',
                publishedBy: {
                  firstName: post.author.split(' ')[0] || 'Prompt',
                  lastName: post.author.split(' ').slice(1).join(' ') || 'Tax',
                },
                image: post.thumbnail || '/images/blog/placeholder.jpg',
                slug: post.slug,
                date: new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                time: post.readTime || '5 min'
              }} />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link to="/blog/grid" className="btn btn-primary mb-0">
            View All Articles
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Blogs