import pricingImage from '@/assets/images/elements/pricing.svg'
import { Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { pricingData } from "@/pages/demos/MobileApp/data";
import { currency } from "@/states/constants";
import { Link } from 'react-router-dom';


const Pricing = () => {

  const [planDuration, setPlanDuration] = useState<'month' | 'year'>('month')

  const handleChange = () => {
    if (planDuration === 'month') {
      return setPlanDuration('year')
    }
    return setPlanDuration('month')
  }

  return (
    <section className="pb-0 price-wrap">
      <Container>
        <Row className="g-4 g-lg-5">

          <Col lg={4} className="text-center text-lg-start">
            <h2 className="mb-4">Pick the best plan that suits you</h2>
            <p className="mb-4">Two before narrow not relied how except moment myself Dejection assurance
              mrs led certainly.</p>

            <Form
              className="d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-xl-0">

              <span className="fw-semibold heading-color">Monthly</span>

              <div className="form-switch form-check-md mx-2 mb-0">
                <Form.Check type="switch" className="mt-0 price-toggle"
                  defaultChecked={false} onChange={handleChange} />
              </div>

              <span className="fw-semibold heading-color">Yearly</span>
            </Form>

            <img src={pricingImage} className="h-200px d-flex mx-auto ms-lg-auto"
              alt="pricing-vector" />
          </Col>

          {
            pricingData.map((item) => (
              item.plans.map((plan, idx) => {
                {
                  if (item.duration === planDuration)
                    return (
                      <Col sm={6} lg={4} key={idx}>
                        <div className="d-md-flex justify-content-between mb-4 mb-sm-0 ms-xl-5">
                          <div className="text-center text-lg-start">
                            <div className="badge bg-primary mb-3">{plan.badge}</div>
                            <h6 className="mb-4"><span
                              className="h1 mb-0 plan-price">{currency}{plan.price}</span> /{item.duration}
                            </h6>
                            <h6>Quick look at all the features</h6>

                            <ul className="list-group list-group-borderless mb-2 mb-sm-4">
                              {
                                plan.features.map((feature, idx) => {
                                  const Icon = feature.icon
                                  return (
                                    <li className="list-group-item heading-color mb-0"
                                      key={idx}>
                                      <Icon className="text-primary me-1" />
                                      {feature.title}
                                    </li>
                                  )
                                })
                              }
                            </ul>

                            <Link to="" className="btn btn-dark">Start a free 7-day
                              trial</Link>
                          </div>

                          <div className="vr opacity-1 ms-md-5 d-none d-md-block"></div>
                        </div>
                      </Col>
                    )
                }
              })
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Pricing