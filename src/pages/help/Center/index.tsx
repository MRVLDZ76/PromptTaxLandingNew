import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/help/Center/components/Hero"
import Help from "@/pages/help/Center/components/Help"
import FAQs from "@/pages/help/Center/components/FAQs"
import SupportLinks from "@/pages/help/Center/components/SupportLinks"
import Footer1 from '@/components/footer/Footer1'
import PageTitle from '@/components/PageTitle'

const HelpCenter = () => {
  return (
    <>
      <PageTitle title='Help Center' />

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
        <Help />
        <FAQs />
        <SupportLinks />
      </main>

      <Footer1 />
    </>
  )
}

export default HelpCenter