import backgroundImg9 from '@/assets/images/bg/09.jpg'
import backgroundImg10 from '@/assets/images/bg/10.jpg'


import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import {Card, Col, Container, Row} from "react-bootstrap";
import {BsArrowRight} from "react-icons/bs";
import type {SwiperOptions} from "swiper/types";
import { Link } from 'react-router-dom';

const Hero = () => {

    const swiperOptions: SwiperOptions = {
        modules: [EffectFade, Autoplay, Pagination],
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    }

    return (
        <section className="pt-0">

            <Swiper className="overflow-hidden" {...swiperOptions}>

                <SwiperSlide>
                    <Card className="overflow-hidden min-vh-100 rounded-0"
                          style={{
                              background: `url(${backgroundImg10}) no-repeat`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                          }}>

                        <div className="bg-overlay bg-linear-overlay"></div>

                        <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
                            <Container>
                                <Row>
                                    <Col sm={11} lg={8} xl={7} className="text-center m-auto">
                                            <span
                                                className="bg-white bg-opacity-10 text-white small rounded-3 px-3 py-2">🚀 #World's best software agency</span>

                                        <h1 className="text-white display-4 my-4">Leading the Way in <span
                                            className="text-primary">software</span> innovation</h1>
                                        <p className="text-white mb-5"> Whether you're a gaming enthusiast or simply
                                            seeking an extraordinary escape from reality, our Virtual VR product is
                                            your portal to endless excitement. </p>
                                        <Link className="btn btn-lg btn-white icon-link icon-link-hover mb-0" to="">Get
                                            started now<BsArrowRight className='bi'/> </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card className="overflow-hidden min-vh-100 rounded-0"
                          style={{
                              background: `url(${backgroundImg9}) no-repeat`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                          }}
                    >

                        <div className="bg-overlay bg-linear-overlay"></div>

                        <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
                            <Container>
                                <Row>
                                    <Col sm={11} lg={8} className="mt-auto">
                                        <h1 className="text-white display-4 mb-4">Empower Your <span
                                            className="fw-light">Business</span> with <span
                                            className="fw-light">Innovation</span></h1>
                                        <p className="text-white mb-5"> Whether you're a gaming enthusiast or simply
                                            seeking an extraordinary escape from reality, our Virtual VR product is
                                            your portal to endless excitement. </p>
                                        <Link className="btn btn-lg btn-primary icon-link icon-link-hover mb-0"
                                           to="">Explore Our Services<BsArrowRight className='bi'/> </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Card>
                </SwiperSlide>

                <div className="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3"></div>
            </Swiper>

        </section>
    )
}

export default Hero