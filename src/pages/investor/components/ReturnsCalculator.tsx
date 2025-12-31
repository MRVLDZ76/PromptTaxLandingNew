import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useEffect } from 'react'
import { AlertCircle, Info, TrendingUp, DollarSign, Target, BarChart3, PieChart } from 'lucide-react'

// Ad channel data structure matching AdsForecast
const BASE_CHANNEL_DATA = {
  facebook: {
    name: 'Facebook',
    baseCPM: 20.00,
    baseCTR: 0.015,
    baseCVR: 0.025,
    spendSplit: 0.25,
    color: '#3b82f6',
    tooltip: 'Huge audience, excellent interest targeting. CPMs up 60-100% in tax season.'
  },
  instagram: {
    name: 'Instagram',
    baseCPM: 18.00,
    baseCTR: 0.012,
    baseCVR: 0.018,
    spendSplit: 0.15,
    color: '#d946ef',
    tooltip: 'Visual platform for younger crypto/gig workers. Costs rise 50-80% in peak season.'
  },
  tiktok: {
    name: 'TikTok',
    baseCPM: 10.00,
    baseCTR: 0.020,
    baseCVR: 0.015,
    spendSplit: 0.15,
    color: '#111827',
    tooltip: 'Cost-effective reach for young crypto investors. 30-50% increase during tax season.'
  },
  linkedin: {
    name: 'LinkedIn',
    baseCPM: 28.00,
    baseCTR: 0.008,
    baseCVR: 0.012,
    spendSplit: 0.10,
    color: '#0a6bb8',
    tooltip: 'Targets high-income freelancers. Very expensive, better for B2B than DIY.'
  },
  google: {
    name: 'Google Ads',
    baseCPM: 45.00,
    baseCTR: 0.055,
    baseCVR: 0.035,
    spendSplit: 0.35,
    color: '#eab308',
    tooltip: 'HIGHEST intent for tax searches. Expensive CPCs ($15-35). Peak pricing Feb-Apr.'
  }
}

interface ChannelMetrics {
  spend: number
  impressions: number
  clicks: number
  conversions: number
  revenue: number
  netProfit: number
}

const ReturnsCalculator = () => {
  const { t } = useLanguage()
  
  // Business/Ads Metrics State
  const [dailyBudget, setDailyBudget] = useState(600)
  const [duration, setDuration] = useState(90) // Tax season: 90 days
  const [errorMargin, setErrorMargin] = useState(30)
  const [scenario, setScenario] = useState<'pessimistic' | 'baseline' | 'optimistic'>('baseline')
  const [cpaShare, setCpaShare] = useState(35)
  const [avgTicket, setAvgTicket] = useState(324)
  const [activeChannels, setActiveChannels] = useState({
    facebook: true,
    instagram: true,
    tiktok: true,
    linkedin: true,
    google: true,
  })
  
  // Investor Calculator State
  const [investmentAmount, setInvestmentAmount] = useState(25000)
  const [profitSharePercent, setProfitSharePercent] = useState(30)
  const TOTAL_INVESTMENT_POOL = 500000
  
  // Calculated totals from ads
  const [totals, setTotals] = useState<ChannelMetrics>({
    spend: 0,
    impressions: 0,
    clicks: 0,
    conversions: 0,
    revenue: 0,
    netProfit: 0,
  })

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return Math.round(value).toLocaleString('en-US')
  }

  // Calculate business metrics from ads
  useEffect(() => {
    const totalBudget = dailyBudget * duration
    const netRevenuePercentage = 1 - (cpaShare / 100)
    const avgRevenuePerSale = avgTicket * netRevenuePercentage

    const errorMultiplier =
      scenario === 'pessimistic'
        ? 1 - errorMargin / 100
        : scenario === 'optimistic'
        ? 1 + errorMargin / 100
        : 1.0

    let totalActiveSplit = 0
    Object.entries(BASE_CHANNEL_DATA).forEach(([key, data]) => {
      if (activeChannels[key as keyof typeof activeChannels]) {
        totalActiveSplit += data.spendSplit
      }
    })

    if (totalActiveSplit === 0) totalActiveSplit = 1

    const newTotals: ChannelMetrics = {
      spend: 0,
      impressions: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      netProfit: 0,
    }

    Object.entries(BASE_CHANNEL_DATA).forEach(([key, data]) => {
      const isActive = activeChannels[key as keyof typeof activeChannels]
      
      if (isActive) {
        const spend = totalBudget * (data.spendSplit / totalActiveSplit)
        const ctr = data.baseCTR * errorMultiplier
        const cvr = data.baseCVR * errorMultiplier

        const impressions = (spend / data.baseCPM) * 1000
        const clicks = impressions * ctr
        const conversions = clicks * cvr
        const revenue = conversions * avgRevenuePerSale
        const netProfit = revenue - spend

        newTotals.spend += spend
        newTotals.impressions += impressions
        newTotals.clicks += clicks
        newTotals.conversions += conversions
        newTotals.revenue += revenue
        newTotals.netProfit += netProfit
      }
    })

    setTotals(newTotals)
  }, [dailyBudget, duration, errorMargin, scenario, cpaShare, avgTicket, activeChannels])

  // Calculate investor returns based on total revenue
  // 30% of TOTAL REVENUE goes to investors (not net profit)
  const totalRevenueSharePool = totals.revenue * (profitSharePercent / 100)
  const investorSharePercent = investmentAmount / TOTAL_INVESTMENT_POOL
  const investorRevenueShare = totalRevenueSharePool * investorSharePercent
  const principal = investmentAmount
  const profit = investorRevenueShare
  const total = principal + profit
  const roi = principal > 0 ? ((total - principal) / principal) * 100 : 0

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const Tooltip = ({ text }: { text: string }) => (
    <div className="d-inline-block ms-1 position-relative" style={{ cursor: 'help' }}>
      <Info size={16} className="text-muted" />
      <div className="position-absolute bg-dark text-white p-2 rounded shadow" 
           style={{ 
             width: '250px', 
             fontSize: '12px', 
             zIndex: 1000,
             bottom: '100%',
             left: '50%',
             transform: 'translateX(-50%)',
             marginBottom: '5px',
             display: 'none',
             pointerEvents: 'none'
           }}
           onMouseEnter={(e) => e.currentTarget.style.display = 'block'}
      >
        {text}
      </div>
      <style>{`
        .d-inline-block:hover div {
          display: block !important;
        }
      `}</style>
    </div>
  )

  return (
    <section id="returns-calculator" className="investor-section bg-body-tertiary">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-success bg-opacity-10 text-success mb-3 text-uppercase">
            {t('returnsCalculator.badge')}
          </span>
          <h2 className="display-6 fw-bold mb-3">
            {t('returnsCalculator.title')}{' '}
            <span className="text-success">{t('returnsCalculator.titleHighlight')}</span>{' '}
            {t('returnsCalculator.titleEnd')}
          </h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '800px'}}>
            {t('returnsCalculator.subtitle')}
          </p>
        </div>

        {/* SECTION 1: Business/Ads Metrics Calculator */}
        <div className="mx-auto mb-5" style={{maxWidth: '1200px'}}>
          <div className="card border shadow-sm">
            <div className="card-header bg-white border-bottom">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h3 className="h6 fw-bold mb-1 text-dark">Revenue Forecast Model</h3>
                  <p className="text-muted small mb-0">Tax season campaign projections (Q1 2025: Feb-Apr)</p>
                </div>
                <BarChart3 size={20} className="text-muted" />
              </div>
            </div>
            <div className="card-body p-4">
              
              {/* Campaign Controls */}
              <div className="row g-4 mb-4">
                <div className="col-md-3">
                  <label className="small fw-semibold d-flex align-items-center">
                    Daily Budget
                    <Tooltip text="Amount spent per day on ads across all channels. Tax season is 90 days (Feb-Apr)." />
                  </label>
                  <div className="fw-bold text-primary mb-2">{formatCurrency(dailyBudget)}</div>
                  <input
                    type="range"
                    min="200"
                    max="2000"
                    step="50"
                    value={dailyBudget}
                    onChange={(e) => setDailyBudget(Number(e.target.value))}
                    className="form-range"
                  />
                </div>
                
                <div className="col-md-3">
                  <label className="small fw-semibold d-flex align-items-center">
                    Duration (Days)
                    <Tooltip text="Campaign length. Full tax season = 90 days. Individual months: Feb=28, Mar=31, Apr=30." />
                  </label>
                  <div className="fw-bold text-primary mb-2">{duration} days</div>
                  <select 
                    className="form-select form-select-sm"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                  >
                    <option value={90}>All (Feb-Apr): 90 days</option>
                    <option value={28}>February: 28 days</option>
                    <option value={31}>March: 31 days</option>
                    <option value={30}>April: 30 days</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <label className="small fw-semibold d-flex align-items-center">
                    Avg Ticket
                    <Tooltip text="Average price per customer. DIY marketplace range: $150-$499 for crypto/K-1/complex returns." />
                  </label>
                  <div className="fw-bold text-primary mb-2">{formatCurrency(avgTicket)}</div>
                  <input
                    type="range"
                    min="39"
                    max="1000"
                    step="25"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    className="form-range"
                  />
                </div>

                <div className="col-md-3">
                  <label className="small fw-semibold d-flex align-items-center">
                    CPA Share (%)
                    <Tooltip text="Revenue percentage paid to CPAs for review. Higher share = lower net revenue per sale." />
                  </label>
                  <div className="fw-bold text-primary mb-2">{cpaShare}%</div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="5"
                    value={cpaShare}
                    onChange={(e) => setCpaShare(Number(e.target.value))}
                    className="form-range"
                  />
                  <small className="text-muted">Net: {formatCurrency(avgTicket * (1 - cpaShare/100))}/sale</small>
                </div>
              </div>

              {/* Error Margin & Scenario */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="small fw-semibold d-flex align-items-center">
                    Error Margin (±)
                    <Tooltip text="Potential variance in CTR/CVR. Can be positive (optimistic) or negative (pessimistic). Affects all channel performance." />
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">±</span>
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={errorMargin}
                      onChange={(e) => setErrorMargin(Number(e.target.value))}
                      className="form-control"
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="small fw-semibold d-flex align-items-center">
                    Scenario
                    <Tooltip text="Pessimistic applies -margin, Baseline uses exact values, Optimistic applies +margin to performance metrics." />
                  </label>
                  <div className="btn-group w-100" role="group">
                    {(['pessimistic', 'baseline', 'optimistic'] as const).map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`btn btn-sm ${scenario === s ? 'btn-primary' : 'btn-outline-secondary'}`}
                        onClick={() => setScenario(s)}
                      >
                        {s === 'pessimistic' && <>Pessimistic (-{errorMargin}%)</>}
                        {s === 'baseline' && <>Baseline</>}
                        {s === 'optimistic' && <>Optimistic (+{errorMargin}%)</>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Channel Toggles */}
              <div className="border-top pt-3 mb-4">
                <label className="small fw-semibold mb-2">Active Ad Channels:</label>
                <div className="d-flex flex-wrap gap-3">
                  {Object.entries(BASE_CHANNEL_DATA).map(([key, data]) => (
                    <div key={key} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`channel-${key}`}
                        checked={activeChannels[key as keyof typeof activeChannels]}
                        onChange={(e) =>
                          setActiveChannels((prev) => ({ ...prev, [key]: e.target.checked }))
                        }
                      />
                      <label className="form-check-label small" htmlFor={`channel-${key}`}>
                        <span style={{ color: data.color }}>●</span> {data.name}
                        <Tooltip text={data.tooltip} />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Summary */}
              <div className="alert alert-light border">
                <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
                  <TrendingUp size={18} />
                  Campaign Totals ({duration} days @ {formatCurrency(dailyBudget)}/day)
                </h6>
                <div className="row g-3 text-center">
                  <div className="col-6 col-md-2">
                    <div className="small text-muted">Total Spend</div>
                    <div className="fw-bold">{formatCurrency(totals.spend)}</div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="small text-muted">Impressions</div>
                    <div className="fw-bold">{formatNumber(totals.impressions)}</div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="small text-muted">Clicks</div>
                    <div className="fw-bold">{formatNumber(totals.clicks)}</div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="small text-muted">Conversions</div>
                    <div className="fw-bold text-primary">{formatNumber(totals.conversions)}</div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="small text-muted">Gross Revenue</div>
                    <div className="fw-bold text-info">{formatCurrency(totals.revenue)}</div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="small text-muted">Net Profit</div>
                    <div className={`fw-bold ${totals.netProfit >= 0 ? 'text-success' : 'text-danger'}`}>
                      {formatCurrency(totals.netProfit)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Investor Returns Calculator */}
        <div className="mx-auto" style={{maxWidth: '1200px'}}>
          <div className="card border shadow-sm">
            <div className="card-header bg-white border-bottom">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h3 className="h6 fw-bold mb-1 text-dark">Investment Returns Calculator</h3>
                  <p className="text-muted small mb-0">Revenue share model with principal protection</p>
                </div>
                <DollarSign size={20} className="text-muted" />
              </div>
            </div>
            <div className="card-body p-4 p-md-5">
              
              {/* Revenue Share Control */}
              <div className="alert alert-info mb-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <AlertCircle size={18} />
                  <strong>Investment Structure</strong>
                </div>
                <p className="small mb-2">
                  Based on the ad campaign above generating <strong>{formatCurrency(totals.revenue)}</strong> total revenue,
                  investors receive <strong>{profitSharePercent}%</strong> of total revenue proportional to their investment.
                </p>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="small fw-semibold d-flex align-items-center">
                      Revenue Share (%)
                      <Tooltip text="Percentage of total revenue distributed to all investors. This comes from gross revenue before expenses." />
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      step="5"
                      value={profitSharePercent}
                      onChange={(e) => setProfitSharePercent(Number(e.target.value))}
                      className="form-range"
                    />
                    <div className="fw-bold text-primary">{profitSharePercent}%</div>
                  </div>
                  <div className="col-md-4">
                    <label className="small fw-semibold">Total Revenue</label>
                    <div className="fw-bold text-info">{formatCurrency(totals.revenue)}</div>
                    <small className="text-muted">From {formatNumber(totals.conversions)} conversions</small>
                  </div>
                  <div className="col-md-4">
                    <label className="small fw-semibold">Total Investor Pool</label>
                    <div className="fw-bold text-success">{formatCurrency(totalRevenueSharePool)}</div>
                    <small className="text-muted">= {formatCurrency(totals.revenue)} × {profitSharePercent}%</small>
                  </div>
                </div>
              </div>

              {/* Investment Amount Input */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-end mb-3">
                  <label className="h5 fw-bold mb-0 d-flex align-items-center">
                    {t('returnsCalculator.investmentLabel')}
                    <Tooltip text="Your personal investment amount. You'll receive this back in full plus your share of profits." />
                  </label>
                  <span className="display-6 fw-bold text-primary">
                    {formatCurrency(investmentAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="form-range"
                />
                <div className="d-flex justify-content-between small text-muted mt-2">
                  <span>{formatCurrency(1000)}</span>
                  <span>Your share: {((investorSharePercent) * 100).toFixed(2)}% of pool</span>
                  <span>{formatCurrency(100000)}</span>
                </div>
              </div>

              {/* Returns Breakdown */}
              <div className="row g-4 mb-4">
                <div className="col-md-3">
                  <div className="card border-2 border-secondary h-100">
                    <div className="card-body text-center p-4">
                      <div className="text-muted small text-uppercase fw-bold mb-3 d-flex align-items-center justify-content-center gap-1">
                        Principal Returned
                        <Tooltip text="Your full investment amount returned to you." />
                      </div>
                      <div className="display-6 fw-bold text-secondary mb-3">
                        {formatCurrency(principal)}
                      </div>
                      <div className="small text-muted">100% of your investment</div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border-2 border-info h-100">
                    <div className="card-body text-center p-4">
                      <div className="text-info small text-uppercase fw-bold mb-3 d-flex align-items-center justify-content-center gap-1">
                        Your Share %
                        <Tooltip text={`Your investment represents ${((investorSharePercent) * 100).toFixed(2)}% of the total $${formatCurrency(TOTAL_INVESTMENT_POOL)} investment pool.`} />
                      </div>
                      <div className="display-6 fw-bold text-info mb-3">
                        {((investorSharePercent) * 100).toFixed(2)}%
                      </div>
                      <div className="small text-info">
                        of {formatCurrency(TOTAL_INVESTMENT_POOL)} pool
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border-2 border-success h-100">
                    <div className="card-body text-center p-4">
                      <div className="text-success small text-uppercase fw-bold mb-3 d-flex align-items-center justify-content-center gap-1">
                        Revenue Share
                        <Tooltip text={`Your ${(investorSharePercent * 100).toFixed(2)}% share of the ${profitSharePercent}% revenue pool (${formatCurrency(totalRevenueSharePool)}).`} />
                      </div>
                      <div className="display-6 fw-bold text-success mb-3">
                        {formatCurrency(profit)}
                      </div>
                      <div className="small text-success">
                        {((investorSharePercent) * 100).toFixed(2)}% × {formatCurrency(totalRevenueSharePool)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border-4 border-success h-100 shadow">
                    <div className="card-body text-center p-4">
                      <div className="small text-uppercase fw-bold mb-3 opacity-90">
                        Total Return
                      </div>
                      <div className="display-6 fw-bold mb-3">{formatCurrency(total)}</div>
                      <div className="fw-semibold text-success fs-5">
                        +{roi.toFixed(1)}% ROI
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assumptions Note */}
              <div className="alert alert-warning">
                <div className="row g-4">
                  <div className="col-md-6">
                    <p className="small mb-2 d-flex align-items-center gap-2">
                      <PieChart size={16} />
                      <strong>How It Works:</strong>
                    </p>
                    <ul className="small mb-0">
                      <li>Ads generate <strong>{formatCurrency(totals.revenue)}</strong> total revenue</li>
                      <li><strong>{profitSharePercent}%</strong> of revenue = <strong>{formatCurrency(totalRevenueSharePool)}</strong> distributed to investors</li>
                      <li>Your <strong>{formatCurrency(investmentAmount)}</strong> = <strong>{((investorSharePercent) * 100).toFixed(2)}%</strong> of {formatCurrency(TOTAL_INVESTMENT_POOL)} pool</li>
                      <li>You receive: <strong>{formatCurrency(principal)}</strong> (principal) + <strong>{formatCurrency(profit)}</strong> (revenue share) = <strong>{formatCurrency(total)}</strong></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <p className="small mb-2 d-flex align-items-center gap-2">
                      <Target size={16} />
                      <strong>Example Calculation:</strong>
                    </p>
                    <div className="small">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Total Revenue:</span>
                        <strong>{formatCurrency(totals.revenue)}</strong>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span>{profitSharePercent}% to Investors:</span>
                        <strong>{formatCurrency(totalRevenueSharePool)}</strong>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span>Your Investment:</span>
                        <strong>{formatCurrency(investmentAmount)} ({((investorSharePercent) * 100).toFixed(2)}%)</strong>
                      </div>
                      <div className="border-top pt-2 mt-2">
                        <div className="d-flex justify-content-between">
                          <span className="fw-bold">Your Total Return:</span>
                          <strong className="text-success">{formatCurrency(total)}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <em className="d-block mt-3 small opacity-75">
                  *Projections based on historical ad performance and tax season trends. Actual results may vary.
                </em>
              </div>

              <div className="text-center mt-4">
                <button
                  onClick={scrollToContact}
                  className="btn btn-success btn-lg px-5 shadow"
                >
                  {t('returnsCalculator.cta') || 'Get Started'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReturnsCalculator
