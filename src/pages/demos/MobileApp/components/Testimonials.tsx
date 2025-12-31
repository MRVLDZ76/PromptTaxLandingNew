import {Col, Container, Row} from "react-bootstrap";
import {testimonials} from "@/pages/demos/MobileApp/data";
import TestimonialCard from "@/pages/demos/MobileApp/components/TestimonialCard";
import {useEffect} from "react";
import Isotope from "isotope-layout"

const Testimonials = () => {

    useEffect(() => {
        const grid = document.querySelector<HTMLElement>('.demo-grid');
        if (grid) {
            const iso = new Isotope(grid, {
                itemSelector: '.demo-grid-item',
                percentPosition: true,
                layoutMode: "masonry"
            });

            setTimeout(() => {
                iso.arrange({})
            }, 100)
        }
    }, [])

    return (
        <section className="pb-0">
            <Container>

                <div className="inner-container-small text-center mb-4 mb-sm-5">
                    <h2 className="mb-0">What people say about us</h2>
                </div>

                <Row className="row-cols-sm-2 row-cols-lg-3 g-4 g-lg-5 demo-grid"
                     data-isotope='{"layoutMode": "masonry"}'>
                    {
                        testimonials.map((testimonial, idx) => (
                            <Col key={idx} className="demo-grid-item">
                                <TestimonialCard testimonial={testimonial}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials