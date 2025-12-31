import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import Tools from './components/Tools'
import Features from './components/Features'
import Features2 from './components/Features2'
import Features3 from './components/Features3'
import PageTitle from '@/components/PageTitle'

const SaaSFeatures = () => {
  return (
    <>
      <PageTitle title='SaaS Features' />

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

        <Tools />

        <Features />

        <Features2 />

        <Features3 />
      </main>

      <Footer1 />
    </>
  )
}

export default SaaSFeatures