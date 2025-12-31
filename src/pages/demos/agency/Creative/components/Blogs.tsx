import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {blogs} from "@/pages/demos/agency/Creative/data";
import BlogCard from "@/pages/demos/agency/Creative/components/BlogCard";
import {BsArrowRight, BsArrowLeft} from "react-icons/bs";
import type {SwiperOptions} from "swiper/types";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Blogs = () => {

    const swiperOptions: SwiperOptions = {
        modules: [Autoplay, Navigation],
        autoplay: {delay: 2000},
        spaceBetween: 30,
        loop: false,
        breakpoints: {
            576: {slidesPerView: 1},
            768: {slidesPerView: 2},
            992: {slidesPerView: 3}
        },
        navigation: {
            "nextEl": ".swiper-button-next",
            "prevEl": ".swiper-button-prev"
        }
    }

    return (
        <section className="pb-0">
            <Container>

                <div className="inner-container text-center mb-4 mb-sm-6">
                    <h2 className="mb-0">Our news & articles</h2>
                </div>

                <Swiper {...swiperOptions}>
                    {
                        blogs.map((blog, idx) => (
                            <SwiperSlide key={idx}>
                                <BlogCard blog={blog}/>
                            </SwiperSlide>
                        ))
                    }

                    <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100">
                        <Link to="" className="btn btn-dark btn-icon btn-lg rounded-circle mb-0 swiper-button-prev flex-centered">
                            <BsArrowLeft size={23}/>
                        </Link>
                        <Link to="" className="btn btn-dark btn-icon btn-lg rounded-circle mb-0 swiper-button-next flex-centered">
                            <BsArrowRight size={23}/>
                        </Link>
                    </div>
                </Swiper>
            </Container>
        </section>
    )
}

export default Blogs