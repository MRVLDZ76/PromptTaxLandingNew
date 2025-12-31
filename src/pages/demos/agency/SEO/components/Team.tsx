import {Col, Container, Row} from "react-bootstrap";
import {teamMembers} from "@/pages/demos/agency/SEO/data";
import MemberCard from "@/pages/demos/agency/SEO/components/MemberCard";

const Team = () => {
    return (
        <section className="pb-0">
            <Container>
                <div className="inner-container">

                    <h2 className="text-center mb-4 mb-sm-5">Our leadership</h2>

                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-0 justify-content-center">
                        {
                            teamMembers.map((member, idx) => (
                                <Col key={idx}>
                                    <MemberCard member={member}/>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Team