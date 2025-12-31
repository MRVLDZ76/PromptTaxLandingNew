import {Col, Container, Row} from "react-bootstrap";
import {services} from "@/pages/demos/agency/Design/data";
import {Fragment} from "react";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <section className="bg-dark" data-bs-theme="dark">
            <Container>
                <div className="inner-container-small m-0 mb-7">
                    <h2 className="mb-4">Our Comprehensive Services</h2>
                    <p className="mb-0">Our team of experts specializes in delivering tailored services designed to
                        propel your organization forward in today's fast-paced digital landscape.</p>
                </div>

                <Row>
                    <Col xs={12}>

                        <hr/>

                        {
                            services.map((service, idx) => (
                                <Fragment key={idx}>
                                    <Row className="align-items-center position-relative py-4">
                                        <Col md={2} className="mb-3 mb-md-0">
                                            <img src={service.image} className="h-60px"
                                                 alt="service icon"/>
                                        </Col>

                                        <Col md={3} className="mb-3 mb-md-0">
                                            <h5 className="mb-0">
                                                <Link to="" className="stretched-link">
                                                    {service.title}
                                                </Link>
                                            </h5>
                                        </Col>

                                        <Col md={5} className="ms-auto">
                                            <p className="mb-0">{service.description}</p>
                                        </Col>
                                    </Row>

                                    <hr/>
                                </Fragment>
                            ))
                        }

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services