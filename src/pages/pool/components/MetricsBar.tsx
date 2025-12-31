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
        <div className="card border-success shadow-sm" style={{ backgroundColor: '#d1fae5' }}>
          <div className="card-body">
            <p className="small fw-medium text-success mb-1">Total Raised</p>
            <p className="h3 fw-bold text-success mb-1">{formatCurrency(totalRaised)}</p>
            <p className="small text-success mb-0">
              {progressPercent.toFixed(1)}% of ${goal.toLocaleString()} Goal
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-danger shadow-sm" style={{ backgroundColor: '#ffe4e6' }}>
          <div className="card-body">
            <p className="small fw-medium text-danger mb-1">Total Spent</p>
            <p className="h3 fw-bold text-danger mb-1">{formatCurrency(totalSpent)}</p>
            <p className="small text-danger mb-0">
              {burnPercent.toFixed(1)}% Burn Rate
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-primary shadow-sm" style={{ backgroundColor: '#dbeafe' }}>
          <div className="card-body">
            <p className="small fw-medium text-primary mb-1">Remaining Pool</p>
            <p className="h3 fw-bold text-primary mb-1">{formatCurrency(remaining)}</p>
            <p className="small text-primary mb-0">Available for Ads</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetricsBar
