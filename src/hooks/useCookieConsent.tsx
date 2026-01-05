import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextType {
  preferences: CookiePreferences | null;
  showBanner: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  setCustomPreferences: (prefs: CookiePreferences) => void;
  openPreferences: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const STORAGE_KEY = 'cookie_preferences';
const CONSENT_DATE_KEY = 'cookie_consent_date';

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const prefs = JSON.parse(stored) as CookiePreferences;
        setPreferences(prefs);
        
        // Load analytics if consented
        if (prefs.analytics) {
          loadGoogleAnalytics();
        }
      } catch (e) {
        // Invalid stored preferences, show banner
        setShowBanner(true);
      }
    } else {
      // No consent given yet, show banner
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);

    // Load analytics if consented
    if (prefs.analytics) {
      loadGoogleAnalytics();
    }
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const setCustomPreferences = (prefs: CookiePreferences) => {
    savePreferences(prefs);
  };

  const openPreferences = () => {
    setShowBanner(true);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        showBanner,
        acceptAll,
        acceptNecessary,
        setCustomPreferences,
        openPreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
};

// Google Analytics loader
const loadGoogleAnalytics = () => {
  if (typeof window === 'undefined') return;

  // Check if already loaded
  if (typeof window.gtag !== 'undefined') return;

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9MLE8GP7S0';
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-9MLE8GP7S0', {
    anonymize_ip: true, // GDPR compliance
    cookie_flags: 'SameSite=None;Secure',
  });
};

// Type augmentation for window.gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
