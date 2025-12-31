import { Card, Badge } from 'react-bootstrap'
import { BsFileEarmarkPdfFill, BsCheckCircleFill } from 'react-icons/bs'

const K1DocumentCard = () => {
  return (
    <Card 
      className="border shadow" 
      style={{
        background: '#ffffff',
        maxWidth: '260px',
        borderRadius: '16px',
        border: '1px solid #dce0e5'
      }}
    >
      <Card.Body className="p-3">
        {/* PDF Icon Header */}
        <div className="text-center mb-2">
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-3 mb-2"
            style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #d6293e 0%, #e83e8c 100%)',
              boxShadow: '0 4px 6px rgba(214, 41, 62, 0.2)'
            }}
          >
            <BsFileEarmarkPdfFill size={24} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-3">
          <h6 className="fw-bold mb-1" style={{ fontSize: '0.85rem', color: '#222427' }}>
            Schedule K-1
          </h6>
          <p className="mb-0" style={{ fontSize: '0.7rem', color: '#3e403f' }}>
            Form 1065
          </p>
        </div>

        {/* Partner Info */}
        <div 
          className="rounded p-2 mb-2"
          style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
        >
          <div className="d-flex justify-content-between align-items-start mb-1">
            <div>
              <div style={{ fontSize: '0.65rem', color: '#3e403f' }}>Partner</div>
              <div className="fw-bold" style={{ fontSize: '0.75rem', color: '#222427' }}>
                Sarah Johnson
              </div>
            </div>
            <Badge 
              bg="success" 
              className="d-flex align-items-center gap-1"
              style={{ fontSize: '0.6rem' }}
            >
              <BsCheckCircleFill size={8} />
              Verified
            </Badge>
          </div>
          <div style={{ fontSize: '0.65rem', color: '#3e403f' }}>
            SSN: ***-**-6783
          </div>
        </div>

        {/* Entity Info */}
        <div 
          className="rounded p-2 mb-2"
          style={{ backgroundColor: 'rgba(40, 90, 235, 0.15)' }}
        >
          <div style={{ fontSize: '0.65rem', color: '#1d3b53' }}>Partnership</div>
          <div className="fw-bold" style={{ fontSize: '0.75rem', color: '#285aeb' }}>
            ABC PARTNERS, LLC
          </div>
          <div style={{ fontSize: '0.65rem', color: '#1d3b53' }}>
            EIN: 87-6543210
          </div>
        </div>

        {/* Footer */}
        <div className="d-flex justify-content-between align-items-center pt-2" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '0.65rem', color: '#3e403f' }}>
            Generated in 5min
          </div>
          <Badge 
            bg="primary" 
            style={{ fontSize: '0.65rem' }}
          >
            Ready to Download
          </Badge>
        </div>
      </Card.Body>
    </Card>
  )
}

export default K1DocumentCard
