import { Card, Badge, Row, Col } from 'react-bootstrap';
import { BsCheckCircleFill, BsLightningChargeFill, BsGraphUpArrow } from 'react-icons/bs';

const TaxDashboardPreview = () => {
  return (
    <Card 
      className="border-0 shadow-lg overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        borderRadius: '16px'
      }}
    >
      <Card.Body className="p-4">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <Badge bg="success" className="mb-2">
              <BsCheckCircleFill size={12} className="me-1" />
              Processing Complete
            </Badge>
            <h5 className="text-white mb-0 fw-bold">Tax Return Dashboard</h5>
          </div>
          <Badge bg="primary" pill className="px-3 py-2">
            <BsLightningChargeFill size={14} className="me-1" />
            AI-Powered
          </Badge>
        </div>

        {/* Stats Grid */}
        <Row className="g-3 mb-4">
          <Col xs={6}>
            <div 
              className="p-3 rounded"
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-1">
                <BsCheckCircleFill size={16} className="text-success" />
                <small className="text-white-50" style={{ fontSize: '0.75rem' }}>
                  Transactions
                </small>
              </div>
              <div className="text-success fw-bold" style={{ fontSize: '1.5rem' }}>
                2,643
              </div>
              <small className="text-white-50" style={{ fontSize: '0.7rem' }}>
                Auto-synced
              </small>
            </div>
          </Col>

          <Col xs={6}>
            <div 
              className="p-3 rounded"
              style={{
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-1">
                <BsGraphUpArrow size={16} className="text-primary" />
                <small className="text-white-50" style={{ fontSize: '0.75rem' }}>
                  Forms Ready
                </small>
              </div>
              <div className="text-primary fw-bold" style={{ fontSize: '1.5rem' }}>
                8949
              </div>
              <small className="text-white-50" style={{ fontSize: '0.7rem' }}>
                Schedule D
              </small>
            </div>
          </Col>
        </Row>

        {/* Progress Bars */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-white-50" style={{ fontSize: '0.75rem' }}>
              Data Extraction
            </small>
            <Badge bg="success" style={{ fontSize: '0.65rem' }}>100%</Badge>
          </div>
          <div className="progress" style={{ height: '6px', background: 'rgba(255,255,255,0.1)' }}>
            <div 
              className="progress-bar bg-success" 
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-white-50" style={{ fontSize: '0.75rem' }}>
              Form Population
            </small>
            <Badge bg="success" style={{ fontSize: '0.65rem' }}>100%</Badge>
          </div>
          <div className="progress" style={{ height: '6px', background: 'rgba(255,255,255,0.1)' }}>
            <div 
              className="progress-bar bg-success" 
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-white-50" style={{ fontSize: '0.75rem' }}>
              CPA Review
            </small>
            <Badge bg="warning" style={{ fontSize: '0.65rem' }}>In Progress</Badge>
          </div>
          <div className="progress" style={{ height: '6px', background: 'rgba(255,255,255,0.1)' }}>
            <div 
              className="progress-bar bg-warning" 
              style={{ width: '65%' }}
            ></div>
          </div>
        </div>

        {/* Summary Section */}
        <div 
          className="p-3 rounded"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <Row className="text-white">
            <Col xs={6}>
              <small className="text-white-50 d-block mb-1" style={{ fontSize: '0.7rem' }}>
                Total Income
              </small>
              <div className="fw-bold">$148,250</div>
            </Col>
            <Col xs={6}>
              <small className="text-white-50 d-block mb-1" style={{ fontSize: '0.7rem' }}>
                Tax Savings
              </small>
              <div className="fw-bold text-success">$8,750</div>
            </Col>
          </Row>
        </div>

        {/* Action Footer */}
        <div className="mt-4 pt-3 border-top border-white border-opacity-10">
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-white-50" style={{ fontSize: '0.75rem' }}>
              Ready for filing
            </small>
            <Badge 
              bg="success" 
              className="px-3 py-2"
              style={{ fontSize: '0.75rem' }}
            >
              Download Forms →
            </Badge>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaxDashboardPreview;
