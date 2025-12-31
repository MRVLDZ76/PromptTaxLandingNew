import placeholderImg from '@/assets/images/mokeup/app-placeholder.jpg'
import placeholderImg3 from '@/assets/images/mokeup/app-placeholder3.jpg'
import placeholderImg4 from '@/assets/images/mokeup/app-placeholder4.jpg'
import androidImg from '@/assets/images/elements/android.svg'
import microSoftImg from '@/assets/images/elements/microsoft.svg'
import appleImg from '@/assets/images/elements/apple.svg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Card, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Steps = () => {
  return (
    <section className="pb-0">
      <Container>

        <div className="inner-container-small text-center mb-4 mb-sm-5">
          <h2 className="mb-4">Get plant diagnoses in 3 easy steps</h2>
          <p className="mb-0">Simply take a picture of your plant and get an instant identification. Our app
            uses advanced technology to quickly and accurately diagnose any plant problem</p>
        </div>


        <Swiper modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000 }}
          spaceBetween={30}
          pagination={{
            "el": ".swiper-pagination"
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
          }}>

          <SwiperSlide className="h-100">
            <Card className="bg-light overflow-hidden p-4 p-sm-5 h-100">
              <Card.Body className="p-0 pb-5">
                <div className="icon-lg bg-dark rounded-circle fw-bold text-white mb-3">01</div>
                <h5>Download app</h5>
                <p className="heading-color">Download the Mizzle app for Windows, Mac, or Android
                  devices.</p>
                <div className='icons-center gap-3'>
                  <Link to=""><img src={androidImg} className="h-30px"
                    alt="icon-img" /></Link>
                  <Link to=""><img src={microSoftImg} className="h-30px"
                    alt="icon-img" /></Link>
                  <Link to=""><img src={appleImg} className="h-30px"
                    alt="icon-img" /></Link>
                </div>
              </Card.Body>

              <Card.Footer className="bg-transparent p-0">
                <div className="iphone-x iphone-x-small rotate-335 m-auto mb-n9 me-n5 mt-4"
                  style={{
                    background: `url(${placeholderImg3})`,
                    backgroundSize: '100%',
                    width: '280px',
                    height: '430px'
                  }}>
                    <i/>
                  <b style={{ left: '5%' }}></b>
                </div>
              </Card.Footer>
            </Card>
          </SwiperSlide>


          <SwiperSlide className="h-100">
            <Card className="bg-light overflow-hidden p-4 p-sm-5 h-100">
              <Card.Body className="p-0 pb-5">
                <div className="icon-lg bg-dark rounded-circle fw-bold text-white mb-3">02</div>
                <h5>Create account</h5>
                <p className="heading-color">Sign up for a free Mizzle account. One account for all
                  devices.</p>

                <Link to="" className="btn btn-sm btn-white mb-0">14 days free trial</Link>
              </Card.Body>

              <Card.Footer className="bg-transparent p-0">
                <div className="iphone-x iphone-x-small m-auto mb-n9 mt-4"
                  style={{
                    background: `url(${placeholderImg4})`,
                    backgroundSize: '100%',
                    width: '280px',
                    height: '430px'
                  }}>
                    <i/>
                  <b style={{ left: '5%' }}></b>
                </div>
              </Card.Footer>
            </Card>
          </SwiperSlide>


          <SwiperSlide className="h-100">
            <Card className="bg-light overflow-hidden p-4 p-sm-5 h-100">
              <Card.Body className="p-0 pb-5">
                <div className="icon-lg bg-dark rounded-circle fw-bold text-white mb-3">03</div>
                <h5>You're ready to go</h5>
                <p className="heading-color mb-2">Enjoy the amazing Mizzle experience and start
                  exploring the app today.</p>

                <Link to="">Check our FAQs for help</Link>
              </Card.Body>

              <Card.Footer className="bg-transparent p-0 mb-n9 ms-n5 mt-4">
                <div className="iphone-x iphone-x-small rotate-33 m-auto"
                  style={{
                    background: `url(${placeholderImg})`,
                    backgroundSize: '100%',
                    width: '280px',
                    height: '430px'
                  }}>
                    <i/>
                  <b style={{ left: '5%' }}></b>
                </div>
              </Card.Footer>
            </Card>
          </SwiperSlide>

          <div className="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
        </Swiper>
      </Container>
    </section>
  )
}

export default Steps