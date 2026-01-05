import { useState } from 'react';
import { useCookieConsent, CookiePreferences } from '@/hooks/useCookieConsent';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';

const CookieConsent = () => {
  const { showBanner, acceptAll, acceptNecessary, setCustomPreferences, preferences } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [customPrefs, setCustomPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: preferences?.analytics ?? false,
    marketing: preferences?.marketing ?? false,
  });

  if (!showBanner) return null;

  const handleSaveCustom = () => {
    setCustomPreferences(customPrefs);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-7xl mx-auto p-4 sm:p-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {!showDetails ? (
            // Simple Banner View
            <div className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    🍪 We Value Your Privacy
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All," you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                    <a href="/privacy-policy" className="text-primary underline hover:text-primary-600">
                      Privacy Policy
                    </a>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <button
                    onClick={() => setShowDetails(true)}
                    className="px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    Customize
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    Necessary Only
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-600 rounded-lg transition-colors shadow-sm"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Detailed Preferences View
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  aria-label="Close preferences"
                >
                  <BsXCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6 mb-8">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BsCheckCircle className="w-5 h-5 text-green-600" />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Necessary Cookies
                        </h4>
                        <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">
                          Always Active
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Essential cookies required for the website to function properly. These enable core features like security, 
                        authentication, and basic navigation. These cannot be disabled.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Analytics Cookies
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Help us understand how visitors interact with our website by collecting and reporting information anonymously. 
                        Includes Google Analytics with IP anonymization for GDPR compliance.
                      </p>
                      <div className="flex items-center gap-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={customPrefs.analytics}
                            onChange={(e) =>
                              setCustomPrefs({ ...customPrefs, analytics: e.target.checked })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/40 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {customPrefs.analytics ? 'Enabled' : 'Disabled'}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Marketing Cookies
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Used to deliver personalized advertisements and track advertising effectiveness. 
                        These cookies may track your activity across different websites.
                      </p>
                      <div className="flex items-center gap-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={customPrefs.marketing}
                            onChange={(e) =>
                              setCustomPrefs({ ...customPrefs, marketing: e.target.checked })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/40 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {customPrefs.marketing ? 'Enabled' : 'Disabled'}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={acceptNecessary}
                  className="flex-1 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSaveCustom}
                  className="flex-1 px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-600 rounded-lg transition-colors shadow-sm"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-600 rounded-lg transition-colors shadow-sm"
                >
                  Accept All
                </button>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                You can change these settings at any time. View our{' '}
                <a href="/privacy-policy" className="text-primary underline hover:text-primary-600">
                  Privacy Policy
                </a>{' '}
                for more information.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
