import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsChatDots, BsRobot, BsCheckCircle } from 'react-icons/bs'

const HowItWorks = () => {
  const steps = [
    {
      icon: BsChatDots,
      title: 'Chat & Upload',
      description: 'Drop in your W-2s, 1099s, receipts, or bank statements. Or simply chat: "Help me file my 2023 taxes".',
      color: '#285aeb'
    },
    {
      icon: BsRobot,
      title: 'AI Tax Processing',
      description: 'AI extracts data with 99%+ accuracy, calculates deductions, and generates complete tax forms (1040, Schedule C, etc.).',
      color: '#0cbc87'
    },
    {
      icon: BsCheckCircle,
      title: 'Review & File',
      description: 'Review AI-generated forms with explanations. Get CPA review for a small fee or download and file yourself.',
      color: '#f7c32e'
    }
  ]

  return (
    <section className="py-8 py-lg-9">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <span className="text-primary fw-bold text-uppercase mb-2 d-block">How it works</span>
            <h2 className="mb-3">From upload to filing in 3 simple steps</h2>
            <p className="lead text-muted">
              Let AI do the heavy lifting while you review and relax
            </p>
          </Col>
        </Row>

        <Row className="g-4 g-lg-5">
          {steps.map((step, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="border-0 shadow-sm h-100 text-center p-4">
                <Card.Body>
                  <div 
                    className="icon-lg rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                    style={{ 
                      backgroundColor: `${step.color}15`,
                      width: '80px',
                      height: '80px'
                    }}
                  >
                    <step.icon size={36} style={{ color: step.color }} />
                  </div>
                  <div className="badge bg-primary text-white mb-3">
                    Step {index + 1}
                  </div>
                  <h5 className="mb-3">{step.title}</h5>
                  <p className="mb-0 text-muted">{step.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={10} className="mx-auto">
            <Card className="bg-primary text-white border-0 shadow-lg">
              <Card.Body className="p-4 p-lg-5 text-center">
                <h3 className="text-white mb-3">Perfect For</h3>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <span className="badge bg-white text-primary px-3 py-2">Personal Returns</span>
                  <span className="badge bg-white text-primary px-3 py-2">Sole Proprietors</span>
                  <span className="badge bg-white text-primary px-3 py-2">Freelancers</span>
                  <span className="badge bg-white text-primary px-3 py-2">Small Business Owners</span>
                  <span className="badge bg-white text-primary px-3 py-2">Crypto Investors</span>
                  <span className="badge bg-white text-primary px-3 py-2">K-1 Recipients</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HowItWorks
