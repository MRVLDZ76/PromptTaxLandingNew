import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/demos/agency/SEO/components/Hero"
import Services from "@/pages/demos/agency/SEO/components/Services"
import About from "@/pages/demos/agency/SEO/components/About"
import Testimonials from "@/pages/demos/agency/SEO/components/Testimonials"
import CaseStudies from "@/pages/demos/agency/SEO/components/CaseStudies"
import Approaches from "@/pages/demos/agency/SEO/components/Approaches"
import Team from "@/pages/demos/agency/SEO/components/Team"
import CTA from "@/pages/demos/agency/SEO/components/CTA"
import Footer5 from '@/components/footer/Footer5'
import PageTitle from '@/components/PageTitle'

const SEOAgency = () => {
  return (
    <>
      <PageTitle title='SEO Agency' />

      <TopNavigationBar showSignUp showBuyNow
        menuProps={{ ulClassName: 'mx-auto', showResourceMenu: true, showContactUs: true, }} />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CaseStudies />
        <Approaches />
        <Team />
        <CTA />
      </main>
      <Footer5 />
    </>
  )
}

export default SEOAgency