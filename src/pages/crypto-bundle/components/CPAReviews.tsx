import { Card, Col, Container, Row } from "react-bootstrap"
import { BsStarFill, BsStarHalf, BsCheckCircleFill } from "react-icons/bs"

const CPAReviews = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <h2 className="mb-4">Why CPA´s and Crypto Investors Love Our Bundle</h2>
            <p className="mb-4">
              Hear from real users who've simplified their crypto tax reporting with our Form 8949 bundle. 
              From DeFi traders to NFT collectors, they all trust our IRS-compliant solution.
            </p>
            
            <div className="mb-4">
              <h6 className="mb-2">Trusted by 2,500+ crypto filers</h6>
              <div className="d-flex align-items-center">
                <ul className="list-inline icons-center mb-0">
                  <li className="list-inline-item small me-0">
                    <BsStarFill size={16} className="text-warning me-1" />
                  </li>
                  <li className="list-inline-item small me-0">
                    <BsStarFill size={16} className="text-warning me-1" />
                  </li>
                  <li className="list-inline-item small me-0">
                    <BsStarFill size={16} className="text-warning me-1" />
                  </li>
                  <li className="list-inline-item small me-0">
                    <BsStarFill size={16} className="text-warning me-1" />
                  </li>
                  <li className="list-inline-item small me-0">
                    <BsStarHalf size={16} className="text-warning me-2" />
                  </li>
                  <li className="list-inline-item heading-color fw-normal me-0">4.8/5.0</li>
                </ul>
                <span className="text-secondary mx-2 mx-sm-3">|</span>
                <p className="mb-0">1,250 Reviews</p>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <div className="d-flex align-items-center gap-2">
                <BsCheckCircleFill className="text-success" size={20} />
                <span>100% IRS-compliant</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <BsCheckCircleFill className="text-success" size={20} />
                <span>CPA-verified accuracy</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <BsCheckCircleFill className="text-success" size={20} />
                <span>Unlimited transactions</span>
              </div>
            </div>
          </Col>

          <Col lg={7} className="ps-xl-6">
            <Row className="g-4">
              <Col md={6}>
                <Card className="card-body card-hover-shadow border p-4 mb-4">
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning" />
                    </li>
                  </ul>

                  <p className="heading-color mb-4">
                    "I had 2,400+ crypto transactions across 8 exchanges. The thought of manually filling out Form 8949 was a nightmare. This bundle automated everything—proper pagination, wash sales, Schedule D integration. My CPA said it was perfect. Worth every penny!"
                  </p>

                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-lg flex-shrink-0">
                      <div className="avatar-img rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <span className="fw-bold">DM</span>
                      </div>
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0">David Martinez</h6>
                      <p className="mb-0 small">Active Crypto Trader</p>
                    </div>
                  </div>
                </Card>

                <Card className="card-body card-hover-shadow border p-4">
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarHalf size={15} className="text-warning" />
                    </li>
                  </ul>

                  <p className="heading-color mb-4">
                    "The wash sale detection is genius! It caught 47 wash sales I didn't even know about. The basis adjustments were automatically calculated and marked with Code 'W' on Form 8949. Saved me from a potential audit issue."
                  </p>

                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-lg flex-shrink-0">
                      <div className="avatar-img rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <span className="fw-bold">JP</span>
                      </div>
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0">Jennifer Park</h6>
                      <p className="mb-0 small">DeFi Investor</p>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col md={6} className="mt-md-7">
                <Card className="card-body card-hover-shadow border p-4 mb-4">
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning" />
                    </li>
                  </ul>

                  <p className="heading-color mb-4">
                    "Finally, a crypto tax solution that actually understands the technical details! The field mapping is precise (f1_03-10 format), pagination splits at exactly 11 transactions per page, and totals are isolated to the last page only. As a software engineer, I appreciate the accuracy."
                  </p>

                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-lg flex-shrink-0">
                      <div className="avatar-img rounded-circle bg-info text-white d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <span className="fw-bold">RT</span>
                      </div>
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0">Ryan Thompson</h6>
                      <p className="mb-0 small">Software Engineer & Crypto Holder</p>
                    </div>
                  </div>
                </Card>

                <Card className="card-body card-hover-shadow border p-4">
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarHalf size={15} className="text-warning" />
                    </li>
                  </ul>

                  <p className="heading-color mb-4">
                    "I upgraded to the CPA review package and it was the best decision. The CPA caught a classification error in my NFT sales and helped me optimize my tax strategy. The review letter gave me confidence when filing, and the phone consultation answered all my questions."
                  </p>

                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-lg flex-shrink-0">
                      <div className="avatar-img rounded-circle bg-warning text-white d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <span className="fw-bold">LA</span>
                      </div>
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0">Lisa Anderson</h6>
                      <p className="mb-0 small">NFT Collector & Trader</p>
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

export default CPAReviews
