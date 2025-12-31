import { useLanguage } from '@/contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'

const InvestorFooter = () => {
  const { t } = useLanguage()
  const links = t('footer.links') || []

  return (
    <footer className="bg-body-tertiary border-top py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-3">
          <div className="text-center text-md-start">
            <span className="h5 mb-1">
              Prompt<span className="text-primary">Tax</span>
            </span>
            <p className="small text-muted mb-0">{t('footer.copyright')}</p>
          </div>
          <div className="d-flex gap-4">
            {links.map((link: any, index: number) => (
              <a
                key={index}
                href={link.href}
                className="text-muted text-decoration-none"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        {/* Language Switcher */}
        <div className="d-flex justify-content-center mt-3">
          <LanguageToggle />
        </div>
      </div>
    </footer>
  )
}

export default InvestorFooter
