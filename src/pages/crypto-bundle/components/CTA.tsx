import { Container, Row, Col } from 'react-bootstrap'
import { BsFileEarmarkPdf, BsCheckCircle, BsShieldCheck, BsPerson } from 'react-icons/bs'
import {useLaunchModal} from '@/hooks/useLaunchModal';
import LaunchCountdownModal from '@/components/LaunchCountdownModal';

const CTA = () => {
  const {showModal, openModal, closeModal} = useLaunchModal();
  return (
    <section>
      <Container>
        <div className="bg-dark rounded-4 position-relative overflow-hidden p-5 p-md-7">
          <Row className="g-4 position-relative align-items-center">
            <Col lg={6} className="text-white">
              <h2 className="text-white mb-4">Stop Stressing About Crypto Taxes</h2>
              <p className="text-white opacity-75 mb-4 lead">
                Join 2,500+ crypto investors who trust Prompt Tax to handle their Form 8949 generation. Starting at just $29.99 for up to 100 transactions, with optional CPA review available for $149.
              </p>
              <a href="#" onClick={openModal} className="btn btn-white btn-lg mb-4">
                Generate My Form 8949 Now
              </a>
              <div className="d-flex gap-4 flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <BsCheckCircle className="text-white" size={20} />
                  </div>
                  <span className="text-white small">IRS Compliant</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <BsShieldCheck className="text-white" size={20} />
                  </div>
                  <span className="text-white small">SSL Secure</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <BsPerson className="text-white" size={24} />
                  </div>
                  <span className="text-white small">CPA Reviewed</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bg-white rounded-3 p-5 text-center shadow">
                <div className="mb-4">
                  <BsFileEarmarkPdf className="text-danger" size={80} />
                </div>
                <h4 className="mb-3">Form 8949 Preview</h4>
                <p className="text-muted mb-4">
                  See exactly how your crypto transactions will appear on the official IRS form
                </p>
                <div className="bg-light rounded p-4 text-start" style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>
                  <div className="mb-2"><strong>Form 8949</strong> - Sales and Other Dispositions</div>
                  <div className="text-muted">Bitcoin Purchase | 0.5 BTC</div>
                  <div className="text-muted">Ethereum Sale | 2.3 ETH</div>
                  <div className="text-muted">Litecoin Trade | 10 LTC</div>
                  <div className="mt-3 text-success"><strong>Total Gain: $4,567.89</strong></div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <LaunchCountdownModal show={showModal} onHide={closeModal} />
    </section>
  )
}

export default CTA
