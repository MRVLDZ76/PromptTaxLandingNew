import {ServiceType} from "@/pages/demos/agency/Digital/types";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {Card} from "react-bootstrap";

type ServiceCardPropsType = {
    service: ServiceType
}

const ServiceCard = ({service}: ServiceCardPropsType) => {
    return (
        <Card className="card-img-scale bg-body overflow-hidden">

            <div className="card-img-scale-wrapper">
                <img src={service.image} className="card-img-top img-scale"
                     alt="service image"/>
            </div>

            <Card.Body className="p-4">
                <h6><Link to={service.url}>{service.title}</Link></h6>
                <p className="mb-0">{service.description}</p>
            </Card.Body>

            <Card.Footer className="border-top bg-body p-4">
                <Link className="icon-link icon-link-hover stretched-link p-0 m-0 icons-center" to={service.url}>Explore
                    this service<BsArrowRight className="bi"/> </Link>
            </Card.Footer>
        </Card>
    )
}

export default ServiceCard