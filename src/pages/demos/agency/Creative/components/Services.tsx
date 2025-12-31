import {Col, Container, Row} from "react-bootstrap";
import ServiceCard from "@/pages/demos/agency/Creative/components/ServiceCard";
import {services} from "@/pages/demos/agency/Creative/data";

const Services = () => {
    return (
        <section className="pb-0">
            <Container>

                <div className="inner-container text-center mb-4 mb-sm-6">
                    <h2 className="mb-0">Our Comprehensive Services</h2>
                </div>

                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    {
                        services.map((service, idx) => (
                            <Col key={idx}>
                                <ServiceCard service={service}/>
                            </Col>
                        ))
                    }
                </Row>

            </Container>
        </section>
    )
}

export default Services