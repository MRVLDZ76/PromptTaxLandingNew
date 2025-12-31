import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {projects} from "@/pages/demos/agency/Digital/data";
import ProjectCard from "@/pages/demos/agency/Digital/components/ProjectCard";

const Projects = () => {
    return (
        <section className="pb-0">
            <Container>
                <Row className="align-items-center g-4 mb-4 mb-sm-5">
                    <Col md={6} lg={5}>
                        <h2 className="mb-0">Our latest projects</h2>
                    </Col>
                    <Col md={6} lg={5} className="ms-auto text-md-end">
                        <Link to="/portfolio/showcase" className="btn btn-lg btn-dark mb-0">View all projects</Link>
                    </Col>
                </Row>

                <Row className="g-4 g-md-5">
                    {
                        projects.map((project, idx) => (
                            <Col lg={6} key={idx}>
                                <ProjectCard project={project}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Projects