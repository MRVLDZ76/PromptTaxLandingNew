import { TestimonialType } from "@/pages/demos/agency/Creative/types";
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs";

type TestimonialCardPropType = {
  testimonial: TestimonialType
}

const TestimonialCard = ({ testimonial }: TestimonialCardPropType) => {
  return (
    <>
      <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-4">
        <img className="avatar-img rounded-circle" src={testimonial.user.avatar}
          alt="avatar" />
      </div>
      <p className="heading-color fs-4 fw-normal mb-4">"{testimonial.comment}"</p>

      {
        testimonial.rating && <ul className="list-inline mb-4">
          {
            Array(Math.floor(testimonial.rating)).fill(0).map((_star, idx) => (
              <li key={idx}
                className="list-inline-item me-1">
                <BsFillStarFill size={21} className="text-primary" />
              </li>
            ))
          }
          {
            !Number.isInteger(testimonial.rating) &&
            <BsStarHalf size={21} className="text-primary me-1" />
          }
          {
            testimonial.rating < 5 && Array(5 - Math.ceil(testimonial.rating)).fill(0).map((_star, idx) => (
              <li key={idx}
                className="list-inline-item me-1">
                <BsStar size={21} className="text-primary" />
              </li>
            ))
          }
        </ul>
      }

      <div
        className="d-flex gap-2 align-items-center justify-content-center flex-wrap">
        <h5 className="mb-0">{testimonial.user.firstName} {testimonial.user.lastName}</h5>
        <div className="vr"></div>
        <p className="mb-0">{testimonial.user.role}</p>
      </div>
    </>
  )
}

export default TestimonialCard