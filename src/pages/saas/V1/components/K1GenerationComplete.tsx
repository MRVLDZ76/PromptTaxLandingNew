import { Card, ListGroup } from "react-bootstrap"
import { BsCheckCircleFill, BsFileEarmarkPdfFill } from "react-icons/bs"

const K1GenerationComplete = () => {
  const partners = [
    { name: "Sarah Johnson", id: "6783" },
    { name: "Michael Chen", id: "7890" },
    { name: "David Rodriguez", id: "8901" }
  ]

  return (
    <Card 
      className="border-0 shadow-lg overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #1a2332 0%, #0f1419 100%)',
        maxWidth: '400px',
        margin: '0 auto'
      }}
    >
      <Card.Body className="p-3">
        {/* Header */}
        <div className="text-center mb-2">
          <h6 className="text-white fw-bold mb-1" style={{ fontSize: '0.95rem' }}>Generate K-1 Forms</h6>
          <p className="text-white-50 mb-0" style={{ fontSize: '0.75rem' }}>
            Your K-1 forms are ready!
          </p>
        </div>

        {/* Success Card */}
        <div 
          className="rounded-3 p-2 mb-2"
          style={{ 
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Success Icon */}
          <div className="text-center mb-2">
            <div 
              className="d-inline-flex align-items-center justify-content-center rounded-circle"
              style={{ 
                width: '48px', 
                height: '48px',
                background: '#10b981'
              }}
            >
              <BsCheckCircleFill className="text-white" size={24} />
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-2">
            <h6 className="text-white fw-bold mb-1" style={{ fontSize: '0.85rem' }}>Generation Complete!</h6>
            <p className="text-white-50 mb-0" style={{ fontSize: '0.7rem' }}>
              Successfully generated 3 Schedule K-1 forms
            </p>
          </div>

          {/* Generated K-1 Forms List */}
          <div 
            className="rounded-3 p-2 mb-2"
            style={{ 
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}
          >
            <h6 className="text-white fw-semibold mb-2" style={{ fontSize: '0.75rem' }}>
              Generated K-1 Forms:
            </h6>
            
            <ListGroup variant="flush" className="bg-transparent">
              {partners.map((partner, idx) => (
                <ListGroup.Item 
                  key={idx}
                  className="bg-transparent border-0 px-0 py-1"
                  style={{ 
                    borderBottom: idx < partners.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-1">
                      <BsFileEarmarkPdfFill className="text-danger" size={12} />
                      <span className="text-white fw-medium" style={{ fontSize: '0.7rem' }}>
                        {partner.name}
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <span 
                        className="text-success fw-medium" 
                        style={{ fontSize: '0.65rem' }}
                      >
                        {partner.id}
                      </span>
                      <BsCheckCircleFill className="text-success" size={10} />
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>

          {/* Entity Information */}
          <div 
            className="rounded-3 p-2"
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="mb-1">
              <span className="text-white-50" style={{ fontSize: '0.65rem' }}>
                Entity:
              </span>
              <span className="text-white fw-medium ms-1" style={{ fontSize: '0.7rem' }}>
                ABC PARTNERS, LLC
              </span>
            </div>
            <div>
              <span className="text-white-50" style={{ fontSize: '0.65rem' }}>
                EIN:
              </span>
              <span className="text-white fw-medium ms-1" style={{ fontSize: '0.7rem' }}>
                87-6543210
              </span>
            </div>
          </div>
        </div>

        {/* Download Button Hint */}
        <div className="text-center">
          <div 
            className="d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill"
            style={{ 
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}
          >
            <div 
              className="spinner-border spinner-border-sm text-primary" 
              role="status"
              style={{ width: '10px', height: '10px' }}
            >
              <span className="visually-hidden">Ready...</span>
            </div>
            <span className="text-primary fw-medium" style={{ fontSize: '0.65rem' }}>
              Ready to download
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default K1GenerationComplete
