import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import type {SwiperOptions} from "swiper/types";

import {Container} from "react-bootstrap";

import PricingCard from "@/pages/saas/V1/components/PricingCard";
import {pricingData} from "@/pages/saas/V1/data";

const Pricing = () => {

    const swiperOptions: SwiperOptions = {
        modules: [Pagination],
        loop: false,
        spaceBetween: 40,
        pagination: {
            "el": ".swiper-pagination"
        },
        breakpoints: {
            576: {slidesPerView: 1},
            768: {slidesPerView: 2},
            992: {slidesPerView: 3}
        }
    }

    return (
        <section className="pt-7 pb-8 bg-light">
            <Container>
                <div className="inner-container-small text-center mb-4 mb-sm-5">
                    <h2 className="mb-4">Choose Your CPA Review Level</h2>
                    <p className="mb-0">Get peace of mind with expert CPA review before filing. Whether you have a straightforward return or complex tax situation with crypto, K-1s, and multi-state income, our licensed CPAs provide thorough review and professional e-filing options tailored to your needs.</p>
                </div>

                <Swiper {...swiperOptions}>

                    {
                        pricingData.map((plan, idx) => (
                            <SwiperSlide key={idx}>
                                <PricingCard plan={plan}/>
                            </SwiperSlide>
                        ))
                    }

                    <div className="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
                </Swiper>
            </Container>
        </section>
    )
}

export default Pricing