import { useLanguage } from '@/contexts/LanguageContext'
import { Target } from 'lucide-react'

const SeedRoundSection = () => {
  const { t } = useLanguage()
  const milestones = t('seedRound.milestones') || []
  const metrics = t('seedRound.metrics') || []
  const investors = t('seedRound.investors') || []

  return (
    <section id="seed-round" className="investor-section bg-body-secondary border-top border-bottom">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left: Narrative */}
          <div className="col-lg-6">
            <span className="badge bg-primary bg-opacity-10 text-primary mb-3 text-uppercase">
              {t('seedRound.badge')}
            </span>
            <h2 className="display-5 fw-bold mb-4">
              {t('seedRound.title')}
            </h2>
            <p className="lead text-muted mb-4">
              {t('seedRound.description')}
            </p>
            
            <div className="d-flex flex-column gap-4 mb-4">
              {milestones.map((milestone: any, index: number) => (
                <div key={index} className="d-flex align-items-start">
                  <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3 bg-primary bg-opacity-10 text-primary fw-bold me-3" style={{width: '48px', height: '48px', fontSize: '1.25rem'}}>
                    {milestone.number}
                  </div>
                  <div>
                    <h5 className="fw-bold">{milestone.title}</h5>
                    <p className="text-muted mb-0">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card bg-primary bg-opacity-10 border-primary mt-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <Target size={32} className="text-primary me-3" />
                  <h5 className="fw-bold mb-0">{t('seedRound.calloutTitle')}</h5>
                </div>
                <p className="text-muted small mb-0">
                  {t('seedRound.calloutDescription')}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Traction Dashboard */}
          <div className="col-lg-6">
            <div className="card bg-dark text-white border-0 shadow-lg">
              <div className="card-body p-4">
                <h3 className="h4 fw-bold mb-3 text-white">{t('seedRound.dashboardTitle')}</h3>
                <p className="text-white-50 small mb-4">{t('seedRound.dashboardSubtitle')}</p>

                {/* Metric Cards */}
                <div className="d-flex flex-column gap-3 mb-4">
                  {metrics.map((metric: any, index: number) => {
                    return (
                      <div key={index} className="card bg-black bg-opacity-25 border-secondary">
                        <div className="card-body p-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <div className="text-white-50 small text-uppercase fw-bold mb-1">
                                {metric.label}
                              </div>
                              <div className={`h2 fw-bold mb-0 text-${metric.color === 'emerald' ? 'success' : metric.color === 'sky' ? 'info' : 'warning'}`}>
                                {metric.value}
                              </div>
                            </div>
                            <div className="text-end">
                              <div className={`fw-bold text-${metric.color === 'emerald' ? 'success' : metric.color === 'sky' ? 'info' : 'warning'}`}>
                                {metric.growth}
                              </div>
                              <div className="text-white-50 small">{metric.note}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Progress Bar */}\n                <div className="card bg-primary bg-opacity-25 border-primary">
                  <div className="card-body p-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="small fw-semibold text-white">
                        {t('seedRound.progressLabel')}
                      </span>
                      <span className="small fw-bold text-white">
                        {t('seedRound.progressPercent')}%
                      </span>
                    </div>
                    <div className="progress" style={{height: '12px'}}>
                      <div
                        className="progress-bar bg-success"
                        style={{ width: `${t('seedRound.progressPercent')}%` }}
                        role="progressbar"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between small text-white-50 mt-2">
                      <span>{t('seedRound.progressCurrent')}</span>
                      <span>{t('seedRound.progressTarget')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investor Logos */}
            <div className="text-center mt-4">
              <p className="small text-muted fw-semibold mb-3">
                {t('seedRound.investorsLabel')}
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                {investors.map((investor: string, index: number) => (
                  <div
                    key={index}
                    className="badge bg-white border text-dark px-3 py-2"
                  >
                    <span className="fw-bold">{investor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeedRoundSection
