import { Container, Row, Col, Card } from 'react-bootstrap'
import { technicalFeatures } from '@/pages/crypto-bundle/data'

const TechnicalDetails = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto text-center mb-5">
            <h2 className="mb-3">Built for Accuracy</h2>
            <p className="lead mb-0">See what makes our crypto tax bundle IRS-compliant</p>
          </Col>
        </Row>
        <Row className="g-4">
          {technicalFeatures.map((feature, idx) => (
            <Col md={6} key={idx}>
              <Card className="card-body h-100 p-4 border">
                <h5 className="mb-3">{feature.title}</h5>
                <div className="bg-dark text-white rounded p-3 mb-3" style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
                  <pre className="mb-0 text-white" style={{ whiteSpace: 'pre-wrap' }}>
                    {feature.code}
                  </pre>
                </div>
                <p className="mb-0 text-muted">{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default TechnicalDetails
