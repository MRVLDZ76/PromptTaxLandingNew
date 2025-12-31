import {ServiceType} from "@/pages/demos/agency/Creative/types"
import {Card} from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

type ServiceCardPropType = {
    service: ServiceType
}
const ServiceCard = ({service}: ServiceCardPropType) => {

    return (
        <Card className="card-hover-shadow border h-100 p-4">

            <Card.Body className="p-0">
                <figure className="text-primary mb-4">
                    {service.icon}
                </figure>
                <h5 className="mb-3"><Link to="">{service.title}</Link></h5>
                <p>{service.description}</p>
            </Card.Body>

            <Card.Footer className="mt-auto p-0 pt-2">
                <Link className="icon-link icon-link-hover stretched-link z-index-2" to="">View detail<BsArrowRight
                    className="bi"/> </Link>
            </Card.Footer>
        </Card>
    )
}

export default ServiceCard