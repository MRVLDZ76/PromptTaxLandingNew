import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import {BsTelephone} from "react-icons/bs";
import {caseStudies} from "@/pages/demos/agency/SEO/data";
import CaseStudyCard from "@/pages/demos/agency/SEO/components/CaseStudyCard";

const CaseStudies = () => {
    return (
        <section className="bg-light pb-0">
            <Container>

                <div className="inner-container-small mx-auto">

                    <div className="text-center mb-6">
                        <h2 className="mb-">Case studies</h2>
                        <p className="mb-0">Discover a selection of our most recent client projects, showcasing our
                            expertise, creativity, and commitment to delivering outstanding results.</p>
                    </div>
                </div>


                <Row className="g-4 g-lg-5 justify-content-center">
                    {
                        caseStudies.map((item, idx) => (
                            <Col md={6} lg={4} key={idx}>
                                <CaseStudyCard item={item}/>
                            </Col>
                        ))
                    }

                </Row>

                <div className="text-center pt-6">
                    <Link to="/portfolio/grid" className="btn btn-lg btn-dark mb-0">Explore all case studies</Link>
                </div>
            </Container>


            <div className="bg-primary d-sm-flex align-items-center justify-content-center gap-2 mt-6 mt-sm-8 p-4">
                <ul className="avatar-group mb-3 mb-ms-0">
                    <li className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" src={avatar6} alt="avatar"/>
                    </li>
                    <li className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" src={avatar5} alt="avatar"/>
                    </li>
                    <li className="avatar avatar-sm">
                        <div className="avatar-img rounded-circle text-bg-dark">
                            <BsTelephone className="text-white position-absolute top-50 start-50 translate-middle"/>
                        </div>
                    </li>
                </ul>
                <p className="fw-normal text-white mb-0">Maximize Productivity by Simplifying Solution Search <Link
                    to=""
                    className="text-decoration-underline text-white fw-semibold">Got
                    a project in mind?</Link></p>
            </div>
        </section>
    )
}

export default CaseStudies