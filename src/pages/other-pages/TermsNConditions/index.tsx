import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Details from './components/Details'
import CTA from './components/CTA'
import PageTitle from '@/components/PageTitle'

const TermsNConditions = () => {
  return (
    <>
      <PageTitle title='Terms & Conditions' />

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
        <Details />

        <CTA />
      </main>

      <Footer1 />
    </>
  )
}

export default TermsNConditions