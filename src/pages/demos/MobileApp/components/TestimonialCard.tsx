import {TestimonialType} from "@/pages/demos/MobileApp/types";
import { Card } from "react-bootstrap";
import {BsFillStarFill, BsStar, BsStarHalf} from "react-icons/bs";

type TestimonialCardPropsType = {
    testimonial: TestimonialType
}

const TestimonialCard = ({testimonial}: TestimonialCardPropsType) => {
    return (
        <Card className="card-body border h-full">
            <p className="mb-2">“{testimonial.comment}”</p>

            {
                testimonial.rating && <ul className="list-inline mb-3">
                    {
                        Array(Math.floor(testimonial.rating)).fill(0).map((_star, idx) => (
                            <li key={idx}
                                className="list-inline-item me-1">
                                <BsFillStarFill size={14} className="text-warning"/>
                            </li>
                        ))
                    }
                    {
                        !Number.isInteger(testimonial.rating) &&
                        <BsStarHalf size={14} className="text-warning me-1"/>
                    }
                    {
                        testimonial.rating < 5 && Array(5 - Math.ceil(testimonial.rating)).fill(0).map((_star, idx) => (
                            <li key={idx}
                                className="list-inline-item me-1">
                                <BsStar size={14} className="text-warning"/>
                            </li>
                        ))
                    }
                </ul>
            }

            <div className="d-flex align-items-center">

                <div className="avatar avatar-xs me-2">
                    <img className="avatar-img rounded-circle" src={testimonial.user.avatar}
                         alt="avatar"/>
                </div>

                <small
                    className="mb-0 heading-color fw-semibold">{testimonial.user.firstName} {testimonial.user.lastName}</small>
            </div>
        </Card>
    )
}

export default TestimonialCard