import {Card, Col, Container, Row} from "react-bootstrap";
import {BsRobot, BsLightningChargeFill, BsShieldCheck, BsCurrencyDollar, BsPeopleFill, BsFileEarmarkText} from "react-icons/bs";

const Tools = () => {
    const k1Features = [
        {
            icon: BsRobot,
            title: "AI-First Experience",
            description: "No forms. Just chat. Upload P&L or describe income naturally. AI extracts data, calculates allocations, and generates K-1s."
        },
        {
            icon: BsLightningChargeFill,
            title: "Unmatched Speed",
            description: "Skip the 5-week CPA bottleneck. Generate unlimited K-1s for all partners in 5 Minutes. File weeks earlier."
        },
        {
            icon: BsShieldCheck,
            title: "Compliance & Safety",
            description: "IRS-compliant Form 1065 Schedule K-1. Real-time validation checks. CPA-reviewed format. Zero audit risk."
        },
        {
            icon: BsCurrencyDollar,
            title: "Massive Savings",
            description: "$49 flat fee for unlimited partners vs. $500-$2,000 per K-1 with CPAs. Save $2,000+ on partnership taxes."
        },
        {
            icon: BsPeopleFill,
            title: "Unlimited Partners",
            description: "Generate K-1s for 3 partners or 30 partners - same price. No per-partner fees. Scale infinitely."
        },
        {
            icon: BsFileEarmarkText,
            title: "1040 Integration",
            description: "K-1 income auto-transfers to Schedule E. Complete personal return in same platform. File both returns together."
        }
    ];

    return (
        <section className="pt-0">
            <Container>

                <div className="inner-container-small text-center mb-4 mb-sm-5">
                    <h2 className="mb-4">Why Choose PromptTax K-1 Generator?</h2>
                    <p className="mb-0">Revolutionary approach to partnership tax filing</p>
                </div>

                <Row className="g-4 g-lg-6">
                    {k1Features.map((feature, idx) => {
                        const IconComponent = feature.icon;
                        return (
                            <Col key={idx} md={6} lg={4}>
                                <Card className="card-body bg-light text-center p-4 h-100">
                                    <div className="icon-lg bg-light rounded-circle flex-centered text-purple mb-3 mx-auto">
                                        <IconComponent size={32} />
                                    </div>
                                    <h5 className="mb-3">{feature.title}</h5>
                                    <p className="mb-0">{feature.description}</p>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Tools