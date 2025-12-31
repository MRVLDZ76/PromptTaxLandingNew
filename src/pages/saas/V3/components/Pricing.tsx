import {useState} from "react";
import {Card, Col, Container, Row, Button} from "react-bootstrap";
import {BsPatchCheckFill, BsChevronDown, BsChevronUp, BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {pricingBundles} from "@/pages/saas/V3/data";
import {Swiper, SwiperSlide} from "swiper/react";
import type {SwiperOptions} from "swiper/types";
import { Navigation, Pagination } from 'swiper/modules';
import {useLaunchModal} from '@/hooks/useLaunchModal';
import LaunchCountdownModal from '@/components/LaunchCountdownModal';

const Pricing = () => {
    const {showModal, openModal, closeModal} = useLaunchModal();
    const [expandedFeatures, setExpandedFeatures] = useState<{[key: string]: boolean}>({});
    
    const toggleFeatures = (bundleId: string) => {
        setExpandedFeatures(prev => ({
            ...prev,
            [bundleId]: !prev[bundleId]
        }));
    };
    
    const swiperOptions: SwiperOptions = {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
        pagination: {
            clickable: true,
            el: '.swiper-pagination-custom',
        },
        loop: false,
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            768: {slidesPerView: 2},
            1200: {slidesPerView: 2}
        }
    };
    
    return (
        <section className="bg-dark position-relative price-wrap" data-bs-theme="dark">

            <figure className="position-absolute top-0 start-0 ms-n9">
                <svg className="opacity-2" width="424" height="405" viewBox="0 0 424 405" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="212" cy="202.5" rx="212" ry="202.5" fill="url(#paint0_linear_153_3831)"></ellipse>
                    <defs>
                        <linearGradient id="paint0_linear_153_3831" x1="212" y1="0" x2="212" y2="405"
                                        gradientUnits="userSpaceOnUse">
                            <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0"></stop>
                            <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0.5"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </figure>

            <Container className="position-relative">
                <Row className="g-4 g-lg-6 align-items-center">

                    <Col lg={5} xl={4}>
                        <span className="text-primary fw-bold text-uppercase">Pricing</span>
                        <h2 className="mb-4 mt-3">Budget-friendly pricing solutions</h2>
                        <p className="mb-0">Our pricing model is designed with crypto investors and traders in mind. Discover our
                            transparent rates and flexible tax bundles tailored to fit your transaction volume and filing needs.</p>
                    </Col>

                    <Col lg={7} xl={8}>
                        <div className="position-relative">
                            <Swiper {...swiperOptions} className="pricing-swiper pb-5">
                                {pricingBundles.map((bundle) => (
                                    <SwiperSlide key={bundle.id}>
                                        <Card className={`bg-light border ${bundle.recommended ? 'border-primary border-3' : 'border-secondary border-opacity-10'} overflow-hidden p-0 h-100 position-relative`}>
                                            {bundle.recommended && (
                                                <div className="position-absolute top-0 end-0 mt-3 me-3">
                                                    <span className="badge bg-primary">Most Popular</span>
                                                </div>
                                            )}
                                            
                                            <Card.Body className="p-4 p-sm-5">
                                                <h3 className="mb-3">{bundle.title}</h3>
                                                <p className="mb-2">{bundle.subtitle}</p>
                                                <p className="text-primary fw-semibold mb-4">{bundle.transactionRange}</p>

                                                <div className="mb-4">
                                                    <h2 className="mb-1">{bundle.price}</h2>
                                                    <p className="text-muted mb-0">{bundle.pricePerMonth}</p>
                                                </div>

                                                <a href="#" onClick={openModal} className="btn btn-lg btn-dark w-100 mb-4">{bundle.ctaText}</a>

                                                <h6 className="mb-3">What's included:</h6>
                                                <ul className="list-group list-group-borderless">
                                                    {bundle.features.slice(0, expandedFeatures[bundle.id] ? bundle.features.length : 4).map((feature, idx) => (
                                                        <li className="list-group-item mb-0 icons-center" key={idx}>
                                                            <BsPatchCheckFill className="text-primary me-2"/>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                                
                                                {bundle.features.length > 4 && (
                                                    <Button
                                                        variant="link"
                                                        className="p-0 text-primary mt-3"
                                                        onClick={() => toggleFeatures(bundle.id)}
                                                    >
                                                        {expandedFeatures[bundle.id] ? (
                                                            <>
                                                                Show less features <BsChevronUp className="ms-1" />
                                                            </>
                                                        ) : (
                                                            <>
                                                                View all features ({bundle.features.length - 4} more) <BsChevronDown className="ms-1" />
                                                            </>
                                                        )}
                                                    </Button>
                                                )}
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                            {/* Custom Navigation Arrows */}
                            <div className="swiper-button-prev-custom position-absolute top-50 start-0 translate-middle-y bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', cursor: 'pointer', zIndex: 10, marginLeft: '-20px'}}>
                                <BsChevronLeft size={20} />
                            </div>
                            <div className="swiper-button-next-custom position-absolute top-50 end-0 translate-middle-y bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', cursor: 'pointer', zIndex: 10, marginRight: '-20px'}}>
                                <BsChevronRight size={20} />
                            </div>
                            
                            {/* Custom Pagination */}
                            <div className="swiper-pagination-custom text-center mt-3"></div>
                        </div>
                    </Col>

                </Row>
            </Container>
            <LaunchCountdownModal show={showModal} onHide={closeModal} />
        </section>
    )
}

export default Pricing