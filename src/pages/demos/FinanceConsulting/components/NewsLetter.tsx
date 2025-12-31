import {Col, Container, Form, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsLetter = () => {
    return (
        <section className="position-relative z-index-2 pt-0">
            <Container className="position-relative">

                <div className="bg-dark rounded position-relative overflow-hidden p-4 p-sm-6" data-bs-theme="dark">

                    <figure className="position-absolute top-0 start-0 mt-n5 ms-n5">
                        <svg width="140" height="140" viewBox="0 0 140 140" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <circle cx="70" cy="70" r="70" fill="url(#paint0_linear_266_284)"></circle>
                                <circle cx="70" cy="70" r="70" fill="url(#paint1_linear_266_284)"></circle>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_266_284" x1="28.5" y1="22" x2="124" y2="123"
                                                gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="white" stopOpacity="0.6"></stop>
                                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_266_284" x1="28.5" y1="22" x2="124" y2="123"
                                                gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="white" stopOpacity="0.6"></stop>
                                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </figure>

                    <figure className="position-absolute top-0 start-100 translate-middle opacity-5 mt-7 ms-n5">
                        <svg width="290" height="290" viewBox="0 0 290 290" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.5" cx="145.313" cy="145.313" r="144.5"
                                    transform="rotate(39.2153 145.313 145.313)"
                                    fill="url(#paint0_linear_266_283)"></circle>
                            <defs>
                                <linearGradient id="paint0_linear_266_283" x1="59.6452" y1="46.2275" x2="256.785"
                                                y2="254.72" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="white" stopOpacity="0.6"></stop>
                                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </figure>

                    <Row className="align-items-center position-relative">

                        <Col md={6} xl={7} className="mb-4 mb-xl-0">
                            <h2>Never miss a beat with our insights</h2>
                            <p className="mb-0">Join the Mizzle revolution today and be part of the millions who've
                                already embraced a brighter future!</p>
                        </Col>

                        <Col md={6} as={Form} xl={4} className="ms-xl-auto">
                            <Form.Control size="lg" className="mb-3" type="email"
                                          placeholder="Enter your email address"/>
                            <Link to="" className="btn btn-primary mb-0 d-grid">Subscribe now!</Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default NewsLetter