import {  Col, Container, Nav, NavItem, NavLink,  Row } from "react-bootstrap"
import BlogCard from "./BlogCard"
import { Fragment, useState } from "react"
import { getAllPosts } from "@/types/blog"
 
const Blogs = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allPosts = getAllPosts();
  
  // Get unique tags from all posts
  const allTags = Array.from(new Set(allPosts.flatMap(post => post.tags || [])));
  
  // Filter posts by selected tag
  const filteredPosts = selectedTag 
    ? allPosts.filter(post => post.tags?.includes(selectedTag))
    : allPosts;

  return (
    <section className="pt-0">
      <Container>
        <div className="d-lg-flex justify-content-between align-items-center">
          <h4 className="mb-3 mb-lg-0">Our Blog</h4>
          <Nav className="nav-pills gap-1 nav-pills-light">
            <NavItem>
              <NavLink 
                active={selectedTag === null}
                onClick={() => setSelectedTag(null)}
                style={{ cursor: 'pointer' }}
              >
                All blog
              </NavLink>
            </NavItem>
            {allTags.slice(0, 6).map((tag, idx) => (
              <NavItem key={idx}>
                <NavLink 
                  active={selectedTag === tag}
                  onClick={() => setSelectedTag(tag)}
                  style={{ cursor: 'pointer' }}
                >
                  {tag}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
        <Row className="g-4 g-sm-5 g-xl-7 mt-0">
          {filteredPosts.map((post) => (
            <Fragment key={post.slug}>
              <Col md={6} lg={4}>
                <BlogCard blog={{
                  title: post.title,
                  description: post.excerpt,
                  category: post.tags?.[0] || 'Blog',
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

            </Fragment>
          ))}

        </Row>
        {filteredPosts.length > 0 && (
          <Row className="mt-7">
            <Col xs={12} className="mx-auto">
              <div className="d-flex justify-content-center">
                <p className="text-muted">
                  Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                  {selectedTag && ` in "${selectedTag}"`}
                </p>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>

  )
}

export default Blogs