import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {Container} from "react-bootstrap";
import {blogs} from "@/pages/demos/agency/Digital/data";
import BlogCard from "@/pages/demos/agency/Digital/components/BlogCard";
import type {SwiperOptions} from "swiper/types";

const Blogs = () => {
    const swiperOptions: SwiperOptions = {
        modules: [Autoplay, Pagination],
        autoplay: {
            delay: 2000
        },
        loop: false,
        spaceBetween: 30,
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
        <section className="pt-0">
            <Container>

                <div className="inner-container-small text-center mb-4 mb-sm-5">
                    <h2 className="mb-0">Explore our latest blogs</h2>
                </div>

                <Swiper {...swiperOptions}>

                    {
                        blogs.map((blog, idx) => (
                            <SwiperSlide key={idx}>
                                <BlogCard blog={blog}/>
                            </SwiperSlide>

                        ))
                    }

                    <div className="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
                </Swiper>
            </Container>
        </section>
    )
}

export default Blogs