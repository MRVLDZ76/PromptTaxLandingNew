import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import CareerDetail from './components/CareerDetail'
import CTA from './components/CTA'
import PageTitle from '@/components/PageTitle'

const CareerSingle = () => {
  return (
    <>
      <PageTitle title='Career Single' />

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
        <CareerDetail />

        <CTA />
      </main>

      <Footer1 />

    </>
  )
}

export default CareerSingle