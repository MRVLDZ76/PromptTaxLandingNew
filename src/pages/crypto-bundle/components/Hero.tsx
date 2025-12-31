import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFileEarmarkText } from 'react-icons/bs'
import {useLaunchModal} from '@/hooks/useLaunchModal';
import LaunchCountdownModal from '@/components/LaunchCountdownModal';

const Hero = () => {
  const {showModal, openModal, closeModal} = useLaunchModal();
  return (
    <section className="pt-lg-8 pt-xl-9">
      <Container className="position-relative pt-4 pt-lg-0">
        <Row className="align-items-center">
          <Col md={7} xl={6} className="mb-7 mb-md-0">
            <h1 className="mb-4">Crypto Tax Made Simple</h1>
            <h2 className="h4 text-primary mb-4">IRS-Compliant Form 8949 + Schedule D Bundle</h2>
            <p className="mb-4 lead">
              Generate unlimited Form 8949 pages with proper batch pagination, automatic Schedule D aggregation, and optional professional CPA review. Stop stressing about crypto taxes—we handle the complexity.
            </p>
            <div className="d-flex gap-3 mb-5 flex-wrap">
              <a href="#" onClick={openModal} className="btn btn-lg btn-primary">
                Generate Your Bundle Now
              </a>
              <Link to="/pricing" className="btn btn-lg btn-outline-primary">
                See Sample PDF
              </Link>
            </div>
            <div className="d-flex flex-wrap gap-4 mt-5">
              <div className="text-center">
                <h3 className="mb-0 text-primary">50,000+</h3>
                <p className="mb-0 small">Crypto transactions processed</p>
              </div>
              <div className="text-center">
                <h3 className="mb-0 text-primary">2,500+</h3>
                <p className="mb-0 small">Tax returns filed</p>
              </div>
              <div className="text-center">
                <h3 className="mb-0 text-primary">100%</h3>
                <p className="mb-0 small">IRS-compliant forms</p>
              </div>
            </div>
          </Col>
          <Col md={5} className="ms-auto">
            <div className="bg-light rounded-4 p-5 text-center">
              <div className="mb-4">
                <BsFileEarmarkText className="text-primary" size={80} />
              </div>
              <h4 className="mb-3">Form 8949 + Schedule D</h4>
              <p className="text-muted mb-0">IRS-compliant crypto tax forms generated in seconds</p>
            </div>
          </Col>
        </Row>
      </Container>
      <LaunchCountdownModal show={showModal} onHide={closeModal} />
    </section>
  )
}

export default Hero
