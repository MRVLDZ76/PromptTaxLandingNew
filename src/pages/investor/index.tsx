import { LanguageProvider } from '@/contexts/LanguageContext'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer1 from '@/components/footer/Footer1'
import SEO from '@/components/SEO'
import InvestorHero from './components/InvestorHero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import CompetitionSection from './components/CompetitionSection'
import MarketOpportunitySection from './components/MarketOpportunitySection'
import ReturnsCalculator from './components/ReturnsCalculator'
import SeedRoundSection from './components/SeedRoundSection' 
import ExitStrategySection from './components/ExitStrategySection'
import GrowthStrategy from './components/GrowthStrategy'
import ContactSection from './components/ContactSection'
import { useLanguage } from '@/contexts/LanguageContext'

const InvestorPageContent = () => {
  const { t } = useLanguage()

  return (
    <>
      <SEO 
        title={t('meta.title')}
        description={t('meta.description')}
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

      {/* Investor page content with Tailwind styles - wrapped to avoid navbar conflicts */}
      <div className="investor-page-content" style={{ paddingTop: '80px' }}>
        <main>
          <InvestorHero />
          <ProblemSection />
          <SolutionSection />
          <MarketOpportunitySection />
          <CompetitionSection />
          <ReturnsCalculator />
          <SeedRoundSection />
          <ExitStrategySection />
      
          <GrowthStrategy />
          <ContactSection />
        </main>
      </div>

      <Footer1 />
    </>
  )
}

const InvestorPage = () => {
  return (
    <LanguageProvider>
      <InvestorPageContent />
    </LanguageProvider>
  )
}

export default InvestorPage
