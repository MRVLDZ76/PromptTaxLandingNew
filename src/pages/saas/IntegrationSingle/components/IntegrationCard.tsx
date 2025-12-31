import { type ToolType } from "@/pages/saas/IntegrationSingle/data";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

type IntegrationCardPropsType = {
  tool: ToolType
}

const IntegrationCard = ({ tool }: IntegrationCardPropsType) => {
  return (
    <Card className="card-hover-shadow border-primary-hover border h-100 p-4">
      <Card.Body className="p-0">
        <div className="d-flex gap-3 align-items-center mb-3">
          <img src={tool.image} className="h-40px"
            alt="Integrations-icon" />
          <h6 className="mb-0">{tool.name}</h6>
        </div>
        <p>{tool.description}</p>
      </Card.Body>

      <Card.Footer className="bg-transparent p-0 mt-6">
        <Link to={tool.url}
          className="icon-link icon-link-hover heading-color text-primary-hover stretched-link mb-0">View
          integration<BsArrowRight className="bi" /> </Link>
      </Card.Footer>
    </Card>
  )
}

export default IntegrationCard