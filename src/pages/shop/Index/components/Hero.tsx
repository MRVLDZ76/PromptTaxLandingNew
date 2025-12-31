import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import { Autoplay, Pagination } from 'swiper/modules'

import { defaultSwiperOptions } from '@/states/default-config'

import shopBg1 from '@/assets/images/shop/bg/01.jpg'
import shopBg2 from '@/assets/images/shop/bg/02.jpg'
import { Card, Col, Container, Row } from "react-bootstrap";

const Hero = () => {

  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    ...{
      modules: [Pagination, Autoplay],
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination-sale',
        clickable: true,
      },
    }
  }

  return (
    <section className="pt-5 pt-xl-7">
      <Swiper
        {...swiperOptions}
        className="overflow-hidden pt-5"
      >
        <SwiperSlide>
          <Card className="overflow-hidden h-500px h-xl-750px rounded-0" style={{
            backgroundImage: `url(${shopBg1})`,
            backgroundPosition: 'center left',
            backgroundSize: 'cover'
          }}>
            <div className="bg-overlay bg-dark opacity-5 d-lg-none" />
            <div className="card-img-overlay d-flex align-items-center">
              <Container>
                <Row>
                  <Col sm={11} lg={8} xl={5}>
                    <span className="d-inline-block text-bg-dark small rounded-pill px-3 py-2 mb-4">New release mizz-VR</span>
                    <h1 className="text-white display-6 mb-4">Dive into Virtual Reality
                      Adventure</h1>
                    <p className="text-white mb-4"> Whether you're a gaming enthusiast or simply
                      seeking an extraordinary escape from reality, our Virtual VR product is your
                      portal to endless excitement. </p>
                    <Link to=""
                      className="btn btn-lg btn-outline-white icon-link icon-link-hover mb-0">Show
                      details<BsArrowRight className='bi'/> </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="overflow-hidden h-500px h-xl-750px rounded-0" style={{
            backgroundImage: `url(${shopBg2})`,
            backgroundPosition: 'center left',
            backgroundSize: 'cover'
          }}>
            <div className="bg-overlay bg-dark opacity-5 d-lg-none" />
            <div className="card-img-overlay d-flex align-items-center">
              <Container>
                <Row>
                  <Col md={11} lg={8} xl={5} className="ms-auto">
                    <p className="fs-4 fw-normal text-white mb-3">Festival Collection <span
                      className="text-bg-dark rounded px-3">2023</span></p>
                    <h1 className="text-white display-4 mb-3">FLAT 50% OFF</h1>
                    <p className="text-white mb-4"> Step into a world of quality and craftsmanship –
                      it's time to put your best foot forward.</p>
                    <Link className="btn btn-lg btn-dark icon-link icon-link-hover mb-0" to="">Show
                      now<BsArrowRight className='bi'/> </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Card>
        </SwiperSlide>

        <div
          className="swiper-pagination swiper-pagination-sale swiper-pagination-line position-absolute bottom-0 mb-3" />
      </Swiper>
    </section>
  )
}

export default Hero