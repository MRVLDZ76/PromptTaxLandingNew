import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from "@/pages/saas/V1/components/Hero"
import Tools from "@/pages/saas/V1/components/Tools"
import Features1 from "@/pages/saas/V1/components/Features1"
import Features2 from "@/pages/saas/V1/components/Features2"
import About from '@/pages/demos/ClassicDefault/components/About'
 
import Pricing from "@/pages/demos/ClassicDefault/components/Pricing"
import Blogs from "@/pages/saas/V1/components/Blogs"
import Footer2 from '@/components/footer/Footer2'
import { FaCrown } from 'react-icons/fa6'
import { Alert } from 'react-bootstrap' 
import SEO from '@/components/SEO'
import {useLaunchModal} from '@/hooks/useLaunchModal';
import LaunchCountdownModal from '@/components/LaunchCountdownModal';

const SaaSv1 = () => {
  const {showModal, openModal, closeModal} = useLaunchModal();
  return (
    <>
      <SEO 
        title="K-1 Tax Form Automation | AI-Powered Partnership & S-Corp Filing | PromptTax"
        description="Automate K-1 tax forms with AI. Upload partnership and S-Corp K-1s, auto-extract data, validate entries, and e-file with CPA review. 99% accuracy, 70% cost savings. Handle Schedule E/C with zero manual entry."
        keywords="K-1 tax form, partnership K-1, S-Corp K-1, Schedule E automation, AI tax software, K-1 filing, partnership tax return, S-Corp tax filing, automated K-1 processing, CPA review"
        canonicalUrl="/k1-forms"
        ogTitle="K-1 Tax Forms Made Simple | AI Automation by PromptTax"
        ogDescription="Stop manually entering K-1 data. AI extracts, validates, and files partnership & S-Corp K-1s automatically. Get CPA-reviewed returns in 24-48 hours."
      />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showProductLinks: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        showBuyNow
        data-bs-theme='dark'
      >
        <Alert variant='success' dismissible className="alert py-2 m-0 bg-primary border-0 rounded-0  fade show text-center overflow-hidden" role="alert">
          <p className="text-white small m-0"><FaCrown className="fa-solid me-2" /> Get 15% off tax preparation! Use code PROMPTTAX15 at checkout. <a href="#" onClick={openModal} className="btn btn-xs btn-white ms-2 mb-0">Start Filing Now</a></p>
        </Alert>
      </TopNavigationBar>

      <main>
        <Hero />
        <Tools />
        <Features1 />
        <Features2 />
        <About />
        <Pricing />
        <Blogs />
      </main>

      <Footer2 theme='dark' />
      <LaunchCountdownModal show={showModal} onHide={closeModal} />
    </>
  )
}

export default SaaSv1