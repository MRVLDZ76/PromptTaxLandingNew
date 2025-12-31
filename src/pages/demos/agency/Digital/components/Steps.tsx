import {Card, Col, Container, Row} from "react-bootstrap";
import {steps} from "@/pages/demos/agency/Digital/data";

const Steps = () => {
    return (
        <section>
            <Container>

                <div className="inner-container-small text-center mb-4 mb-md-6">
                    <h2>How it works in <span className="text-primary">4</span> easy steps</h2>
                </div>

                <Row className="step-process">
                    {
                        steps.map((step, idx) => {
                            const Icon = step.icon
                            return (
                                <Col sm={6} lg={3} key={idx}>
                                    <Card className="card-body bg-transparent text-center">
                                        <div className="icon-lg bg-dark text-white rounded-circle mb-3 mx-auto flex-centered">
                                            <Icon size={24} className="fa-lg"/>
                                        </div>
                                        <h5>{step.title}</h5>
                                        <p>{step.description}</p>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>

            </Container>
        </section>
    )
}

export default Steps