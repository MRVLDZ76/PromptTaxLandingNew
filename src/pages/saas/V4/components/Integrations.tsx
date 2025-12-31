import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BsChevronRight} from "react-icons/bs";
import {integrations} from "@/pages/saas/V4/data";
import IntegrationCard from "@/pages/saas/V4/components/IntegrationCard";

const Integrations = () => {
    return (
        <section className="pb-0">
            <Container>

                <Row className="g-4 align-items-center mb-4 mb-lg-5">
                    <Col lg={5}>
                        <h2 className="mb-0">Integrates with your workflow</h2>
                    </Col>
                    <Col lg={5} className="ms-auto text-lg-end">
                        <div className="d-inline-block justify-content-center mx-auto bg-dark rounded px-5 py-3">
                            <span className="text-white">Explore our</span><Link className="ms-2" to="/saas/integrations">Integration
                            library<BsChevronRight className="small ms-1"/></Link>
                        </div>
                    </Col>
                </Row>

                <Row className="g-4 g-lg-5">
                    {
                        integrations.map((tool, idx) => (
                            <Col sm={6} lg={4} xl={3} key={idx}>
                                <IntegrationCard tool={tool}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Integrations