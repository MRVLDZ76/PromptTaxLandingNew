import {Col, Container, Row} from "react-bootstrap";
import productDetailImg from "@/assets/images/products/detail-img.png";

const ProductImage = () => {
    return (

        <section className="pb-0">
            <Container>
                <Row>
                    <Col md={10} className="mx-auto">
                        <img src={productDetailImg} alt="product-mechanism"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductImage