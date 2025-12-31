import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper/modules";
import type {SwiperOptions} from "swiper/types";

import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {testimonials} from "@/pages/demos/agency/Digital/data";

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import {BsQuote, BsFillStarFill, BsStar, BsStarHalf} from "react-icons/bs";

const swiperAvatars = [avatar9, avatar1, avatar10, avatar5]

const Testimonials = () => {

    const swiperOptions: SwiperOptions = {
        modules: [EffectFade, Autoplay],
        effect: "fade",
        loop: true,
        autoplay: {
            "delay": 1500,
            "disableOnInteraction": false
        }
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className=" avatar avatar-xl mb-md-4">
                            <Swiper className="swiper-img-scale overflow-hidden" {...swiperOptions}>

                                {
                                    swiperAvatars.map((avatar, idx) => (
                                        <SwiperSlide key={idx}>
                                            <img className="avatar-img rounded-circle border border-2 border-white"
                                                 src={avatar} alt="avatar"/>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>

                        <h2 className="mb-md-4">Hear from our satisfied clients ❤️</h2>
                        <p className="mb-md-4">Read what our satisfied clients have to say about their experiences with
                            our platform.</p>
                    </Col>

                    <Col md={7} className="ms-auto">

                        <Tab.Container defaultActiveKey="0">
                            <Tab.Content className="mb-md-5">
                                {
                                    testimonials.map((testimonial, idx) => (
                                        <Tab.Pane className="fade" eventKey={idx.toString()} key={idx}>

                                            <div className="icon-lg bg-dark text-white rounded-circle mb-4">
                                                <BsQuote className="fa-xl" size={28}/>
                                            </div>

                                            {
                                                testimonial.rating && <ul className="list-inline mb-4">
                                                    {
                                                        Array(Math.floor(testimonial.rating)).fill(0).map((_star, idx) => (
                                                            <li key={idx}
                                                                className="list-inline-item me-1">
                                                                <BsFillStarFill size={18} className="text-warning"/>
                                                            </li>
                                                        ))
                                                    }
                                                    {
                                                        !Number.isInteger(testimonial.rating) &&
                                                        <BsStarHalf size={18} className="text-warning me-1"/>
                                                    }
                                                    {
                                                        testimonial.rating < 5 && Array(5 - Math.ceil(testimonial.rating)).fill(0).map((_star, idx) => (
                                                            <li key={idx}
                                                                className="list-inline-item me-1">
                                                                <BsStar size={18} className="text-warning"/>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            }


                                            <h6 className="mb-2">"{testimonial.title}"</h6>
                                            <p className="heading-color">{testimonial.comment}</p>
                                        </Tab.Pane>
                                    ))
                                }
                            </Tab.Content>

                            <Nav variant="pills" className="nav-pills-testimonial nav-justified mb-3">
                                {
                                    testimonials.map((testimonial, idx) => (
                                        <Nav.Item key={idx}>
                                            <Nav.Link className="d-flex align-items-center text-start p-3"
                                                      eventKey={idx.toString()}>

                                                <div className="avatar flex-shrink-0">
                                                    <img className="avatar-img rounded-circle"
                                                         src={testimonial.user.avatar}
                                                         alt="avatar"/>
                                                </div>

                                                <div className="ms-2">
                                                    <h6 className="mb-0">{testimonial.user.firstName} {testimonial.user.lastName}</h6>
                                                    <p className="mb-0 small">{testimonial.user.role}</p>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))
                                }
                            </Nav>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials