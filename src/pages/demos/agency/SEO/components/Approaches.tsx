import {Col, Container, Row} from "react-bootstrap";
import {approachSteps} from "@/pages/demos/agency/SEO/data";
import StepCard from "@/pages/demos/agency/SEO/components/StepCard";

const Approaches = () => {
    return (
        <section className="pb-0">
            <Container>
                <Row className="g-4 g-md-5">
                    <Col md={6} lg={4}>
                        <h2 className="mb-0">Our Approach to SEO Success</h2>
                    </Col>
                    {
                        approachSteps.map((step, idx) => (
                            <Col md={6} lg={4} key={idx}>
                                <StepCard step={step}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Approaches