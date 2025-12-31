import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/demos/MobileApp/components/Hero"
import About from "@/pages/demos/MobileApp/components/About"
import Steps from "@/pages/demos/MobileApp/components/Steps"
import Features from "@/pages/demos/MobileApp/components/Features"
import Pricing from "@/pages/demos/MobileApp/components/Pricing"
import Testimonials from "@/pages/demos/MobileApp/components/Testimonials"
import CTA from "@/pages/demos/MobileApp/components/CTA"
import Footer7 from '@/components/footer/Footer7'
import PageTitle from '@/components/PageTitle'

const MobileApp = () => {
  return (
    <>
      <PageTitle title='Mobile App' />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showProductLinks: true,
          ulClassName: 'mx-auto'
        }}
        darkButton={{ text: 'Get Application!', size: 'sm' }}
      />
      <main>
        <Hero />
        <About />
        <Steps />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer7 />
    </>
  )
}

export default MobileApp