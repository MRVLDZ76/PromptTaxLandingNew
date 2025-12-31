import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import Stories from './components/Stories'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import PageTitle from '@/components/PageTitle'

const CustomerStories = () => {
  return (
    <>
      <PageTitle title='Customer Stories' />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showProductLinks: true,
          ulClassName: 'mx-auto'
        }}
        showBuyNow
      />
      <main>
        <Hero />

        <Stories />

        <Testimonial />

        <CTA />
      </main>

      <Footer1 />

    </>
  )
}

export default CustomerStories