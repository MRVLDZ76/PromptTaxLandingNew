import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/other-pages/Pricing/components/Hero"
import Features from "@/pages/other-pages/Pricing/components/Features"
import CTA from "@/pages/other-pages/Pricing/components/CTA"
import FAQs from "@/pages/other-pages/Pricing/components/FAQs"
import Footer1 from '@/components/footer/Footer1'
import PageTitle from '@/components/PageTitle'

const Pricing = () => {
  return (
    <>
      <PageTitle title='Pricing' />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showProductLinks: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        showBuyNow
        data-bs-theme='dark'
      />

      <main className="price-wrap">
        <Hero />
        <Features />
        <CTA />
        <FAQs />
      </main>

      <Footer1 />
    </>
  )
}

export default Pricing