import {BsArrowRight} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {Col, Container, Row} from "react-bootstrap";
import {brands} from "@/pages/shop/Index/data";

const BrandCollection = () => {

    return (
        <section className="pt-0">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5} xl={4} className="mb-5 mb-lg-0">
                        <h2 className="mb-4">Their Impressive Product Collections</h2>
                        <Link className="icon-link icon-link-hover heading-color text-primary-hover" to="">Explore all
                            brands<BsArrowRight/> </Link>
                    </Col>
                    <Col lg={7} className="text-center ms-auto">
                        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 g-md-6">
                            {brands.map((brand, idx) => (
                                <Col key={idx}>
                                    <Link to=""><img src={brand.image} className="grayscale" alt="client-img"/></Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BrandCollection