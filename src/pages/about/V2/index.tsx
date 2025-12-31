import Footer2 from '@/components/footer/Footer2'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import FAQs from './components/FAQs'
import PageTitle from '@/components/PageTitle'

const AboutV2 = () => {
  return (
    <>
      <PageTitle title='About v.2' />

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

        <About />

        <Testimonials />

        <Location />

        <FAQs />
      </main>

      <Footer2 data-bs-theme="dark" theme='dark'/>
    </>
  )
}

export default AboutV2