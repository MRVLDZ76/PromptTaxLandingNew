import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsFileEarmarkPdf, BsShieldCheck, BsCheckCircle, BsClock } from 'react-icons/bs'
import {useLaunchModal} from '@/hooks/useLaunchModal';
import LaunchCountdownModal from '@/components/LaunchCountdownModal';

const CryptoBundleBanner = () => {
  const {showModal, openModal, closeModal} = useLaunchModal();
  return (
    <section className="bg-dark position-relative overflow-hidden pt-xl-9">
      <Container>
        <div className="bg-dark rounded-4 p-4 p-md-6 position-relative overflow-hidden">
          <Row className="align-items-center g-4 g-lg-5">
            {/* Left Side - Learn More Section */}
            <Col lg={6} className="position-relative z-1">
              <div className="badge bg-primary px-3 py-2 mb-3">
                <BsFileEarmarkPdf className="me-2" />
                New Bundle Available
              </div>
              
              <h2 className="text-white mb-3 display-6 fw-bold">
                Complete Crypto Tax Bundle
              </h2>
              
              <p className="text-white mb-4 lh-base">
                Get your IRS-ready <span className="badge bg-primary px-2 py-1">Form 8949</span> with automatic calculations, <span className="text-warning fw-semibold">wash sale tracking</span>, 
                and professional formatting—all in one download.
              </p>
              
              {/* Key Benefits */}
              <div className="mb-4">
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div className="bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ minWidth: '40px', height: '40px' }}>
                    <BsCheckCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h5 className="text-white mb-1">Upload & Auto-Process</h5>
                    <p className="text-white text-opacity-75 mb-0">
                      Upload <span className="text-info">CSVs from any exchange</span>—we handle all the complex calculations
                    </p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div className="bg-success rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ minWidth: '40px', height: '40px' }}>
                    <BsShieldCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <h5 className="text-white mb-1">IRS-Compliant Forms</h5>
                    <p className="text-white text-opacity-75 mb-0">
                      Get properly paginated <span className="badge bg-primary px-2 py-1">Form 8949</span> and <span className="badge bg-primary px-2 py-1">Schedule D</span> ready for e-filing
                    </p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-warning rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ minWidth: '40px', height: '40px' }}>
                    <BsClock className="text-dark" size={20} />
                  </div>
                  <div>
                    <h5 className="text-white mb-1">Instant Download</h5>
                    <p className="text-white text-opacity-75 mb-0">
                      Complete forms in minutes, not days—with optional <span className="text-success fw-semibold">CPA review</span> available
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Pricing Tiers Info */}
              <div className="bg-black bg-opacity-25 rounded-3 p-3 mb-4 border border-primary border-opacity-25">
                <p className="text-white mb-2 fw-semibold">Choose your transaction tier:</p>
                <div className="d-flex flex-wrap gap-2 text-white text-opacity-90 small">
                  <span className="badge bg-primary px-3 py-2">1-100 tx: $29.99</span>
                  <span className="badge bg-primary px-3 py-2">101-1,000 tx: $69.99</span>
                  <span className="badge bg-primary px-3 py-2">1,001-3,000 tx: $199</span>
                </div>
                <p className="text-white text-opacity-75 mb-0 mt-2 small">
                  + Optional <span className="text-success fw-semibold">CPA Review</span>: $149
                </p>
              </div>
              
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/crypto-bundle" className="btn btn-white btn-lg px-4">
                  Learn More <BsArrowRight className="ms-2" />
                </Link>
                <a href="#" onClick={openModal} className="btn btn-outline-white btn-lg px-4">
                  Get Started
                </a>
              </div>
            </Col>
            
            {/* Right Side - Image */}
            <Col lg={6}>
              <div className="text-center">
                <img 
                  src="/images/marketing/cryptobundle23-front.png" 
                  alt="Crypto Tax Bundle - Form 8949 Preview" 
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ maxHeight: '500px', objectFit: 'contain' }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <LaunchCountdownModal show={showModal} onHide={closeModal} />
    </section>
  )
}

export default CryptoBundleBanner
