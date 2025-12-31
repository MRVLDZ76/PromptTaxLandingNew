import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {clients} from "@/pages/saas/V1/data";
import type {SwiperOptions} from "swiper/types";

const Clients = () => {

    const swiperOptions: SwiperOptions = {
            modules: [Autoplay],
            autoplay: {delay: 2000},
            loop: true,
            slidesPerView: 2,
            spaceBetween: 50,
            breakpoints: {
                576: {slidesPerView: 3},
                768: {slidesPerView: 4},
                992: {slidesPerView: 5},
                1200: {slidesPerView: 6}
            },
            wrapperClass: "align-items-center"
    }

    return (
        <Swiper {...swiperOptions}>
            {
                clients.map((client, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={client.image} className="px-xl-3" alt="client-img"/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default Clients