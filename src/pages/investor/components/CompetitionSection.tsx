import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'

const CompetitionSection = () => {
  const { t } = useLanguage()
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)
  const [visibleCompetitors, setVisibleCompetitors] = useState<Record<string, boolean>>({
    turbotax: true,
    hrblock: true,
    freetaxusa: true,
    cpas: true,
    prompttax: true
  })

  const toggleCompetitor = (key: string) => {
    setVisibleCompetitors(prev => ({ ...prev, [key]: !prev[key] }))
  }

  useEffect(() => {
    if (!chartRef.current) return

    const radarData = t('competition.radarData')
    
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    // Filter datasets based on visible competitors
    const filteredDatasets = radarData.datasets.filter((dataset: any) => {
      const key = dataset.label.toLowerCase().replace(/\s+/g, '').replace(/\(.*\)/, '')
      return visibleCompetitors[key] !== false
    })

    chartInstance.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: radarData.labels,
        datasets: filteredDatasets.map((dataset: any) => ({
          label: dataset.label,
          data: dataset.data,
          fill: true,
          backgroundColor: `${dataset.color}20`,
          borderColor: dataset.color,
          pointBackgroundColor: dataset.color,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: dataset.color,
          borderWidth: 3
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { display: false },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [t, visibleCompetitors])

  const positioning = t('competition.positioning') || []

  return (
    <section id="competition" className="investor-section bg-body-tertiary border-top border-bottom">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <span className="badge bg-primary bg-opacity-10 text-primary mb-3 text-uppercase">
              {t('competition.badge')}
            </span>
            <h2 className="display-5 fw-bold mb-4">
              {t('competition.title')}
            </h2>
            <p className="text-muted mb-4">
              {t('competition.description')}
            </p>
            
            <div className="card bg-body p-4 border shadow-sm mb-4">
              <h4 className="fw-bold mb-3 text-body">
                {t('competition.positioningTitle')}
              </h4>
              <ul className="list-unstyled mb-0">
                {positioning.map((item: any, index: number) => (
                  <li key={index} className="d-flex align-items-start mb-3">
                    <span className={`badge ${item.color} me-2 mt-1 flex-shrink-0`} style={{ minWidth: '8px', minHeight: '8px' }}></span>
                    <span><strong className="text-body">{item.label}:</strong> <span className="text-body-secondary">{item.description}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="card bg-body border shadow-lg">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-bold mb-0 text-body">
                    {t('competition.chartTitle')}
                  </h5>
                  <span className="badge bg-primary text-white small">Interactive</span>
                </div>
                
                {/* Competitor Toggles */}
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {Object.entries(visibleCompetitors).map(([key, visible]) => (
                    <button
                      key={key}
                      onClick={() => toggleCompetitor(key)}
                      className={`btn btn-sm ${visible ? 'btn-primary' : 'btn-outline-secondary'}`}
                      style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                    >
                      {key === 'turbotax' && '🔵 TurboTax'}
                      {key === 'hrblock' && '🟢 H&R Block'}
                      {key === 'freetaxusa' && '🟡 FreeTaxUSA'}
                      {key === 'cpas' && '🔴 CPAs'}
                      {key === 'prompttax' && '🟣 PromptTax'}
                    </button>
                  ))}
                </div>
                
                <div className="position-relative w-100" style={{ height: '350px' }}>
                  <canvas ref={chartRef}></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetitionSection
