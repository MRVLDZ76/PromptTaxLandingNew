import { works } from "@/pages/contact/V2/data"
import type { WorkType } from "@/pages/contact/V2/types"
import { Card, Col, Container, Row } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

export const WorkCard = ({ work }: { work: WorkType }) => {
  const { description, image, title } = work
  return (
    <Card className="card-body bg-light border">
      <div className="d-flex align-items-center">
        <div className="d-flex">
          <img src={image} className="h-50px" />
          <div className="mx-3">
            <h6 className="mb-0">{title}</h6>
            <small>{description}</small>
          </div>
        </div>
        <Link className="icon-link icon-link-hover text-primary-hover stretched-link" to=""><BsArrowRight className="bi fs-5" /> </Link>
      </div>
    </Card>
  )
}

const Work = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2 className="mb-2">Follow our work</h2>
          <p className="mb-0">The combination of my passion for design, code &amp; interaction positions me in a unique place in the web design world.</p>
        </div>
        <Row className="row-cols-1 row-cols-lg-3 g-4">
          {works.map((work, idx) => (
            <Col key={idx}>
              <WorkCard work={work} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>

  )
}

export default Work