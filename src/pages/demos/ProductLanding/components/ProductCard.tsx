import { ProductType } from "@/types/shop"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import { currency } from "@/states/constants"
import { getDiscountedPrice } from '@/helpers/products'

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Card className="bg-transparent text-center p-0">
      <img src={product.images[0]} className="px-5"
        alt="product-img" />
      <Card.Body className="p-0 mt-3">
        <Card.Title as={'h6'} className="mb-3">
          <Link to="">{product.name}</Link>
        </Card.Title>
        {
          product.sale ?
            <div className="d-flex align-items-center justify-content-center mb-3">
              <h6 className="fw-normal mb-0 me-1">{currency}{getDiscountedPrice(product.price, product.sale.discount, product.sale.type).toFixed()}</h6>
              <span className="text-decoration-line-through">{currency} {product.price}</span>
            </div> : <h6 className="fw-normal mb-3 me-1">{currency}{product.price}</h6>
        }

        <Link to={product.url ?? "/shop/grid"} className="btn btn-sm btn-primary mb-0">Login</Link>
      </Card.Body>
    </Card>
  )
}

export default ProductCard