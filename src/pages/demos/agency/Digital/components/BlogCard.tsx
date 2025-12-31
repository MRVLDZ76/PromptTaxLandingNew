import { BlogType } from "@/pages/demos/agency/Digital/types";
import { Link } from "react-router-dom";
import { BsArrowUpRight, BsCalendar } from "react-icons/bs";
import { Card, CardBody, CardTitle } from "react-bootstrap";

type BlogCardPropsType = {
  blog: BlogType
}

const BlogCard = ({ blog }: BlogCardPropsType) => {
  return (
    <Card as={"article"} className="card-img-scale border p-2 h-100">
      <div className="card-img-scale-wrapper position-relative rounded overflow-hidden">
        <img src={blog.image} className="card-img img-scale"
          alt="service image" />

        <div
          className="badge text-bg-dark position-absolute top-0 start-0 m-3">{blog.category}
        </div>
      </div>

      <CardBody className="d-flex flex-column px-2">
        <div className="small mb-3"><BsCalendar className="me-1"></BsCalendar>
          {blog.publishedAt?.month} {blog.publishedAt?.date}, {blog.publishedAt?.year}
        </div>
        <CardTitle as={"h6"} className="mb-3">
          <Link to={blog.url} className="stretched-link">
            {blog.title}
          </Link>
        </CardTitle>

        <div className="d-flex justify-content-between align-items-center mt-auto">

          <div className="d-flex align-items-center">
            <div className="avatar avatar-xs flex-shrink-0 me-2">
              <img className="avatar-img rounded"
                src={blog.publishedBy?.avatar}
                alt="avatar" />
            </div>
            <p className="mb-0">By {blog.publishedBy?.firstName} {blog.publishedBy?.lastName}</p>
          </div>

          <Link to={blog.url} className="btn btn-round btn-dark flex-shrink-0 flex-centered">
            <BsArrowUpRight /></Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default BlogCard