import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/demos/agency/Design/components/Hero"
import About from "@/pages/demos/agency/Design/components/About"
import Services from "@/pages/demos/agency/Design/components/Services"
import Showcase from "@/pages/demos/agency/Design/components/Showcase"
import Testimonials from "@/pages/demos/agency/Design/components/Testimonials"
import Awards from "@/pages/demos/agency/Design/components/Awards"
import Blogs from "@/pages/demos/agency/Design/components/Blogs"
import Footer4 from '@/components/footer/Footer4'
import PageTitle from '@/components/PageTitle'

const DesignAgency = () => {
  return (
    <>
      <PageTitle title='Design Agency' />

      <TopNavigationBar
        menuProps={{ showContactUs: true, ulClassName: 'ms-xl-5' }}
        navClassName='px-lg-5'
        darkButton={{ text: "Let's Connect" }}
        containerFluid
        data-bs-theme="dark"
      />

      <main>
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Testimonials />
        <Awards />
        <Blogs />
      </main>

      <Footer4 />
    </>
  )
}

export default DesignAgency