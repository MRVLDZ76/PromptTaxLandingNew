import {Col, Container, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="pt-0">
            <Container>
                <Row>
                    <Col lg={11} className="mx-auto">
                        <Row className="g-4 g-lg-5 align-items-center">
                            <Col md={6} lg={4} className="text-center">
                                <div className="icon-xxl bg-primary rounded-circle mx-auto mb-n7"
                                     style={{width: '150px', height: '150px'}}></div>
                                <span className="heading-color fw-bold"
                                      style={{fontSize: '6rem', lineHeight: 1.25}}>28</span>
                                <h6 className="w-50 mx-auto">Years of working experience</h6>
                            </Col>

                            <Col md={6} lg={4}>
                                <h6 className="text-body fw-normal">Since 1996</h6>
                                <h3>Genuinely corporate UK-based enterprises</h3>
                            </Col>

                            <Col lg={4}>
                                <p className="mb-4">Embrace a new era of digital success with Mizzle. Our team combines
                                    cutting-edge design with robust development to deliver websites that captivate and
                                    convert.</p>
                                <Link to="" className="btn btn-dark mb-0">Know more about us</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About