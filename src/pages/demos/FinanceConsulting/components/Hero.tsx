import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'

import background11 from '@/assets/images/bg/11.jpg'
import about19 from '@/assets/images/about/19.jpg'
import pattern5 from '@/assets/images/elements/bg-pattern-5.png'
import decoration24 from '@/assets/images/elements/saas-decoration/24.png'

import {Button, Col, Container, Row} from "react-bootstrap";
import {BsTelephoneFill} from "react-icons/bs";
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="pt-xl-8 pb-0 position-relative">

            <div className="position-absolute top-0 start-50 translate-middle-x mt-8">
                <img src={pattern5} alt=""/>
            </div>

            <Container className="pt-5 position-relative">

                <Row>
                    <Col lg={8} className="mx-auto text-center">

                        <span className="heading-color fw-semibold">Trusted by happy customers</span>
                        <ul className="avatar-group mb-0 align-items-center justify-content-center mt-2">
                            <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={avatar6}
                                     alt="avatar"/>
                            </li>
                            <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={avatar5}
                                     alt="avatar"/>
                            </li>
                            <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={avatar2}
                                     alt="avatar"/>
                            </li>
                            <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={avatar3}
                                     alt="avatar"/>
                            </li>
                            <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={avatar4}
                                     alt="avatar"/>
                            </li>
                        </ul>

                        <h1 className="my-4">Empower your <span className="text-primary">finances</span> for a brighter
                            tomorrow</h1>
                        <p className="mb-5">Whether you're planning for retirement, investing in your future, or seeking
                            expert advice, our team is here to provide tailored solutions to meet your unique needs.</p>

                        <div className="d-flex gap-1 gap-sm-3 flex-wrap justify-content-center">
                            <Link className="btn btn-lg btn-primary icons-center" to=""><BsTelephoneFill className="me-2"/>Book
                                a call</Link>
                            <Button size='lg' variant='light' className="border" type="button">Start Your
                                Journey</Button>
                        </div>
                    </Col>

                    <Col xs={12} className="mt-6 mt-xl-8">
                        <img src={background11} className="rounded" alt=""/>
                    </Col>
                </Row>

                <Row className="g-4 justify-content-between align-items-center mt-5 mt-md-7 pt-2 d-none">

                    <Col md={6} lg={3} className="order-2">
                        <img src={about19} className="rounded" alt=""/>
                    </Col>

                    <Col md={6} lg={3} className="d-none d-lg-block order-md-3">
                        <img src={decoration24} className="rounded shadow" alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero