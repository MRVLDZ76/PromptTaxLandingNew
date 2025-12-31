import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/saas/V3/components/Hero"
import Features from "@/pages/saas/V3/components/Features"
import Statistics from "@/pages/saas/V3/components/Statistics"
import FeaturesAndIntegrations from "@/pages/saas/V3/components/FeaturesAndIntegrations"
import Pricing from "@/pages/saas/V3/components/Pricing"
import Testimonials from "@/pages/saas/V3/components/Testimonials"
import CTA from "@/pages/saas/V3/components/CTA"
import CryptoBundleBanner from "@/pages/saas/V3/components/CryptoBundleBanner"
import Footer6 from '@/components/footer/Footer6'
import SEO from '@/components/SEO'

const SaaSv3 = () => {
  return (
    <>
      <SEO 
        title="Crypto Tax Software | Bitcoin, DeFi, NFT Tax Calculator & Form 8949 | PromptTax"
        description="Automate crypto taxes with AI. Sync 11+ exchanges (Coinbase, Binance, Kraken), DeFi protocols, NFT sales. Auto-calculate wash sales, cost basis, Form 8949. IRS-compliant crypto tax reports with CPA review. Handle Bitcoin, Ethereum, altcoins, staking, mining."
        keywords="crypto tax software, Bitcoin tax calculator, cryptocurrency tax, Form 8949, wash sale crypto, DeFi tax, NFT tax, crypto cost basis, Coinbase tax, Binance tax, IRS crypto reporting, capital gains crypto, crypto tax CPA, blockchain tax"
        canonicalUrl="/crypto-tax"
        ogTitle="Crypto Tax Calculator | Auto-Sync Exchanges + AI Processing | PromptTax"
        ogDescription="Sync Coinbase, Binance, 11+ exchanges. AI handles wash sales, cost basis, DeFi, NFTs. Get Form 8949 & Schedule D with CPA review. IRS compliant crypto tax filing."
      />

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
      <main>
        <Hero />
        <Features />
        <CryptoBundleBanner />
        <Statistics />
        <FeaturesAndIntegrations />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer6 />
    </>
  )
}

export default SaaSv3