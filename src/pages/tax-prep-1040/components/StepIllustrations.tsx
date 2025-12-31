// Professional, clean illustrations for 1040 Tax Prep workflow

// Step 1: Chat & Upload Documents - Modern Interface
export const ChatUploadIllustration = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-100">
    <defs>
      <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAFBFC" />
        <stop offset="100%" stopColor="#F3F4F6" />
      </linearGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08"/>
      </filter>
    </defs>
    
    <rect width="400" height="300" fill="url(#bgGrad1)"/>
    
    {/* Modern Chat Interface */}
    <g filter="url(#shadow)">
      <rect x="30" y="40" width="200" height="160" fill="white" stroke="#E5E7EB" strokeWidth="1" rx="12"/>
      
      {/* Header */}
      <rect x="30" y="40" width="200" height="40" fill="#FFFFFF" rx="12"/>
      <rect x="30" y="65" width="200" height="1" fill="#E5E7EB"/>
      <circle cx="50" cy="60" r="6" fill="#10B981"/>
      <text x="65" y="65" fill="#111827" fontSize="12" fontWeight="600">PromptTax AI</text>
      
      {/* User Message */}
      <rect x="140" y="95" width="75" height="28" fill="#8B5CF6" rx="14"/>
      <text x="150" y="112" fill="white" fontSize="11">Crypto taxes?</text>
      
      {/* AI Response */}
      <rect x="45" y="135" width="170" height="50" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" rx="12"/>
      <text x="55" y="152" fill="#374151" fontSize="10">I'll process your documents</text>
      <text x="55" y="166" fill="#374151" fontSize="10">and calculate everything</text>
      <text x="55" y="180" fill="#6B7280" fontSize="9" fontStyle="italic">• Wash sales • Form 8949</text>
    </g>
    
    {/* Document Stack */}
    <g filter="url(#shadow)">
      <rect x="250" y="50" width="130" height="150" fill="white" stroke="#E5E7EB" strokeWidth="1" rx="8"/>
      
      {/* Documents Grid */}
      <rect x="265" y="65" width="48" height="32" fill="white" stroke="#3B82F6" strokeWidth="1.5" rx="4"/>
      <text x="275" y="84" fill="#3B82F6" fontSize="11" fontWeight="600">W-2</text>
      
      <rect x="322" y="65" width="48" height="32" fill="white" stroke="#10B981" strokeWidth="1.5" rx="4"/>
      <text x="328" y="84" fill="#10B981" fontSize="10" fontWeight="600">1099</text>
      
      <rect x="265" y="107" width="48" height="32" fill="white" stroke="#EF4444" strokeWidth="1.5" rx="4"/>
      <text x="275" y="126" fill="#EF4444" fontSize="11" fontWeight="600">K-1</text>
      
      <rect x="322" y="107" width="48" height="32" fill="white" stroke="#F59E0B" strokeWidth="1.5" rx="4"/>
      <text x="332" y="126" fill="#F59E0B" fontSize="14" fontWeight="700">₿</text>
      
      {/* Upload Indicator */}
      <rect x="265" y="155" width="105" height="30" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" rx="6"/>
      <text x="285" y="174" fill="#6B7280" fontSize="10">Upload files</text>
      <path d="M 355 167 L 355 177 M 350 172 L 355 167 L 360 172" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </g>
    
    {/* Connection Line */}
    <path d="M 230 130 L 250 130" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4,3"/>
    
    {/* Status Badge */}
    <rect x="30" y="220" width="200" height="36" fill="white" stroke="#8B5CF6" strokeWidth="1.5" rx="18" filter="url(#shadow)"/>
    <circle cx="50" cy="238" r="8" fill="#8B5CF6"/>
    <text x="65" y="242" fill="#8B5CF6" fontSize="13" fontWeight="600">Ready to Process</text>
  </svg>
);

// Step 2: AI Processing - Clean Architecture
export const AIProcessingIllustration = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-100">
    <defs>
      <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAFBFC" />
        <stop offset="100%" stopColor="#F3F4F6" />
      </linearGradient>
      <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
      <filter id="shadow2">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08"/>
      </filter>
    </defs>
    
    <rect width="400" height="300" fill="url(#bgGrad2)"/>
    
    {/* Central AI Engine */}
    <g filter="url(#shadow2)">
      <circle cx="200" cy="150" r="45" fill="url(#aiGrad)" opacity="0.1"/>
      <circle cx="200" cy="150" r="38" fill="url(#aiGrad)"/>
      <text x="178" y="160" fill="white" fontSize="22" fontWeight="700">AI</text>
    </g>
    
    {/* Processing Modules */}
    <g filter="url(#shadow2)">
      {/* Data Extraction - Top */}
      <rect x="155" y="40" width="90" height="50" fill="white" stroke="#3B82F6" strokeWidth="1.5" rx="8"/>
      <circle cx="175" cy="58" r="8" fill="#3B82F6"/>
      <text x="188" y="60" fill="#1F2937" fontSize="11" fontWeight="600">Extract</text>
      <text x="165" y="78" fill="#6B7280" fontSize="9">Documents</text>
      
      {/* Validation - Right */}
      <rect x="275" y="125" width="90" height="50" fill="white" stroke="#10B981" strokeWidth="1.5" rx="8"/>
      <circle cx="295" cy="143" r="8" fill="#10B981"/>
      <text x="308" y="145" fill="#1F2937" fontSize="11" fontWeight="600">Validate</text>
      <text x="287" y="163" fill="#6B7280" fontSize="9">Check Rules</text>
      
      {/* Calculation - Bottom */}
      <rect x="155" y="210" width="90" height="50" fill="white" stroke="#F59E0B" strokeWidth="1.5" rx="8"/>
      <circle cx="175" cy="228" r="8" fill="#F59E0B"/>
      <text x="188" y="230" fill="#1F2937" fontSize="11" fontWeight="600">Calculate</text>
      <text x="165" y="248" fill="#6B7280" fontSize="9">Wash Sales</text>
      
      {/* Schedule - Left */}
      <rect x="35" y="125" width="90" height="50" fill="white" stroke="#EF4444" strokeWidth="1.5" rx="8"/>
      <circle cx="55" cy="143" r="8" fill="#EF4444"/>
      <text x="68" y="145" fill="#1F2937" fontSize="11" fontWeight="600">Schedule</text>
      <text x="50" y="163" fill="#6B7280" fontSize="9">Forms C/E</text>
    </g>
    
    {/* Data Flow Lines */}
    <g stroke="#E5E7EB" strokeWidth="2" fill="none" strokeDasharray="4,3">
      <path d="M 200 112 L 200 90"/>
      <path d="M 238 150 L 275 150"/>
      <path d="M 200 188 L 200 210"/>
      <path d="M 162 150 L 125 150"/>
    </g>
    
    {/* Accuracy Badge */}
    <g filter="url(#shadow2)">
      <rect x="290" y="35" width="85" height="40" fill="white" stroke="#10B981" strokeWidth="1.5" rx="8"/>
      <text x="310" y="54" fill="#10B981" fontSize="20" fontWeight="700">99%</text>
      <text x="302" y="68" fill="#6B7280" fontSize="10">Accuracy</text>
    </g>
    
    {/* Processing Status */}
    <rect x="35" y="235" width="110" height="32" fill="#F9FAFB" stroke="#8B5CF6" strokeWidth="1.5" rx="16" filter="url(#shadow2)"/>
    <circle cx="55" cy="251" r="5" fill="#8B5CF6">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <text x="68" y="255" fill="#8B5CF6" fontSize="12" fontWeight="600">Processing</text>
  </svg>
);

// Step 3: CPA Review & E-File - Professional Workflow
export const CPAReviewIllustration = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-100">
    <defs>
      <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAFBFC" />
        <stop offset="100%" stopColor="#F3F4F6" />
      </linearGradient>
      <filter id="shadow3">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08"/>
      </filter>
    </defs>
    
    <rect width="400" height="300" fill="url(#bgGrad3)"/>
    
    {/* Professional CPA - Minimalist */}
    <g filter="url(#shadow3)">
      {/* Avatar */}
      <circle cx="80" cy="100" r="35" fill="white" stroke="#3B82F6" strokeWidth="2"/>
      <text x="65" y="110" fill="#3B82F6" fontSize="24" fontWeight="600">CPA</text>
      
      {/* Verification Badge */}
      <circle cx="105" cy="125" r="12" fill="#10B981"/>
      <path d="M 100 125 L 103 128 L 110 121" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Info Card */}
      <rect x="35" y="150" width="90" height="60" fill="white" stroke="#E5E7EB" strokeWidth="1" rx="8"/>
      <text x="50" y="170" fill="#1F2937" fontSize="11" fontWeight="600">Licensed CPA</text>
      <text x="50" y="186" fill="#6B7280" fontSize="9">Expert Review</text>
      <text x="50" y="200" fill="#6B7280" fontSize="9">Q&amp;A Support</text>
    </g>
    
    {/* Tax Return Document */}
    <g filter="url(#shadow3)">
      <rect x="160" y="60" width="150" height="120" fill="white" stroke="#E5E7EB" strokeWidth="1.5" rx="8"/>
      
      {/* Header */}
      <rect x="160" y="60" width="150" height="35" fill="white" stroke="#E5E7EB" strokeWidth="1.5" rx="8"/>
      <rect x="160" y="83" width="150" height="1" fill="#E5E7EB"/>
      <text x="180" y="82" fill="#1F2937" fontSize="13" fontWeight="700">Form 1040</text>
      <text x="250" y="82" fill="#6B7280" fontSize="9">Tax Year 2024</text>
      
      {/* Form Lines */}
      <g stroke="#E5E7EB" strokeWidth="1">
        <line x1="175" y1="110" x2="295" y2="110"/>
        <line x1="175" y1="125" x2="295" y2="125"/>
        <line x1="175" y1="140" x2="295" y2="140"/>
        <line x1="175" y1="155" x2="260" y2="155"/>
      </g>
      
      {/* Values */}
      <text x="270" y="113" fill="#6B7280" fontSize="9">$XXX,XXX</text>
      <text x="270" y="128" fill="#6B7280" fontSize="9">$XX,XXX</text>
      <text x="270" y="143" fill="#6B7280" fontSize="9">$X,XXX</text>
      
      {/* Approval Checkmark */}
      <circle cx="285" cy="160" r="14" fill="#10B981" opacity="0.1"/>
      <circle cx="285" cy="160" r="10" fill="#10B981"/>
      <path d="M 280 160 L 283 163 L 290 156" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </g>
    
    {/* E-File System */}
    <g filter="url(#shadow3)">
      <rect x="330" y="80" width="50" height="80" fill="white" stroke="#3B82F6" strokeWidth="1.5" rx="8"/>
      
      {/* IRS Logo */}
      <rect x="338" y="95" width="34" height="24" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" rx="4"/>
      <text x="345" y="110" fill="#3B82F6" fontSize="10" fontWeight="700">IRS</text>
      
      {/* E-File Button */}
      <rect x="338" y="130" width="34" height="22" fill="#3B82F6" rx="4"/>
      <text x="343" y="144" fill="white" fontSize="9" fontWeight="600">E-File</text>
    </g>
    
    {/* Workflow Arrows */}
    <g stroke="#D1D5DB" strokeWidth="2" fill="none">
      <path d="M 125 120 L 155 100" strokeDasharray="3,3"/>
      <path d="M 310 120 L 325 120"/>
      <polygon points="323,117 330,120 323,123" fill="#D1D5DB"/>
    </g>
    
    {/* Status Indicator */}
    <g filter="url(#shadow3)">
      <rect x="160" y="200" width="150" height="45" fill="white" stroke="#10B981" strokeWidth="1.5" rx="8"/>
      <circle cx="180" cy="222" r="8" fill="#10B981"/>
      <path d="M 175 222 L 178 225 L 185 218" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="195" y="218" fill="#1F2937" fontSize="12" fontWeight="600">Return Filed</text>
      <text x="195" y="233" fill="#6B7280" fontSize="10">Successfully submitted to IRS</text>
    </g>
    
    {/* Timeline */}
    <rect x="330" y="175" width="50" height="28" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" rx="6" filter="url(#shadow3)"/>
    <text x="338" y="193" fill="#6B7280" fontSize="9">24-48hrs</text>
  </svg>
);
