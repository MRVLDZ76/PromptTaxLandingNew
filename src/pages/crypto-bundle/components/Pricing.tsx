import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { BsCheck, BsX } from 'react-icons/bs'
import { pricingTiers } from '@/pages/crypto-bundle/data'
import {useLaunchModal} from '@/hooks/useLaunchModal';
import LaunchCountdownModal from '@/components/LaunchCountdownModal';

const Pricing = () => {
  const {showModal, openModal, closeModal} = useLaunchModal();
  return (
    <section>
      <Container>
        <Row>
          <Col lg={10} className="mx-auto text-center mb-5">
            <h2 className="mb-3">Choose Your Package</h2>
            <p className="lead mb-0">Transparent pricing for every crypto investor</p>
          </Col>
        </Row>
        <Row className="g-4 align-items-center justify-content-center">
          {pricingTiers.map((tier, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Card className={`card-body h-100 p-4 ${tier.featured ? 'border-primary border-2 shadow-lg' : 'border'}`}>
                {tier.badge && (
                  <Badge 
                    bg={tier.featured ? 'primary' : 'success'} 
                    className="position-absolute top-0 start-50 translate-middle px-3 py-2"
                  >
                    {tier.badge}
                  </Badge>
                )}
                <div className="text-center mb-4 mt-3">
                  <h4 className="mb-3">{tier.name}</h4>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="h1 mb-0">${tier.price}</span>
                    <span className="text-muted ms-2">{tier.period}</span>
                  </div>
                </div>
                <ul className="list-unstyled mb-4">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="mb-3 d-flex align-items-start">
                      {feature.included ? (
                        <BsCheck className="text-success me-2 flex-shrink-0" size={24} />
                      ) : (
                        <BsX className="text-muted me-2 flex-shrink-0" size={24} />
                      )}
                      <span className={!feature.included ? 'text-muted' : ''}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#" onClick={openModal}
                  className={`btn w-100 ${tier.featured ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  {tier.buttonText}
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <LaunchCountdownModal show={showModal} onHide={closeModal} />
    </section>
  )
}

export default Pricing
