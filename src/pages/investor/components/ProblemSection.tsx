import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useRef } from 'react'
import { AlertTriangle, Clock, DollarSign } from 'lucide-react'
import Chart from 'chart.js/auto'

const iconMap: any = {
  AlertTriangle,
  Clock,
  DollarSign
}

const ProblemSection = () => {
  const { t } = useLanguage()
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chartData = t('problem.chartData')
    
    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.labels,
        datasets: [{
          label: 'Minutes Spent',
          data: chartData.values,
          backgroundColor: chartData.colors,
          borderRadius: 5,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                return `${context.parsed.y} Minutes`
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Time Spent (Minutes)' }
          }
        }
      }
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [t])

  const points = t('problem.points') || []

  return (
    <section id="market" className="investor-section bg-body-tertiary border-top border-bottom">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left: Text Content */}
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">
              {t('problem.title')}{' '}
              <span className="text-danger">{t('problem.titleHighlight')}</span>
            </h2>
            <p className="lead text-muted mb-4">
              {t('problem.description')}
            </p>
            <div className="d-flex flex-column gap-4">
              {points.map((point: any, index: number) => {
                const IconComponent = iconMap[point.icon] || AlertTriangle
                return (
                  <div key={index} className="d-flex align-items-start">
                    <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10 text-danger" style={{width: '40px', height: '40px'}}>
                      <IconComponent size={20} />
                    </div>
                    <div className="ms-3">
                      <h5 className="fw-bold">{point.title}</h5>
                      <p className="text-muted mb-0">{point.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Chart */}
          <div className="col-lg-6">
            <div className="bg-light p-4 rounded-3 shadow-sm border">
              <div className="text-center mb-3">
                <h5 className="fw-bold">{t('problem.chartTitle')}</h5>
                <p className="text-muted small">{t('problem.chartSubtitle')}</p>
              </div>
              <div className="position-relative w-100" style={{ height: '350px' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className="text-center text-muted small mt-3">*{t('problem.chartNote')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
