import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/help/Detail/components/Hero"
import HelpDetails from "@/pages/help/Detail/components/HelpDetails"
import SupportLinks from "@/pages/help/Detail/components/SupportLinks"
import Footer1 from '@/components/footer/Footer1'
import PageTitle from '@/components/PageTitle'

const HelpDetail = () => {
  return (
    <>
      <PageTitle title='Help Center Detail' />

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
        <HelpDetails />
        <SupportLinks />
      </main>

      <Footer1 />
    </>
  )
}

export default HelpDetail