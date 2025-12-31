import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/demos/agency/Digital/components/Hero"
import About from "@/pages/demos/agency/Digital/components/About"
import Services from "@/pages/demos/agency/Digital/components/Services"
import DigitalJourney from "@/pages/demos/agency/Digital/components/DigitalJourney"
import Steps from "@/pages/demos/agency/Digital/components/Steps"
import TourVideo from "@/pages/demos/agency/Digital/components/TourVideo"
import Projects from "@/pages/demos/agency/Digital/components/Projects"
import Statistics from "@/pages/demos/agency/Digital/components/Statistics"
import Testimonials from "@/pages/demos/agency/Digital/components/Testimonials"
import CTA from "@/pages/demos/agency/Digital/components/CTA"
import Footer3 from '@/components/footer/Footer3'
import Blogs from "@/pages/demos/agency/Digital/components/Blogs"
import PageTitle from '@/components/PageTitle'

const DigitalAgency = () => {
  return (
    <>
      <PageTitle title='Digital Agency' />

      <TopNavigationBar
        menuProps={{ showContactUs: true, ulClassName: 'mx-auto' }}
        navClassName='px-lg-5'
        darkButton={{ text: 'Free consultation' }}
        showFloatingSearch
        containerFluid
        data-bs-theme="dark"
      />

      <main>
        <Hero />
        <About />
        <Services />
        <DigitalJourney />
        <Steps />
        <TourVideo />
        <Projects />
        <Statistics />
        <Testimonials />
        <CTA />
        <Blogs />
      </main>

      <Footer3 />

    </>
  )
}

export default DigitalAgency