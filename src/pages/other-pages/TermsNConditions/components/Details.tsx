import { Col, Container, Row } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

const Details = () => {
  return (
    <section className="pt-lg-8 pt-xl-9">
      <Container className="pt-4 pt-lg-0">
        <Row>
          <Col xl={10} className="mx-auto">
            <div className="text-center mb-6">
              <h1>Terms of Service</h1>
              <p className="lead mb-0">Last updated: December 23, 2025</p>
            </div>

            <h5 className="mb-3">1. Acceptance of Terms</h5>
            <p>By accessing and using TaxAgent, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. TaxAgent is an AI-powered tax automation platform designed for accounting professionals and tax preparers.</p>

            <h5 className="mb-3 mt-5">2. Service Description</h5>
            <p>TaxAgent provides automated tax document processing, form population, client management, and e-filing services. Our services include but are not limited to:</p>
            <ul className="list-group list-group-borderless mb-3">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />AI-powered document extraction and data processing
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Automated tax form population and validation
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Client portal and communication tools
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />E-signature workflow management
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />IRS e-filing integration and submission
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Compliance reporting and audit trails
              </li>
            </ul>

            <h5 className="mb-3 mt-5">3. Professional Use Only</h5>
            <p>TaxAgent is intended exclusively for use by licensed tax professionals, CPAs, accounting firms, and authorized tax preparers. Users must maintain appropriate professional licenses and certifications required by their jurisdiction. You are responsible for ensuring compliance with all applicable tax preparation regulations.</p>

            <h5 className="mb-3 mt-5">4. Account Responsibilities</h5>
            <p>As a TaxAgent user, you agree to:</p>
            <ul className="list-group list-group-borderless mb-3">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Provide accurate and current account information
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Maintain the security of your login credentials
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Be responsible for all activities under your account
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Notify us immediately of any unauthorized use
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Ensure proper client authorization for data processing
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Maintain professional standards and ethical practices
              </li>
            </ul>

            <h5 className="mb-3 mt-5">5. Data Security and Confidentiality</h5>
            <p>We implement industry-standard security measures including AES-256 encryption, SOC 2 Type II compliance, and multi-factor authentication. While we provide robust security infrastructure, you remain responsible for maintaining client confidentiality and ensuring proper data handling in accordance with professional standards and applicable privacy laws.</p>

            <h5 className="mb-3 mt-5">6. AI Technology Disclaimer</h5>
            <p>TaxAgent uses artificial intelligence to automate tax document processing and form population. While our AI achieves high accuracy rates, you maintain professional responsibility for reviewing, verifying, and approving all automated outputs before submission. AI-generated results should be treated as drafts requiring professional review.</p>

            <h5 className="mb-3 mt-5">7. Pricing and Billing</h5>
            <p>Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to modify pricing with 30 days' notice. Enterprise customers may have custom billing terms as specified in their separate agreements.</p>

            <h5 className="mb-3 mt-5">8. Limitation of Liability</h5>
            <p>TaxAgent provides tools to assist tax professionals but does not replace professional judgment or responsibility. We are not liable for tax preparation errors, missed deadlines, or regulatory non-compliance. Our liability is limited to the amount paid for services in the preceding 12 months.</p>

            <h5 className="mb-3 mt-5">9. Service Availability</h5>
            <p>We strive for 99.9% uptime but cannot guarantee uninterrupted service. Maintenance windows are scheduled during low-usage periods with advance notice. We maintain redundant systems and backup procedures to minimize service disruptions, especially during tax season.</p>

            <h5 className="mb-3 mt-5">10. Termination</h5>
            <p>Either party may terminate this agreement with 30 days' notice. Upon termination, you may export your data for 90 days, after which it will be securely deleted. We reserve the right to suspend or terminate accounts for violation of these terms or non-payment.</p>

            <h5 className="mb-3 mt-5">11. Modifications</h5>
            <p>We may modify these terms with 30 days' notice via email or platform notification. Continued use of TaxAgent after modifications constitutes acceptance of the new terms. Material changes will be clearly communicated with options to export data if you disagree.</p>

            <h5 className="mb-3 mt-5">12. Contact Information</h5>
            <p>For questions about these Terms of Service, please contact us at <Link to="mailto:hi@prompt.tax" className="fw-normal text-decoration-underline">hi@prompt.tax</Link> or visit our <Link to="/contact" className="fw-normal text-decoration-underline">contact page</Link>.</p>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Details