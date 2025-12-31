import { type BlogType } from "@/pages/blog/single/V1/data"
import { Card, CardBody, CardTitle } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

const BlogCard = ({ blog }: { blog: BlogType }) => {
  const {  image, publishedBy, title } = blog
  return (
    <Card as={"article"} className="bg-transparent h-100 p-0">
      <img src={image} className="card-img" alt="Blog-img" />
      <CardBody className="px-2 pb-4">
        <CardTitle as={"h6"} className="mb-2"><Link to="">{title}</Link></CardTitle>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">By {publishedBy.firstName} {publishedBy.lastName}</p>
          <Link className="icon-link icon-link-hover stretched-link" to="/blog/single/v2">Read more<BsArrowRight className="bi" /> </Link>
        </div>

      </CardBody>

    </Card>
  )
}

export default BlogCard