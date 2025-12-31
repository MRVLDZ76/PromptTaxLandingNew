import about19 from '@/assets/images/about/19.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <section className="pb-0">
            <Container>
                <Row className="align-items-center">

                    <Col lg={6} xl={5}>
                        <div className="position-relative mb-5 mb-lg-0">

                            <img src={about19} className="rounded" alt=""/>

                            <div
                                className="bg-body rounded-pill d-flex align-items-center gap-3 position-absolute top-0 start-0 p-2 m-4">

                                <div className="avatar flex-shrink-0">
                                    <img className="avatar-img rounded-circle" src={avatar8}
                                         alt="avatar"/>
                                </div>

                                <div className="me-3">
                                    <h6 className="mb-0">Dennis Barrett</h6>
                                    <p className="mb-0 small">Ceo and manager of Blogzine</p>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col lg={6} className="ms-auto">
                        <h2 className="mb-4">Empowering financial futures together</h2>
                        <p className="mb-4"> With a commitment to integrity, expertise, and personalized service, we
                            strive to build lasting relationships based on trust and mutual success.</p>
                        <Link to="/about/v1" className="btn btn-dark mb-0">Know more about us</Link>

                        <hr className="my-5 my-xl-7"/>

                        <div className="d-flex flex-wrap gap-4 gap-xl-7">
                            <div>
                                <h3 className="mb-0">99<span className="text-primary">%</span></h3>
                                <p>Client satisfaction</p>
                            </div>

                            <div>
                                <h3 className="mb-0">1.5<span className="text-primary">x</span></h3>
                                <p>Company growth</p>
                            </div>

                            <div>
                                <h3 className="mb-0">120<span className="text-primary">+</span></h3>
                                <p>Weekly new users</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About