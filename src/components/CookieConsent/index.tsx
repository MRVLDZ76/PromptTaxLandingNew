import { useState, useEffect } from 'react';
import { useCookieConsent, CookiePreferences } from '@/hooks/useCookieConsent';
import { FaShieldAlt, FaChartLine, FaBullhorn, FaCheckCircle, FaTimes } from 'react-icons/fa';

const CookieConsent = () => {
  const { showBanner, acceptAll, acceptNecessary, setCustomPreferences, preferences } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [customPrefs, setCustomPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: preferences?.analytics ?? false,
    marketing: preferences?.marketing ?? false,
  });

  useEffect(() => {
    // Delay showing banner to avoid conflict with splash screen
    if (showBanner) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showBanner]);

  const handleSaveCustom = () => {
    setCustomPreferences(customPrefs);
  };

  if (!showBanner || !isVisible) return null;

  return (
    <>
      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Cookie Banner */}
      <div 
        className="position-fixed bottom-0 start-0 end-0 p-3 p-md-4"
        style={{ animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)', zIndex: 9999 }}
      >

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] border border-gray-200/50 dark:border-gray-700/50 overflow-hidden backdrop-blur-xl">
            {!showDetails ? (
              // Simple Banner View
              <div className="position-relative">
              {/* Gradient accent line */}
              <div className="position-absolute top-0 start-0 end-0 bg-primary" style={{ height: '3px' }} />
              
              <div className="p-4 p-sm-5">
                <div className="d-flex flex-column flex-lg-row align-items-lg-start justify-content-lg-between gap-4">
                  <div className="flex-fill">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="flex-shrink-0 icon-lg bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <FaShieldAlt className="text-primary" style={{ fontSize: '24px' }} />
                      </div>
                      <div>
                        <h3 className="h4 mb-1">
                          Your Privacy Matters
                        </h3>
                        <p className="mb-0 small text-body-secondary">
                          We respect your data and give you control
                        </p>
                      </div>
                    </div>
                    
                    <p className="mb-3">
                      We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                      Your preferences are saved and can be changed anytime. Learn more in our{' '}
                      <a 
                        href="/privacy-policy" 
                        className="text-primary fw-semibold text-decoration-underline"
                      >
                        Privacy Policy
                      </a>.
                    </p>

                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-success bg-opacity-10 text-success">
                        <FaCheckCircle className="me-1" style={{ fontSize: '12px' }} />
                        GDPR Compliant
                      </span>
                      <span className="badge bg-info bg-opacity-10 text-info">
                        <FaShieldAlt className="me-1" style={{ fontSize: '12px' }} />
                        Secure
                      </span>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-2" style={{ minWidth: '280px' }}>
                    <button
                      onClick={acceptAll}
                      className="btn btn-primary mb-0"
                    >
                      Accept All Cookies
                    </button>
                    
                    <button
                      onClick={() => setShowDetails(true)}
                      className="btn btn-light mb-0"
                    >
                      Customize Preferences
                    </button>
                    
                    <button
                      onClick={acceptNecessary}
                      className="btn btn-link text-body-secondary mb-0 p-2"
                    >
                      Only Necessary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Detailed Preferences View
            <div className="position-relative">
              {/* Gradient accent line */}
              <div className="position-absolute top-0 start-0 end-0 bg-primary" style={{ height: '3px' }} />
              
              <div className="p-4 p-sm-5">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <h3 className="h3 mb-1">
                      Cookie Preferences
                    </h3>
                    <p className="mb-0 small text-body-secondary">
                      Manage your cookie settings and privacy preferences
                    </p>
                  </div>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="btn btn-sm btn-icon btn-light rounded-circle flex-shrink-0"
                    aria-label="Close preferences"
                  >
                    <FaTimes style={{ fontSize: '16px' }} />
                  </button>
                </div>

                  <div className="vstack gap-3 mb-4">
                    {/* Necessary Cookies */}
                    <div className="card bg-success bg-opacity-10 border-success border-2 rounded-3">
                      <div className="card-body">
                        <div className="d-flex align-items-start gap-3">
                          <div className="flex-shrink-0 icon-lg bg-success rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '48px', height: '48px' }}>
                            <FaShieldAlt className="text-white" style={{ fontSize: '22px' }} />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <h4 className="h6 mb-0">
                                Necessary Cookies
                              </h4>
                              <span className="badge bg-success text-white">
                                <FaCheckCircle className="me-1" style={{ fontSize: '10px' }} />
                                Always Active
                              </span>
                            </div>
                            <p className="mb-0 small">
                              Essential for core website functionality including security, authentication, and navigation. 
                              Required for the site to work properly and cannot be disabled.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="card border-2 rounded-3">
                      <div className="card-body">
                        <div className="d-flex align-items-start gap-3">
                          <div className="flex-shrink-0 icon-lg bg-info rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '48px', height: '48px' }}>
                            <FaChartLine className="text-white" style={{ fontSize: '22px' }} />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex align-items-center justify-content-between gap-3 mb-2">
                              <h4 className="h6 mb-0">
                                Analytics Cookies
                              </h4>
                              <div className="form-check form-switch">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  checked={customPrefs.analytics}
                                  onChange={(e) =>
                                    setCustomPrefs({ ...customPrefs, analytics: e.target.checked })
                                  }
                                  id="analyticsSwitch"
                                />
                              </div>
                            </div>
                            <p className="mb-2 small">
                              Help us understand visitor behavior through anonymous data collection. 
                              Includes Google Analytics with IP anonymization for GDPR compliance.
                            </p>
                            <span className={`badge ${customPrefs.analytics ? 'bg-success' : 'bg-secondary'}`}>
                              {customPrefs.analytics ? '✓ Enabled' : '✗ Disabled'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="card border-2 rounded-3">
                      <div className="card-body">
                        <div className="d-flex align-items-start gap-3">
                          <div className="flex-shrink-0 icon-lg bg-danger rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '48px', height: '48px' }}>
                            <FaBullhorn className="text-white" style={{ fontSize: '22px' }} />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex align-items-center justify-content-between gap-3 mb-2">
                              <h4 className="h6 mb-0">
                                Marketing Cookies
                              </h4>
                              <div className="form-check form-switch">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  checked={customPrefs.marketing}
                                  onChange={(e) =>
                                    setCustomPrefs({ ...customPrefs, marketing: e.target.checked })
                                  }
                                  id="marketingSwitch"
                                />
                              </div>
                            </div>
                            <p className="mb-2 small">
                              Enable personalized advertisements and track campaign effectiveness. 
                              May track your activity across different websites.
                            </p>
                            <span className={`badge ${customPrefs.marketing ? 'bg-success' : 'bg-secondary'}`}>
                              {customPrefs.marketing ? '✓ Enabled' : '✗ Disabled'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

              {/* Action Buttons */}
                  <div className="d-flex flex-column flex-sm-row gap-2 pt-4 mt-4 border-top">
                    <button
                      onClick={acceptNecessary}
                      className="btn btn-light flex-fill mb-0"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleSaveCustom}
                      className="btn btn-primary flex-fill mb-0"
                    >
                      Save My Preferences
                    </button>
                    <button
                      onClick={acceptAll}
                      className="btn btn-success flex-fill mb-0"
                    >
                      Accept All
                    </button>
                  </div>

                  <div className="alert alert-light mb-0 mt-3" role="alert">
                    <p className="mb-0 small text-center">
                      Your preferences are saved locally and can be updated anytime. For details on data handling, see our{' '}
                      <a 
                        href="/privacy-policy" 
                        className="alert-link fw-semibold"
                      >
                        Privacy Policy
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
     
      </div>
    </>
  );
};

export default CookieConsent;
