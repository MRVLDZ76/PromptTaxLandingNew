import {Card, Row, Col} from "react-bootstrap";
import {TestimonialType} from "@/pages/saas/V4/types";
import {BsFillStarFill, BsStar, BsStarHalf} from "react-icons/bs";

type TestimonialCardPropsType = {
    testimonial: TestimonialType
}
const TestimonialCard = ({testimonial}: TestimonialCardPropsType) => {
    return (
        <Card className="p-3 border">
            <Row className="g-4">
                <Col md={4}>
                    <img src={testimonial.user.avatar} className="img-fluid card-img"
                         alt="testimonial img"/>
                </Col>
                <Col md={8}>
                    <Card.Body
                        className="d-flex flex-column align-items-start h-100 p-2">

                        <img src={testimonial.user.company.image} className="h-30px mb-3"
                             alt="client-img"/>

                        <q className="mb-3 heading-color">{testimonial.comment}</q>

                        <div className="d-flex flex-column mt-auto">

                            {
                                testimonial.rating && <ul className="list-inline mb-0">
                                    {
                                        Array(Math.floor(testimonial.rating)).fill(0).map((_star, idx) => (
                                            <li key={idx}
                                                className="list-inline-item small me-1">
                                                <BsFillStarFill size={14} className="text-warning"/>
                                            </li>
                                        ))
                                    }
                                    {
                                        !Number.isInteger(testimonial.rating) &&
                                        <li
                                            className="list-inline-item small me-1">
                                            <BsStarHalf size={14} className="text-warning me-1"/>
                                        </li>
                                    }
                                    {
                                        testimonial.rating < 5 && Array(5 - Math.ceil(testimonial.rating)).fill(0).map((_star, idx) => (
                                            <li key={idx}
                                                className="list-inline-item small me-1">
                                                <BsStar size={14} className="text-warning"/>
                                            </li>
                                        ))
                                    }
                                </ul>
                            }

                            <p className="heading-color fw-bold mb-0">{testimonial.user.firstName} {testimonial.user.lastName}</p>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}
export default TestimonialCard