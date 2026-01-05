import { Col, Container, Row } from "react-bootstrap"
import { BsClock, BsEnvelope, BsGeoAlt, BsHeadset } from "react-icons/bs"
import { Link } from "react-router-dom"

import { communityLinks, contactDetail, quickLinks, socialMediaLinks } from "@/assets/data/footer-items"
import CreditWithLogo from './components/CreditWithLogo'
import { useLaunchModal } from '@/hooks/useLaunchModal'
import LaunchCountdownModal from '@/components/LaunchCountdownModal'
 

const Footer8 = () => {
  const { showModal, openModal, closeModal } = useLaunchModal();
  return (
    <footer className="bg-dark pt-6" data-bs-theme="dark">
      <Container className="position-relative mt-sm-5">
        <Row className="g-4 justify-content-between">
          <Col lg={8} xl={7}>
            <Row className="g-4">
              <Col md={3} xs={6}>
                <h6 className="mb-2 mb-md-4">Quick links</h6>
                <ul className="nav flex-column">

                  {quickLinks.map((item, idx) => (
                    <li key={(item.link ?? '') + idx} className="nav-item">
                      {item.link === '#coming-soon' ? (
                        <a href="#" className={`nav-link${idx === 0 ? ' pt-0' : ''}`} onClick={openModal}>
                          {item.name}
                          {item.badge && <span className="badge text-bg-primary ms-2">{item.badge}</span>}
                        </a>
                      ) : (
                        <Link className={`nav-link${idx === 0 ? ' pt-0' : ''}`} to={item.link ?? ''}>
                          {item.name}
                          {item.badge && <span className="badge text-bg-danger ms-2">{item.badge}</span>}
                        </Link>
                      )}
                    </li>
                  ))}

                </ul>
              </Col>
              <Col md={3} xs={6}>
                <h6 className="mb-2 mb-md-4">Community</h6>
                <ul className="nav flex-column">

                  {communityLinks.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={(item.link ?? '') + idx} className="nav-item">
                        <Link className={`nav-link ${idx === 0 ? 'pt-0' : ''}`} to={item.link ?? ''}>
                          {item.name}
                          {Icon && <Icon size={13} className="ms-2" />}
                        </Link>
                      </li>
                    )
                  })}

                </ul>
              </Col>
              <Col md={6}>
                <h6 className="mb-2 mb-md-4">Contact details</h6>
                <ul className="list-group list-group-borderless">
                  <li className="d-flex mb-3 icons-center">
                    <BsGeoAlt className="me-2 text-primary" />
                    {contactDetail.address}
                  </li>
                  <li className="d-flex mb-3 icons-center">
                    <BsHeadset className="me-2 text-primary" />
                    {contactDetail.contact}
                  </li>
                  <li className="d-flex mb-3 icons-center">
                    <BsEnvelope className="me-2 text-primary" />
                    {contactDetail.email}
                  </li>
                  <li className="d-flex mb-3 icons-center">
                    <BsClock className="me-2 text-primary" />
                    <p className="mb-0">{contactDetail.weekDays}<br />{contactDetail.weekEnds}</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={3}>

            <h6 className="mb-2 mb-md-4">Follow on</h6>
            <ul className="list-inline mb-0 mt-3">

              {socialMediaLinks.map((item, idx) => {
                const Icon = item.icon
                return (
                  <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                    <Link className={`btn btn-xs btn-icon btn-light ${item.iconClassName}`} to={item.link ?? ""}>
                      {Icon && <Icon />}
                    </Link>
                  </li>
                )
              })}

            </ul>
          </Col>
        </Row>
        <hr className="mt-4 mb-3" />

        <CreditWithLogo />

      </Container>
      
      <LaunchCountdownModal show={showModal} onHide={closeModal} />
    </footer>
  )
}

export default Footer8