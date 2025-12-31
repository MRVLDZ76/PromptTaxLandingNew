import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import { FaStar } from 'react-icons/fa6';
import AccuracyVisual from './AccuracyVisual';
import ExchangeIntegrationsVisual from './ExchangeIntegrationsVisual';
import K1FormsVisual from './K1FormsVisual';

const Features = () => {
    return (
        <section className="pb-0">
            <Container>

                <div className="inner-container text-center mb-4 mb-sm-5">
                    <h2 className="mb-4">Complete Crypto Tax Automation</h2>
                    <p className="mb-0">From transaction imports to capital gains calculations, our AI agents handle the complexity while ensuring IRS compliance and accuracy.</p>
                </div>

                <Row className="justify-content-center g-4 g-md-6">

                    <Col md={6} lg={4}>
                        <Card className="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100">
                            <Card.Body className="px-sm-5 pt-sm-5">
                                <h5 className="mb-3">15+ Exchange Integrations</h5>
                                <p className="mb-3">Automatically import transactions from Coinbase, Binance, Kraken, and other major exchanges. No manual CSV uploads required.</p>
                                <Link to="/saas/integrations" className="btn btn-sm btn-dark mb-0">View all exchanges</Link>
                            </Card.Body>

                            <Card.Footer className="bg-transparent p-0">
                                <ExchangeIntegrationsVisual />
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col md={6} lg={4}>
                        <Card className="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100">
                            <Card.Body className="px-sm-5 pt-sm-5">
                                <h5 className="mb-3">AI-Powered Accuracy</h5>
                                <p className="mb-3">Machine learning algorithms calculate cost basis, wash sales, and capital gains with 99.8% accuracy across thousands of transactions.</p>

                                <p className="mb-0">
                                    <span className="fw-bold heading-color icons-center">99.8% <FaStar size={18}
                                        className="text-primary me-2 ms-1"/>|</span>
                                    <span className="ms-2">Accuracy rate verified by CPAs</span>
                                </p>
                            </Card.Body>

                            <Card.Footer className="bg-transparent p-0">
                                <AccuracyVisual />
                            </Card.Footer>
                        </Card>
                    </Col>


                    <Col md={6} lg={4}>
                        <Card className="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100">
                            <Card.Body className="px-sm-5 pt-sm-5">
                                <h5 className="mb-3">DeFi & Staking Support</h5>
                                <p className="mb-3">Track staking rewards, liquidity pools, and DeFi transactions. Automatic classification of income types for accurate tax reporting.</p>
                                <Link to="/portfolio/showcase" className="icon-link icon-link-hover">Learn about DeFi tracking<BsArrowRight className='bi'/> </Link>
                            </Card.Body>

                            <Card.Footer className="bg-transparent p-0">
                                <K1FormsVisual />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Features