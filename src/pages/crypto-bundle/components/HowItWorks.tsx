import { Container, Row, Col } from 'react-bootstrap'
import { BsCloudUpload, BsRobot, BsDownload } from 'react-icons/bs'
import { steps } from '@/pages/crypto-bundle/data'

const HowItWorks = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto text-center mb-5">
            <h2 className="mb-3">How It Works</h2>
            <p className="lead mb-0">From CSV to IRS-ready PDF in 3 simple steps</p>
          </Col>
        </Row>
        <Row className="g-4 g-lg-5">
          {steps.map((step, idx) => (
            <Col md={4} key={idx}>
              <div className="text-center">
                <div className="position-relative d-inline-block mb-4">
                  <div 
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                    style={{ width: '60px', height: '60px', fontSize: '24px' }}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="mb-3">
                  {step.number === 1 && <BsCloudUpload className="text-primary" size={48} />}
                  {step.number === 2 && <BsRobot className="text-primary" size={48} />}
                  {step.number === 3 && <BsDownload className="text-primary" size={48} />}
                </div>
                <h4 className="mb-3">{step.title}</h4>
                <p className="mb-0">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default HowItWorks
