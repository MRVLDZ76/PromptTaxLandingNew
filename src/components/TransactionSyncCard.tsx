import { Card, Badge, ListGroup } from 'react-bootstrap'
import { BsCheckCircleFill, BsCircleFill } from 'react-icons/bs'

const TransactionSyncCard = () => {
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
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-2">
          <Badge 
            bg="success" 
            className="d-flex align-items-center gap-1 px-2 py-1"
            style={{ fontSize: '0.65rem' }}
          >
            <BsCircleFill size={6} />
            <span>Live Sync</span>
          </Badge>
          <span style={{ fontSize: '0.65rem', color: '#606261' }}>Just now</span>
        </div>

        <h6 className="mb-1 fw-bold" style={{ fontSize: '0.85rem', color: '#222427' }}>
          Auto-Synced
        </h6>
        <p className="mb-3" style={{ fontSize: '0.65rem', color: '#606261' }}>
          Transactions updating in real-time
        </p>

        {/* Exchanges List */}
        <ListGroup className="mb-2" variant="flush">
          <ListGroup.Item 
            className="d-flex align-items-center justify-content-between px-2 py-2 border-0"
            style={{ 
              backgroundColor: '#f8f8f8',
              borderRadius: '6px',
              marginBottom: '6px'
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <BsCheckCircleFill size={12} className="text-success" />
              <span style={{ fontSize: '0.7rem', color: '#222427' }}>Coinbase</span>
            </div>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#222427' }}>847</span>
          </ListGroup.Item>

          <ListGroup.Item 
            className="d-flex align-items-center justify-content-between px-2 py-2 border-0"
            style={{ 
              backgroundColor: '#f8f8f8',
              borderRadius: '6px',
              marginBottom: '6px'
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <BsCheckCircleFill size={12} className="text-success" />
              <span style={{ fontSize: '0.7rem', color: '#222427' }}>Binance</span>
            </div>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#222427' }}>1,234</span>
          </ListGroup.Item>

          <ListGroup.Item 
            className="d-flex align-items-center justify-content-between px-2 py-2 border-0"
            style={{ 
              backgroundColor: '#f8f8f8',
              borderRadius: '6px'
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <BsCheckCircleFill size={12} className="text-success" />
              <span style={{ fontSize: '0.7rem', color: '#222427' }}>Kraken</span>
            </div>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#222427' }}>562</span>
          </ListGroup.Item>
        </ListGroup>

        {/* Footer */}
        <div 
          className="text-center pt-2 mt-2"
          style={{ borderTop: '1px solid #dce0e5' }}
        >
          <div style={{ fontSize: '0.7rem', color: '#606261' }}>Total Transactions</div>
          <div className="fw-bold" style={{ fontSize: '1rem', color: '#222427' }}>2,643</div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TransactionSyncCard
