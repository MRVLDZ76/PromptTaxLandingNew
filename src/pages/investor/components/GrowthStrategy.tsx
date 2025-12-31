import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const GrowthStrategy = () => {
  const { t } = useLanguage()
  const [adBudget, setAdBudget] = useState(100000)
  const [cac, setCAC] = useState(65)
  const [aov, setAOV] = useState(145)
  const [margin, setMargin] = useState(30)
  
  // Initialize editable ad channels from translation data
  const initialChannels = t('growth.adChannels') || []
  const [adChannels, setAdChannels] = useState<Array<{name: string, percent: number, color: string}>>(initialChannels)
  
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  // Calculator constants - now dynamic
  const CAC = cac
  const AOV = aov
  const MARGIN = margin / 100

  const users = Math.floor(adBudget / CAC)
  const revenue = users * AOV
  const profit = revenue * MARGIN

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value)
  }

  // Update channels when they change or on initial load
  useEffect(() => {
    const channels = t('growth.adChannels') || []
    if (channels.length > 0 && adChannels.length === 0) {
      setAdChannels(channels)
    }
  }, [t])

  const calculatorOutputs = t('growth.calculatorOutputs') || []
  
  // Handle channel percentage change
  const handleChannelChange = (index: number, newPercent: number) => {
    const updatedChannels = [...adChannels]
    updatedChannels[index] = { ...updatedChannels[index], percent: newPercent }
    setAdChannels(updatedChannels)
  }
  
  // Calculate total allocation percentage
  const totalAllocation = adChannels.reduce((sum, ch) => sum + ch.percent, 0)

  useEffect(() => {
    if (!chartRef.current) return

    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: adChannels.map((ch: any) => ch.name),
        datasets: [{
          label: 'Budget Allocation',
          data: adChannels.map((ch: any) => ch.percent),
          backgroundColor: adChannels.map((ch: any) => ch.color),
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { color: '#cbd5e1', font: { size: 10 } }
          }
        }
      }
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [adChannels])

  return (
    <section id="investment" className="text-white investor-section bg-dark text-white position-relative overflow-hidden">
      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className="display-5 text-white fw-bold mb-3">{t('growth.title')}</h2>
          <p className="text-white-50 mx-auto" style={{maxWidth: '600px'}}>
            {t('growth.subtitle')}
          </p>
        </div>

        <div className="row g-4">
          {/* Ad Strategy (Left Col) */}
          <div className="col-lg-4">
            <div className="card bg-black bg-opacity-50 border-secondary">
              <div className="card-body p-4">
                <h3 className="h5 fw-bold text-white mb-3">{t('growth.adStrategyTitle')}</h3>
                <p className="small text-white-50 mb-4">{t('growth.adStrategySubtitle')}</p>
                <div className="position-relative" style={{ height: '250px' }}>
                  <canvas ref={chartRef}></canvas>
                </div>
                <div className="d-flex flex-column gap-3 mt-4">
                  {adChannels.map((channel: any, index: number) => (
                    <div key={index}>
                      <div className="d-flex justify-content-between align-items-center small mb-1">
                        <span className="text-white-50">{channel.name}</span>
                        <div className="d-flex align-items-center gap-2">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            step="5"
                            value={channel.percent}
                            onChange={(e) => handleChannelChange(index, Number(e.target.value))}
                            className="form-control form-control-sm text-center"
                            style={{ width: '60px', backgroundColor: 'rgba(255,255,255,0.1)', color: channel.color, border: `1px solid ${channel.color}` }}
                          />
                          <span className="fw-bold" style={{ color: channel.color }}>%</span>
                        </div>
                      </div>
                      <div className="progress" style={{height: '6px'}}>
                        <div
                          className="progress-bar"
                          style={{ width: `${channel.percent}%`, backgroundColor: channel.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div className="text-center mt-2">
                    <small className={`badge ${totalAllocation === 100 ? 'bg-success' : 'bg-warning'}`}>
                      Total: {totalAllocation}% {totalAllocation !== 100 && '⚠️'}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Calculator (Right Col) */}
          <div className="col-lg-8">
            <div className="card bg-white border-secondary shadow-lg">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="h4 fw-bold mb-0">{t('growth.calculatorTitle')}</h3>
                  <span className="badge bg-success text-uppercase small">
                    {t('growth.calculatorBadge')}
                  </span>
                </div>
                
                <p className="text-muted small mb-3">
                  {t('growth.calculatorDescription')}
                  <br />
                  <em>{t('growth.calculatorAssumptions')}</em>
                </p>

                {/* Parameter Controls */}
                <div className="row g-3 mb-4">
                  <div className="col-md-4">
                    <label className="small fw-semibold text-muted">CAC: <span className="text-primary">${cac}</span></label>
                    <input type="range" min="40" max="100" step="5" value={cac} onChange={(e) => setCAC(Number(e.target.value))} className="form-range" />
                  </div>
                  <div className="col-md-4">
                    <label className="small fw-semibold text-muted">AOV: <span className="text-primary">${aov}</span></label>
                    <input type="range" min="100" max="300" step="10" value={aov} onChange={(e) => setAOV(Number(e.target.value))} className="form-range" />
                  </div>
                  <div className="col-md-4">
                    <label className="small fw-semibold text-muted">Margin: <span className="text-primary">{margin}%</span></label>
                    <input type="range" min="20" max="50" step="5" value={margin} onChange={(e) => setMargin(Number(e.target.value))} className="form-range" />
                  </div>
                </div>

                {/* Slider Input */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <label className="fw-semibold">{t('growth.calculatorLabel')}</label>
                    <span className="h4 fw-bold text-info mb-0">{formatCurrency(adBudget)}</span>
                  </div>
                  <input
                    type="range"
                    min={t('growth.calculatorMin')}
                    max={t('growth.calculatorMax')}
                    step={t('growth.calculatorStep')}
                    value={adBudget}
                    onChange={(e) => setAdBudget(Number(e.target.value))}
                    className="form-range"
                  />
                  <div className="d-flex justify-content-between small text-muted mt-2">
                    <span>{formatCurrency(t('growth.calculatorMin'))} Test</span>
                    <span>{formatCurrency(t('growth.calculatorMax'))} Aggressive</span>
                  </div>
                </div>

                {/* Efficiency Metrics */}
                <div className="alert alert-light border mb-4">
                  <div className="row g-2 text-center">
                    <div className="col-4">
                      <div className="small text-muted">CAC/AOV Ratio</div>
                      <div className={`fw-bold ${(CAC/AOV) < 0.5 ? 'text-success' : 'text-warning'}`}>
                        {((CAC/AOV) * 100).toFixed(1)}%
                      </div>
                      <div className="small text-muted">{(CAC/AOV) < 0.5 ? 'Excellent' : 'Good'}</div>
                    </div>
                    <div className="col-4">
                      <div className="small text-muted">ROI per Customer</div>
                      <div className="fw-bold text-primary">
                        {(((AOV * MARGIN) / CAC) * 100).toFixed(0)}%
                      </div>
                      <div className="small text-muted">Per acquisition</div>
                    </div>
                    <div className="col-4">
                      <div className="small text-muted">Payback Period</div>
                      <div className="fw-bold text-info">
                        {(CAC / (AOV * MARGIN)).toFixed(1)}x
                      </div>
                      <div className="small text-muted">Transactions</div>
                    </div>
                  </div>
                </div>

                {/* Output Grid */}
                <div className="row g-3 text-center mb-4">
                  <div className="col-md-4">
                    <div className="card border-secondary">
                      <div className="card-body p-3">
                        <div className="text-muted small text-uppercase fw-bold mb-2">
                          {calculatorOutputs[0]?.label}
                        </div>
                        <div className="h3 fw-bold text-secondary mb-0">
                          {users.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border-info">
                      <div className="card-body p-3">
                        <div className="text-info small text-uppercase fw-bold mb-2">
                          {calculatorOutputs[1]?.label}
                        </div>
                        <div className="h3 fw-bold text-info mb-0">
                          {formatCurrency(revenue)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border-success">
                      <div className="card-body p-3">
                        <div className="text-success small text-uppercase fw-bold mb-2">
                          {calculatorOutputs[2]?.label}
                        </div>
                        <div className="h3 fw-bold text-success mb-0">
                          {formatCurrency(profit)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    className="btn btn-dark btn-lg px-5 shadow"
                    onClick={() => alert('For full financials, contact hi@prompt.tax')}
                  >
                    {t('growth.cta')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrowthStrategy
