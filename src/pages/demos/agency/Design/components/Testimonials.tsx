import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {Col, Container, Row} from "react-bootstrap";
import {statData, testimonials} from "@/pages/demos/agency/Design/data";
import TestimonialCard from "@/pages/demos/agency/Design/components/TestimonialCard";
import {BsArrowRight, BsArrowLeft} from "react-icons/bs";
import type {SwiperOptions} from "swiper/types";
import { Link } from "react-router-dom";

const Testimonials = () => {

    const swiperOptions: SwiperOptions = {
        modules: [Autoplay, Navigation],
        spaceBetween: 30,
        loop: true,
        autoplay: {
            "delay": 5000,
            "disableOnInteraction": false,
            "pauseOnMouseEnter": true
        },
        navigation: {
            "nextEl": ".swiper-button-next",
            "prevEl": ".swiper-button-prev"
        }
    }

    return (
        <section>
            <Container>

                <Row className="position-relative mb-6 mb-sm-8">
                    <Col md={10} className="mx-auto text-center">

                        <Swiper className="mt-2 mt-md-4" {...swiperOptions}>
                            {
                                testimonials.map((testimonial, idx) => (
                                    <SwiperSlide key={idx}>
                                        <TestimonialCard testimonial={testimonial}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Col>

                    <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100">
                        <Link to=""
                           className="btn btn-light border btn-icon btn-lg rounded-circle mb-0 swiper-button-prev"><BsArrowLeft/></Link>
                        <Link to=""
                           className="btn btn-light border btn-icon btn-lg rounded-circle mb-0 swiper-button-next"><BsArrowRight/></Link>
                    </div>
                </Row>

                {/* Counter */}
                <Row className="g-4 g-lg-6">
                    {
                        statData.map((item, idx) => (
                            <Col sm={6} md={3} key={idx}>
                                <h6 className="mb-0">{item.title}</h6>
                                <hr className="border-primary opacity-3 my-3 my-sm-4"/>
                                <h5 className="display-6">
                                    {
                                        item.prefix && <span className="text-primary">{item.prefix}</span>
                                    }
                                    {item.stat}
                                    {
                                        item.suffix && <span className="text-primary">{item.suffix}</span>
                                    }
                                </h5>
                                <p>{item.description}</p>
                            </Col>
                        ))
                    }
                </Row>

            </Container>
        </section>
    )
}

export default Testimonials