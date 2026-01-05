import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from "react-toastify";

import { AuthProvider } from './states/useAuthContext'
import { LayoutProvider } from './states/useLayoutContext'
import { ShopProvider } from './states/useShoppingContext'
import { NotificationProvider } from './states/useNotificationContext'
import { CookieConsentProvider } from './hooks/useCookieConsent'

import BackToTop from './components/BackToTop'
import CookieConsent from './components/CookieConsent'
import configureFakeBackend from './helpers/fake-backend'
import AppRouter from './routes/router'

import 'swiper/swiper-bundle.css'
import "react-toastify/dist/ReactToastify.css";

import '@/assets/scss/style.scss'

configureFakeBackend()

const App = () => {

  return (
    <HelmetProvider>
      <CookieConsentProvider>
        <NotificationProvider>
          <LayoutProvider>
            <AuthProvider>
              <ShopProvider>

                <AppRouter />

                <BackToTop />

                <CookieConsent />

                <ToastContainer />

              </ShopProvider>
            </AuthProvider>
          </LayoutProvider>
        </NotificationProvider>
      </CookieConsentProvider>
    </HelmetProvider>
  )
}

export default App
