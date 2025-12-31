import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="bg-dark rounded p-4 p-sm-6" data-bs-theme="dark">
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Questions about our Privacy Policy?</h2>
              <p className="mb-0">We're committed to protecting your data. Contact us if you have any questions about how we handle your information.</p>
            </Col>
            <Col md={6} className="text-end">
              <Link to="/contact/v2" className="btn btn-lg btn-primary mb-0">Contact Us</Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>

  )
}

export default CTA
