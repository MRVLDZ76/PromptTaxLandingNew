import PageTitle from '@/components/PageTitle'
import Hero from "./components/Hero"
import RatingAndReview from "./components/RatingAndReview"
import SimilarProducts from "./components/SimilarProducts"
import Specification from "./components/Specification"

const ShopSingle = () => {
  return (
    <>
      <PageTitle title='Shop Single' />

      <Hero />

      <Specification />

      <RatingAndReview />

      <SimilarProducts />
    </>
  )
}

export default ShopSingle