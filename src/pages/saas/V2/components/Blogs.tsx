import { Col, Container, Row } from "react-bootstrap";
import { getAllPosts } from "@/types/blog";
import BlogCard from "./BlogCard";

const Blogs = () => {
  // Get latest 4 blog posts
  const recentPosts = getAllPosts().slice(0, 4);

  return (
    <section>
      <Container>
        <div className="inner-container text-center mb-4 mb-sm-6">
          <h2 className="mb-0">Our news & articles</h2>
        </div>

        <Row className="g-4 g-lg-5">
          {recentPosts.map((post) => (
            <Col md={6} key={post.slug}>
              <BlogCard post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
