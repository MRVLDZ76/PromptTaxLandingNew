import { Card, ProgressBar } from "react-bootstrap"
import { BsClockHistory, BsRobot } from "react-icons/bs"

const TimeComparisonCard = () => {
  return (
    <Card className="border-0 shadow-sm h-100">
      <Card.Body className="p-4">
        <h6 className="text-center mb-4 fw-bold text-dark">
          Traditional vs AI-Powered K-1 Processing
        </h6>

        {/* Traditional Method */}
        <div className="mb-4 pb-4 border-bottom">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div 
              className="rounded-circle bg-light d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
            >
              <BsClockHistory className="text-muted" size={20} />
            </div>
            <div>
              <h6 className="mb-0 fw-semibold" style={{ fontSize: '0.9rem' }}>
                Traditional Method
              </h6>
              <small className="text-muted">Manual data entry & calculations</small>
            </div>
          </div>

          {/* Time Bar */}
          <div className="mb-2">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                Processing Time
              </span>
              <span className="fw-bold text-danger" style={{ fontSize: '0.9rem' }}>
                4-6 hours
              </span>
            </div>
            <ProgressBar 
              now={100} 
              variant="danger" 
              style={{ height: '8px' }}
              className="mb-2"
            />
          </div>

          {/* Cost */}
          <div className="mb-2">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                Cost per K-1
              </span>
              <span className="fw-bold text-danger" style={{ fontSize: '0.9rem' }}>
                $150-300
              </span>
            </div>
          </div>

          {/* Error Rate */}
          <div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                Error Rate
              </span>
              <span className="fw-semibold text-warning" style={{ fontSize: '0.85rem' }}>
                5-15%
              </span>
            </div>
            <ProgressBar 
              now={15} 
              variant="warning" 
              style={{ height: '6px' }}
            />
          </div>
        </div>

        {/* AI-Powered Method */}
        <div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <div 
              className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
            >
              <BsRobot className="text-primary" size={20} />
            </div>
            <div>
              <h6 className="mb-0 fw-semibold text-primary" style={{ fontSize: '0.9rem' }}>
                PromptTax AI
              </h6>
              <small className="text-muted">Automated extraction & generation</small>
            </div>
          </div>

          {/* Time Bar */}
          <div className="mb-2">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                Processing Time
              </span>
              <span className="fw-bold text-success" style={{ fontSize: '0.9rem' }}>
                5 minutes
              </span>
            </div>
            <ProgressBar 
              now={2} 
              variant="success" 
              style={{ height: '8px' }}
              className="mb-2"
            />
            <div className="text-end">
              <span className="badge bg-success-subtle text-success" style={{ fontSize: '0.65rem' }}>
                98% faster
              </span>
            </div>
          </div>

          {/* Cost */}
          <div className="mb-2">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                Cost per K-1
              </span>
              <span className="fw-bold text-success" style={{ fontSize: '0.9rem' }}>
                $49 (unlimited)
              </span>
            </div>
            <div className="text-end mt-1">
              <span className="badge bg-success-subtle text-success" style={{ fontSize: '0.65rem' }}>
                Save up to $250
              </span>
            </div>
          </div>

          {/* Error Rate */}
          <div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                Error Rate
              </span>
              <span className="fw-semibold text-success" style={{ fontSize: '0.85rem' }}>
                {'<'}1%
              </span>
            </div>
            <ProgressBar 
              now={1} 
              variant="success" 
              style={{ height: '6px' }}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className="mt-4 p-3 rounded text-center"
          style={{ 
            background: 'linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)'
          }}
        >
          <p className="mb-1 text-white fw-semibold" style={{ fontSize: '0.85rem' }}>
            Start saving time & money today
          </p>
          <small className="text-white opacity-75" style={{ fontSize: '0.7rem' }}>
            Join 1,200+ tax professionals using AI
          </small>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TimeComparisonCard
