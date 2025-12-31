import {ServiceType} from "@/pages/demos/ClassicDefault/types";
import {Card} from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

type ServiceCardPropType = {
    service: ServiceType
}

const ServiceCard = ({service}: ServiceCardPropType) => {

    const Icon = service.icon

    return (
        <Card className="bg-light h-100">
            <Card.Body className="pb-0">
                <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5 flex-centered">
                    <Icon className="fa-fw fs-5"/>
                </div>
                <h5 className="mb-3">
                    <Link to="">{service.title}</Link>
                </h5>
                <p>{service.description}</p>
            </Card.Body>
            <Card.Footer className="bg-light mt-auto pt-2">
                <Link className="icon-link icon-link-hover" to="">
                    Know more
                    <BsArrowRight className="bi"/>{" "}
                </Link>
            </Card.Footer>
        </Card>
    )
}

export default ServiceCard