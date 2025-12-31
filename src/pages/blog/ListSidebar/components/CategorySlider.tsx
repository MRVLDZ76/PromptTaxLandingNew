import type { BlogCategoryType } from "@/pages/blog/ListSidebar/types"
import { defaultSwiperOptions } from "@/states/default-config"
import { Link } from "react-router-dom"
import { Autoplay, FreeMode, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type { SwiperOptions } from "swiper/types"
import { blogCategories } from "../data"
import { Card } from "react-bootstrap"

const CategoryCard = ({ blog }: { blog: BlogCategoryType }) => {
  return (
    <Card as={Link} to="" className="card-img-scale overflow-hidden">
      <img src={blog.image} className="img-scale" alt="category-img" />
      <div className="card-img-overlay">
        <div className="badge text-bg-dark">{blog.category}</div>
      </div>
    </Card>
  )
}
const CategorySlider = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay, Pagination],
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      576: { slidesPerView: 3 },
      992: { slidesPerView: 5 },
    }
  }
  return (
    <Swiper  {...swiperOptions}>
      {blogCategories.map((blog, idx) => (
        <SwiperSlide key={idx}>
          <CategoryCard blog={blog} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination swiper-pagination-primary position-relative mt-4" />
    </Swiper>
  )
}

export default CategorySlider