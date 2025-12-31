import {BlogType} from "@/pages/demos/agency/Creative/types";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import { Card, CardBody, CardTitle } from "react-bootstrap";

type BlogCardPrpType = {
    blog: BlogType
}

const BlogCard = ({blog}: BlogCardPrpType) => {
    return (
        <Card as={"article"} className="bg-transparent">
            <img src={blog.image} className="card-img" alt="blog-image"/>
            <CardBody className="px-0 pb-0">
                <CardTitle as={"h6"} >{blog.title}</CardTitle>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">By {blog.publishedBy?.firstName} {blog.publishedBy?.lastName}</p>
                    <Link className="icon-link icon-link-hover stretched-link me-1"
                          to={blog.url}>Read more<BsArrowRight className="bi"/>
                    </Link>
                </div>
            </CardBody>
        </Card>
    )
}

export default BlogCard