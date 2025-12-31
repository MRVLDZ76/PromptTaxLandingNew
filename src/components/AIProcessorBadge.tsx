import { Card } from 'react-bootstrap'
import { BsRobot } from 'react-icons/bs'

const AIProcessorBadge = () => {
  return (
    <Card 
      className="border-0 shadow" 
      style={{
        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        maxWidth: '140px',
        borderRadius: '8px'
      }}
    >
      <Card.Body className="p-2 text-white text-center">
        <div 
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-1"
          style={{
            width: '36px',
            height: '36px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          }}
        >
          <BsRobot size={20} />
        </div>
        
        <div className="fw-bold" style={{ fontSize: '0.75rem' }}>
          AI Agent
        </div>
        <div style={{ fontSize: '0.6rem', opacity: 0.9 }}>
          Active
        </div>
      </Card.Body>
    </Card>
  )
}

export default AIProcessorBadge
