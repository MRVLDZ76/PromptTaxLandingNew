import { Badge, Card } from "react-bootstrap"
import { BsCheckCircleFill, BsLightningChargeFill } from "react-icons/bs"

const K1FormPreview = () => {
  return (
    <Card className="border-0 shadow-sm position-relative overflow-hidden" style={{ height: '100%' }}>
      {/* AI Processing Badge */}
      <Badge 
        bg="success" 
        className="position-absolute top-0 end-0 m-3 d-flex align-items-center gap-1"
        style={{ zIndex: 10 }}
      >
        <BsLightningChargeFill size={12} />
        AI Processing
      </Badge>

      {/* Simulated K-1 Form */}
      <Card.Body className="p-4 bg-gradient" style={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
      }}>
        {/* Form Header */}
        <div className="mb-3 pb-2 border-bottom border-2 border-dark">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h6 className="mb-0 fw-bold text-dark" style={{ fontSize: '0.85rem' }}>
              SCHEDULE K-1
            </h6>
            <span className="badge bg-dark" style={{ fontSize: '0.65rem' }}>2024</span>
          </div>
          <p className="mb-0 text-muted" style={{ fontSize: '0.65rem' }}>
            Form 1065 | Partner's Share of Income
          </p>
        </div>

        {/* Form Fields with AI Highlight Effect */}
        <div className="mb-2 p-2 rounded bg-white shadow-sm position-relative">
          <div className="d-flex align-items-center gap-2 mb-1">
            <BsCheckCircleFill className="text-success" size={14} />
            <span className="text-dark fw-semibold" style={{ fontSize: '0.75rem' }}>
              Partnership Information
            </span>
          </div>
          <div className="ms-4">
            <div className="bg-light rounded px-2 py-1 mb-1" style={{ fontSize: '0.7rem' }}>
              <span className="text-muted">EIN:</span> <span className="text-dark fw-medium">XX-XXXXXXX</span>
            </div>
            <div className="bg-light rounded px-2 py-1" style={{ fontSize: '0.7rem' }}>
              <span className="text-muted">Name:</span> <span className="text-dark fw-medium">ABC Partnership LLC</span>
            </div>
          </div>
        </div>

        <div className="mb-2 p-2 rounded bg-white shadow-sm position-relative">
          <div className="d-flex align-items-center gap-2 mb-1">
            <BsCheckCircleFill className="text-success" size={14} />
            <span className="text-dark fw-semibold" style={{ fontSize: '0.75rem' }}>
              Partner Information
            </span>
          </div>
          <div className="ms-4">
            <div className="bg-light rounded px-2 py-1 mb-1" style={{ fontSize: '0.7rem' }}>
              <span className="text-muted">SSN:</span> <span className="text-dark fw-medium">XXX-XX-XXXX</span>
            </div>
            <div className="bg-light rounded px-2 py-1" style={{ fontSize: '0.7rem' }}>
              <span className="text-muted">Share:</span> <span className="text-dark fw-medium">25.00%</span>
            </div>
          </div>
        </div>

        <div className="mb-2 p-2 rounded bg-white shadow-sm position-relative">
          <div className="d-flex align-items-center gap-2 mb-1">
            <BsCheckCircleFill className="text-success" size={14} />
            <span className="text-dark fw-semibold" style={{ fontSize: '0.75rem' }}>
              Income & Deductions
            </span>
          </div>
          <div className="ms-4">
            <div className="bg-light rounded px-2 py-1 mb-1" style={{ fontSize: '0.7rem' }}>
              <span className="text-muted">Ordinary Income:</span> <span className="text-dark fw-medium">$125,000</span>
            </div>
            <div className="bg-light rounded px-2 py-1 mb-1" style={{ fontSize: '0.7rem' }}>
              <span className="text-muted">Guaranteed Payments:</span> <span className="text-dark fw-medium">$50,000</span>
            </div>
            <div className="bg-light rounded px-2 py-1" style={{ fontSize: '0.7rem' }}>
              <span className="text-muted">Net Income:</span> <span className="text-success fw-bold">$175,000</span>
            </div>
          </div>
        </div>

        {/* Processing Indicator */}
        <div className="mt-3 p-2 rounded" style={{ 
          background: 'rgba(25, 135, 84, 0.1)',
          border: '1px dashed #198754'
        }}>
          <div className="d-flex align-items-center gap-2">
            <div 
              className="spinner-border spinner-border-sm text-success" 
              role="status"
              style={{ width: '1rem', height: '1rem' }}
            >
              <span className="visually-hidden">Processing...</span>
            </div>
            <span className="text-success fw-semibold" style={{ fontSize: '0.75rem' }}>
              AI Extracting & Validating Data...
            </span>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-3 d-flex justify-content-between">
          <div className="text-center">
            <div className="text-primary fw-bold" style={{ fontSize: '1.2rem' }}>5min</div>
            <div className="text-muted" style={{ fontSize: '0.65rem' }}>Processing Time</div>
          </div>
          <div className="text-center">
            <div className="text-success fw-bold" style={{ fontSize: '1.2rem' }}>100%</div>
            <div className="text-muted" style={{ fontSize: '0.65rem' }}>Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-info fw-bold" style={{ fontSize: '1.2rem' }}>$49</div>
            <div className="text-muted" style={{ fontSize: '0.65rem' }}>Flat Fee</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default K1FormPreview
