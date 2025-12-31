import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/other-pages/FAQs/components/Hero"
import FAQs from "@/pages/other-pages/FAQs/components/FAQs"
import ActionBox from "@/pages/other-pages/FAQs/components/ActionBox"
import Footer1 from '@/components/footer/Footer1'
import PageTitle from '@/components/PageTitle'

const FAQPage = () => {
  return (
    <>
      <PageTitle title='FAQs' />

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
        <FAQs />
        <ActionBox />
      </main>

      <Footer1 />
    </>
  )
}

export default FAQPage