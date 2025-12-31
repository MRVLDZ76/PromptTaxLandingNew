import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "./components/Hero"
import Tools from "./components/Tools" 
import Features2 from "./components/Features2" 
import Pricing from "@/pages/saas/V1/components/Pricing"

import Blogs from "@/pages/saas/V1/components/Blogs"
import Footer2 from '@/components/footer/Footer2'
import SEO from '@/components/SEO'

const TaxPreparation1040 = () => {
  return (
    <>
      <SEO 
        title="1040 Tax Preparation | AI-Powered Personal & Business Tax Filing | PromptTax"
        description="File Form 1040 with AI automation. Chat in plain English, upload W-2s, 1099s, K-1s, crypto statements. AI completes your return with 99% accuracy. CPA review & IRS e-filing included. Personal, freelance, small business, crypto investors welcome."
        keywords="1040 tax preparation, personal tax filing, AI tax software, Form 1040 online, freelance tax return, crypto tax filing, small business taxes, W-2 automation, 1099 processing, IRS e-file, CPA tax review, affordable tax preparation"
        canonicalUrl="/tax-prep-1040"
        ogTitle="1040 Tax Filing Made Simple | AI + CPA Review | PromptTax"
        ogDescription="Stop working for tax software. AI completes your 1040 - you just upload documents and chat. Licensed CPA reviews & e-files. 72% cost savings vs traditional CPAs."
      />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showProductLinks: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        showLogin
        data-bs-theme='dark'
      />

      <main>
        <Hero />
        <Tools /> 
        <Features2 />    
        <Pricing />
        <Blogs />
      </main>

      <Footer2 />
    </>
  )
}

export default TaxPreparation1040
