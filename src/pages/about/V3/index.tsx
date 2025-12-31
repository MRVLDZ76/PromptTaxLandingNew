import Footer8 from '@/components/footer/Footer8'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Team from './components/Team'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import PageTitle from '@/components/PageTitle'

const AboutV3 = () => {
  return (
    <>
      <PageTitle title='About v.3' />

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

        <Team />

        <Steps />

        <Testimonials />

        <CTA />
      </main>

      <Footer8 />
    </>
  )
}

export default AboutV3