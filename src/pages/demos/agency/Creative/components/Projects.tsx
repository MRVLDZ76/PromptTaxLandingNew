import {Link} from "react-router-dom";
import {useEffect} from "react";
import {initIsotope} from "@/helpers/init-isotope";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "@/pages/demos/agency/Creative/components/ProjectCard";
import {projects} from "@/pages/demos/agency/Creative/data";

const Projects = () => {

    useEffect(() => {
        initIsotope()
    }, [])
    return (
        <section>
            <Container>

                <div className="inner-container text-center mb-4 mb-sm-6">
                    <h2 className="mb-4">Showcasing Recent Projects</h2>
                    <p className="mb-0">Discover a selection of our most recent client projects, showcasing our
                        expertise,
                        creativity, and commitment to delivering outstanding results.</p>
                </div>

                <Row className="g-4">

                    <Col md={4} lg={3}>
                        <div className="d-flex flex-column h-100">
                            <h6 className="mb-sm-3">Browse by:</h6>

                            <div className="grid-menu mb-4" data-target=".filter-container">
                                <ul className="nav flex-md-column gap-1 nav-pills nav-pills-primary">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-filter="*">All work</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-filter=".marketing">Digital Marketing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-filter=".design">Web design</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-filter=".business">Business development</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-filter=".brand">Brand design</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-filter=".ui">UI/UX design</a>
                                    </li>
                                </ul>

                            </div>


                            <Link to="/portfolio/showcase" className="btn btn-light mt-auto mb-5">View all projects<i
                                className="fa-solid fa-arrow-right-long ms-2"></i></Link>
                        </div>
                    </Col>

                    <Col md={8} lg={9}>
                        <Row className="g-4 filter-container" data-isotope='{"layoutMode": "masonry"}'>
                            {
                                projects.map((project, idx) => (
                                    <Col sm={6} lg={4} className={`grid-item ${project.categoryClass}`} key={idx}>
                                        <ProjectCard project={project}/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>

                </Row>

            </Container>
        </section>
    )
}

export default Projects

