import { useLanguage } from '@/contexts/LanguageContext'
import { Bitcoin, FileText, CheckCircle } from 'lucide-react'

const iconMap: any = {
  Bitcoin,
  FileText,
  CheckCircle
}

const SolutionSection = () => {
  const { t } = useLanguage()
  const products = t('solution.products') || []

  return (
    <section id="solution" className="investor-section bg-body-tertiary">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{maxWidth: '700px'}}>
          <span className="text-primary fw-bold text-uppercase small">
            {t('solution.badge')}
          </span>
          <h2 className="display-5 fw-bold mt-2">
            {t('solution.title')}
          </h2>
          <p className="lead text-muted mt-3">
            {t('solution.description')}
          </p>
        </div>

        <div className="row g-4">
          {products.map((product: any, index: number) => {
            const IconComponent = iconMap[product.icon] || FileText
            const bgColorClass = product.iconBg?.includes('blue') ? 'bg-primary' : product.iconBg?.includes('green') ? 'bg-success' : 'bg-info'
            const textColorClass = product.iconColor?.includes('blue') ? 'text-primary' : product.iconColor?.includes('green') ? 'text-success' : 'text-info'
            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card investor-card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className={`${bgColorClass} bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mb-3`} style={{width: '48px', height: '48px'}}>
                      <IconComponent size={24} className={textColorClass} />
                    </div>
                    <h5 className="card-title fw-bold">{product.title}</h5>
                    <p className="card-text text-muted small" style={{minHeight: '80px'}}>
                      {product.description}
                    </p>
                    <div className="border-top pt-3 mt-3 d-flex justify-content-between align-items-center">
                      <span className="text-muted small">{product.priceLabel}</span>
                      <span className={`fw-bold ${textColorClass}`}>
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
