import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import Content from './components/Content'
import Stories from './components/Stories'
import PageTitle from '@/components/PageTitle'

const CustomerStorySingle = () => {
  return (
    <>
      <PageTitle title='Customer Story Single' />

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

        <Content />

        <Stories />
      </main>

      <Footer1 />

    </>
  )
}

export default CustomerStorySingle