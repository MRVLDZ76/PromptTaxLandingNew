import { Card, Badge } from 'react-bootstrap'
import { BsRobot, BsPerson } from 'react-icons/bs'

const ChatInterfaceCard = () => {
  return (
    <Card 
      className="border shadow" 
      style={{
        background: '#ffffff',
        maxWidth: '320px',
        borderRadius: '16px',
        border: '1px solid #dce0e5'
      }}
    >
      <Card.Body className="p-3">
        {/* Header */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#f8f8f8',
              border: '1px solid #dce0e5'
            }}
          >
            <BsRobot size={18} style={{ color: '#285aeb' }} />
          </div>
          <div>
            <h6 className="mb-0 fw-bold" style={{ fontSize: '0.8rem', color: '#222427' }}>
              AI Tax Assistant
            </h6>
            <Badge 
              bg="success" 
              style={{ fontSize: '0.6rem' }}
            >
              Online
            </Badge>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="d-flex flex-column gap-2">
          {/* AI Message */}
          <div className="d-flex align-items-start gap-2">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: '24px', height: '24px', backgroundColor: '#f8f8f8', border: '1px solid #dce0e5' }}
            >
              <BsRobot size={14} style={{ color: '#285aeb' }} />
            </div>
            <div 
              className="rounded p-2 flex-grow-1"
              style={{ 
                backgroundColor: '#f8f8f8',
                fontSize: '0.7rem',
                lineHeight: '1.4',
                color: '#222427'
              }}
            >
              I've analyzed your crypto transactions. You have <strong>2,643 transactions</strong> across 3 exchanges.
            </div>
          </div>

          {/* User Message */}
          <div className="d-flex align-items-start gap-2 justify-content-end">
            <div 
              className="rounded p-2"
              style={{ 
                backgroundColor: '#285aeb',
                fontSize: '0.7rem',
                color: 'white',
                maxWidth: '80%',
                lineHeight: '1.4'
              }}
            >
              Can you generate my tax forms?
            </div>
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ 
                width: '24px', 
                height: '24px',
                backgroundColor: '#f8f8f8',
                border: '1px solid #dce0e5'
              }}
            >
              <BsPerson size={14} style={{ color: '#606261' }} />
            </div>
          </div>

          {/* AI Response */}
          <div className="d-flex align-items-start gap-2">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: '24px', height: '24px', backgroundColor: '#f8f8f8', border: '1px solid #dce0e5' }}
            >
              <BsRobot size={14} style={{ color: '#285aeb' }} />
            </div>
            <div 
              className="rounded p-2 flex-grow-1"
              style={{ 
                backgroundColor: '#f8f8f8',
                fontSize: '0.7rem',
                lineHeight: '1.4',
                color: '#222427'
              }}
            >
              Yes! I'm processing your <strong>Schedule D</strong> and <strong>Form 8949</strong> now. 
              <div className="mt-1">
                <Badge bg="warning" text="dark" style={{ fontSize: '0.6rem' }}>
                  Processing...
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Input Footer */}
        <div 
          className="mt-3 pt-2"
          style={{ borderTop: '1px solid #dce0e5' }}
        >
          <div 
            className="rounded d-flex align-items-center px-2 py-1"
            style={{ 
              backgroundColor: '#f8f8f8',
              fontSize: '0.7rem'
            }}
          >
            <span style={{ color: '#96969a' }} className="flex-grow-1">Type a message...</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ChatInterfaceCard
