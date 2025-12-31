import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import FAQs from './components/FAQs'
import PageTitle from '@/components/PageTitle'

const ServicesV2 = () => {
  return (
    <>
      <PageTitle title='Services v.2' />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showProductLinks: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        showBuyNow
      />
      <main>
        <Hero />

        <Features />

        <CTA />

        <FAQs />
      </main>

      <Footer1 />
    </>
  )
}

export default ServicesV2