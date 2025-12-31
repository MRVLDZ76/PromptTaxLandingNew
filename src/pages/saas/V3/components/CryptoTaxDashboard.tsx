import React from 'react';
import { Card, Badge, ListGroup, Row, Col } from 'react-bootstrap';
import { BsPatchCheckFill, BsLightningChargeFill, BsShieldCheck, BsGraphUpArrow } from 'react-icons/bs';

const CryptoTaxDashboard: React.FC = () => {
    const exchanges = [
        { name: 'Coinbase', status: 'Synced', transactions: 847, color: '#0052FF' },
        { name: 'Binance', status: 'Synced', transactions: 1234, color: '#F3BA2F' },
        { name: 'Kraken', status: 'Synced', transactions: 562, color: '#5741D9' }
    ];

    const totalTransactions = exchanges.reduce((sum, ex) => sum + ex.transactions, 0);

    return (
        <Card 
            className="border-0 shadow-lg h-100"
            style={{
                background: 'linear-gradient(135deg, #1a2332 0%, #0f1419 100%)',
                borderRadius: '16px'
            }}
        >
            <Card.Body className="p-3">
                {/* Header */}
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-2">
                        <BsLightningChargeFill 
                            size={28} 
                            className="text-warning"
                        />
                        <div>
                            <h6 className="mb-0 text-white fw-bold" style={{ fontSize: '0.95rem' }}>
                                Auto-Sync Active
                            </h6>
                            <small className="text-white-50" style={{ fontSize: '0.7rem' }}>
                                Real-time tracking
                            </small>
                        </div>
                    </div>
                    <Badge 
                        bg="success" 
                        className="d-flex align-items-center gap-1"
                        style={{ fontSize: '0.7rem', padding: '0.35rem 0.6rem' }}
                    >
                        <BsShieldCheck size={12} />
                        IRS Compliant
                    </Badge>
                </div>

                {/* Exchange Connections */}
                <div className="mb-2">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <small className="text-white-50 fw-semibold" style={{ fontSize: '0.75rem' }}>
                            Connected Exchanges
                        </small>
                        <Badge bg="primary" style={{ fontSize: '0.65rem' }}>
                            {exchanges.length} Active
                        </Badge>
                    </div>
                    <ListGroup variant="flush" className="bg-transparent">
                        {exchanges.map((exchange, index) => (
                            <ListGroup.Item 
                                key={index}
                                className="bg-transparent border-0 px-0 py-1"
                            >
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <div 
                                            style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '6px',
                                                background: exchange.color,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.65rem',
                                                fontWeight: 'bold',
                                                color: 'white'
                                            }}
                                        >
                                            {exchange.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-white fw-semibold" style={{ fontSize: '0.8rem' }}>
                                                {exchange.name}
                                            </div>
                                            <small className="text-white-50" style={{ fontSize: '0.65rem' }}>
                                                {exchange.transactions.toLocaleString()} transactions
                                            </small>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-1">
                                        <BsPatchCheckFill 
                                            size={14} 
                                            className="text-success"
                                        />
                                        <small className="text-success fw-semibold" style={{ fontSize: '0.7rem' }}>
                                            {exchange.status}
                                        </small>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>

                {/* Stats Row */}
                <Row className="g-2 mt-2">
                    <Col xs={6}>
                        <div 
                            className="text-center p-2"
                            style={{
                                background: 'rgba(16, 185, 129, 0.1)',
                                borderRadius: '10px',
                                border: '1px solid rgba(16, 185, 129, 0.2)'
                            }}
                        >
                            <div className="text-success fw-bold" style={{ fontSize: '1.1rem' }}>
                                {totalTransactions.toLocaleString()}
                            </div>
                            <small className="text-white-50" style={{ fontSize: '0.65rem' }}>
                                Total Transactions
                            </small>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div 
                            className="text-center p-2"
                            style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                borderRadius: '10px',
                                border: '1px solid rgba(59, 130, 246, 0.2)'
                            }}
                        >
                            <div className="text-primary fw-bold d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '1.1rem' }}>
                                <BsGraphUpArrow size={16} />
                                <span>$8,750</span>
                            </div>
                            <small className="text-white-50" style={{ fontSize: '0.65rem' }}>
                                Tax Loss Harvested
                            </small>
                        </div>
                    </Col>
                </Row>

                {/* Report Ready Badge */}
                <div 
                    className="text-center mt-2 py-2"
                    style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        borderRadius: '10px',
                        border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                >
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <BsPatchCheckFill size={16} className="text-success" />
                        <span className="text-success fw-semibold" style={{ fontSize: '0.8rem' }}>
                            AI-Powered Report Ready
                        </span>
                    </div>
                    <small className="text-white-50 d-block mt-1" style={{ fontSize: '0.65rem' }}>
                        100% accuracy · IRS Form 8949 · Schedule D
                    </small>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CryptoTaxDashboard;
