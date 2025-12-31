import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-toggle bg-white rounded shadow-lg border p-2">
      <div className="d-flex align-items-center gap-2">
        <Globe size={16} className="text-muted" />
        <button
          onClick={() => setLanguage('en')}
          className={`btn btn-sm ${
            language === 'en'
              ? 'btn-primary'
              : 'btn-outline-secondary'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`btn btn-sm ${
            language === 'es'
              ? 'btn-primary'
              : 'btn-outline-secondary'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  )
}

export default LanguageToggle
