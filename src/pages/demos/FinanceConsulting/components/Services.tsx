import {Col, Container, Row} from "react-bootstrap";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";
import type {SwiperOptions} from "swiper/types";
import {Autoplay, Navigation} from "swiper/modules";
import {services} from "@/pages/demos/FinanceConsulting/data";
import ServiceCard from "@/pages/demos/FinanceConsulting/components/ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {

    const swiperOptions: SwiperOptions = {
        modules: [Navigation, Autoplay],
        spaceBetween: 40,
        loop: false,
        autoplay: {delay: 3000},
        navigation: {
            nextEl: ".swiper-button-next-team",
            prevEl: ".swiper-button-prev-team"
        },
        breakpoints: {
            768: {"slidesPerView": 2},
            992: {"slidesPerView": 2},
            1200: {"slidesPerView": 3}
        },
    }

    return (
        <section className="pb-0">
            <Container>

                <Row className="mb-4 mb-md-6">
                    <Col md={6}>
                        <h2 className="mb-0">Tailored solutions for your financial needs</h2>
                    </Col>

                    <Col md={4} className="ms-auto">
                        <p>We offer a comprehensive range of financial services designed to address your specific goals
                            and aspirations. </p>

                        <div className="d-flex gap-3 position-relative mt-3">
                            <Link to="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev-team">
                                <BsArrowLeft/>
                            </Link>
                            <Link to="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next-team">
                                <BsArrowRight/></Link>
                        </div>
                    </Col>
                </Row>


                <Swiper className="mt-2 mt-md-4" {...swiperOptions}>
                    {
                        services.map((service, idx) => (
                            <SwiperSlide key={idx}>
                                <ServiceCard service={service}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </Container>
        </section>
    )
}

export default Services