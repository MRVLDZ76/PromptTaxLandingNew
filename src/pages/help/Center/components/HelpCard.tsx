import { HelpType } from "@/pages/help/Center/types";
import { Card, CardTitle } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

type HelpCardPropsType = {
  help: HelpType
}

const HelpCard = ({ help }: HelpCardPropsType) => {

  const Icon = help.icon

  return (
    <Card className="border p-4 h-100">
      <Card.Body className="p-0">

        <div className="icon-md bg-primary text-white rounded flex-shrink-0 mb-3 flex-centered">
          <Icon className="fs-6"></Icon>
        </div>

        <CardTitle as={"h6"} className="mb-3">{help.title}</CardTitle>

        <ul className="nav flex-column">
          {
            help.content.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link className="nav-link icons-center gap-1" to={help.url ?? ''}>
                  <FaAngleRight size={18}  className="pt-1 ms-0 mb-1" />
                  {item}
                </Link>
              </li>
            ))
          }
        </ul>
      </Card.Body>

      <Card.Footer className="p-0 pt-3">
        <Link className="icon-link icon-link-hover" to={help.url ?? ''}>View all articles
          <BsArrowRight className="bi"/>
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default HelpCard