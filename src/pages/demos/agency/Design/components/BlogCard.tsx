import {BlogType} from "@/pages/demos/agency/Design/types";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {Card} from "react-bootstrap";

type BlogCardPropsType = {
    blog: BlogType
}

const BlogCard = ({blog}: BlogCardPropsType) => {
    return (
        <Card as={"article"} className="bg-transparent">
            <img src={blog.image} className="card-img" alt="blog-image"/>
            <Card.Body className="px-0 pb-0">
                <Card.Title as={'h6'}>{blog.title}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">By {blog.publishedBy?.firstName} {blog.publishedBy?.lastName}</p>
                    <Link className="icon-link icon-link-hover stretched-link me-1"
                          to={blog.url}>Read more<BsArrowRight className="bi"/>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default BlogCard