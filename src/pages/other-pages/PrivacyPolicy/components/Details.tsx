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
              <h1>Privacy Policy</h1>
              <p className="lead mb-0">Last updated: December 23, 2025</p>
            </div>

            <h5 className="mb-3">1. Information We Collect</h5>
            
            <h6 className="mb-2 mt-4">Account Information</h6>
            <p>We collect information you provide when creating an account, including your name, email address, firm information, professional license details, and billing information.</p>

            <h6 className="mb-2 mt-4">Tax Document Data</h6>
            <p>We process tax documents and related data you upload for automation services, including client information, financial data, and completed tax forms. This data is processed solely to provide our tax automation services.</p>

            <h6 className="mb-2 mt-4">Usage Information</h6>
            <p>We collect information about how you use TaxAgent, including features accessed, documents processed, time spent on platform, and technical information like IP address and browser type.</p>

            <h5 className="mb-3 mt-5">2. How We Use Your Information</h5>
            <p>We use the information we collect to:</p>
            <ul className="list-group list-group-borderless mb-3">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Provide and improve our tax automation services
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Process and populate tax forms using AI technology
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Facilitate secure client communication and document sharing
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Ensure platform security and prevent unauthorized access
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Provide customer support and technical assistance
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Send important service updates and security notifications
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Comply with legal obligations and regulatory requirements
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />Improve our AI models and automation accuracy (using aggregated, anonymized data only)
              </li>
            </ul>

            <h5 className="mb-3 mt-5">3. Data Security Measures</h5>
            <p>We implement comprehensive security measures to protect your data:</p>
            <ul className="list-group list-group-borderless mb-3">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Access Controls:</strong> Multi-factor authentication and role-based access permissions
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Infrastructure:</strong> SOC 2 Type II compliant cloud infrastructure with redundancy
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Monitoring:</strong> 24/7 security monitoring and intrusion detection systems
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Auditing:</strong> Regular security audits and penetration testing
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Compliance:</strong> SSAE 18 SOC 2 Type II and industry standard security frameworks
              </li>
            </ul>

            <h5 className="mb-3 mt-5">4. Information Sharing</h5>
            <p>We do not sell or rent your personal information. We may share information only in these limited circumstances:</p>
            <ul className="list-group list-group-borderless mb-3">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Service Providers:</strong> Trusted third-party providers who assist in delivering our services (cloud hosting, payment processing)
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Legal Requirements:</strong> When required by law, court order, or government request
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with continued privacy protection)
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Consent:</strong> When you explicitly authorize us to share specific information
              </li>
            </ul>
            <p>All service providers are contractually bound to maintain confidentiality and security standards equivalent to our own.</p>

            <h5 className="mb-3 mt-5">5. Client Data Confidentiality</h5>
            <p>We understand that tax professionals have special obligations regarding client confidentiality. Client data processed through TaxAgent remains under your control and ownership. We act as a data processor and do not access client data except as necessary to provide our automation services. We maintain strict access controls and audit trails for all data processing activities.</p>

            <h5 className="mb-3 mt-5">6. Data Retention</h5>
            <p>We retain your data for as long as your account is active and for up to 90 days after account termination to allow for data export. Client tax data may be retained longer as required by tax regulations and professional standards. You can request deletion of specific data sets, subject to legal retention requirements.</p>

            <h5 className="mb-3 mt-5">7. Your Rights and Choices</h5>
            <p>You have the following rights regarding your personal information:</p>
            <ul className="list-group list-group-borderless mb-3">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Access:</strong> Request access to personal information we hold about you
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Correction:</strong> Request correction of inaccurate or incomplete information
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Deletion:</strong> Request deletion of your personal information (subject to retention requirements)
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Portability:</strong> Request export of your data in a machine-readable format
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Restriction:</strong> Request limitation of processing for specific purposes
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" /><strong>Objection:</strong> Object to certain types of data processing
              </li>
            </ul>
            <p>To exercise these rights, contact us at <Link to="mailto:hi@prompt.tax" className="fw-normal text-decoration-underline">hi@prompt.tax</Link>.</p>

            <h5 className="mb-3 mt-5">8. Cookies and Tracking</h5>
            <p>We use essential cookies for platform functionality, security, and user authentication. We also use analytics cookies to understand platform usage and improve our services. You can control cookie preferences through your browser settings, though disabling essential cookies may affect platform functionality.</p>

            <h5 className="mb-3 mt-5">9. International Data Transfers</h5>
            <p>Our services are hosted in the United States. If you access TaxAgent from outside the US, your information may be transferred to, stored, and processed in the US. We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses and adequacy decisions where applicable.</p>

            <h5 className="mb-3 mt-5">10. Changes to This Policy</h5>
            <p>We may update this Privacy Policy to reflect changes in our practices or applicable laws. We will notify you of material changes via email and platform notification at least 30 days before they take effect. Your continued use of TaxAgent after changes indicates acceptance of the updated policy.</p>

            <h5 className="mb-3 mt-5">11. Children's Privacy</h5>
            <p>TaxAgent is designed for professional use and is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.</p>

            <h5 className="mb-3 mt-5">12. Contact Us</h5>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <p className="mb-2"><strong>Email:</strong> <Link to="mailto:hi@prompt.tax" className="fw-normal text-decoration-underline">hi@prompt.tax</Link></p>
            <p className="mb-2"><strong>General inquiries:</strong> <Link to="/contact" className="fw-normal text-decoration-underline">Contact page</Link></p>
            <p className="mb-2"><strong>Mailing Address:</strong></p>
            <p className="mb-1">931 NE 199TH ST APT 203</p>
            <p className="mb-1">Miami, FL 33179</p>
            <p className="mb-0">United States</p>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Details
