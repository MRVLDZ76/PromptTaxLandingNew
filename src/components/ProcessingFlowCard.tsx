import { Card, Badge } from 'react-bootstrap'
import { BsLightningChargeFill } from 'react-icons/bs'

const ProcessingFlowCard = () => {
  return (
    <Card 
      className="border-0 shadow" 
      style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        maxWidth: '170px',
        borderRadius: '8px'
      }}
    >
      <Card.Body className="p-2 text-white">
        <div className="d-flex align-items-center gap-2 mb-2">
          <BsLightningChargeFill size={16} />
          <div>
            <div className="fw-bold" style={{ fontSize: '0.75rem' }}>AI-Powered</div>
            <div style={{ fontSize: '0.6rem', opacity: 0.9 }}>Processing</div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <span style={{ fontSize: '0.65rem', opacity: 0.9 }}>Time</span>
          <Badge 
            bg="warning" 
            text="dark"
            className="px-2"
            style={{ fontSize: '0.65rem' }}
          >
            ~5 min
          </Badge>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProcessingFlowCard
