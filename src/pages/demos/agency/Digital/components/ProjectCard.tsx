import {ProjectType} from "@/pages/demos/agency/Digital/types";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BsArrowUpRight} from "react-icons/bs";

type ProjectCardPropsType = {
    project: ProjectType
}

const ProjectCard = ({project}: ProjectCardPropsType) => {
    return (
        <Card className="bg-light p-3 p-sm-4 card-img-scale overflow-hidden">
            <div className="card-img-scale-wrapper rounded-3">
                <img src={project.image} className="img-scale"
                     alt="portfolio-img"/>
            </div>
            <Card.Body
                className="d-flex justify-content-between align-items-center px-0 pb-0">
                <div className="me-3">
                    <h5 className="mb-0">
                        <Link to={project.url} className="heading-color stretched-link">
                            {project.name}
                        </Link>
                    </h5>
                    <small>{project.category}</small>
                </div>
                <Link to={project.url} className="btn btn-round btn-dark flex-shrink-0 flex-centered">
                    <BsArrowUpRight/>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard