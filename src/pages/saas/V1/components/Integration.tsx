import {BsX, BsCheck} from 'react-icons/bs';
import {Card, Col, Container, Row} from "react-bootstrap";

const Integration = () => {
    const traditionalFeatures = [
        "3-5 weeks turnaround time",
        "$500-$2,000 per partner",
        "Complex forms & manual entry",
        "Multiple back-and-forth revisions",
        "Rush fees during tax season"
    ];

    const promptTaxFeatures = [
        "5 Minutes total generation",
        "$49 flat fee (unlimited partners)",
        "Chat interface, no forms",
        "Real-time data extraction",
        "Available 24/7, instant generation"
    ];

    return (
        <section>
            <Container>
                <Row className="mb-5">
                    <Col lg={8} xl={7} className="mx-auto text-center">
                        <h2 className="mb-4">Traditional vs. PromptTax</h2>
                        <p className="mb-0">See the difference AI makes</p>
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col md={6}>
                        <Card className="card-body h-100 text-center border border-2">
                            <h4 className="mb-4">Traditional CPAs</h4>
                            <ul className="list-unstyled text-start">
                                {traditionalFeatures.map((feature, idx) => (
                                    <li key={idx} className="mb-3 d-flex align-items-start">
                                        <BsX size={24} className="text-danger me-2 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="card-body h-100 text-center border border-primary border-3 shadow">
                            <div className="badge bg-primary mb-3">Recommended</div>
                            <h4 className="mb-4">PromptTax AI</h4>
                            <ul className="list-unstyled text-start">
                                {promptTaxFeatures.map((feature, idx) => (
                                    <li key={idx} className="mb-3 d-flex align-items-start">
                                        <BsCheck size={24} className="text-success me-2 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Integration