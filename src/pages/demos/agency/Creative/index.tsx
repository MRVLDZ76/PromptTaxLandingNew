import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from '@/pages/demos/agency/Creative/components/Hero'
import About from '@/pages/demos/agency/Creative/components/About'
import Services from "@/pages/demos/agency/Creative/components/Services"
import Projects from "@/pages/demos/agency/Creative/components/Projects"
import Testimonials from "@/pages/demos/agency/Creative/components/Testimonials"
import Features from "@/pages/demos/agency/Creative/components/Features"
import Blogs from "@/pages/demos/agency/Creative/components/Blogs"
import Footer2 from "@/components/footer/Footer2"
import PageTitle from '@/components/PageTitle'

const CreativeAgency = () => {
  return (
    <>
      <PageTitle title='Creative Agency' />

      <TopNavigationBar showSignUp showBuyNow
        menuProps={{ showContactUs: true, showResourceMenu: true, ulClassName: 'mx-auto' }} />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Features />
        <Blogs />
      </main>

      <Footer2 />
    </>
  )
}

export default CreativeAgency