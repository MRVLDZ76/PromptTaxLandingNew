import {Col, Container, Row} from "react-bootstrap";
import {workflowSteps} from "@/pages/demos/FinanceConsulting/data";
import {BsPlayFill} from "react-icons/bs";
import GlightBox from "@/components/GlightBox";

const WorkFlow = () => {
    return (
        <section className="pb-0">
            <Container>
                <div className="bg-light rounded position-relative p-4 p-sm-7 overflow-hidden">

                    <figure className="position-absolute top-100 start-100 translate-middle mt-n8 ms-n5">
                        <svg className="text-primary opacity-2" width="510" height="500" viewBox="0 0 510 500"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M309.5 317.5C309.5 377.619 259.646 426.375 198.125 426.375C136.604 426.375 86.75 377.619 86.75 317.5C86.75 257.381 136.604 208.625 198.125 208.625C259.646 208.625 309.5 257.381 309.5 317.5Z"
                                stroke="currentColor"/>
                            <path
                                d="M380.125 300C380.125 391.185 304.389 465.125 210.938 465.125C117.486 465.125 41.75 391.185 41.75 300C41.75 208.815 117.486 134.875 210.938 134.875C304.389 134.875 380.125 208.815 380.125 300Z"
                                stroke="currentColor"/>
                            <path
                                d="M508.875 250C508.875 387.786 395.08 499.5 254.688 499.5C114.295 499.5 0.5 387.786 0.5 250C0.5 112.214 114.295 0.5 254.688 0.5C395.08 0.5 508.875 112.214 508.875 250Z"
                                stroke="currentColor"/>
                        </svg>
                    </figure>

                    <Row className="position-relative">

                        <Col lg={6} className="h-100 order-2">
                            <Row className="g-4 g-lg-6">
                                {
                                    workflowSteps.map((item, idx) => {
                                        const Icon = item.icon
                                        return (
                                            <Col sm={6} key={idx}>
                                                <div
                                                    className="icon-lg bg-body heading-color border rounded-circle mb-3 flex-centered">
                                                    <Icon size={24} className="fa-lg"/>
                                                </div>
                                                <h6>{item.title}</h6>
                                                <p className="mb-0">{item.description}</p>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>


                        <Col lg={5} className="ms-auto order-1 order-lg-2 mb-6 mb-lg-0">
                            <div className="h-100 d-flex flex-column">
                                <h2 className="mb-4">Choose us for your financial journey</h2>
                                <div className="mt-auto">
                                    <GlightBox image="https://www.youtube.com/embed/tXHviS-4ygo"
                                               className="btn btn-primary icons-center" data-glightbox=""
                                               data-gallery="course-video">
                                        <BsPlayFill size={24} className="fa-xl me-2"/>Watch demo video
                                    </GlightBox>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default WorkFlow