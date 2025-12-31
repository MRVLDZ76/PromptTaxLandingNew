import PageTitle from '@/components/PageTitle'
import CartDetail from "./components/CartDetail"
import Faqs from "./components/Faqs"
import MainTitle from "./components/MainTitle"

const ShopCart = () => {
  return (
    <>
      <PageTitle title='Shop Cart' />

      <MainTitle />

      <CartDetail />

      <Faqs />
    </>
  )
}

export default ShopCart