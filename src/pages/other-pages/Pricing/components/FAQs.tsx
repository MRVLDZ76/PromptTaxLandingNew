import {Accordion, Col, Container, Row} from "react-bootstrap";
import {faqData} from "@/pages/other-pages/Pricing/data";


const FAQs = () => {
    return (
        <section className="pt-0">
            <Container>
                <Row>
                    <Col md={7} className="mx-auto">
                        <h2 className="mb-5 text-center">You have questions we have answers</h2>

                        <Accordion className="accordion-icon accordion-bg-light" defaultActiveKey="0">
                            {
                                faqData.map((item, idx) => (
                                    <Accordion.Item  key={idx} eventKey={idx.toString()}>
                                        <Accordion.Header as={'p'} className="font-base mb-3">
                                    <span className="fw-semibold">
                                        {item.question}
                                    </span>
                                        </Accordion.Header>

                                        <Accordion.Body className="mb-2">
                                            {item.answer}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FAQs