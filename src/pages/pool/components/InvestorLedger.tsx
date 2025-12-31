import { usePool } from '../contexts/PoolContext'

const InvestorLedger = () => {
  const { getInvestorData, resetData } = usePool()
  const investorsData = getInvestorData()

  const formatCurrency = (num: number) => {
    return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h5 fw-semibold mb-1">Investor Ledger & Refund Calculator</h2>
            <p className="text-muted small mb-0">
              Real-time valuation. If you stop the campaign now, this is what everyone gets back.
            </p>
          </div>
          <button 
            onClick={resetData}
            className="btn btn-sm btn-link text-muted text-decoration-underline"
            style={{ fontSize: '0.75rem' }}
          >
            Reset Data
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col" className="small text-uppercase">Investor</th>
                <th scope="col" className="small text-uppercase text-end">Initial Investment</th>
                <th scope="col" className="small text-uppercase text-center">Pool Share</th>
                <th scope="col" className="small text-uppercase text-end text-danger">Share of Costs</th>
                <th scope="col" className="small text-uppercase text-end fw-bold" style={{ backgroundColor: '#dbeafe' }}>
                  Current Refund Value
                </th>
              </tr>
            </thead>
            <tbody>
              {investorsData.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center text-muted py-4">
                    No investors added yet. Add someone to start the pool.
                  </td>
                </tr>
              ) : (
                investorsData.map(inv => (
                  <tr key={inv.id}>
                    <td className="fw-medium">{inv.name}</td>
                    <td className="text-end">{formatCurrency(inv.initialAmount)}</td>
                    <td className="text-center text-muted">{(inv.sharePercent * 100).toFixed(2)}%</td>
                    <td className="text-end text-danger">-{formatCurrency(inv.costShare)}</td>
                    <td className="text-end fw-bold" style={{ backgroundColor: '#dbeafe' }}>
                      {formatCurrency(inv.currentBalance)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="border-top pt-3 mt-3">
          <p className="text-muted small mb-0">
            * <strong>Share of Costs</strong> is calculated as: (Total Expenses) × (Pool Share %).<br />
            * <strong>Current Refund Value</strong> is: (Initial Investment) - (Share of Costs).
          </p>
        </div>
      </div>
    </div>
  )
}

export default InvestorLedger
