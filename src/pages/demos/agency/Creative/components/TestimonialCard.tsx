import {TestimonialType} from "@/pages/demos/agency/Creative/types";

type TestimonialCardPropType = {
    testimonial: TestimonialType
}

const TestimonialCard = ({testimonial}: TestimonialCardPropType) => {
    return (
        <>
            <p className="fs-5 text-white mb-0">{testimonial.comment}</p>

            <hr className="border-white my-5"/>

            <div className="d-sm-flex justify-content-between">

                <div className="d-sm-flex align-items-center">

                    <div className="avatar flex-shrink-0">
                        <img className="avatar-img rounded-circle" src={testimonial.user.avatar}
                             alt="avatar"/>
                    </div>

                    <div className="ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="text-white mb-0">{testimonial.user.firstName} {testimonial.user.lastName}</h6>
                        <p className="mb-0 small text-white">{testimonial.user.role}</p>
                    </div>
                </div>

                <img src={testimonial.user.company?.image} className="h-40px mt-3 mt-sm-0"
                     alt=""/>
            </div>
        </>
    )
}

export default TestimonialCard