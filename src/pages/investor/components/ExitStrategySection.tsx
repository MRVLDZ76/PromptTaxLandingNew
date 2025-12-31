import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { 
  Shield, TrendingDown, Eye, RefreshCcw, BarChart3, 
  TestTube2, Rocket, AlertCircle, CheckCircle2,
  Calendar} from 'lucide-react'

const ExitStrategySection = () => {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const phases = t('exitStrategy.phases') || []
  const keyProtections = t('exitStrategy.keyProtections') || {}
  const protectionItems = keyProtections.items || []
  const timeline = t('exitStrategy.timeline') || {}
  const milestones = timeline.milestones || []
  const worstCase = t('exitStrategy.worstCaseScenario') || {}
  const breakdown = worstCase.breakdown || []
  const comparison = t('exitStrategy.comparisonToTraditional') || {}

  const iconMap: { [key: string]: any } = {
    Shield,
    TrendingDown,
    Eye,
    RefreshCcw,
    BarChart3,
    TestTube: TestTube2,
    Rocket
  }

  return (
    <>
      <section id="exit-strategy" className="investor-section bg-success bg-opacity-10 position-relative overflow-hidden">
        <div className="container position-relative">
          {/* Header */}
          <div className="text-center mb-5">
            <span className="badge bg-success bg-opacity-10 text-success mb-3 text-uppercase">
              {t('exitStrategy.badge')}
            </span>
            <h2 className="display-4 fw-bold mb-3">
              {t('exitStrategy.title')}
            </h2>
            <p className="lead text-muted mx-auto mb-4" style={{maxWidth: '800px'}}>
              {t('exitStrategy.subtitle')}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-success btn-lg px-5 shadow"
            >
              {t('exitStrategy.buttonText')}
            </button>
          </div>

          {/* Key Protections Grid */}
          <div className="row g-3 mb-5">
            {protectionItems.map((item: any, index: number) => {
              const Icon = iconMap[item.icon] || Shield
              return (
                <div key={index} className="col-md-6 col-lg">
                  <div className="card border-2 border-success border-opacity-25 investor-card h-100">
                    <div className="card-body p-3 text-center">
                      <div className="d-flex align-items-center justify-content-center rounded-3 bg-success bg-opacity-10 mx-auto mb-3" style={{width: '48px', height: '48px'}}>
                        <Icon size={24} className="text-success" />
                      </div>
                      <h5 className="fw-bold small mb-2">{item.title}</h5>
                      <p className="small text-muted mb-0">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Stats */}
          <div className="row g-4 justify-content-center">
            <div className="col-md-4 text-center">
              <div className="display-4 fw-bold text-success mb-2">35%</div>
              <div className="small fw-bold text-dark">Max Risk in Test Phase</div>
              <div className="small text-muted mt-1">vs. 100% in typical startups</div>
            </div>
            <div className="col-md-4 text-center">
              <div className="display-4 fw-bold text-info mb-2">60</div>
              <div className="small fw-bold text-dark">Days to Validation</div>
              <div className="small text-muted mt-1">Fast decision: scale or return</div>
            </div>
            <div className="col-md-4 text-center">
              <div className="display-4 fw-bold text-primary mb-2">65%+</div>
              <div className="small fw-bold text-dark">Guaranteed Return</div>
              <div className="small text-muted mt-1">If Phase 1 fails criteria</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} onClick={() => setIsModalOpen(false)}>
          <div className="modal-dialog modal-xl modal-dialog-scrollable" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content rounded-4 shadow">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn-close position-absolute top-0 end-0 m-3"
                aria-label="Close"
              ></button>

              <div className="modal-body p-4 p-md-5">
                <h2 className="display-5 fw-bold text-center mb-4">
                  {t('exitStrategy.title')}
                </h2>

              {/* Two-Phase Strategy */}
              <div className="d-flex flex-column gap-4 mb-4">
                {phases.map((phase: any, index: number) => {
                  const Icon = iconMap[phase.icon] || TestTube2
                  return (
                    <div key={index} className="card border-2">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start gap-3 mb-3">
                          <div className={`rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 ${index === 0 ? 'bg-info bg-opacity-10' : 'bg-success bg-opacity-10'}`} style={{width: '64px', height: '64px'}}>
                            <Icon size={32} className={`${index === 0 ? 'text-info' : 'text-success'}`} />
                          </div>
                          <div className="flex-fill">
                            <span className="badge bg-dark mb-2">
                              {phase.phase}
                            </span>
                            <h3 className="h4 fw-bold mb-2">{phase.title}</h3>
                            <div className="d-flex flex-wrap gap-3 small text-muted mb-3">
                              <span>⏱️ {phase.duration}</span>
                              <span>💰 {phase.budget}</span>
                            </div>
                            <p className="fw-semibold mb-3">{phase.objective}</p>
                            {phase.condition && (
                              <div className="alert alert-warning border-start border-4 border-warning mb-3">
                                <p className="small fw-semibold mb-0">{phase.condition}</p>
                              </div>
                            )}
                          </div>
                        </div>

                      {/* Activities */}
                      {phase.activities && (
                        <div className="mb-3">
                          <h4 className="fw-bold text-uppercase small mb-3">Key Activities:</h4>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            {phase.activities.map((activity: string, idx: number) => (
                              <li key={idx} className="d-flex align-items-start small">
                                <CheckCircle2 size={16} className="text-success me-2 flex-shrink-0 mt-1" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Success Criteria */}
                      {phase.successCriteria && (
                        <div className="bg-success bg-opacity-10 rounded-3 p-3 mb-3">
                          <h4 className="fw-bold text-success small mb-3">{phase.successCriteria.title}</h4>
                          <div className="row g-2">
                            {phase.successCriteria.metrics.map((metric: any, idx: number) => (
                              <div key={idx} className="col-md-6">
                                <div className="card">
                                  <div className="card-body p-3 d-flex justify-content-between align-items-center">
                                    <span className="small fw-bold">{metric.metric}:</span>
                                    <div className="text-end">
                                      <div className="small fw-bold text-success">{metric.target}</div>
                                      <div className="text-muted" style={{fontSize: '0.75rem'}}>{metric.description}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Failure Triggers */}
                      {phase.failureTriggers && (
                        <div className="bg-danger bg-opacity-10 rounded-3 p-3 mb-3">
                          <h4 className="fw-bold text-danger small mb-3 d-flex align-items-center">
                            <AlertCircle size={16} className="me-2" />
                            {phase.failureTriggers.title}
                          </h4>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            {phase.failureTriggers.triggers.map((trigger: string, idx: number) => (
                              <li key={idx} className="d-flex align-items-start text-danger" style={{fontSize: '0.85rem'}}>
                                <span className="me-2">⚠️</span>
                                <span>{trigger}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Protections (Phase 2) */}
                      {phase.protections && (
                        <div className="row g-3 mb-3">
                          {phase.protections.map((protection: any, idx: number) => (
                            <div key={idx} className="col-md-4">
                              <div className="card border-info bg-info bg-opacity-10">
                                <div className="card-body p-3">
                                  <h5 className="fw-bold text-info small mb-2">{protection.title}</h5>
                                  <p className="small text-info mb-0">{protection.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Max Burn & Exit Process */}
                      {phase.maxBurn && (
                        <div className="border-top pt-3">
                          <p className="small mb-2"><strong>⚠️ {phase.maxBurn}</strong></p>
                          {phase.exitProcess && (
                            <p className="small text-muted bg-light p-3 rounded-3">{phase.exitProcess}</p>
                          )}
                          {phase.expectedOutcome && (
                            <p className="small text-success bg-success bg-opacity-10 p-3 rounded-3 mt-2">{phase.expectedOutcome}</p>
                          )}
                        </div>
                      )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Timeline */}
              {milestones.length > 0 && (
                <div className="mb-4">
                  <h3 className="h4 fw-bold text-center mb-4 d-flex align-items-center justify-content-center">
                    <Calendar size={24} className="text-info me-2" />
                    {timeline.title}
                  </h3>
                  <div className="position-relative">
                    <div className="d-flex flex-column gap-3">
                      {milestones.map((milestone: any, index: number) => (
                        <div key={index} className="card">
                          <div className="card-body p-3 d-flex align-items-center gap-3">
                            <div className={`rounded-circle flex-shrink-0 ${milestone.status === 'start' ? 'bg-success' : milestone.status === 'decision' ? 'bg-danger' : milestone.status === 'conditional' ? 'bg-warning' : milestone.status === 'end' ? 'bg-primary' : 'bg-info'}`} style={{width: '16px', height: '16px'}}></div>
                            <div className="flex-fill">
                              <div className="fw-bold small mb-1">{milestone.date}</div>
                              <div className="small text-muted">{milestone.event}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Worst Case Scenario */}
              {worstCase.title && (
                <div className="card bg-danger bg-opacity-10 border-danger border-2 mb-4">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold text-danger mb-3 d-flex align-items-center">
                      <AlertCircle size={24} className="me-2" />
                      {worstCase.title}
                    </h3>
                    <p className="text-danger mb-3"><strong>{worstCase.scenario}</strong></p>
                    <div className="card">
                      <div className="card-body p-3">
                        <div className="d-flex flex-column gap-3">
                          {breakdown.map((item: any, index: number) => (
                            <div key={index} className="d-flex justify-content-between align-items-center border-bottom pb-3 last">
                              <span className="small">{item.item}</span>
                              <div className="text-end">
                                <div className="fw-bold">{item.amount}</div>
                                <div className="small text-muted">{item.percent}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="small text-danger bg-danger bg-opacity-25 p-3 rounded-3 mt-3 mb-0">
                      💡 {worstCase.note}
                    </p>
                  </div>
                </div>
              )}

              {/* Comparison to Traditional */}
              {comparison.title && (
                <div className="mb-4">
                  <h3 className="h4 fw-bold text-center mb-4">{comparison.title}</h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="card border-danger border-2 bg-danger bg-opacity-10">
                        <div className="card-body p-4">
                          <h4 className="fw-bold text-danger mb-3">{comparison.traditional.label}</h4>
                          <ul className="list-unstyled d-flex flex-column gap-3">
                            {comparison.traditional.risks.map((risk: string, index: number) => (
                              <li key={index} className="d-flex align-items-start small text-danger">
                                <span className="me-2">❌</span>
                                <span>{risk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card border-success border-2 bg-success bg-opacity-10">
                        <div className="card-body p-4">
                          <h4 className="fw-bold text-success mb-3">{comparison.promptTax.label}</h4>
                          <ul className="list-unstyled d-flex flex-column gap-3">
                            {comparison.promptTax.benefits.map((benefit: string, index: number) => (
                              <li key={index} className="d-flex align-items-start small text-success">
                                <span className="me-2">✅</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

                {/* CTA */}
                <div className="text-center">
                  <button
                    onClick={() => {
                      setIsModalOpen(false)
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn btn-success btn-lg px-5 shadow"
                  >
                    I'm Comfortable with This Risk Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ExitStrategySection
