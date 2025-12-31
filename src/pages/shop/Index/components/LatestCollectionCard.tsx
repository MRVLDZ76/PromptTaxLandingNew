import type {ProductType} from "@/types/shop";
import {Card} from "react-bootstrap";
import {FaStar} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {BsHeart} from "react-icons/bs";
import {currency} from "@/states/constants";
import {getDiscountedPrice} from "@/helpers/products";

type LatestCollectionCardPropsType = {
    product: ProductType
}

const LatestCollectionCard = ({product}: LatestCollectionCardPropsType) => {

    const {images, name, description, price, review, sale, url} = product

    return (
        <Card className="border overflow-hidden p-0 h-100">
            <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                <div className="badge text-bg-dark icons-center"><FaStar size={13}
                                                                         className="text-warning me-1"/>{review?.stars ?? 0}
                </div>
                <Link to={url ?? ''} className="btn btn-light btn-round border mb-0 ms-auto flex-centered"><BsHeart/></Link>
            </div>
            <Card.Header className="bg-transparent pb-0">
                <img src={images[0]} alt=''/>
            </Card.Header>
            <Card.Body className="pt-0">
                <Card.Title as={'h6'}><Link to="" className="stretched-link">{name}</Link></Card.Title>
                <p className="mb-0">{description} </p>
            </Card.Body>
            <Card.Footer className="bg-transparent d-flex justify-content-between align-items-center pt-0">
                <div className="d-flex align-items-center gap-2 justify-content-center">
                    <p className="fw-bold text-success mb-0">{currency}{sale ? getDiscountedPrice(price, sale.discount, sale.type).toFixed(2) : price.toFixed(2)}</p>
                    {sale && <small className="text-decoration-line-through">{currency}{price.toFixed(2)}</small>}
                </div>
                <Link to={url ?? ''} className="btn btn-dark mb-0 z-index-2">Login</Link>
            </Card.Footer>
        </Card>
    )
}

export default LatestCollectionCard