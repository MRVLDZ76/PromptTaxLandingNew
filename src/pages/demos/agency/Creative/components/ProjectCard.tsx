import {Card, CardText} from "react-bootstrap";
import {RecentProjectType} from "@/pages/demos/agency/Creative/types";
import {Link} from "react-router-dom";

type ProjectCardPropType = {
    project: RecentProjectType
}
const ProjectCard = ({project}: ProjectCardPropType) => {
    return (
        <Card className="card-element-hover card-metro-hover">
            <img src={project.image} alt="portfolio-image"/>
            <div className="card-img-overlay hover-element d-flex">
                <CardText as={'div'} className="mt-auto">
                    <h6 className="mb-0">
                        <Link to={project.url} className="text-white stretched-link">
                            {project.name}
                        </Link>
                    </h6>
                    <small className="text-white">{project.category}</small>
                </CardText>
            </div>
        </Card>
    )
}

export default ProjectCard