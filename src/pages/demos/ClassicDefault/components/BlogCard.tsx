import { BlogPostMetadata } from "@/types/blog";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "react-bootstrap";

type BlogCardPropsType = {
  post: BlogPostMetadata;
}

const BlogCard = ({ post }: BlogCardPropsType) => {
  return (
    <Card as={"article"} className="bg-transparent">
      <img src={post.thumbnail} className="card-img" alt={post.title} />
      <Card.Body className="px-0 pb-0">
        <Card.Title as={'h6'}>{post.title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">By {post.author}</p>
          <Link 
            className="icon-link icon-link-hover stretched-link me-1"
            to={`/blog/${post.slug}`}
          >
            Read more<BsArrowRight className="bi"/>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
