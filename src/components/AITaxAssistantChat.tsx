import React, { useState } from 'react';
import { Card, Badge, ListGroup, Button } from 'react-bootstrap';
import { BsRobot, BsCheckCircleFill, BsLightningChargeFill, BsArrowRight, BsSend } from 'react-icons/bs';

interface Message {
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp?: string;
}

const AITaxAssistantChat: React.FC = () => {
  const [] = useState<Message[]>([
    {
      type: 'system',
      content: 'Session Management'
    },
    {
      type: 'ai',
      content: "Great! I have provided your personal information and your income details. Now let's move on to the deductions."
    },
    {
      type: 'user',
      content: 'Did you file any income from W-2 wages in 2024?'
    },
    {
      type: 'user',
      content: 'Did you have any income from other sources?'
    },
    {
      type: 'ai',
      content: 'My fiance came in August and I got 10000 income after tax.'
    },
    {
      type: 'system',
      content: 'W. Income Verification'
    },
    {
      type: 'ai',
      content: "Excellent progress! You've provided your personal information and your income details. Now let's move on to the tax credits."
    },
    {
      type: 'user',
      content: 'Did you file-only income from W-2 wages in 2024?'
    },
    {
      type: 'user',
      content: 'Did you have any income from other sources?'
    },
    {
      type: 'ai',
      content: 'Yes, fiance came in August and I got 10000 income after tax.'
    },
    {
      type: 'system',
      content: '3. Tax Credits'
    },
    {
      type: 'ai',
      content: "Excellent progress! You've provided your personal information and your income details. Now let's move on to the credits."
    },
    {
      type: 'user',
      content: 'Did you have any dependents (children under 17)?'
    },
    {
      type: 'user',
      content: 'Did you pay for childcare or dependent care while working?'
    },
    {
      type: 'system',
      content: '4. Income Verification'
    },
    {
      type: 'ai',
      content: "Great! Now let's move on to income verification."
    },
    {
      type: 'user',
      content: 'Did you have any income from W-2 wages in 2024?'
    },
    {
      type: 'user',
      content: 'Did you receive from Form W-2 income?'
    }
  ]);

  return (
    <div className="d-flex" style={{ height: '600px', background: '#f8f9fa' }}>
      {/* Sidebar */}
      <div 
        className="border-end bg-white p-3" 
        style={{ width: '280px', overflowY: 'auto' }}
      >
        <div className="d-flex align-items-center gap-2 mb-4 p-2 bg-primary rounded">
          <BsRobot size={24} className="text-white" />
          <div className="text-white">
            <div className="fw-bold" style={{ fontSize: '0.9rem' }}>AI Tax Assistant</div>
            <Badge bg="success" style={{ fontSize: '0.65rem' }}>Online</Badge>
          </div>
          <BsArrowRight className="ms-auto text-white" />
        </div>

        <div className="mb-3">
          <small className="text-muted fw-semibold d-block mb-2">Your next move or stop if one needs</small>
          <div className="d-flex gap-2 flex-wrap">
            <Badge bg="secondary" className="py-1 px-2" style={{ fontSize: '0.7rem' }}>
              supervisor/hi
            </Badge>
            <Badge bg="secondary" className="py-1 px-2" style={{ fontSize: '0.7rem' }}>
              45:20
            </Badge>
          </div>
        </div>

        <ListGroup variant="flush">
          <ListGroup.Item className="px-0 border-0 mb-2">
            <div className="d-flex align-items-start gap-2">
              <BsCheckCircleFill className="text-success mt-1 flex-shrink-0" size={16} />
              <div style={{ fontSize: '0.8rem' }}>
                <div className="fw-semibold">1. Personal Verification</div>
                <small className="text-success">Great! You've provided your personal information...</small>
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="px-0 border-0 mb-2">
            <div className="d-flex align-items-start gap-2">
              <BsCheckCircleFill className="text-success mt-1 flex-shrink-0" size={16} />
              <div style={{ fontSize: '0.8rem' }}>
                <div className="fw-semibold">2. Tax Credits</div>
                <small className="text-muted">Did you have any dependents (children under 17)?</small>
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="px-0 border-0 mb-2">
            <div className="d-flex align-items-start gap-2">
              <BsCheckCircleFill className="text-success mt-1 flex-shrink-0" size={16} />
              <div style={{ fontSize: '0.8rem' }}>
                <div className="fw-semibold">3. W. Income Verification</div>
                <small className="text-muted">Did you have any income from other sources?</small>
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="px-0 border-0">
            <div className="d-flex align-items-start gap-2">
              <div 
                className="mt-1 flex-shrink-0 rounded-circle bg-primary text-white d-flex align-items-center justify-center" 
                style={{ width: '16px', height: '16px', fontSize: '0.6rem' }}
              >
                4
              </div>
              <div style={{ fontSize: '0.8rem' }}>
                <div className="fw-semibold">4. Income Verification</div>
                <small className="text-muted">Did you receive from Form W-2 income?</small>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>

        <div className="mt-auto pt-4">
          <small className="text-muted d-block mb-2">Type your message or skip if one needs</small>
          <Button variant="outline-secondary" size="sm" className="w-100 mb-2">
            <BsSend size={12} className="me-1" />
            Send
          </Button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-grow-1 d-flex flex-column bg-white">
        {/* Header */}
        <div className="border-bottom p-3 bg-light">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <BsRobot size={32} className="text-primary" />
              <div>
                <div className="fw-bold">AI Tax Assistant</div>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-success" style={{ fontSize: '0.65rem' }}>
                    Excellent progress!
                  </span>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                    You have provided your personal information and your income details. Now let's move on to the tax credits.
                  </small>
                </div>
              </div>
            </div>
            <Button variant="primary" size="sm">
              <BsLightningChargeFill className="me-1" />
              Save Session
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-grow-1 p-3" style={{ overflowY: 'auto', maxHeight: '400px' }}>
          <div className="d-flex flex-column gap-2">
            {/* Session header */}
            <div className="text-center mb-3">
              <Badge bg="primary" className="px-3 py-2">
                Session Management
              </Badge>
              <small className="d-block mt-2 text-muted">View All (4) | <span className="text-primary">Save Session</span></small>
            </div>

            {/* AI Message */}
            <div className="d-flex gap-2 mb-2">
              <div className="bg-primary rounded-circle p-2 align-self-start" style={{ width: '32px', height: '32px' }}>
                <BsRobot size={16} className="text-white" />
              </div>
              <div>
                <Card className="border-0 shadow-sm" style={{ maxWidth: '500px', background: '#f0f2f5' }}>
                  <Card.Body className="p-2" style={{ fontSize: '0.85rem' }}>
                    Excellent progress! You have provided your personal information and your income details. Now let's move on to the deductions.
                  </Card.Body>
                </Card>
                <small className="text-muted ms-2" style={{ fontSize: '0.7rem' }}>AI • Just now</small>
              </div>
            </div>

            {/* User Messages */}
            <div className="d-flex flex-column align-items-end gap-2 mb-3">
              <div>
                <Card className="border-0 bg-primary text-white" style={{ maxWidth: '450px' }}>
                  <Card.Body className="p-2" style={{ fontSize: '0.85rem' }}>
                    Did you file any income from W-2 wages in 2024?
                  </Card.Body>
                </Card>
                <small className="text-muted me-2" style={{ fontSize: '0.7rem' }}>You • Now</small>
              </div>
              <div>
                <Card className="border-0 bg-primary text-white" style={{ maxWidth: '450px' }}>
                  <Card.Body className="p-2" style={{ fontSize: '0.85rem' }}>
                    Did you pay for childcare or dependent care while working?
                  </Card.Body>
                </Card>
              </div>
            </div>

            {/* System Message */}
            <div className="text-center my-2">
              <Badge bg="success" className="px-3 py-1">
                <BsCheckCircleFill className="me-1" size={12} />
                4. Income Verification
              </Badge>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-top p-3">
          <div className="d-flex align-items-center gap-2">
            <input 
              type="text" 
              className="form-control"
              placeholder="Ask your question or type if you operation..."
              style={{ fontSize: '0.85rem' }}
            />
            <Button variant="primary" className="d-flex align-items-center gap-1">
              <BsSend size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Session Info */}
      <div 
        className="border-start bg-white p-3" 
        style={{ width: '320px', overflowY: 'auto' }}
      >
        <div className="mb-4">
          <Badge bg="primary" className="mb-2 w-100 py-2">
            1040 Tax Preparation Data Collection
          </Badge>
          <small className="text-muted">Your complete information will be provided automatically ask your deduction</small>
        </div>

        <Card className="mb-3 border-warning bg-warning bg-opacity-10">
          <Card.Body className="p-3">
            <div className="d-flex align-items-start gap-2">
              <div className="text-warning">⚠️</div>
              <div style={{ fontSize: '0.75rem' }}>
                <strong>Note:</strong> Some forms aren't well saved in a different format using when notify qualify for based capital gains on your.
              </div>
            </div>
          </Card.Body>
        </Card>

        <div className="mb-3">
          <h6 style={{ fontSize: '0.85rem' }} className="mb-2">Cryptocurrency Transactions</h6>
          <Badge bg="success" className="mb-2">98% confidence</Badge>
          <p style={{ fontSize: '0.75rem' }} className="text-muted mb-2">
            As Crypto Gains (8/year)
          </p>
          <ListGroup variant="flush" style={{ fontSize: '0.75rem' }}>
            <ListGroup.Item className="px-0 py-1 d-flex justify-content-between">
              <span>Total Transactions</span>
              <span className="fw-bold">$2,891.10</span>
            </ListGroup.Item>
            <ListGroup.Item className="px-0 py-1 d-flex justify-content-between">
              <span>Short-term gain/loss</span>
              <span className="text-success fw-bold">$3,201.10 gain</span>
            </ListGroup.Item>
            <ListGroup.Item className="px-0 py-1 d-flex justify-content-between">
              <span>Long-term form (best$11 / year)</span>
              <span className="text-success fw-bold">$1,320.00</span>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="mb-3">
          <h6 style={{ fontSize: '0.85rem' }} className="mb-2">Imported Tax Data</h6>
          <div className="d-flex flex-column gap-2">
            <Card className="border">
              <Card.Body className="p-2 d-flex align-items-center gap-2">
                <div className="bg-warning bg-opacity-25 rounded p-2">
                  📄
                </div>
                <div style={{ fontSize: '0.75rem' }} className="flex-grow-1">
                  <div className="fw-semibold">Document: Income/ Properties/ Investment/ Inco...</div>
                  <small className="text-muted">Confirmed (upload +31)</small>
                </div>
                <Button variant="link" size="sm" className="p-0">
                  ✓
                </Button>
              </Card.Body>
            </Card>

            <Card className="border">
              <Card.Body className="p-2 d-flex align-items-center gap-2">
                <div className="bg-warning bg-opacity-25 rounded p-2">
                  📄
                </div>
                <div style={{ fontSize: '0.75rem' }} className="flex-grow-1">
                  <div className="fw-semibold">Crypto : crypto_important.csv</div>
                  <small className="text-muted">Confirmed / Sending to Gain Crypto Veri...</small>
                </div>
                <Button variant="link" size="sm" className="p-0">
                  ✓
                </Button>
              </Card.Body>
            </Card>

            <Card className="border">
              <Card.Body className="p-2 d-flex align-items-center gap-2">
                <div className="bg-warning bg-opacity-25 rounded p-2">
                  📄
                </div>
                <div style={{ fontSize: '0.75rem' }} className="flex-grow-1">
                  <div className="fw-semibold">Crypto : crypto_important.csv</div>
                  <small className="text-muted">Confirmed balance +34 / Ethereum crypto chain...</small>
                </div>
                <Button variant="link" size="sm" className="p-0">
                  ✓
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="mb-3">
          <ListGroup style={{ fontSize: '0.75rem' }}>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Total Income</span>
              <span className="fw-bold">$4,802</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Capital Gains</span>
              <span className="fw-bold text-success">$3,630</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Total InfixMatching</span>
              <span className="fw-bold">$4,802</span>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="bg-light rounded p-2 text-center mb-3">
          <small style={{ fontSize: '0.7rem' }} className="text-muted">
            Needing associated filing Status
          </small>
          <Button variant="primary" size="sm" className="w-100 mt-2">
            Calculate Now →
          </Button>
        </div>

        <div className="d-flex align-items-center justify-content-center gap-2 p-2 bg-success bg-opacity-10 rounded">
          <span style={{ fontSize: '0.75rem' }}>🎉 Ready to Calculate?</span>
        </div>
      </div>
    </div>
  );
};

export default AITaxAssistantChat;
