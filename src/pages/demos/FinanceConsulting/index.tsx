import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/demos/FinanceConsulting/components/Hero"
import Rating from "@/pages/demos/FinanceConsulting/components/Rating"
import Services from "@/pages/demos/FinanceConsulting/components/Services"
import About from "@/pages/demos/FinanceConsulting/components/About"
import WorkFlow from "@/pages/demos/FinanceConsulting/components/WorkFlow"
import Clients from "@/pages/demos/FinanceConsulting/components/Clients"
import NewsLetter from "@/pages/demos/FinanceConsulting/components/NewsLetter"
import ContactForm from "@/pages/demos/FinanceConsulting/components/ContactForm"
import Footer1 from '@/components/footer/Footer1'
import PageTitle from '@/components/PageTitle'

const FinanceConsulting = () => {
  return (
    <>
      <PageTitle title='Finance Consulting' />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showResourceMenu: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        showBuyNow
      />
      <main>
        <Hero />
        <Rating />
        <Services />
        <About />
        <WorkFlow />
        <Clients />
        <NewsLetter />
        <ContactForm />
      </main>

      <Footer1 />
    </>
  )
}

export default FinanceConsulting