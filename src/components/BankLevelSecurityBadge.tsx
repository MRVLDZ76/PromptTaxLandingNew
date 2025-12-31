import React from 'react';
import { BsShieldCheck } from 'react-icons/bs';

const BankLevelSecurityBadge: React.FC = () => {
  return (
    <div className="text-center">
      <div 
        className="d-inline-flex align-items-center justify-content-center mb-3 rounded-circle"
        style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)'
        }}
      >
        <BsShieldCheck size={40} className="text-success" />
      </div>
      
      <h6 className="fw-bold mb-2">Bank-Level Security</h6>
      
      <p className="text-muted small mb-0">
        Read-only access, encrypted<br />connection
      </p>
    </div>
  );
};

export default BankLevelSecurityBadge;
