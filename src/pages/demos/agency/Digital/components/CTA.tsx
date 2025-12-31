import backgroundImg from '@/assets/images/bg/15.jpg'
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="position-relative z-index-2 pt-0">
      <Container className="position-relative">
        <div className="bg-dark rounded position-relative overflow-hidden p-4 p-sm-6"
          style={{
            background: `url(${backgroundImg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <Row className="align-items-center position-relative">

            <Col md={6} xl={7} className="mb-4 mb-xl-0">
              <h2 className="text-white">Subscribe to our newsletter</h2>
              <p className="text-white mb-0">We've always worked very hard to give our customers the best
                experience.</p>
            </Col>


            <Col md={6} xl={4} as={Form} className="ms-xl-auto">
              <Form.Control className="mb-3" type="email" placeholder="Enter your email address" />
              <Link to="" className="btn btn-primary mb-0 d-grid">Subscribe now!</Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CTA