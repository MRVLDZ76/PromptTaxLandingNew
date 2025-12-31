import { BsArrowRight } from "react-icons/bs"
import { features } from "@/pages/crypto-bundle/data"
import type { FeatureType } from "@/pages/crypto-bundle/types"
import { Card, Col, Container, Row } from "react-bootstrap"
import {useLaunchModal} from '@/hooks/useLaunchModal';
import LaunchCountdownModal from '@/components/LaunchCountdownModal';

export const FeatureCard = ({ feature }: { feature: FeatureType }) => {
  const {showModal, openModal, closeModal} = useLaunchModal();
  const { description, icon, title, cta } = feature
  return (
    <Card className="card-body card-hover-shadow border d-flex flex-row p-4 h-100">
      <figure className="text-primary mb-0">
        {icon}
      </figure>
      <div className="d-flex flex-column ms-4">
        <h5 className="mb-3">{title}</h5>
        <p className="mb-3">{description}</p>
        {cta && (
          <a href="#" onClick={openModal} className="icon-link icon-link-hover stretched-link mt-auto">
            {cta} <BsArrowRight />
          </a>
        )}
      </div>
      <LaunchCountdownModal show={showModal} onHide={closeModal} />
    </Card>
  )
}

const Features = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="text-center mb-5 pb-lg-3">
          <h2 className="mb-3">Everything You Need for Crypto Taxes</h2>
          <p className="lead mb-0">Comprehensive tools to handle any crypto tax situation</p>
        </div>
        <Row className="g-4 g-lg-5">
          {features.map((feature, idx) => (
            <Col md={6} key={idx}>
              <FeatureCard feature={feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Features
