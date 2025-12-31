import Footer1 from '@/components/footer/Footer1'
import PageTitle from '@/components/PageTitle'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import About from "@/pages/demos/ClassicDefault/components/About"
import Clients from "@/pages/demos/ClassicDefault/components/Clients"
import CTA from "@/pages/demos/ClassicDefault/components/CTA"
import Hero from "@/pages/demos/ClassicDefault/components/Hero"
import Pricing from "@/pages/demos/ClassicDefault/components/Pricing"
import Services from "@/pages/demos/ClassicDefault/components/Services"
import Blogs from "@/pages/demos/ClassicDefault/components/Blogs"

const ClassicDefault = () => {

  return (
    <>
      <PageTitle title='Classic Default' />

      <TopNavigationBar
        menuProps={{
          showMegaMenu: true,
          showContactUs: true,
          ulClassName: 'mx-auto'
        }}
        showBuyNow
        showSignUp
      />

      <main>

        <Hero />

        <Clients />

        <About />

        <Services />

        <Pricing />

        <Blogs />

        <CTA />

      </main>

      <Footer1 />
    </>
  )
}

export default ClassicDefault