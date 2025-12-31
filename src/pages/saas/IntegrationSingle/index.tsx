import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import IntegrationDetail from './components/IntegrationDetail'
import PageTitle from '@/components/PageTitle'

const IntegrationSingle = () => {
  return (
    <>
      <PageTitle title='SaaS Integration Single' />

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
        <IntegrationDetail />
      </main>

      <Footer1 />
    </>
  )
}

export default IntegrationSingle