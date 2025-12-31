import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import IntegrationGrid from './components/IntegrationGrid'
import CTA from './components/CTA'
import PageTitle from '@/components/PageTitle'

const FeatureIntegrations = () => {
  return (
    <>
      <PageTitle title='SaaS Integrations' />

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

        <IntegrationGrid />

        <CTA />
      </main>

      <Footer1 />
    </>
  )
}

export default FeatureIntegrations