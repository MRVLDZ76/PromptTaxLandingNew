import { Card } from 'react-bootstrap'
import { BsShieldCheck } from 'react-icons/bs'

const SecurityCard = () => {
  return (
    <Card 
      className="border shadow-sm" 
      style={{
        background: '#ffffff',
        maxWidth: '220px',
        borderRadius: '16px',
        border: '1px solid #dce0e5'
      }}
    >
      <Card.Body className="p-3 text-center">
        <div 
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2"
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#e6f7f1',
            border: '3px solid #0cbc87'
          }}
        >
          <BsShieldCheck size={24} style={{ color: '#0cbc87' }} />
        </div>
        
        <h6 className="fw-bold mb-1" style={{ fontSize: '0.85rem', color: '#222427' }}>
          Bank-Level Security
        </h6>
        
        <p className="mb-0" style={{ fontSize: '0.7rem', lineHeight: '1.4', color: '#606261' }}>
          Read-only access, encrypted connection
        </p>
      </Card.Body>
    </Card>
  )
}

export default SecurityCard
