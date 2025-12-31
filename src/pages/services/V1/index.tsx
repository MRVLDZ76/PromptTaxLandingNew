import TopNavigationBar from '@/components/topbar/TopNavigationBar'

import Footer1 from '@/components/footer/Footer1'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Clients from './components/Clients'
import PageTitle from '@/components/PageTitle'

const ServicesV1 = () => {
  return (
    <>
      <PageTitle title='Services v.1' />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showProductLinks: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        data-bs-theme="dark"
      />

      <main>
        <Hero />

        <Services />

        <Features />

        <Clients />
      </main>

      <Footer1 />
    </>
  )
}

export default ServicesV1