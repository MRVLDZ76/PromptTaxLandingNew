import { useLanguage } from '@/contexts/LanguageContext'
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react'

const MarketOpportunitySection = () => {
  const { t } = useLanguage()
  
  const tam = t('marketOpportunity.tam') || {}
  const sam = t('marketOpportunity.sam') || {}
  const som = t('marketOpportunity.som') || {}
  const growthDrivers = t('marketOpportunity.growthDrivers') || {}
  const competitiveLandscape = t('marketOpportunity.competitiveLandscape') || {}
  const items = growthDrivers.items || []
  const competitors = competitiveLandscape.competitors || []

  return (
    <section id="market-opportunity" className="investor-section bg-body-tertiary">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary mb-3 text-uppercase">
            {t('marketOpportunity.badge')}
          </span>
          <h2 className="display-4 fw-bold mb-3">
            {t('marketOpportunity.title')}
          </h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '900px'}}>
            {t('marketOpportunity.subtitle')}
          </p>
        </div>

        {/* TAM SAM SOM */}
        <div className="row g-4 mb-5">
          {/* TAM */}
          <div className="col-md-4">
            <div className="card bg-gradient text-white border-0 shadow-lg investor-card h-100" style={{background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'}}>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <TrendingUp size={40} />
                  <span className="badge bg-white bg-opacity-25">TAM</span>
                </div>
                <div className="display-4 fw-bold mb-2">{tam.value}</div>
                <div className="h6 fw-semibold mb-2 opacity-90">{tam.title}</div>
                <p className="small opacity-75">{tam.description}</p>
              </div>
            </div>
          </div>

          {/* SAM */}
          <div className="col-md-4">
            <div className="card bg-primary text-white border-0 shadow-lg investor-card h-100">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Target size={40} className='text-white '/>
                  <span className="badge bg-white bg-opacity-25">SAM</span>
                </div>
                <div className="text-white display-4 fw-bold mb-2">{sam.value}</div>
                <div className="text-white h6 fw-semibold mb-2 opacity-90">{sam.title}</div>
                <p className="text-white small opacity-75">{sam.description}</p>
              </div>
            </div>
          </div>

          {/* SOM */}
          <div className="col-md-4">
            <div className="card bg-success text-white border-0 shadow-lg investor-card h-100">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <DollarSign size={40} className='text-white' />
                  <span className="badge bg-white bg-opacity-25">SOM</span>
                </div>
                <div className="text-white display-4 fw-bold mb-2">{som.value}</div>
                <div className="text-white h6 fw-semibold mb-2 opacity-90">{som.title}</div>
                <p className="text-white small opacity-75">{som.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Drivers */}
        <div className="card border-0 shadow-lg mb-5">
          <div className="card-body p-4 p-md-5">
            <h3 className="h2 fw-bold text-center mb-5">
              {growthDrivers.title}
            </h3>
            <div className="row g-4">
              {items.map((item: any, index: number) => (
                <div key={index} className="col-6 col-lg-3 text-center">
                  <div className="display-5 fw-bold text-primary mb-2">{item.stat}</div>
                  <div className="fw-semibold mb-2">{item.label}</div>
                  <p className="small text-muted mb-0">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Landscape */}
        <div className="card bg-dark text-white border-0 shadow-lg">
          <div className="card-body p-4 p-md-5">
            <h3 className="h2 text-white fw-bold text-center mb-3">{competitiveLandscape.title}</h3>
            <p className="text-center mb-5 opacity-75 mx-auto" style={{maxWidth: '800px'}}>
              {competitiveLandscape.description}
            </p>

            <div className="row g-4 mb-4">
              {competitors.map((competitor: any, index: number) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card bg-white bg-opacity-10 border border-white border-opacity-25 h-100">
                    <div className="card-body p-3">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h5 className="fw-bold mb-0 text-white">{competitor.name}</h5>
                        <span className="badge bg-white bg-opacity-25 text-white small">
                          {competitor.marketShare}
                        </span>
                      </div>
                      <div>
                        <div className="small text-white text-opacity-75 mb-1">Weakness:</div>
                        <p className="small text-danger mb-3">{competitor.weakness}</p>
                        <div className="small text-white text-opacity-75 mb-1">Price:</div>
                        <p className="fw-semibold mb-0 text-white">{competitor.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Our Advantage */}
            <div className="card border-0 shadow text-center">
              <div className="card-body p-4">
                <Users size={32} className="mb-2" />
                <p className="fw-bold h5 mb-0">{competitiveLandscape.ourAdvantage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketOpportunitySection
