import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Details from './components/Details'
import PageTitle from '@/components/PageTitle'

const CTA = () => {
  return (
    <section className="py-12 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
        <a href="/contact" className="inline-block bg-primary-600 text-white px-6 py-2 rounded">
          Contact us
        </a>
      </div>
    </section>
  )
}

const PrivacyPolicy = () => {
  return (
    <>
      <PageTitle title='Privacy Policy' />

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

export default PrivacyPolicy
