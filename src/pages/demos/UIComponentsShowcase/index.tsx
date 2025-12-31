import { Container, Row, Col, Card } from 'react-bootstrap';
import AITaxAssistantChat from '@/components/AITaxAssistantChat';
import FileUploadDropzone from '@/components/FileUploadDropzone';
import BankLevelSecurityBadge from '@/components/BankLevelSecurityBadge';
import ConnectExchangeButton from '@/components/ConnectExchangeButton';
import TransactionSyncCard from '@/components/TransactionSyncCard';
import ProcessingFlowCard from '@/components/ProcessingFlowCard';
import ComplianceBadgeCard from '@/components/ComplianceBadgeCard';
import AIProcessorBadge from '@/components/AIProcessorBadge';
import PageTitle from '@/components/PageTitle';
import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Footer1 from '@/components/footer/Footer1';

const UIComponentsShowcase = () => {
  return (
    <>
      <PageTitle title="UI Components Showcase" />
      
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showProductLinks: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        showBuyNow
      />

      <main>
        <section className="pt-8">
          <Container>
            <div className="text-center mb-5">
              <h1 className="mb-3">Interactive UI Components</h1>
              <p className="lead text-muted">
                Professional React components replacing low-resolution placeholder images
              </p>
            </div>

            {/* AI Tax Assistant Chat */}
            <div className="mb-6">
              <h2 className="mb-4">AI Tax Assistant Chat Interface</h2>
              <Card className="shadow-lg border-0">
                <Card.Body className="p-0">
                  <AITaxAssistantChat />
                </Card.Body>
              </Card>
            </div>

            {/* Other Components Grid */}
            <Row className="g-4 mb-6">
              <Col md={4}>
                <div className="mb-3">
                  <h4 className="mb-3">File Upload Dropzone</h4>
                  <FileUploadDropzone />
                </div>
              </Col>

              <Col md={4}>
                <div className="mb-3">
                  <h4 className="mb-3">Security Badge</h4>
                  <Card className="p-4 text-center h-100 border-0 shadow">
                    <Card.Body>
                      <BankLevelSecurityBadge />
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col md={4}>
                <div className="mb-3">
                  <h4 className="mb-3">Connect Exchange CTA</h4>
                  <Card className="p-4 h-100 border-0 shadow">
                    <Card.Body className="d-flex align-items-center">
                      <ConnectExchangeButton />
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>

            {/* Hero Decoration Components */}
            <div className="mb-6">
              <h2 className="mb-4">Hero Section Floating Cards</h2>
              <p className="text-muted mb-4">
                These compact components replace the low-resolution decoration images in the hero section
              </p>
              <Row className="g-4">
                <Col md={3}>
                  <div className="mb-3">
                    <h6 className="mb-3">Transaction Sync</h6>
                    <div className="d-flex justify-content-center">
                      <TransactionSyncCard />
                    </div>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-3">
                    <h6 className="mb-3">Processing Flow</h6>
                    <div className="d-flex justify-content-center">
                      <ProcessingFlowCard />
                    </div>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-3">
                    <h6 className="mb-3">AI Processor</h6>
                    <div className="d-flex justify-content-center">
                      <AIProcessorBadge />
                    </div>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-3">
                    <h6 className="mb-3">Compliance Badge</h6>
                    <div className="d-flex justify-content-center">
                      <ComplianceBadgeCard />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Features List */}
            <Card className="bg-light border-0">
              <Card.Body className="p-5">
                <h3 className="mb-4">Component Features</h3>
                <Row>
                  <Col md={6}>
                    <h5 className="mb-3">✨ AI Tax Assistant Chat</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">• Three-panel layout (sidebar, chat, details)</li>
                      <li className="mb-2">• Real-time message flow simulation</li>
                      <li className="mb-2">• Session management with progress tracking</li>
                      <li className="mb-2">• File import display with verification status</li>
                      <li className="mb-2">• Cryptocurrency transaction summary</li>
                      <li className="mb-2">• Responsive Bootstrap components</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h5 className="mb-3">🎯 Additional Components</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">• <strong>File Upload:</strong> Drag-and-drop K-1 PDF interface</li>
                      <li className="mb-2">• <strong>Security Badge:</strong> Bank-level encryption indicator</li>
                      <li className="mb-2">• <strong>Exchange Button:</strong> One-click connection CTA</li>
                      <li className="mb-2">• All components use Bootstrap 5 styling</li>
                      <li className="mb-2">• React Icons for consistency</li>
                      <li className="mb-2">• TypeScript with proper type definitions</li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </section>
      </main>

      <Footer1 />
    </>
  );
};

export default UIComponentsShowcase;
