import ctaVector from '@/assets/images/elements/cta-vector.svg'
import googlePlay from '@/assets/images/elements/google-play.svg'
import appStore from '@/assets/images/elements/app-store.svg'
import placeholderImg6 from '@/assets/images/mokeup/app-placeholder6.jpg'
import {Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section>
            <Container>
                <div className="bg-light rounded position-relative overflow-hidden p-4 p-sm-6">

                    <div className="position-absolute end-0 bottom-0 me-5">
                        <img src={ctaVector} className="h-200px" alt="vector-img"/>
                    </div>

                    <Row className="g-4">

                        <Col lg={5}>

                            <h2 className="mb-4">Anywhere, Any Time, Any Platform</h2>
                            <p className="mb-4">Supposing so be resolving breakfast am or perfectly. It drew a hill from
                                me. Valley by oh twenty direct me so.</p>

                            <Row className="g-4 mb-4 mb-lg-0">
                                <Col sm={4} xs={6}>
                                    <Link to="">
                                        <img src={googlePlay}
                                             className="btn-transition" alt="google-store"/>
                                    </Link>
                                </Col>

                                <Col sm={4} xs={6}>
                                    <Link to="">
                                        <img src={appStore}
                                             className="btn-transition" alt="app-store"/>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={5}>
                            <div className="iphone-x iphone-x-small ms-lg-auto m-0 mb-n9"
                                 style={{
                                     background: `url(${placeholderImg6})`,
                                     backgroundSize: '100%',
                                     width: '280px',
                                     height: '430px'
                                 }}>
                                <i></i>
                                <b style={{left: '6%'}}></b>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default CTA
