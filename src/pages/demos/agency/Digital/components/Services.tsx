import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import {Col, Container, Row} from "react-bootstrap";
import {BsArrowRight, BsArrowLeft, BsTelephone} from "react-icons/bs";


import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {services} from "@/pages/demos/agency/Digital/data";
import ServiceCard from "@/pages/demos/agency/Digital/components/ServiceCard";
import type {SwiperOptions} from "swiper/types";
import { Link } from 'react-router-dom';

const Services = () => {

    const swiperOptions: SwiperOptions = {
        modules: [Autoplay, Navigation],
        spaceBetween: 50,
        loop: false,
        autoplay: {
            delay: 2000
        },
        navigation: {
            nextEl: ".swiper-button-next-team",
            prevEl: ".swiper-button-prev-team"
        },
        breakpoints: {
            576: {slidesPerView: 1},
            768: {slidesPerView: 3},
            992: {slidesPerView: 3},
            1200: {slidesPerView: 4}
        }
    }

    return (
        <section className="bg-light overflow-hidden">
            <Container>

                <Row className="mb-4 mb-md-6">
                    <Col md={6} lg={5}>
                        <h2 className="mb-0">Accelerating your digital transformation</h2>
                    </Col>

                    <Col md={6} lg={4} className="ms-auto">
                        <p>Our team of experts specializes in delivering tailored services designed to propel your
                            organization forward in today's fast-paced digital landscape. </p>

                        <div className="d-flex gap-3 position-relative mt-3">
                            <Link to=""
                               className="btn btn-white border btn-icon rounded-circle mb-0 swiper-button-prev-team">
                                <BsArrowLeft/>
                            </Link>
                            <Link to=""
                               className="btn btn-white border btn-icon rounded-circle mb-0 swiper-button-next-team">
                                <BsArrowRight/>
                            </Link>
                        </div>
                    </Col>
                </Row>

                <Swiper className="swiper-outside-end-n20" {...swiperOptions}>
                    {
                        services.map((service, idx) => (
                            <SwiperSlide key={idx}>
                                <ServiceCard service={service}/>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>


                {/*CTA*/}
                <div className="d-flex align-items-center gap-2 mt-6">
                    <ul className="avatar-group mb-0">
                        <li className="avatar avatar-sm">
                            <img className="avatar-img rounded-circle" src={avatar6} alt="avatar"/>
                        </li>
                        <li className="avatar avatar-sm">
                            <img className="avatar-img rounded-circle" src={avatar5} alt="avatar"/>
                        </li>
                        <li className="avatar avatar-sm">
                            <div className="avatar-img rounded-circle text-bg-dark">
                                <BsTelephone className="text-white position-absolute top-50 start-50 translate-middle"/>
                            </div>
                        </li>
                    </ul>
                    <p className="fw-normal mb-0">Maximize Productivity by Simplifying Solution Search {" "}
                        <Link to=""
                           className="text-decoration-underline text-primary-hover fw-semibold">Got a project in
                            mind?</Link>
                    </p>
                </div>
            </Container>
        </section>
    )
}

export default Services