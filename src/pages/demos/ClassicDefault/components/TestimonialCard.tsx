import {TestimonialType} from "@/pages/demos/ClassicDefault/types";

type TestimonialCardPropType = {
    testimonial: TestimonialType
}

import {BsFillStarFill, BsStar, BsStarHalf} from "react-icons/bs";
import {Card} from "react-bootstrap";

const TestimonialCard = ({testimonial}: TestimonialCardPropType) => {
    return (
        <Card className="bg-transparent h-100">
            <Card.Body className="p-0">

                {
                    testimonial.rating && <ul className="list-inline mb-2">
                        {
                            Array(Math.floor(testimonial.rating)).fill(0).map((_star, idx) => (
                                <li key={idx}
                                    className="list-inline-item me-1">
                                    <BsFillStarFill size={18} className="text-warning"/>
                                </li>
                            ))
                        }
                        {
                            !Number.isInteger(testimonial.rating) &&
                            <BsStarHalf size={18} className="text-warning me-1"/>
                        }
                        {
                            testimonial.rating < 5 && Array(5 - Math.ceil(testimonial.rating)).fill(0).map((_star, idx) => (
                                <li key={idx}
                                    className="list-inline-item me-1">
                                    <BsStar size={18} className="text-warning"/>
                                </li>
                            ))
                        }
                    </ul>
                }

                <p className="heading-color fw-normal">
                    {testimonial.comment}
                </p>
            </Card.Body>
            <Card.Footer className="bg-transparent p-0">
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm flex-shrink-0 me-2">
                        <img
                            className="avatar-img rounded"
                            src={testimonial.user.avatar}
                            alt="avatar"
                        />
                    </div>
                    <p className="mb-0">By {testimonial.user.firstName} {testimonial.user.lastName}</p>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default TestimonialCard