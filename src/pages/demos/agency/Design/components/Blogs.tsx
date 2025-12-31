import {Col, Container, Row} from "react-bootstrap";
import {blogs} from "@/pages/demos/agency/Design/data";
import BlogCard from "@/pages/demos/agency/Design/components/BlogCard";

const Blogs = () => {
    return (
        <section>
            <Container>
                <div className="inner-container text-center mb-4 mb-sm-6">
                    <h2 className="mb-0">Our news & articles</h2>
                </div>

                <Row className="g-4 g-lg-5">
                    {
                        blogs.map((blog, idx) => (
                            <Col md={6} key={idx}>
                                <BlogCard blog={blog}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Blogs