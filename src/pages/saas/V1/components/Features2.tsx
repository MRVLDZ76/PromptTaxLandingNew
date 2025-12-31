import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import about7 from '@/assets/images/about/07.jpg'
import {Card, Col, Container, Row} from "react-bootstrap";
import {BsCloudUpload, BsRobot, BsCheckCircle, BsDownload} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Features2 = () => {
    const steps = [
        {
            number: "1",
            icon: <BsCloudUpload size={32} className="text-primary" />,
            title: "Upload P&L",
            description: "Upload your Profit & Loss statement or describe income to AI"
        },
        {
            number: "2",
            icon: <BsRobot size={32} className="text-primary" />,
            title: "AI Extracts Data",
            description: "AI reads documents, extracts financial data automatically"
        },
        {
            number: "3",
            icon: <BsCheckCircle size={32} className="text-primary" />,
            title: "Review & Edit",
            description: "Verify extracted data, adjust partner allocations if needed"
        },
        {
            number: "4",
            icon: <BsDownload size={32} className="text-primary" />,
            title: "Download K-1s",
            description: "Generate IRS-compliant K-1 PDFs for all partners instantly"
        }
    ];

    return (
        <section className="bg-light">
            <Container>
                <Row className="mb-5">
                    <Col lg={8} xl={7} className="mx-auto text-center">
                        <h2 className="mb-4">How It Works</h2>
                        <p className="mb-0">Generate K-1s in 4 simple steps</p>
                    </Col>
                </Row>

                <Row className="g-4 g-lg-5 mb-5">
                    {steps.map((step, idx) => (
                        <Col md={6} lg={3} key={idx}>
                            <div className="text-center">
                                <div className="icon-lg bg-primary bg-opacity-10 rounded-circle flex-centered mx-auto mb-3">
                                    {step.icon}
                                </div>
                                <div className="badge bg-primary mb-3">{step.number}</div>
                                <h5 className="mb-3">{step.title}</h5>
                                <p className="mb-0">{step.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="text-center">
                    <Card className="card-body bg-white d-inline-block">
                        <h5 className="mb-2">Total Time: <span className="text-primary">5 Minutes</span></h5>
                        <p className="text-muted mb-0">vs. 3-5 weeks with traditional CPAs</p>
                    </Card>
                </div>
            </Container>
        </section>
    )
}

export default Features2