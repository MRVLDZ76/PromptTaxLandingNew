import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight, BsStarFill, BsStarHalf } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-center">

          <Col lg={5} className="mb-5 mb-sm-0">
            <h2 className="mb-4">Success stories from crypto users</h2>
            <p className="mb-4">Read what our satisfied clients have to say about their experiences using PromptTax for calculating crypto taxes, K-1 forms, and 1040 CPA review.</p>
            <Link className="btn btn-lg btn-primary icon-link icon-link-hover mb-4 mb-lg-8"
              to="/customer/stories">View all reviews<BsArrowRight className="bi" /> </Link>

            <h6 className="mb-2">Trusted by 15K+ crypto users</h6>
            <div className="d-flex">

              <ul className="list-inline icons-center">
                <li className="list-inline-item small me-0"><BsStarFill size={16} className="text-warning me-1" />
                </li>
                <li className="list-inline-item small me-0"><BsStarFill size={16} className="text-warning me-1" />
                </li>
                <li className="list-inline-item small me-0"><BsStarFill size={16} className="text-warning me-1" />
                </li>
                <li className="list-inline-item small me-0"><BsStarFill size={16} className="text-warning me-1" />
                </li>
                <li className="list-inline-item small me-0"><BsStarHalf size={16} className="text-warning me-2" />
                </li>
                <li className="list-inline-item heading-color fw-normal me-0">4.4/5.0</li>
              </ul>
              <span className="text-secondary mx-2 mx-sm-3">|</span>
              <p className="mb-0">3,857 Reviews</p>
            </div>
          </Col>


          <Col lg={7} className="ps-xl-6">
            <Row className="g-4">
              <Col md={6}>
                <Card className="card-body card-hover-shadow border p-4 mb-4">

                  <ul className="list-inline mb-5">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarHalf size={15} className="text-warning" /></li>
                  </ul>

                  <p className="heading-color mb-4">"PromptTax saved me from a crypto tax nightmare. I had over 800 transactions across 5 exchanges and was dreading tax season. The AI auto-synced everything in minutes and generated my Form 8949 perfectly. My CPA was impressed!"</p>

                  <div className="d-flex align-items-center">

                    <div className="avatar avatar-md flex-shrink-0">
                      <div className="avatar-img rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: '48px', height: '48px', fontSize: '18px' }}>
                        SC
                      </div>
                    </div>

                    <div className="ms-2">
                      <h6 className="mb-0">Sarah Chen</h6>
                      <p className="mb-0 small">DeFi Trader</p>
                    </div>
                  </div>

                </Card>

                <Card className="card-body card-hover-shadow border p-4">

                  <ul className="list-inline mb-5">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarHalf size={15} className="text-warning" /></li>
                  </ul>

                  <p className="heading-color mb-4">"As a partnership investor, K-1 forms were always a headache. PromptTax processed my K-1 in under 5 minutes with 100% accuracy. The 1040 integration was seamless, and my CPA approved it without a single revision. Worth every penny!"</p>

                  <div className="d-flex align-items-center">

                    <div className="avatar avatar-md flex-shrink-0">
                      <div className="avatar-img rounded-circle bg-success text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: '48px', height: '48px', fontSize: '18px' }}>
                        MT
                      </div>
                    </div>

                    <div className="ms-2">
                      <h6 className="mb-0">Michael Torres</h6>
                      <p className="mb-0 small">Real Estate & Crypto Investor</p>
                    </div>
                  </div>

                </Card>
              </Col>

              <Col md={6} className="mt-md-7">

                <Card className="card-body card-hover-shadow border p-4 mb-4">

                  <ul className="list-inline mb-5">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarHalf size={15} className="text-warning" /></li>
                  </ul>

                  <p className="heading-color mb-4">"I'm a software engineer who dabbles in crypto and NFTs. Tax time used to stress me out, but PromptTax's AI handled all my complex transactions including staking rewards and gas fees. The CPA review feature gave me peace of mind before filing."</p>

                  <div className="d-flex align-items-center">

                    <div className="avatar avatar-md flex-shrink-0">
                      <div className="avatar-img rounded-circle bg-info text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: '48px', height: '48px', fontSize: '18px' }}>
                        AR
                      </div>
                    </div>

                    <div className="ms-2">
                      <h6 className="mb-0">Alex Rodriguez</h6>
                      <p className="mb-0 small">Software Engineer</p>
                    </div>
                  </div>

                </Card>


                <Card className="card-body card-hover-shadow border p-4">

                  <ul className="list-inline mb-5">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" /></li>
                    <li className="list-inline-item small me-0">
                      <BsStarHalf size={15} className="text-warning" /></li>
                  </ul>

                  <p className="heading-color mb-4">"As a CPA, I recommend PromptTax to all my crypto clients. The tax loss harvesting feature identified $12K in savings for one client. The reports are IRS-compliant and make my 1040 reviews incredibly efficient. A game-changer for crypto taxation."</p>

                  <div className="d-flex align-items-center">

                    <div className="avatar avatar-md flex-shrink-0">
                      <div className="avatar-img rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center fw-bold" style={{ width: '48px', height: '48px', fontSize: '18px' }}>
                        JP
                      </div>
                    </div>

                    <div className="ms-2">
                      <h6 className="mb-0">Jessica Park</h6>
                      <p className="mb-0 small">Certified Public Accountant</p>
                    </div>
                  </div>

                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials