import type {ProductType} from "@/types/shop";
import {Card} from "react-bootstrap";
import {currency} from "@/states/constants";
import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa6";
import {FaStarHalfAlt} from "react-icons/fa";
import {getDiscountedPrice} from "@/helpers/products";
import {BsCart} from "react-icons/bs";

type TrendingProductCardPropsType = {
    product: ProductType
}

const TrendingProductCard = ({product}: TrendingProductCardPropsType) => {

    const {name, price, tag, images, review, sale, url} = product

    return (
        <Card className="border bg-transparent overflow-hidden p-0 h-100">
            <div className="position-absolute top-0 start-0 p-3">
                {sale && <span
                    className="badge text-bg-danger">{sale.type === 'percent' ? `${sale.discount}%` : `Flat ${currency}${sale.discount}`} off</span>}
                {(!sale && tag) && <span className="badge text-bg-dark">{tag}</span>}
            </div>
            <Card.Header className="bg-light rounded m-2">
                <img src={images[0]} alt=''/>
            </Card.Header>
            <Card.Body className="pb-0">
                <Card.Title as={'h6'}><Link to={url ?? ''}
                                            className="stretched-link">{name}</Link></Card.Title>
                <ul className="list-inline">
                    {(Array.from(new Array(Math.floor(review?.stars ?? 0)))).map((_i, idx) => (
                        <li key={idx} className="list-inline-item me-1 small">
                            <FaStar size={16} className="text-warning"/>
                        </li>
                    ))}
                    {!Number.isInteger(review?.stars) &&
                        <li className="list-inline-item me-0 small">
                            <FaStarHalfAlt  className="text-warning"/>
                        </li>
                    }
                </ul>
            </Card.Body>
            <Card.Footer className="bg-transparent d-flex justify-content-between align-items-center pt-0">
                <div className="d-flex align-items-center gap-2 justify-content-center">
                    <p className="fw-bold text-success mb-0">{currency}{sale ? getDiscountedPrice(price, sale.discount, sale.type) : price.toFixed(2)}</p>
                    {sale && <small className="text-decoration-line-through">{currency}{price.toFixed(2)}</small>}
                </div>
                <Link to={url ?? ''} className="btn btn-dark mb-0 z-index-2"><BsCart className='mb-1'/></Link>
            </Card.Footer>
        </Card>
    )
}

export default TrendingProductCard