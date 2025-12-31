import backgroundImg from '@/assets/images/bg/14.jpg'
import {Col, Container, Row} from "react-bootstrap";

const Awards = () => {
    return (
        <section className="position-relative"
                 style={{
                     backgroundImage: `url(${backgroundImg})`,
                     backgroundPosition: 'center left',
                     backgroundSize: 'cover'
                 }}
                 data-bs-theme="dark">
            <Container className="position-relative z-index-2">

                <div className="inner-container-small m-0 mb-8">
                    <h2 className="h1 fw-normal mb-0">Celebrating success with our proud award achievements</h2>
                </div>

                <Row>
                    <Col md={10} xl={6}>
                        <Row className="row-cols-1 row-cols-sm-2 g-4 g-md-5">
                            <Col>
                                <h5>Awards</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0">Honor / Unite agency / 2021</li>
                                    <li className="list-group-item px-0">Honor / Unite agency / 2020</li>
                                    <li className="list-group-item px-0">Honor / Med expert / 2020</li>
                                    <li className="list-group-item px-0">Honor / Frame digital / 2020</li>
                                    <li className="list-group-item px-0">Honor / Unite agency / 2019</li>
                                </ul>
                            </Col>

                            <Col>
                                <h5>CSS Design Award</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0">Website of the day / Emporia / 2020</li>
                                    <li className="list-group-item px-0">Special kudos / to ARCR / 2021</li>
                                    <li className="list-group-item px-0">Special kudos / to ARCR / 2020</li>
                                    <li className="list-group-item px-0">Special kudos / to Reformat club / 2019</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Awards