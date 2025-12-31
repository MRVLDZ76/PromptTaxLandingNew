import { translationLanguages } from '@/assets/data/footer-items'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { FaChevronUp, FaGlobe } from 'react-icons/fa6'
import { useLanguage } from '@/contexts/LanguageContext'
import { useLocation } from 'react-router-dom'

const LanguageDropdown = () => {
  const location = useLocation()
  const isInvestorPage = location.pathname.includes('/investor')
  
  // Use investor page language context if available
  let investorLanguage = null
  let investorSetLanguage = null
  try {
    const langContext = useLanguage()
    investorLanguage = langContext?.language
    investorSetLanguage = langContext?.setLanguage
  } catch {
    // Not in investor page context
  }

  const handleLanguageChange = (langCode: string) => {
    if (isInvestorPage && investorSetLanguage) {
      investorSetLanguage(langCode as 'en' | 'es')
    }
    // For other pages, language switching would be handled differently
  }

  const displayLanguages = isInvestorPage 
    ? [{ name: 'English', flag: translationLanguages[0].flag, code: 'en' }, { name: 'Español', flag: translationLanguages[1].flag, code: 'es' }]
    : translationLanguages

  const currentLangName = isInvestorPage && investorLanguage === 'es' ? 'Español' : 'English'

  return (
    <Dropdown className="text-center text-md-end mt-3 mt-md-0" drop='up' align={'end'}>
      <DropdownToggle className="btn btn-sm btn-light mb-0 arrow-none icons-center"
        id="languageSwitcher"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaGlobe className="me-2" />
        {currentLangName}
        <FaChevronUp className='ms-2' size={12} />
      </DropdownToggle>
      <DropdownMenu className="min-w-auto" aria-labelledby="languageSwitcher">
        {displayLanguages.map((lang: any, idx: number) => (
          <li key={lang.name + idx}>
            <DropdownItem 
              className="me-4"
              onClick={() => handleLanguageChange(lang.code || 'en')}
              active={isInvestorPage && investorLanguage === (lang.code || 'en')}
            >
              <img className="fa-fw me-2" src={lang.flag} alt={lang.name + '-flag'} style={{ width: 18 }} />
              {lang.name}
            </DropdownItem>
          </li>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default LanguageDropdown