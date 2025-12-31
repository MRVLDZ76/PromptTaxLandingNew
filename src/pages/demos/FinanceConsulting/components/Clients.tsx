import {BsArrowRight} from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";
import type {SwiperOptions} from "swiper/types";
import {Autoplay} from "swiper/modules";
import {investors} from "@/pages/demos/FinanceConsulting/data";
import { currency } from "@/states/constants";

const Clients = () => {

    const swiperOptions: SwiperOptions = {
        modules: [Autoplay],
        autoplay: {delay: 2000},
        loop: true,
        slidesPerView: 2,
        spaceBetween: 50,
        breakpoints: {
            576: {"slidesPerView": 4},
            992: {"slidesPerView": 4},
            1200: {"slidesPerView": 5}
        },
        wrapperClass: "align-items-center"
    }

    return (
        <section>
            <div className="inner-container mx-auto text-center">
                <span className="fs-1 fw-semibold text-primary">{currency}3,058,886</span>
                <h4 className="my-4 fw-semibold">Witness your business flourish and sparkle</h4>
                <p className="w-75 mx-auto mb-4">With our expert guidance and support, you can watch your business bloom
                    and
                    glow, achieving new heights of success and radiating prosperity.</p>
                <a className="btn btn-lg btn-dark icon-link icon-link-hover" href="">Calculate growth
                    <BsArrowRight className="bi"/> </a>

                <div className="position-relative my-6 w-75 mx-auto">
                    <hr/>
                    <p className="position-absolute heading-color fw-semibold top-50 start-50 translate-middle bg-body px-4">Our
                        Investors</p>
                </div>

                <Swiper {...swiperOptions}>
                    {
                        investors.map((investor, idx) => (
                            <SwiperSlide key={idx}>
                                <img src={investor.image} className="grayscale" alt="client-img"/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default Clients