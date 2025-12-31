import {Col, Container, Row} from "react-bootstrap";
import CountUp from 'react-countup';
import {statData} from "@/pages/demos/agency/Digital/data";

const Statistics = () => {
    return (
        <section className="pb-0">
            <Container>
                <Row className="g-4 g-lg-5 justify-content-center">
                    {
                        statData.map((item, idx) => (
                            <Col sm={6} md={4} className="text-center" key={idx}>
                                <div className="display-1 heading-color d-flex justify-content-center">
                                    {
                                        item.prefix && <span className="text-primary">{item.prefix}</span>
                                    }
                                    <CountUp className="purecounter" delay={3} end={item.stat}/>
                                    {item.suffix && <span className="mb-0">{item.suffix}</span>}
                                </div>
                                <h6 className="text-body fw-normal position-relative">{item.title}</h6>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Statistics