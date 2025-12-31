import shopBg3 from '@/assets/images/shop/bg/03.jpg'
import {Link} from 'react-router-dom'
import {Card, Col, Container, Row} from "react-bootstrap";
import TrendingProductCard from "@/pages/shop/Index/components/TrendingProductCard";
import {trendingProducts} from '@/assets/data/products'
import {BsArrowRight} from 'react-icons/bs'

const TrendingProducts = () => {
    return (

        <section className="pt-0">
            <Container>
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3>What's trending now</h3>
                    <Link to='' className="icon-link icon-link-hover text-body-secondary text-primary-hover">
                        See all products
                        <BsArrowRight/>
                    </Link>
                </div>
                <Row className="g-4 g-sm-5">
                    <Col lg={8} xl={6}>
                        <Card className="p-0 h-100" style={{
                            backgroundImage: `url(${shopBg3})`,
                            backgroundPosition: 'center left',
                            backgroundSize: 'cover'
                        }}>
                            <Card.Body className="p-5 mb-8">
                                <span
                                    className="bg-dark text-white rounded fw-semibold small px-3 py-2">New Arrival</span>
                                <h4 className="text-white my-4">Powerful performance. Versatile design.</h4>
                                <Link to="" className="btn btn-lg btn-outline-white icon-link icon-link-hover mb-0">
                                    Shop now
                                    <BsArrowRight/>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    {trendingProducts.map((product,idx) =>
                        <Col sm={6} lg={4} xl={3} key={idx}>
                            <TrendingProductCard key={product.id} product={product}/>
                        </Col>
                    )}

                </Row>
            </Container>
        </section>
    )
}

export default TrendingProducts