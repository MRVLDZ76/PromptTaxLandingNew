import { Accordion, Col, Container, Row } from "react-bootstrap";
import { faqData } from "@/pages/other-pages/FAQs/data";


const FAQs = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col md={10} className="mx-auto">

            <Accordion className="accordion-icon accordion-border" defaultActiveKey="0">
              {
                faqData.map((item, idx) => (
                  <Accordion.Item className={`${idx == 0 ? 'mb-2' : 'mb-3'}`} key={idx} eventKey={idx.toString()}>
                    <Accordion.Header as={'p'} className="font-base mb-3">
                      <span className="fw-semibold">
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

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQs