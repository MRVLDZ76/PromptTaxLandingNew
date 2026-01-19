// Realistic UI mockups matching actual interface designs
import { Check, FileText, Bitcoin, BarChart3, Wallet, Clock, ChartBar } from 'lucide-react'

// Step 1: Chat & Upload Documents - Real Interface Mockup
export const ChatUploadIllustration = () => (
  <div className="position-relative" style={{ maxWidth: '100%', margin: '0 auto' }}>
    <div className="row g-3">
      {/* Left Side - AI Chat Interface */}
      <div className="col-md-6">
        <div className="bg-white rounded-3 shadow-sm border" style={{ minHeight: '320px' }}>
          {/* Chat Header */}
          <div className="d-flex align-items-center gap-2 p-3 border-bottom">
            <div className="position-relative">
              <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <span className="text-primary fw-bold" style={{ fontSize: '14px' }}>AI</span>
              </div>
              <div className="position-absolute bottom-0 end-0 bg-success rounded-circle border border-2 border-white" style={{ width: '10px', height: '10px' }}></div>
            </div>
            <div>
              <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>AI Tax Assistant</div>
            </div>
            <button className="btn btn-sm btn-primary text-white ms-auto" style={{ fontSize: '11px', padding: '4px 12px' }}>continue</button>
          </div>
          
          {/* Chat Messages */}
          <div className="p-3" style={{ minHeight: '180px' }}>
            {/* Success Message */}
            <div className="d-flex align-items-start gap-2 mb-3">
              <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '24px', height: '24px' }}>
                <Check className="text-primary" size={14} />
              </div>
              <div className="flex-grow-1">
                <div className="fw-semibold text-dark mb-1" style={{ fontSize: '12px' }}>K-1 Data Successfully Transferred</div>
                <div className="text-dark" style={{ fontSize: '11px' }}>Your K-1 partnership income has been transferred to Form 1040 Schedule E.</div>
              </div>
            </div>
            
            {/* Partnership Income Card */}
            <div className="bg-light rounded-3 p-3 mb-3">
              <div className="fw-semibold text-mute mb-2" style={{ fontSize: '12px' }}>Partnership Income (Schedule E)</div>
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted" style={{ fontSize: '11px' }}>LAS OLAS VENTURES SEED FUND I, LLC (Schedule K-1)</span>
                <span className="text-mute" style={{ fontSize: '11px' }}>$101,621.00</span>
              </div>
              <div className="border-top pt-2 mt-2">
                <div className="d-flex justify-content-between">
                  <span className="fw-semibold text-white" style={{ fontSize: '12px' }}>Total Schedule E Income</span>
                  <span className="text-success fw-bold" style={{ fontSize: '12px' }}>$101,621.00</span>
                </div>
              </div>
            </div>
            
            {/* Next Steps Info */}
            <div className="bg-primary bg-opacity-5 border border-primary border-opacity-25 rounded-3 p-2">
              <div style={{ fontSize: '11px' }} className="text-primary">
                <div className="fw-semibold mb-1 text-white">Let's Complete Your Form 1040</div>
                <div className="opacity-7 text-white">Now that we have your partnership income, let's add your other income sources:</div>
              </div>
            </div>
          </div>
          
          {/* Input Message */}
          <div className="border-top p-2">
            <input 
              type="text" 
              className="form-control form-control-sm border-0 bg-light" 
              placeholder="What would you like to add next?"
              style={{ fontSize: '11px' }}
              disabled
            />
          </div>
        </div>
      </div>
      
      {/* Right Side - Document Upload */}
      <div className="col-md-6">
        <div className="bg-white rounded-3 shadow-sm border p-3" style={{ minHeight: '320px' }}>
          <div className="mb-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="bg-primary bg-opacity-10 rounded-2 p-2">
                <svg width="20" height="20" fill="currentColor" className="text-primary">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7zm2 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"/>
                </svg>
              </div>
              <div>
                <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>Income Information</div>
                <div className="text-dark" style={{ fontSize: '11px' }}>Upload documents or connect your QuickBooks account</div>
              </div>
            </div>
          </div>
          
          {/* Document Types */}
          <div className="d-flex gap-2 mb-3 flex-wrap">
            <span className="badge bg-light text-dark border" style={{ fontSize: '10px', padding: '4px 8px' }}>
              <FileText size={10} className="me-1" /> W-2/1099
            </span>
            <span className="badge bg-light text-dark border" style={{ fontSize: '10px', padding: '4px 8px' }}>
              <Bitcoin size={10} className="me-1" /> Crypto
            </span>
            <span className="badge bg-light text-dark border" style={{ fontSize: '10px', padding: '4px 8px' }}>
              <BarChart3 size={10} className="me-1" /> K-1
            </span>
            <span className="badge bg-success text-white" style={{ fontSize: '10px', padding: '4px 8px' }}>
              <Check size={10} className="me-1" /> QuickBooks
            </span>
            <span className="badge bg-light text-dark border" style={{ fontSize: '10px', padding: '4px 8px' }}>
              <Wallet size={10} className="me-1" /> Plaid
            </span>
          </div>
          
          {/* Upload Area */}
          <div className="border-2 border-dashed rounded-3 p-4 text-center mb-3" style={{ borderColor: '#E5E7EB' }}>
            <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{ width: '48px', height: '48px' }}>
              <svg width="24" height="24" fill="currentColor" className="text-primary">
                <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"/>
              </svg>
            </div>
            <div className="fw-semibold text-dark mb-1" style={{ fontSize: '12px' }}>Upload 1040 Documents</div>
            <div className=" text-dark mb-2" style={{ fontSize: '10px' }}>W-2, 1099, or other tax documents</div>
            <div className=" text-dark" style={{ fontSize: '9px' }}>Drag & drop or click to browse • PDF, PNG, JPG • Max 10MB</div>
          </div>
          
          {/* Uploaded Files Status */}
          <div className="bg-light rounded-3 p-2">
            <div className="d-flex align-items-center gap-2">
              <div className="bg-white rounded-2 p-2">
                <svg width="16" height="16" fill="currentColor" className="text-muted">
                  <circle cx="8" cy="8" r="6" fill="#E5E7EB"/>
                </svg>
              </div>
              <div className="flex-grow-1">
                <div className="text-muted" style={{ fontSize: '10px' }}>No files yet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Step 2: AI Processing - Real Processing Interface
