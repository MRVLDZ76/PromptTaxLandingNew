import { integrations } from "@/pages/saas/Integrations/data"
import IntegrationCard from "./IntegrationCard"
import { Col, Container, Row } from "react-bootstrap"

const IntegrationGrid = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="d-lg-flex justify-content-between align-items-center mb-4 mb-lg-5">
          <h4 className="mb-3 mb-lg-0">Explore integration</h4>
          <ul className="nav nav-pills gap-1 nav-pills-light">
            <li className="nav-item">
              <a className="nav-link active">All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Assets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Domain</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Ecommerce</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Social</a>
            </li>
          </ul>
        </div>
        <Row className="g-4 g-lg-5">
          {integrations.map((tool, idx) => (
            <Col sm={6} lg={4} xl={3}  key={idx}>
              <IntegrationCard tool={tool} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>

  )
}

export default IntegrationGrid