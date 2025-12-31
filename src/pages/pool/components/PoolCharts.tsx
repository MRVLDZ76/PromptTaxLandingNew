import { useEffect, useRef } from 'react'
import { Chart, ChartConfiguration, registerables } from 'chart.js'
import { usePool } from '../contexts/PoolContext'

Chart.register(...registerables)

const PoolCharts = () => {
  const { getInvestorData, getTotals, goal } = usePool()
  const investorChartRef = useRef<HTMLCanvasElement>(null)
  const burnChartRef = useRef<HTMLCanvasElement>(null)
  const investorChartInstance = useRef<Chart | null>(null)
  const burnChartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    const investorsData = getInvestorData()
    const totals = getTotals()

    // Investor Composition Chart
    if (investorChartRef.current) {
      const ctx = investorChartRef.current.getContext('2d')
      if (ctx) {
        if (investorChartInstance.current) {
          investorChartInstance.current.destroy()
        }

        const colors = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899', '#6366f1']
        
        const config: ChartConfiguration = {
          type: 'doughnut',
          data: {
            labels: investorsData.map(i => i.name),
            datasets: [{
              data: investorsData.map(i => i.initialAmount),
              backgroundColor: colors.slice(0, investorsData.length),
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom' }
            }
          }
        }

        investorChartInstance.current = new Chart(ctx, config)
      }
    }

    // Burn Chart
    if (burnChartRef.current) {
      const ctx = burnChartRef.current.getContext('2d')
      if (ctx) {
        if (burnChartInstance.current) {
          burnChartInstance.current.destroy()
        }

        const config: ChartConfiguration = {
          type: 'bar',
          data: {
            labels: ['Budget Overview'],
            datasets: [
              {
                label: 'Spent',
                data: [totals.totalSpent],
                backgroundColor: '#f43f5e',
              },
              {
                label: 'Remaining Raised',
                data: [totals.remaining],
                backgroundColor: '#3b82f6',
              },
              {
                label: 'Unfunded Goal',
                data: [Math.max(0, goal - totals.totalRaised)],
                backgroundColor: '#e5e7eb',
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { stacked: true },
              y: { stacked: true, beginAtZero: true }
            }
          }
        }

        burnChartInstance.current = new Chart(ctx, config)
      }
    }

    return () => {
      if (investorChartInstance.current) {
        investorChartInstance.current.destroy()
      }
      if (burnChartInstance.current) {
        burnChartInstance.current.destroy()
      }
    }
  }, [getInvestorData, getTotals, goal])

  return (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <h3 className="h6 fw-medium mb-2">Investor Share (%)</h3>
            <p className="text-muted small mb-3">
              Initial contribution breakdown. Deductions apply proportionally to this share.
            </p>
            <div style={{ height: '300px', position: 'relative' }}>
              <canvas ref={investorChartRef}></canvas>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <h3 className="h6 fw-medium mb-2">Campaign Burn Rate</h3>
            <p className="text-muted small mb-3">
              Visualizing raised funds vs. cumulative expenses.
            </p>
            <div style={{ height: '300px', position: 'relative' }}>
              <canvas ref={burnChartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoolCharts
