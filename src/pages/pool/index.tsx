import { useState } from 'react'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer1 from '@/components/footer/Footer1'
import SEO from '@/components/SEO'
// Pool Components
import PoolSetup from './components/PoolSetup'
import ExpenseRecorder from './components/ExpenseRecorder'
import MetricsBar from './components/MetricsBar'
import PoolCharts from './components/PoolCharts'
import InvestorLedger from './components/InvestorLedger'
import PasswordModal from './components/PasswordModal'
import { PoolProvider } from './contexts/PoolContext'

// Hardcoded credentials (in production, use proper authentication)
const POOL_USERNAME = 'pooladmin'
const POOL_PASSWORD = 'CapitalPool2025!'

const PoolPageContent = () => {
  return (
    <PoolProvider>
      <>
        <SEO 
          title="Campaign Capital Pool Manager | Prompt.Tax"
          description="Collaborative funding tracker for Marketing Phases 1 & 2. Manage investor contributions, track campaign burn rate, and calculate real-time refund values."
        />

        <TopNavigationBar
          menuProps={{
            showContactUs: true,
            showProductLinks: true,
            ulClassName: 'mx-auto'
          }}
          navClassName="bg-white shadow-sm"
          showSignUp
          showLogin
        />
        <main className='bg-light'>
        <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
          <div className="container py-5">
            {/* Header */}
            <header className="mb-5 pb-4 border-bottom">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h1 className="h2 fw-bold text-dark mb-2">Campaign Capital Pool</h1>
                  <p className="text-muted mb-0">
                    Marketing Phases 1 & 2 • Real-time fund allocation and investor tracking
                  </p>
                </div>
              </div>
            </header>

            {/* Grid Layout */}
            <div className="row g-4">
              {/* Left Column: Configuration & Inputs */}
              <div className="col-lg-4">
                <div className="d-flex flex-column gap-4">
                  <PoolSetup />
                  <ExpenseRecorder />
                </div>
              </div>

              {/* Right Column: Visualization & Status */}
              <div className="col-lg-8">
                <div className="d-flex flex-column gap-4">
                  <MetricsBar />
                  <PoolCharts />
                  <InvestorLedger />
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
        <Footer1 />
      </>
    </PoolProvider>
  )
}

const PoolPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = (username: string, password: string): boolean => {
    if (username === POOL_USERNAME && password === POOL_PASSWORD) {
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  if (!isAuthenticated) {
    return <PasswordModal onLogin={handleLogin} />
  }

  return <PoolPageContent />
}

export default PoolPage
