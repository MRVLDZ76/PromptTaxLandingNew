import React from 'react';
import { Card } from 'react-bootstrap';
import { BsCloudUpload } from 'react-icons/bs';

const FileUploadDropzone: React.FC = () => {
  return (
    <Card 
      className="border-2 border-primary text-center p-5"
      style={{
        borderStyle: 'dashed',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <Card.Body>
        <div className="mb-4">
          <BsCloudUpload size={64} className="text-primary opacity-75" />
        </div>
        
        <h5 className="mb-3">Drop your K-1 PDF here</h5>
        
        <p className="text-muted mb-4">
          or
        </p>
        
        <button 
          className="btn btn-primary px-4"
          style={{
            borderRadius: '8px',
            fontWeight: 500
          }}
        >
          Browse Files
        </button>
        
        <p className="text-muted small mt-4 mb-0">
          PDF only - Maximum 10MB
        </p>
      </Card.Body>
    </Card>
  );
};

export default FileUploadDropzone;
