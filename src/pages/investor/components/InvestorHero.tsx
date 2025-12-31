import { useState } from 'react'
import { Calendar, DollarSign, Users, TrendingUp, Clock, ChevronLeft, ChevronRight, Target, Zap, BarChart, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'

const InvestorHero = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Icon mapping for stats
  const iconMap: { [key: number]: any } = {
    0: [Users, DollarSign, Calendar, TrendingUp],
    1: [Calendar, Clock, Zap, BarChart],
    2: [Target, ShieldCheck, Users, BarChart],
    3: [Users, TrendingUp, Target, DollarSign]
  }

  const colorMap: { [key: number]: string[] } = {
    0: ['text-primary', 'text-success', 'text-info', 'text-warning'],
    1: ['text-primary', 'text-danger', 'text-warning', 'text-success'],
    2: ['text-primary', 'text-success', 'text-info', 'text-warning'],
    3: ['text-primary', 'text-info', 'text-success', 'text-warning']
  }

  // Get translated slides
  const slidesData = t('hero.slides')
  const taxSeasonSlides = slidesData.map((slide: any, slideIndex: number) => ({
    ...slide,
    stats: slide.stats.map((stat: any, statIndex: number) => ({
      ...stat,
      icon: iconMap[slideIndex][statIndex],
      color: colorMap[slideIndex][statIndex]
    }))
  }))

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % taxSeasonSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + taxSeasonSlides.length) % taxSeasonSlides.length)

  const slide = taxSeasonSlides[currentSlide]

  return (
    <section className="investor-hero">
      {/* Full-Width Dynamic Hero Slider */}
      <div className="position-relative" style={{ 
        minHeight: '650px', 
        marginTop: '-80px',
        marginBottom: '80px',
        background: 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)'
      }}>
        {/* Language Switcher - Top Right */}
        <div className="position-absolute top-0 end-0 m-4" style={{ zIndex: 10 }}>
          <LanguageToggle />
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center py-5" style={{ minHeight: '650px' }}>
            <div className="col-lg-12 text-center">
              
              {/* Badge */}
              <div className="mb-4" key={`badge-${currentSlide}`}>
                <span className="badge bg-primary text-white px-4 py-2 text-uppercase fw-bold shadow" style={{ fontSize: '0.875rem' }}>
                  {slide.badge}
                </span>
              </div>

              {/* Main Title - Changes per slide */}
              <h1 className="display-3 fw-bold mb-3 text-dark" key={`title-${currentSlide}`}>
                {slide.title}
              </h1>

              {/* Subtitle - Changes per slide */}
              <p className="lead mb-5 text-secondary" key={`subtitle-${currentSlide}`} style={{ 
                maxWidth: '900px', 
                margin: '0 auto 3rem',
                fontSize: '1.25rem'
              }}>
                {slide.subtitle}
              </p>

              {/* Dynamic Stats Grid - Changes per slide */}
              <div className="row g-4 mb-5" key={`stats-${currentSlide}`} style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {slide.stats.map((stat: any, idx: number) => {
                  const StatIcon = stat.icon
                  return (
                    <div key={idx} className="col-6 col-md-3">
                      <div className="card border-0 shadow h-100" style={{ 
                        background: 'white',
                        transition: 'transform 0.2s'
                      }}>
                        <div className="card-body p-5 text-center">
                          <StatIcon size={48} className={`${stat.color} mb-3`} strokeWidth={2} />
                          <div className="h2 fw-bold mb-2">{stat.value}</div>
                          <div className="text-muted" style={{ fontSize: '0.95rem' }}>{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Description - Changes per slide */}
              <div className="mb-4" key={`desc-${currentSlide}`}>
                <div className="card border-0 shadow mx-auto" style={{ 
                  maxWidth: '900px',
                  background: 'white'
                }}>
                  <div className="card-body p-5">
                    <p className="mb-3 text-dark" style={{ 
                      fontSize: '1.1rem',
                      lineHeight: '1.8'
                    }}>
                      {slide.description}
                    </p>
                    <span className="badge bg-success px-4 py-2" style={{ fontSize: '0.95rem' }}>
                      ✓ {slide.highlight}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-5 d-flex flex-column flex-sm-row justify-content-center gap-3" key={`cta-${currentSlide}`}>
                <a
                  href="/docs/Prompt Tax Investment Presentation Outline.pdf"
                  download
                  className="btn btn-primary btn-lg px-5 py-3 rounded-3 shadow fw-bold"
                >
                  {slide.cta}
                </a>
                <button
                  onClick={() => scrollToSection('returns-calculator')}
                  className="btn btn-outline-secondary btn-lg px-5 py-3 rounded-3 fw-bold"
                >
                  Calculate Returns
                </button>
              </div>

              {/* Slider Controls */}
              <div className="mt-5 d-flex gap-4 justify-content-center align-items-center">
                <button 
                  onClick={prevSlide}
                  className="btn btn-primary rounded-circle shadow"
                  style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="d-flex gap-3 align-items-center">
                  {taxSeasonSlides.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`rounded-pill ${index === currentSlide ? 'bg-primary' : 'bg-secondary bg-opacity-25'}`}
                      style={{
                        width: index === currentSlide ? '45px' : '15px',
                        height: '15px',
                        border: 'none',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                  <span className="text-muted ms-2 small">
                    {currentSlide + 1} / {taxSeasonSlides.length}
                  </span>
                </div>

                <button 
                  onClick={nextSlide}
                  className="btn btn-primary rounded-circle shadow"
                  style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
          background: 'radial-gradient(circle at 80% 20%, rgba(13, 110, 253, 0.05) 0%, transparent 50%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />
      </div>

      {/* CSS for card hover effects */}
      <style>{`
        .card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  )
}

export default InvestorHero
