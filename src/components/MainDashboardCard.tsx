import { Card, Badge, Row, Col, ProgressBar } from 'react-bootstrap'
import { BsCheckCircleFill, BsGraphUpArrow } from 'react-icons/bs'

const MainDashboardCard = () => {
  return (
    <Card 
      className="border-0 shadow-lg" 
      style={{
        background: '#000000',
        borderRadius: '20px',
        maxWidth: '600px',
        border: '1px solid #222427'
      }}
    >
      <Card.Body className="p-4">
        {/* Header Section */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center gap-2">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #f7c32e 0%, #fd7e14 100%)'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>₿</span>
            </div>
            <div>
              <h6 className="mb-0 text-white fw-bold" style={{ fontSize: '0.9rem' }}>
                Crypto Tax
              </h6>
              <p className="mb-0 text-white-50" style={{ fontSize: '0.7rem' }}>
                Ready to submit
              </p>
            </div>
          </div>
          <Badge 
            bg="success" 
            className="d-flex align-items-center gap-1 px-2 py-1"
            style={{ fontSize: '0.7rem' }}
          >
            <BsCheckCircleFill size={10} />
            <span>Processed</span>
          </Badge>
        </div>

        {/* Transaction Stats */}
        <Row className="g-3 mb-3">
          <Col xs={6}>
            <div 
              className="rounded p-2"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              <div className="text-white-50 mb-1" style={{ fontSize: '0.65rem' }}>
                Total Transactions
              </div>
              <div className="text-white fw-bold" style={{ fontSize: '1.1rem' }}>
                8,949
              </div>
              <div className="text-success" style={{ fontSize: '0.65rem' }}>
                <BsGraphUpArrow size={10} className="me-1" />
                +12% from last year
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div 
              className="rounded p-2"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              <div className="text-white-50 mb-1" style={{ fontSize: '0.65rem' }}>
                Forms Generated
              </div>
              <div className="text-white fw-bold" style={{ fontSize: '1.1rem' }}>
                Schedule D
              </div>
              <div className="text-white-50" style={{ fontSize: '0.65rem' }}>
                8949 forms ready
              </div>
            </div>
          </Col>
        </Row>

        {/* Progress Bars */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className="text-white-50" style={{ fontSize: '0.7rem' }}>
              Data Extraction
            </span>
            <span className="text-white" style={{ fontSize: '0.7rem' }}>
              100%
            </span>
          </div>
          <ProgressBar 
            now={100} 
            variant="success" 
            style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }}
          />
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className="text-white-50" style={{ fontSize: '0.7rem' }}>
              Form Population
            </span>
            <span className="text-white" style={{ fontSize: '0.7rem' }}>
              100%
            </span>
          </div>
          <ProgressBar 
            now={100} 
            variant="success" 
            style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }}
          />
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className="text-white-50" style={{ fontSize: '0.7rem' }}>
              CPA Review
            </span>
            <span className="text-warning" style={{ fontSize: '0.7rem' }}>
              65%
            </span>
          </div>
          <ProgressBar 
            now={65} 
            variant="warning" 
            style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }}
          />
        </div>

        {/* Tax Summary */}
        <div 
          className="rounded p-3 mt-3"
          style={{ 
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}
        >
          <Row className="align-items-center">
            <Col>
              <div className="text-success mb-1" style={{ fontSize: '0.7rem' }}>
                Total Tax Liability
              </div>
              <div className="text-white fw-bold" style={{ fontSize: '1.3rem' }}>
                $148,250
              </div>
            </Col>
            <Col xs="auto">
              <div className="text-end">
                <div className="text-success mb-1" style={{ fontSize: '0.7rem' }}>
                  Tax Savings
                </div>
                <div className="text-success fw-bold" style={{ fontSize: '1.1rem' }}>
                  $8,750
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Action Footer */}
        <div className="text-center mt-3">
          <button 
            className="btn btn-primary w-100"
            style={{
              borderRadius: '8px',
              padding: '10px',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            Download Tax Forms →
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default MainDashboardCard
