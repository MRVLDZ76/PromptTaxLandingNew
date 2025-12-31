import { currency } from "@/states/constants";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pattern2 from '@/assets/images/elements/decoration-pattern-2.svg'
import { BsCheckLg } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className="pb-5 mb-30">
      <Container>
        <div className="inner-container text-center mb-4 mb-sm-6">
  
          <h2 className="mb-0 mt-4">Choose Your K-1 Processing Plan</h2>
          <p className="mb-0 mt-3">Monthly subscription or annual one-time payment options available</p>
        </div>

        <Row className="g-4">
          {/* Self-Service K-1 Plan */}
          <Col lg={4}>
            <Card className="card-body h-100 p-4 p-sm-5">
              <div className="badge bg-light text-dark mb-3">
                Self-Service
              </div>
              <h4 className="mb-3">Self-Service K-1</h4>
              <div className="mb-3">
                <span className="h2">{currency}59</span> <span className="text-muted">/month</span>
              </div>
              <div className="mb-4">
                <span className="text-muted">or </span>
                <span className="h5">{currency}49</span> <span className="text-muted">/year</span>
              </div>
              <p className="mb-4">
                DIY tax prep for partnerships and S-corps
              </p>

              <ul className="list-group list-group-borderless mb-4">
                <li className="list-group-item heading-color mb-0 icons-center">
                  <BsCheckLg className="text-primary me-1" />
                  Process up to 5 K-1 forms
                </li>
                <li className="list-group-item heading-color mb-0 icons-center">
                  <BsCheckLg className="text-primary me-1" />
                  AI-powered automation
                </li>
                <li className="list-group-item heading-color mb-0 icons-center">
                  <BsCheckLg className="text-primary me-1" />
                  Form 1040 integration
                </li>
                <li className="list-group-item heading-color mb-0 icons-center">
                  <BsCheckLg className="text-primary me-1" />
                  No CPA review
                </li>
              </ul>

              <Link to="" className="btn btn-dark w-100">
                Get Started
              </Link>
            </Card>
          </Col>

          {/* K-1 + CPA Review Plan */}
          <Col lg={4}>
            <Card className="card-body h-100 p-4 p-sm-5 border-primary position-relative">
              <div className="position-absolute top-0 end-0 mt-n3 me-3">
                <span className="badge bg-primary text-white">RECOMMENDED</span>
              </div>
              <div className="badge bg-primary text-white mb-3">
                Professional
              </div>
              <h4 className="mb-3">K-1 + CPA Review</h4>
              <div className="mb-3">
                <span className="h2">{currency}149</span> <span className="text-muted">/month</span>
              </div>
              <div className="mb-4">
                <span className="text-muted">or </span>
                <span className="h5">{currency}129</span> <span className="text-muted">/year</span>
              </div>
              <p className="mb-4">
                Everything in Self-Service PLUS professional oversight
              </p>

              <ul className="list-group list-group-borderless mb-4">
                <li className="list-group-item heading-color mb-0 icons-center">
                  <BsCheckLg className="text-primary me-1" />
                  Unlimited K-1 forms
                </li>
                <li className="list-group-item heading-color mb-0 icons-center">
                  <BsCheckLg className="text-primary me-1" />
                  Dedicated CPA review & verification
                </li>
                <li className="list-group-item heading-color mb-0 icons-center">
                  <BsCheckLg className="text-primary me-1" />
                  Tax optimization recommendations
                </li>
                <li className="list-group-item heading-color mb-0 icons-center">
                  <BsCheckLg className="text-primary me-1" />
                  30-min video consultation
                </li>
                <li className="list-group-item heading-color mb-0 icons-center">
                  <BsCheckLg className="text-primary me-1" />
                  All Self-Service features
                </li>
              </ul>

              <Link to="" className="btn btn-primary w-100">
                Get Started
              </Link>
            </Card>
          </Col>

          {/* Enterprise Plan */}
          <Col lg={4}>
            <Card className="bg-dark text-white h-100 overflow-hidden p-4 p-sm-5">
              <div className="position-absolute top-0 end-0 mt-n3 me-n4">
                <img
                  src={pattern2}
                  className="opacity-2 h-200px"
                  alt=""
                />
              </div>

              <Card.Body className="bg-transparent position-relative p-0">
                <div className="badge bg-primary text-white mb-3">Enterprise</div>
                <h4 className="text-white mb-3">Enterprise</h4>
                <div className="mb-4">
                  <span className="h5 text-white">Custom pricing</span>
                </div>
                <p className="mb-4 text-white">
                  For accounting firms & large partnerships
                </p>

                <ul className="list-group list-group-borderless mb-4">
                  <li className="list-group-item text-white mb-0 icons-center bg-transparent">
                    <BsCheckLg className="text-primary me-1" />
                    White-label options
                  </li>
                  <li className="list-group-item text-white mb-0 icons-center bg-transparent">
                    <BsCheckLg className="text-primary me-1" />
                    API access
                  </li>
                  <li className="list-group-item text-white mb-0 icons-center bg-transparent">
                    <BsCheckLg className="text-primary me-1" />
                    Dedicated CPA team
                  </li>
                  <li className="list-group-item text-white mb-0 icons-center bg-transparent">
                    <BsCheckLg className="text-primary me-1" />
                    Unlimited everything
                  </li>
                  <li className="list-group-item text-white mb-0 icons-center bg-transparent">
                    <BsCheckLg className="text-primary me-1" />
                    Priority support
                  </li>
                </ul>
              </Card.Body>

              <Card.Footer className="bg-transparent d-grid text-center p-0 mt-4">
                <Link to="/contact/v2" className="btn btn-white">
                  Contact Sales
                </Link>
                <p className="mb-0 text-white mt-2">
                  Get personalized demo and custom plan
                </p>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Pricing