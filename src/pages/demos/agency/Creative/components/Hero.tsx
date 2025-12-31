import heroFinance from '@/assets/images/elements/hero-finance.svg'
import {Button, Col, Container, Row} from "react-bootstrap";
import {BsStopwatch, BsFire, BsLifePreserver, BsShieldCheck} from "react-icons/bs";
import CountUp from 'react-countup';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {clientsData} from "@/pages/demos/agency/Creative/data";
import type {SwiperOptions} from "swiper/types";

const Hero = () => {

    const swiperOptions: SwiperOptions = {
        modules: [Autoplay],
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        breakpoints: {
            576: {slidesPerView: 3},
            768: {slidesPerView: 2},
            992: {slidesPerView: 3},
            1200: {slidesPerView: 4}
        },
        wrapperClass: "align-items-center"
    }

    return (
        <section className="pt-xl-8 pb-0">
            <Container className="pt-2 pt-sm-5">

                <Row className="g-4 g-xxl-5">

                    <Col xl={6}>
                        <h1 className="mb-0 lh-base">Transforming ideas into&nbsp;
                            <span className="position-relative">digital&nbsp;

                                <span
                                    className="position-absolute top-50 start-50 translate-middle z-index-n1 ms-n2 d-none d-sm-block">
							<svg width="182" height="53" viewBox="0 0 182 53" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
								<path className="fill-primary"
                                      d="M3.39646 26.6791C5.18665 34.7553 18.564 38.9851 25.9087 41.4254C46.0791 47.4215 67.3652 48.7695 88.3693 49.6062C104.15 50.0478 119.955 49.7573 135.662 48.1885C149.211 46.7243 164.06 45.5158 174.924 36.9051C179.694 33.0239 179.89 27.2834 175.537 22.9954C164.011 11.8166 134.166 7.57514 117.871 4.98378C99.9319 2.36919 81.7603 3.171 63.7112 4.27494C75.4946 4.49573 87.278 5.19295 98.9755 6.57578C103.978 7.27301 109.202 8.35371 113.297 11.3053C109.484 10.457 105.535 10.4338 101.649 10.1084C74.3665 7.19166 45.6622 4.62355 19.2875 13.5713C13.5245 15.8256 2.88147 19.5442 3.39646 26.6791ZM0 25.7727C1.02997 10.1897 38.4891 5.03027 51.6213 4.43763C49.4878 4.29818 47.3543 4.07739 45.233 3.78688C48.7766 2.79915 52.3938 2.04382 56.06 1.60224C63.466 0.939879 70.9088 0.753952 78.327 0.323997C91.0913 -0.349987 103.88 0.0102456 116.571 1.56738C132.45 4.10063 191.085 11.3983 180.797 34.918C178.664 38.8573 174.642 41.4603 170.645 43.5403C160.86 48.6068 149.591 49.8618 138.691 51.1285C122.42 52.7902 106.063 53.3131 89.7058 52.825C65.575 51.907 40.8311 50.501 18.0981 42.1459C10.8025 39.1943 0.122616 34.3834 0 25.7727Z"/>
							</svg>
						</span>
					</span>
                            realities
                        </h1>

                        <p className="mb-0 mt-4 mt-xl-5">Your ideas are the driving force behind your business, and our
                            digital agency is here to turn those ideas into tangible digital realities.</p>

                        <div className="d-flex gap-1 gap-sm-3 flex-wrap mt-4 mt-xl-5">
                            <Button variant="dark" type="button">Get started</Button>
                            <Button variant="outline-dark" type="button">Start a 14 days free trial</Button>
                        </div>

                        <ul className="list-inline d-flex flex-wrap gap-2 gap-sm-4 mb-0 mt-4 mt-xl-5">
                            <li className="list-inline-item heading-color icons-center"><BsStopwatch className="me-1"/>24/7
                                Supports
                            </li>
                            <li className="list-inline-item heading-color icons-center"><BsFire className="me-1"/>Free
                                updates
                            </li>
                            <li className="list-inline-item heading-color icons-center"><BsLifePreserver className="me-1"/>Access
                                premium doc
                            </li>
                        </ul>
                    </Col>


                    <Col xl={6} className="text-center">
                        <img src={heroFinance} alt="hero-img"/>
                    </Col>

                </Row>


                <hr className="border-primary opacity-2 mt-sm-7 my-5"/>


                <Row>

                    <Col md={6} xl={7} className="mb-5 mb-md-0">
                        <p className="mb-0"><BsShieldCheck/> | We believe in going above and
                            beyond to exceed. We reached <b className="text-primary fs-6">19k</b></p>

                        <Swiper className="mt-2 mt-md-4" {...swiperOptions}>
                            {
                                clientsData.map((client, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img src={client.image} className="px-3 ps-0" alt="client-img"/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Col>


                    <Col md={6} lg={5} xl={3} className="ms-auto text-md-end">

                        <p className="mb-0 me-2">Trusted by Customers <span className="badge bg-dark">Active</span></p>


                        <div className="d-flex justify-content-md-end mt-2 mt-md-4">

                            <div>
                                <div className="d-flex justify-content-md-end">
                                    <h4 className="purecounter mb-0">
                                        <CountUp start={0} end={15} delay={0.3} duration={3}/>
                                    </h4>
                                    <span className="h4 mb-0">k+</span>
                                </div>
                                <p className="mb-0">Active users</p>
                            </div>

                            <div className="vr mx-3 mx-sm-4"></div>


                            <div>
                                <div className="d-flex justify-content-md-end">
                                    <h4 className="purecounter mb-0">
                                        <CountUp start={0} end={56} delay={0.3} duration={3}/>
                                    </h4>
                                    <span className="h4 mb-0">+</span>
                                </div>
                                <p className="mb-0">Completed projects</p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Hero