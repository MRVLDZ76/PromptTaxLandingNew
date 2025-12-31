import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {features} from "@/pages/saas/V3/data";
import FeatureCard from "@/pages/saas/V3/components/FeatureCard";
import ExchangeLogos from "@/pages/saas/V3/components/ExchangeLogos";

const FeaturesAndIntegrations = () => {
    return (
        <>
            <section className="bg-dark position-relative overflow-hidden pt-xl-9">
                <Container>

                    <div className="inner-container-small text-center mb-4 mb-sm-5">
                        <h2 className="mb-4 text-white mb-3 display-6 fw-bold">Seamless Crypto Exchange Integration</h2>
                        <p className="mb-4 text-white">Connect your trading accounts in seconds. PromptTax automatically syncs transactions from all major cryptocurrency exchanges and wallets.</p>
                        <Link to="/saas/integrations" className="btn btn-dark mb-0">View all exchanges</Link>
                    </div>

                    <ExchangeLogos />
    
                </Container>
            </section>

            <section className="bg-white position-relative overflow-hidden pt-xl-9">
                <Container>              

                    <Row className="justify-content-center g-sm-6 mt-6 mb-6">
                        {
                            features.map((feature, idx) => (
                                <Col sm={6} lg={4} className="mb-5 mb-sm-0" key={idx}>
                                    <FeatureCard feature={feature}/>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FeaturesAndIntegrations