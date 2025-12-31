import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import {Col, Container, Row} from "react-bootstrap";

import backgroundImg7 from '@/assets/images/bg/07.jpg'
import backgroundImg12 from '@/assets/images/bg/12.jpg'
import backgroundImg13 from '@/assets/images/bg/13.jpg'
import type {SwiperOptions} from "swiper/types";
import { Link } from "react-router-dom";

const swiperImages = [backgroundImg7, backgroundImg12, backgroundImg13]

const Hero = () => {

    const swiperOptions: SwiperOptions = {
        modules: [EffectFade, Autoplay, Pagination],
        loop: true,
        effect: "fade",
        speed: 1500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    }

    return (
        <section className="vh-xl-auto vh-100 bg-dark py-0 overflow-hidden" data-bs-theme="dark">
            <Container fluid={true} className="h-100 p-0">
                <Row className="h-100 g-0">

                    <Col lg={6} className="m-auto order-2">
                        <div className="px-5 px-xxl-8 py-6 py-lg-8">

                            <h1 className="display-2 mb-4 lh-base">Designing the {" "}
                                <span className="position-relative z-index-2">
							Future<span
                                    className="w-100 h-auto bg-primary p-1 p-md-2 position-absolute bottom-0 start-0 mb-2 mb-sm-3 z-index-n1"></span>
						</span>
                            </h1>
                            <p className="lead mb-5">We specialize in crafting top-tier digital solutions and materials
                                that speak volumes with clarity and precision.</p>
                            <Link to="" className="btn btn-lg btn-primary mb-0">Explore our portfolio</Link>
                        </div>
                    </Col>

                    <Col lg={6} className="order-1 order-lg-2">

                        <Swiper className="swiper-img-scale h-100" {...swiperOptions}>

                            {
                                swiperImages.map((image, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="h-100 scale-img py-9"
                                             style={{
                                                 backgroundImage: `url(${image})`,
                                                 backgroundPosition: 'center left',
                                                 backgroundSize: 'cover'
                                             }}></div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
export default Hero