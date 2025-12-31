import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import MarketingVideo from './components/MarketingVideo'
import Benefits from './components/Benefits'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import PageTitle from '@/components/PageTitle'

const ServicesSingle = () => {
  return (
    <>
      <PageTitle title='Service Single' />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showProductLinks: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        showBuyNow
        data-bs-theme="dark"
      />
      <main>
        <Hero />

        <MarketingVideo />

        <Benefits />

        <Steps />

        <Pricing />

        <CTA />
      </main>

      <Footer1 />

    </>
  )
}

export default ServicesSingle