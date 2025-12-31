import GlightBox from '@/components/GlightBox'

import masonryImg5 from '@/assets/images/portfolio/masonry/05.jpg'
import masonryImg6 from '@/assets/images/portfolio/masonry/06.jpg'
import masonryImg8 from '@/assets/images/portfolio/masonry/08.jpg'
import { Col, Row } from 'react-bootstrap'

const LightBoxSection = () => {
  return (
    <Col xs={12} className="mt-6">
      <Row className="g-4 g-xl-6">
        <Col sm={4}>
          <GlightBox image={masonryImg8} data-glightbox data-gallery="image-popup">
            <img src={masonryImg8} className="rounded" alt="blog-img" />
          </GlightBox>
        </Col>
        <Col sm={4}>
          <GlightBox image={masonryImg6} data-glightbox data-gallery="image-popup">
            <img src={masonryImg6} className="rounded mt-sm-6" alt="blog-img" />
          </GlightBox>
        </Col>
        <Col sm={4}>
          <GlightBox image={masonryImg5} data-glightbox data-gallery="image-popup">
            <img src={masonryImg5} className="rounded" alt="blog-img" />
          </GlightBox>
        </Col>
      </Row>
    </Col>
  )
}

export default LightBoxSection