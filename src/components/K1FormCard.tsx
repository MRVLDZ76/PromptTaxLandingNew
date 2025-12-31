import { Card, Badge } from 'react-bootstrap';
import { BsFileEarmarkPdfFill, BsCheckCircleFill } from 'react-icons/bs';

const K1FormCard = () => {
  return (
    <Card 
      className="border-0 shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        borderRadius: '12px',
        maxWidth: '280px'
      }}
    >
      <Card.Body className="p-3">
        {/* Header with Icon */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <div 
            className="rounded d-flex align-items-center justify-content-center"
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
            }}
          >
            <BsFileEarmarkPdfFill size={20} className="text-white" />
          </div>
          <div>
            <div className="fw-bold" style={{ fontSize: '0.9rem' }}>
              Schedule K-1
            </div>
            <small className="text-muted" style={{ fontSize: '0.75rem' }}>
              Form 1065
            </small>
          </div>
        </div>

        {/* Partner Info */}
        <div className="mb-3">
          <small className="text-muted d-block mb-1" style={{ fontSize: '0.7rem' }}>
            Partner Information
          </small>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span style={{ fontSize: '0.8rem' }}>Sarah Johnson</span>
            <Badge bg="success" style={{ fontSize: '0.65rem' }}>
              <BsCheckCircleFill size={10} className="me-1" />
              Verified
            </Badge>
          </div>
          <small className="text-muted" style={{ fontSize: '0.7rem' }}>
            SSN: ***-**-6783
          </small>
        </div>

        {/* Entity Info */}
        <div 
          className="p-2 rounded mb-3"
          style={{
            background: 'rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.1)'
          }}
        >
          <small className="text-muted d-block mb-1" style={{ fontSize: '0.7rem' }}>
            Partnership
          </small>
          <div className="fw-semibold" style={{ fontSize: '0.8rem' }}>
            ABC PARTNERS, LLC
          </div>
          <small className="text-muted" style={{ fontSize: '0.7rem' }}>
            EIN: 87-6543210
          </small>
        </div>

        {/* Status Footer */}
        <div className="d-flex justify-content-between align-items-center pt-2 border-top">
          <small className="text-muted" style={{ fontSize: '0.7rem' }}>
            Generated in 5min
          </small>
          <Badge 
            bg="primary" 
            style={{ fontSize: '0.65rem' }}
          >
            Ready to Download
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

export default K1FormCard;
