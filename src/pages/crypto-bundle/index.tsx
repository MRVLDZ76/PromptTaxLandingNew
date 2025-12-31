import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import TechnicalDetails from './components/TechnicalDetails'
import CPAReviews from './components/CPAReviews'
import CTA from './components/CTA'
import FAQs from './components/FAQs'
import SEO from '@/components/SEO'

const CryptoBundlePage = () => {
  return (
    <>
      <SEO 
        title="Crypto Tax Form 8949 Generator | IRS-Compliant | Prompt Tax"
        description="Generate IRS-compliant Form 8949 for unlimited crypto transactions. Automatic Schedule D integration, wash sale detection, optional CPA review. Free up to 25 transactions."
        keywords="crypto tax, form 8949, schedule d, cryptocurrency taxes, bitcoin taxes, crypto tax software, IRS form 8949, wash sale, crypto CPA"
        canonicalUrl="/crypto-bundle"
        ogTitle="Crypto Tax Form 8949 Generator | Prompt Tax"
        ogDescription="IRS-compliant Form 8949 generation for unlimited crypto transactions. Automatic calculations, wash sale detection, CPA review available."
      />

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
        <Features />
        <HowItWorks />
        <Pricing />
        <TechnicalDetails />
        <CPAReviews />
        <CTA />
        <FAQs />
      </main>

      <Footer1 />
    </>
  )
}

export default CryptoBundlePage
