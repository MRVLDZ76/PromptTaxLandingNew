import { usePool } from '../contexts/PoolContext'

const MetricsBar = () => {
  const { getTotals, goal } = usePool()
  const { totalRaised, totalSpent, remaining, progressPercent, burnPercent } = getTotals()

  const formatCurrency = (num: number) => {
    return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  return (
    <div className="row g-3">
      <div className="col-md-4">
        <div className="card border h-100">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted text-uppercase small fw-semibold">Total Raised</span>
              <span className="badge bg-success">{progressPercent.toFixed(0)}%</span>
            </div>
            <p className="h3 fw-bold mb-2">{formatCurrency(totalRaised)}</p>
            <div className="progress" style={{ height: '4px' }}>
              <div className="progress-bar bg-success" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <p className="text-muted small mt-2 mb-0">of ${goal.toLocaleString()} goal</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border h-100">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted text-uppercase small fw-semibold">Total Spent</span>
              <span className="badge bg-danger">{burnPercent.toFixed(0)}%</span>
            </div>
            <p className="h3 fw-bold mb-2">{formatCurrency(totalSpent)}</p>
            <div className="progress" style={{ height: '4px' }}>
              <div className="progress-bar bg-danger" style={{ width: `${burnPercent}%` }}></div>
            </div>
            <p className="text-muted small mt-2 mb-0">burn rate</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border h-100">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted text-uppercase small fw-semibold">Available</span>
            </div>
            <p className="h3 fw-bold mb-2">{formatCurrency(remaining)}</p>
            <div className="progress" style={{ height: '4px' }}>
              <div className="progress-bar bg-dark" style={{ width: '100%' }}></div>
            </div>
            <p className="text-muted small mt-2 mb-0">remaining funds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetricsBar
