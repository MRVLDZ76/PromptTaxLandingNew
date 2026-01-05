import { quickLinks, socialMediaLinks } from '@/assets/data/footer-items'
import LogoBox from '../LogoBox'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { useLaunchModal } from '@/hooks/useLaunchModal'
import LaunchCountdownModal from '@/components/LaunchCountdownModal'

const Footer7 = () => {
  const { showModal, openModal, closeModal } = useLaunchModal();
  return (
    <footer>
      <Container>
        <div className="bg-dark rounded position-relative p-4 p-sm-6 mb-3 mb-sm-5" data-bs-theme="dark">
          <Row className="mx-auto">
            <Col lg={8} className="mx-auto text-center px-0">

              <LogoBox imageClassName='h-60px' />

              <p className="mt-4">Tax preparation reimagined with AI precision. Cut data entry time by 95% and transform document chaos into filing-ready data.Footer7</p>

              <ul className="nav justify-content-center mt-4 mt-md-0">
                {quickLinks.map((item, idx) => (
                  <li key={(item.link ?? '') + idx} className="nav-item">
                    {item.link === '#coming-soon' ? (
                      <a href="#" className="nav-link px-3 pb-0" onClick={openModal}>
                        {item.name}
                        {item.badge && <span className="badge text-bg-primary ms-2">{item.badge}</span>}
                      </a>
                    ) : (
                      <Link className="nav-link px-3 pb-0" to={item.link ?? ''}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <ul className="list-inline mb-0 mt-4">
                {socialMediaLinks.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                      <Link className={`btn btn-xs btn-icon ${item.iconClassName}`} to={item.link ?? ""}>
                        <Icon />
                      </Link>
                    </li>
                  )
                })}
              </ul>            </Col>
          </Row>
        </div>
      </Container>
      
      <LaunchCountdownModal show={showModal} onHide={closeModal} />
    </footer>
  )
}

export default Footer7