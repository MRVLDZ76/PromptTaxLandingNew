import appleImg from '@/assets/images/elements/apple.svg'
import gIcon from '@/assets/images/elements/gicon.svg'
import {Col, Container, Row} from "react-bootstrap";
import {BsArrowRight, BsStarFill, BsStarHalf} from "react-icons/bs";

const Rating = () => {
    return (
        <section className="pb-0">
            <Container>
                <Row>
                    <Col xl={10} className="mx-auto">
                        <div className="rounded border bg-light p-4 p-lg-5">
                            <Row className="g-4">

                                <Col md={4}>
                                    <div className="d-flex align-items-center">

                                        <img src={appleImg} className="icon-lg" alt=""/>

                                        <div className="ms-2">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-1">
                                                    <BsStarFill size={18} className="text-warning"/></li>
                                                <li className="list-inline-item me-1">
                                                    <BsStarFill size={18} className="text-warning"/></li>
                                                <li className="list-inline-item me-1">
                                                    <BsStarFill size={18} className="text-warning"/></li>
                                                <li className="list-inline-item me-1">
                                                    <BsStarFill size={18} className="text-warning"/></li>
                                                <li className="list-inline-item me-1">
                                                    <BsStarHalf size={18} className="text-warning"/></li>
                                            </ul>
                                            <span>4.8 stars on apple store</span>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={4} className="border-end">
                                    <div className="d-flex align-items-center">

                                        <img src={gIcon} className="icon-lg" alt=""/>

                                        <div className="ms-2">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-1">
                                                    <BsStarFill size={18} className="text-warning"/></li>
                                                <li className="list-inline-item me-1">
                                                    <BsStarFill size={18} className="text-warning"/></li>
                                                <li className="list-inline-item me-1">
                                                    <BsStarFill size={18} className="text-warning"/></li>
                                                <li className="list-inline-item me-1">
                                                    <BsStarFill size={18} className="text-warning"/></li>
                                                <li className="list-inline-item me-1">
                                                    <BsStarHalf size={18} className="text-warning"/></li>
                                            </ul>
                                            <span>4.8 stars on Google store</span>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <h6>8,000+ satisfied customers</h6>
                                    <a className="icon-link icon-link-hover" href="">See all reviews
                                        <BsArrowRight/>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Rating