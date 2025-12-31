import { Card } from 'react-bootstrap'
import { BsShieldCheck } from 'react-icons/bs'

const ComplianceBadgeCard = () => {
  return (
    <Card 
      className="border-0 shadow" 
      style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        maxWidth: '160px',
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
          <BsShieldCheck size={20} />
        </div>
        
        <div className="fw-bold" style={{ fontSize: '0.75rem' }}>
          IRS Compliant
        </div>
        <div style={{ fontSize: '0.6rem', opacity: 0.9 }}>
          SOC 2 Certified
        </div>
      </Card.Body>
    </Card>
  )
}

export default ComplianceBadgeCard
