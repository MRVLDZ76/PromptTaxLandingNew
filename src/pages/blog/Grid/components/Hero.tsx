import { defaultSwiperOptions } from "@/states/default-config"
import { Autoplay, EffectFade, FreeMode, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type { SwiperOptions } from "swiper/types"
import { getAllPosts } from "@/types/blog"
import BlogSlide from "./BlogSlide"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Hero = () => {
  // Get the latest 3 blog posts for the hero slider
  const featuredPosts = getAllPosts().slice(0, 3);
  
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay, EffectFade, Navigation, Pagination],
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  }
  return (
    <section className="pt-7">
      <Container className="pt-3 pt-xl-5">
        <Swiper className="rounded" {...swiperOptions}>
          {featuredPosts.map((post) => (
            <SwiperSlide key={post.slug}>
              <BlogSlide post={post} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination swiper-pagination-white mb-3" />
          <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100 px-1 px-sm-3">
            <Link to="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev"><BsArrowLeft  /></Link>
            <Link to="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next"><BsArrowRight /></Link>
          </div>
        </Swiper>
      </Container>
    </section>

  )
}

export default Hero