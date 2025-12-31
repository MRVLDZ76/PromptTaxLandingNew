import PageBreadcrumb from '@/components/PageBreadcrumb'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import LightBoxSection from './components/LightBoxSection'
import RelatedWorksSwiper from '../components/RelatedWorksSwiper'
import WebsiteResult from './components/WebsiteResult'
import Testimonial from './components/Testimonial'
import WebsiteOverview from './components/WebsiteOverview'
import Footer1 from '@/components/footer/Footer1'
import { Col, Container, Row } from 'react-bootstrap'
import PageTitle from '@/components/PageTitle'

const CaseStudyV1 = () => {
  return (
    <>
      <PageTitle title='Case Study v.1' />

      <TopNavigationBar menuProps={{ showContactUs: true, showProductLinks: true, ulClassName: 'mx-auto' }} showSignUp showBuyNow />

      <main>
        <section className="pt-xl-9">
          <Container className="pt-4 pt-xl-0">
            <Row>
              <Col md={9} className="mx-auto text-center">
                <div className="d-flex justify-content-center position-relative mb-4">

                  <PageBreadcrumb breadcrumbClassName='pb-0 mb-0' items={['Home', 'Portfolio Showcase', 'Portfolio case studies v1']} />

                </div>
                <h1 className="mb-4">Transforming Ideas into Reality</h1>
                <p>In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had lively living.</p>
              </Col>

              <WebsiteOverview />

              <LightBoxSection />

              <WebsiteResult />

              <Testimonial />

            </Row>
          </Container>
        </section>

        <RelatedWorksSwiper />

      </main>

      <Footer1 />

    </>
  )
}

export default CaseStudyV1