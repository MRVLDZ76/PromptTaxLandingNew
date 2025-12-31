import React from 'react';
import { Button } from 'react-bootstrap';
import { BsLink45Deg } from 'react-icons/bs';

const ConnectExchangeButton: React.FC = () => {
  return (
    <Button 
      className="d-flex align-items-center justify-content-center gap-2 border shadow"
      style={{
        background: '#ffffff',
        color: '#222427',
        padding: '12px 24px',
        borderRadius: '12px',
        fontSize: '0.85rem',
        fontWeight: 600,
        minWidth: '200px',
        maxWidth: '220px',
        border: '1px solid #dce0e5'
      }}
    >
      <BsLink45Deg size={20} />
      Connect Exchange
    </Button>
  );
};

export default ConnectExchangeButton;
