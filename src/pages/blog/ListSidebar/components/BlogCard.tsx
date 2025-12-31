import type { BlogType } from "@/pages/blog/ListSidebar/types"
import { Card, CardBody, CardTitle, Col, OverlayTrigger, Popover, PopoverBody, Row } from "react-bootstrap"
import { BsArrowRight, BsInfoCircle } from "react-icons/bs"
import { Link } from "react-router-dom"

const BlogCard = ({ blog }: { blog: BlogType }) => {
  const { category, image, publishedBy, title, isSponsored } = blog
  return (
    <Card as={"article"} className="card-hover-shadow border p-3 mb-4">
      <Row>
        <Col md={4}>
          <img src={image} className="img-fluid card-img" alt="blog-img" />
        </Col>
        <Col md={8}>
          <CardBody className="d-flex flex-column h-100 ps-0 pe-3">
            <div className={`${isSponsored && "d-flex justify-content-between position-relative z-index-2"}`}>
              <span className="badge text-bg-dark mb-3">{category}</span>
              {isSponsored &&
                <OverlayTrigger trigger="click" placement="top" overlay={<Popover><PopoverBody>You're seeing this ad because your activity meets the intended audience of our site.</PopoverBody></Popover>}>
                  <a href="#!" className="mb-0 text-body small" tabIndex={0}>
                    <BsInfoCircle size={18} className="ps-1" /> Sponsored
                  </a>
                </OverlayTrigger>
              }
            </div>

            <CardTitle className="mb-3 mb-md-0">{title}</CardTitle>
            <div className="d-sm-flex justify-content-between align-items-center mt-auto">
              <p className="mb-2 heading-color fw-semibold">By {publishedBy.firstName} {publishedBy.lastName}</p>
              <Link className="icon-link icon-link-hover stretched-link" to="/blog/single/v1">Read more<BsArrowRight className="bi" /> </Link>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

export default BlogCard