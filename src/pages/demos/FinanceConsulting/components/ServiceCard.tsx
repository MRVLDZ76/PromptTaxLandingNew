import {Card} from "react-bootstrap";
import {ServiceType} from "@/pages/demos/FinanceConsulting/types";
import {BsArrowRight} from "react-icons/bs";
import { Link } from "react-router-dom";

type ServiceCardPropsType = {
    service: ServiceType
}

const ServiceCard = ({service}: ServiceCardPropsType) => {
    return (
        <Card className="border p-4">
            <Card.Header className="bg-transparent p-0 pb-4">
                <figure className="text-primary">
                    {service.icon}
                </figure>
            </Card.Header>

            <Card.Body className="p-0">

                <h5>{service.title}</h5>

                <ul className="list-group list-group-borderless mb-5">
                    {
                        service.features.map((feature, idx) => {
                            const Icon = feature.icon
                            return (
                                <li className="list-group-item pb-0 d-flex mb-0 icons-center" key={idx}>
                                    <Icon className="me-2"/>
                                    {feature.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </Card.Body>

            <Card.Footer className="bg-transparent p-0">
                <Link className="icon-link icon-link-hover stretched-link" to="">Know more
                    <BsArrowRight className="bi"/>
                </Link>
            </Card.Footer>
        </Card>
    )
}

export default ServiceCard