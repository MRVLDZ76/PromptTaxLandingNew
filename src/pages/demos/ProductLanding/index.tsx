import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/demos/ProductLanding/components/Hero"
import TechnicalDetails from "@/pages/demos/ProductLanding/components/TechnicalDetails"
import Features1 from "@/pages/demos/ProductLanding/components/Features1"
import ProductImage from "@/pages/demos/ProductLanding/components/ProductImage"
import Features2 from "@/pages/demos/ProductLanding/components/Features2"
import ProductsList from "@/pages/demos/ProductLanding/components/ProductsList"
import ProductVideo from "@/pages/demos/ProductLanding/components/ProductVideo"
import Testimonials from "@/pages/demos/ProductLanding/components/Testimonials"
import Footer6 from '@/components/footer/Footer6'
import PageTitle from '@/components/PageTitle'


const ProductLanding = () => {
  return (
    <>
      <PageTitle title='Product Landing' />

      <TopNavigationBar menuProps={{ ulClassName: 'ms-auto', showContactUs: true, showProductLinks: true, }}
        darkButton={{ text: 'Login!', size: 'sm' }} />
      <main>
        <Hero />
        <TechnicalDetails />
        <Features1 />
        <ProductImage />
        <Features2 />
        <ProductsList />
        <ProductVideo />
        <Testimonials />
      </main>
      <Footer6 />
    </>
  )
}

export default ProductLanding