import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/saas/V2/components/Hero"
import Features from "@/pages/saas/V2/components/Features"
import Steps from "@/pages/saas/V2/components/Steps" 
import Testimonials from "@/pages/demos/agency/SEO/components/Testimonials"
import Blogs from "@/pages/saas/V2/components/Blogs"
import CTA from "@/pages/saas/V2/components/CTA"
import Footer1 from '@/components/footer/Footer1'
import SEO from '@/components/SEO'

const SaaSv2 = () => {
  return (
    <>
      <SEO 
        title="PromptTax | AI-Powered Tax Preparation Software | K-1, 1040, Crypto Tax Filing"
        description="Professional tax preparation made simple with AI automation. File 1040, K-1 forms, crypto taxes with document intelligence and CPA review. 99% accuracy, 72% cost savings vs traditional CPAs. Upload docs, chat with AI, get IRS e-filing in 24-48 hours."
        keywords="AI tax software, automated tax preparation, tax filing software, CPA tax service, K-1 tax forms, 1040 filing, crypto tax calculator, partnership tax, small business taxes, freelance tax filing, IRS e-file, AI accounting, tax automation"
        canonicalUrl="/"
        ogTitle="PromptTax | AI Tax Software That Works For You"
        ogDescription="Revolutionary AI-powered tax filing. Upload documents, chat in plain English, get CPA-reviewed returns. Handles personal taxes, business returns, crypto, and K-1 forms automatically."
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
        <Steps /> 
        <Testimonials />
        <Blogs />
        <CTA />
      </main>

      <Footer1 />
    </>
  )
}

export default SaaSv2