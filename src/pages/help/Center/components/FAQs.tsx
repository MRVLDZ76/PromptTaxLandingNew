import {Accordion, Container} from "react-bootstrap";
import {faqData} from "@/pages/help/Center/data";

const FAQs = () => {
    return (
        <section className="pt-0">
            <Container className="inner-container">

                <h3 className="text-center">Frequently Asked Questions</h3>

                <Accordion className="accordion-icon accordion-border-bottom mt-5" defaultActiveKey="0">
                    {
                        faqData.map((item, idx) => (
                            <Accordion.Item className="mb-3" key={idx} eventKey={idx.toString()}>
                                <Accordion.Header as={'p'} className="font-base">
                                    <span className="fw-bold">
                                        {item.question}
                                    </span>
                                </Accordion.Header>

                                <Accordion.Body>
                                    {item.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                </Accordion>

            </Container>
        </section>
    )
}

export default FAQs