export const AIProcessingIllustration = () => (
  <div className="position-relative" style={{ maxWidth: '100%', margin: '0 auto' }}>
    <div className="bg-white rounded-3 shadow-sm border p-4">
      {/* Processing Header */}
      <div className="text-center mb-4">
        <div className="bg-primary bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
          <span className="text-white fw-bold" style={{ fontSize: '24px' }}>AI</span>
        </div>
        <div className="fw-semibold text-dark mb-1" style={{ fontSize: '14px' }}>Processing Your Tax Return</div>
        <div className="text-dark" style={{ fontSize: '11px' }}>AI is analyzing documents and calculating your taxes</div>
      </div>
      
      {/* Processing Steps Grid */}
      <div className="row g-3 mb-4">
        {/* Extract Documents */}
        <div className="col-md-6">
          <div className="bg-light rounded-3 p-3 h-100 border border-primary border-opacity-25">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <Check className="text-primary" size={18} />
              </div>
              <div className="fw-semibold text-primary" style={{ fontSize: '12px' }}>Extract</div>
            </div>
            <div className="text-muted mb-2" style={{ fontSize: '10px' }}>Documents</div>
            <div className="d-flex gap-1 flex-wrap">
              <span className="badge bg-white text-primary border border-primary" style={{ fontSize: '9px' }}>W-2</span>
              <span className="badge bg-white text-primary border border-primary" style={{ fontSize: '9px' }}>1099</span>
              <span className="badge bg-white text-primary border border-primary" style={{ fontSize: '9px' }}>K-1</span>
              <span className="badge bg-white text-primary border border-primary" style={{ fontSize: '9px' }}>Crypto</span>
            </div>
          </div>
        </div>
        
        {/* Validate & Check Rules */}
        <div className="col-md-6">
          <div className="bg-light rounded-3 p-3 h-100 border border-success border-opacity-25">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <Check className="text-success" size={18} />
              </div>
              <div className="fw-semibold text-success" style={{ fontSize: '12px' }}>Validate</div>
            </div>
            <div className="text-muted mb-2" style={{ fontSize: '10px' }}>Check Rules</div>
            <div className="progress" style={{ height: '6px' }}>
              <div className="progress-bar bg-success" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        
        {/* Calculate Wash Sales */}
        <div className="col-md-6">
          <div className="bg-light rounded-3 p-3 h-100 border border-warning border-opacity-25">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <div className="spinner-border spinner-border-sm text-warning" role="status" style={{ width: '16px', height: '16px' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <div className="fw-semibold text-warning" style={{ fontSize: '12px' }}>Calculate</div>
            </div>
            <div className="text-muted mb-2" style={{ fontSize: '10px' }}>Wash Sales</div>
            <div className="text-warning" style={{ fontSize: '9px' }}>48 transactions</div>
          </div>
        </div>
        
        {/* Schedule Forms C/E */}
        <div className="col-md-6">
          <div className="bg-light rounded-3 p-3 h-100 border">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="bg-secondary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <Clock className="text-secondary" size={16} />
              </div>
              <div className="fw-semibold text-secondary" style={{ fontSize: '12px' }}>Schedule</div>
            </div>
            <div className="text-muted mb-2" style={{ fontSize: '10px' }}>Forms C/E</div>
            <div className="text-muted" style={{ fontSize: '9px' }}>Pending...</div>
          </div>
        </div>
      </div>
      
      {/* Accuracy Badge */}
      <div className="bg-light bg-opacity-10 border border-success border-opacity-25 rounded-3 p-3 text-center">
        <div className="d-flex align-items-center justify-content-center gap-3">
          <div>
            <div className="text-success fw-bold" style={{ fontSize: '28px' }}>99%</div>
            <div className="text-muted" style={{ fontSize: '10px' }}>Accuracy</div>
          </div>
          <div className="border-start ps-3">
            <div className="text-muted mb-1" style={{ fontSize: '11px' }}>Status</div>
            <div className="d-flex align-items-center gap-2">
              <div className="spinner-border spinner-border-sm text-primary" role="status" style={{ width: '14px', height: '14px' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
              <span className="text-primary fw-semibold" style={{ fontSize: '11px' }}>Processing...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Step 3: CPA Review & E-File - Real Review Interface
export const CPAReviewIllustration = () => (
  <div className="position-relative" style={{ maxWidth: '100%', margin: '0 auto' }}>
    <div className="row g-3">
      {/* Left Side - CPA Review Card */}
      <div className="col-md-5">
        <div className="bg-white rounded-3 shadow-sm border p-3 mb-3">
          <div className="d-flex align-items-center gap-2 mb-3">
 
            <div className="flex-grow-1">
              <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>CPA Professional Review</div>
              <div className="text-dark" style={{ fontSize: '10px' }}>Your tax return has been analyzed and prepared for professional review by a licensed CPA</div>
            </div>
          </div>
          
          <div className="d-flex gap-2 mb-3">
            <div className="bg-light rounded-2 p-2 flex-fill text-center">
              <Check className="text-primary" size={12} />
              <div className="text-muted" style={{ fontSize: '9px' }}>Comprehensive<br/>analysis</div>
            </div>
            <div className="bg-light rounded-2 p-2 flex-fill text-center">
              <Check className="text-primary" size={12} />
              <div className="text-muted" style={{ fontSize: '9px' }}>Licensed CPA<br/>review</div>
            </div>
  
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="bg-white rounded-3 shadow-sm border p-3">
          <div className="fw-semibold text-dark mb-3" style={{ fontSize: '12px' }}>What happens next?</div>
          
          <div className="d-flex gap-3 mb-3">
            <div className="d-flex flex-column align-items-center">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: '32px', height: '32px', fontSize: '12px' }}>1</div>
              <div className="border-start flex-grow-1" style={{ width: '2px', minHeight: '24px' }}></div>
            </div>
            <div className="flex-grow-1 pb-3">
              <div className="fw-semibold text-dark mb-1" style={{ fontSize: '11px' }}>Payment</div>
              <div className="text-dark" style={{ fontSize: '10px' }}>Complete secure payment for CPA review service</div>
            </div>
          </div>
          
          <div className="d-flex gap-3 mb-3">
            <div className="d-flex flex-column align-items-center">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: '32px', height: '32px', fontSize: '12px' }}>2</div>
              <div className="border-start flex-grow-1" style={{ width: '2px', minHeight: '24px' }}></div>
            </div>
            <div className="flex-grow-1 pb-3">
              <div className="fw-semibold text-dark mb-1" style={{ fontSize: '11px' }}>CPA Review</div>
              <div className="text-dark" style={{ fontSize: '10px' }}>Licensed CPA reviews your return and documents</div>
            </div>
          </div>
          
          <div className="d-flex gap-3">
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', fontSize: '12px' }}>3</div>
            <div className="flex-grow-1">
              <div className="fw-semibold text-dark mb-1" style={{ fontSize: '11px' }}>Delivery</div>
              <div className="text-dark" style={{ fontSize: '10px' }}>Receive reviewed return with recommendations</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Tax Return Summary */}
      <div className="col-md-7">
        <div className="bg-white rounded-3 shadow-sm border p-3 mb-3">
          <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
            <div>
              <div className="fw-bold text-dark" style={{ fontSize: '14px' }}>Review Your Return</div>
              <div className="text-dark" style={{ fontSize: '10px' }}>Complete 2026 Form 1040 summary</div>
            </div>
            <div className="text-end">
              <div className="badge bg-success" style={{ fontSize: '10px' }}>Ready for Review</div>
            </div>
          </div>
          
          <div className="bg-success bg-opacity-10 border border-success border-opacity-25 rounded-3 p-3 mb-3 text-center">
            <div className="text-dark mb-1" style={{ fontSize: '11px' }}>ESTIMATED FEDERAL REFUND</div>
            <div className="text-success fw-bold" style={{ fontSize: '32px' }}>$5148,29</div>
            <div className="text-dark" style={{ fontSize: '9px' }}>Based on Single • Tax Year 2026</div>
          </div>
          
          {/* Income Breakdown */}
          <div className="mb-2">
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <div className="d-flex align-items-center gap-2">
                <span className="text-dark" style={{ fontSize: '14px' }}>$</span>
                <div>
                  <div className="fw-semibold text-dark" style={{ fontSize: '12px' }}>Total Income</div>
                  <div className="text-dark" style={{ fontSize: '9px' }}>All income sources</div>
                </div>
              </div>
              <div className="text-end">
                <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>$75,365,3</div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <div className="d-flex align-items-center gap-2">
                <span className="text-dark" style={{ fontSize: '14px' }}>↓</span>
                <div>
                  <div className="fw-semibold text-dark" style={{ fontSize: '12px' }}>Adjustments to Income</div>
                  <div className="text-dark" style={{ fontSize: '9px' }}>Reduces your AGI</div>
                </div>
              </div>
              <div className="text-end">
                <div className="fw-semibold text-success" style={{ fontSize: '13px' }}>-$8953</div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <div className="d-flex align-items-center gap-2">
                <ChartBar className="text-dark" size={16} />
                <div>
                  <div className="fw-semibold text-dark" style={{ fontSize: '12px' }}>Taxable Income</div>
                  <div className="text-dark" style={{ fontSize: '9px' }}>Form 1040, Line 15</div>
                </div>
              </div>
              <div className="text-end">
                <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>$51,812,3</div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="d-flex align-items-center gap-2">
                <FileText className="text-dark" size={16} />
                <div>
                  <div className="fw-semibold text-dark" style={{ fontSize: '12px' }}>Total Tax</div>
                  <div className="text-dark" style={{ fontSize: '9px' }}>Federal income tax calculated</div>
                </div>
              </div>
              <div className="text-end">
                <div className="fw-semibold text-danger" style={{ fontSize: '13px' }}>$5851,71</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* E-File Status */}
        <div className="bg-success bg-opacity-10 border border-success rounded-3 p-3">
          <div className="d-flex align-items-center gap-3">
            <div className="bg-success rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px' }}>
              <Check className="text-white" size={24} />
            </div>
            <div className="flex-grow-1">
              <div className="fw-semibold text-white mb-1" style={{ fontSize: '12px' }}>Return Filed</div>
              <div className="text-muted" style={{ fontSize: '10px' }}>Successfully submitted to IRS</div>
            </div>
            <div className="text-end">
              <div className="badge bg-white text-success border border-success" style={{ fontSize: '10px' }}>IRS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Return Complexity Analysis */}
    <div className="bg-white rounded-3 shadow-sm border p-3 mt-3">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <BarChart3 className="text-dark" size={18} />
            <span className="fw-semibold text-dark" style={{ fontSize: '13px' }}>Return Complexity Analysis</span>
          </div>
          <div className="text-dark" style={{ fontSize: '10px' }}>Premium tier recommended for multiple complex scenarios</div>
        </div>
        <div className="text-end">
          <div className="badge bg-primary text-white mb-1" style={{ fontSize: '10px' }}>Premium</div>
          <div className="fw-bold text-dark" style={{ fontSize: '16px' }}>$329.00</div>
          <div className="text-dark" style={{ fontSize: '9px' }}>CPA Review Price</div>
        </div>
      </div>
      
      <div className="bg-light rounded-2 p-2">
        <div className="row g-2" style={{ fontSize: '10px' }}>
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <span className="text-muted">K-1 Partnerships:</span>
              <span className="fw-semibold text-white">2 partnership(s)</span>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <span className="text-muted">Crypto Trading:</span>
              <span className="fw-semibold text-white">48 transactions</span>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <span className="text-muted">Self-Employment Income:</span>
              <span className="fw-semibold text-white">Schedule C required</span>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <span className="text-muted">Itemized Deductions:</span>
              <span className="fw-semibold text-white">Mortgage $1,200.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
