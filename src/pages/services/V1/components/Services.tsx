import useViewPort from "@/hooks/useViewPort"
import type { ServiceType } from "@/pages/services/V1/types"
import Sticky from "react-sticky-el"

import { services } from "@/pages/services/V1/data"
import { Card, CardBody, CardHeader, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BsChevronRight } from "react-icons/bs"

export const ServiceCard = ({ service }: { service: ServiceType }) => {
  const { description, icon, title } = service
  return (
    <Card className="border bg-light p-5">
      <CardHeader className="bg-light p-0 mb-4">
        <figure className="text-primary">
          {icon}
        </figure>
      </CardHeader>
      <CardBody className="p-0">
        <h5 className="mb-3"><Link to="/services/single" className="stretched-link">{title}</Link></h5>
        <p className="mb-0">{description}</p>
      </CardBody>
    </Card>
  )
}

const Services = () => {
  const { width } = useViewPort()

  return (
    <section className="pb-0">
      <Container data-sticky-container>
        <Row>
          <Col lg={4} className="mb-5">
            <Sticky data-sticky topOffset={80} boundaryElement="div.row" stickyStyle={{ transition: '0.2s all linear' }} hideOnBoundaryHit={false} disabled={width <= 991}>
              <h2 className="mb-4">Giving your business some great ideas</h2>
              <p className="mb-4">With the support of our result-driven team, you can solve many challenges.</p>
              <div className="text-center d-inline-block bg-dark rounded px-5 py-3">
                <span className="text-white">Work with us?</span>
                <Link className="ms-2" to="">Contact us now<BsChevronRight className="small ms-1" /></Link>
              </div>
            </Sticky>
          </Col>
          <Col lg={8} className="ps-xl-7">
            <Row className="g-4 g-sm-5">
              {services.map((service, idx) => (
                <Col md={6} key={idx}>
                  <ServiceCard service={service} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Services