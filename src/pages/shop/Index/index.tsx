import PageTitle from '@/components/PageTitle'
import BrandCollection from './components/BrandCollection'
import FeaturedCategory from './components/FeaturedCategory'
import Hero from './components/Hero'
import LatestCollections from './components/LatestCollections'
import ProductBox from './components/ProductBox'
import ShopFeatures from './components/ShopFeatures'
import TrendingProducts from './components/TrendingProducts'

const ShopIndex = () => {
  return (
    <>
      <PageTitle title='Shop Index' />

      <Hero />

      <FeaturedCategory />

      <TrendingProducts />

      <ShopFeatures />

      <LatestCollections />

      <ProductBox />

      <BrandCollection />
    </>
  )
}

export default ShopIndex