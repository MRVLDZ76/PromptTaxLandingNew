


import {Col, Container, Row} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {clientData} from "@/pages/demos/ClassicDefault/data";

const Clients = () => {
    return (
        <section className="pb-0">
            <Container>
                <Row className="align-items-center">
                    <Col md={3} className="mb-2 mb-md-0">
                        <h5 className="pe-6">100+ Companies trust us</h5>
                    </Col>
                    <Col md={9}>

                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{delay: 2000}}
                            loop={true}
                            slidesPerView={2}
                            breakpoints={{
                                576: {slidesPerView: 3},
                                992: {slidesPerView: 4},
                                1200: {slidesPerView: 5}
                            }}
                            spaceBetween={50}
                            wrapperClass="align-items-center"
                        >

                            {
                                clientData.map((client, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={client.image}
                                            className="grayscale"
                                            alt=""
                                        />
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

export default Clients