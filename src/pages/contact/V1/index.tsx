import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import Map from './components/Map'
import PageTitle from '@/components/PageTitle'

const ContactV1 = () => {
  return (
    <>
      <PageTitle title='Contact v.1' />

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

        <Map />
      </main>

      <Footer1 />

    </>
  )
}

export default ContactV1