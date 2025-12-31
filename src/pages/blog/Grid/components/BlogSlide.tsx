import type { BlogPostMetadata } from "@/types/blog"
import { Card, Col, Row } from "react-bootstrap"
import { BsCalendar, BsClock, BsPerson } from "react-icons/bs"
import { Link } from "react-router-dom"

const BlogSlide = ({ post }: { post: BlogPostMetadata }) => {
  const { title, author, date, readTime, thumbnail, tags, slug } = post
  const category = tags?.[0] || 'Blog'
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
  
  return (
    <Card className="overflow-hidden h-500px text-center rounded-0" style={{ backgroundImage: `url(${thumbnail})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}>
      <div className="bg-overlay bg-dark opacity-5" />
      <div className="card-img-overlay d-flex align-items-center p-2 p-sm-4">
        <div className="w-100 my-auto">
          <Row className="justify-content-center">
            <Col xs={11} lg={9} >
              <Link to="" className="badge text-bg-dark mb-4">{category}</Link>
              <h1 className="h2 mb-4"><Link to={`/blog/${slug}`} className="text-white text-primary-hover">{title}</Link></h1>
              <ul className="nav nav-divider mb-0 justify-content-center small">
                <li className="nav-item text-white"><BsPerson className="me-2" />{author}</li>
                <li className="nav-item text-white"><BsCalendar className="me-2" />{formattedDate}</li>
                <li className="nav-item text-white"><BsClock className="me-2" />{readTime}</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  )
}

export default BlogSlide