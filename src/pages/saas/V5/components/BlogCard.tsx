import { BlogType } from "@/pages/saas/V5/types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

type BlogCardPropsType = {
  blog: BlogType
}

const BlogCard = ({ blog }: BlogCardPropsType) => {
  return (
    <Card as={"article"} className="bg-transparent h-100 p-0">
      <div
        className="badge text-bg-dark position-absolute top-0 start-0 m-3">{blog.category}
      </div>

      <img src={blog.image} className="card-img" alt="Blog-img" />

      <Card.Body className="px-2 pb-4">

        <Card.Title as={'h5'} className="mb-2"><Link to={blog.url}>{blog.title}</Link></Card.Title>

        <div className="d-flex justify-content-between mt-2">
          <span>By {blog.publishedBy?.firstName} {blog.publishedBy?.lastName}</span>
          <Link to={blog.url} className="icon-link icon-link-hover stretched-link">
            Read more <BsArrowRight />
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default BlogCard