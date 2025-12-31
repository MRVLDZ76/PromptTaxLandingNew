import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BsChevronRight} from "react-icons/bs";
import about21 from '@/assets/images/about/21.jpg'

const About = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col md={11} className="mx-auto">
                        <Row className="align-items-center">

                            <Col md={6} lg={5} className="mb-4 mb-md-0">
                                <img src={about21} className="rounded" alt=""/>
                            </Col>

                            <Col md={6} className="ms-auto">
                                <h2 className="mb-md-4">Learn About Our Journey to SEO Mastery</h2>
                                <p className="mb-md-4">With a team of dedicated professionals and years of industry
                                    experience, we pride ourselves on delivering innovative and effective SEO solutions
                                    tailored to your unique needs.</p>
                                <p className="mb-md-4">Whether you're a small startup or a large enterprise, we have the
                                    expertise to meet your needs.</p>
                                <div className="text-center d-inline-block bg-dark rounded px-5 py-3">
                                    <span className="text-white icons-center">Work with us?</span> <Link className="ms-2"
                                                                                            to="/contact/v2">Contact
                                    us now<BsChevronRight className="small ms-1"/></Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About