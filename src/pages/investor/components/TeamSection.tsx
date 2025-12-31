import { useLanguage } from '@/contexts/LanguageContext'
import { Linkedin, Award, CheckCircle } from 'lucide-react'

const TeamSection = () => {
  const { t } = useLanguage()
  
  const founders = t('team.founders') || []
  const advisors = t('team.advisors') || {}
  const culture = t('team.culture') || {}
  const advisorList = advisors.list || []
  const values = culture.values || []

  return (
    <section id="team" className="investor-section bg-body-secondary border-top border-bottom">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary mb-3 text-uppercase">
            {t('team.badge')}
          </span>
          <h2 className="display-4 fw-bold mb-3">
            {t('team.title')}
          </h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '800px'}}>
            {t('team.subtitle')}
          </p>
        </div>

        {/* Founders */}
        <div className="row g-4 mb-5">
          {founders.map((founder: any, index: number) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card investor-card border-0 shadow h-100">
                <div className="card-body p-4">
                  {/* Avatar Placeholder */}
                  <div className="rounded-circle bg-gradient text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '96px', height: '96px', background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)', fontSize: '2rem', fontWeight: 'bold'}}>
                    {founder.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  
                  <div className="text-center mb-3">
                    <h5 className="fw-bold mb-1">{founder.name}</h5>
                    <p className="text-primary fw-semibold small mb-0">{founder.role}</p>
                  </div>

                  <p className="small text-muted mb-3">{founder.bio}</p>

                  {/* Achievements */}
                  {founder.achievements && (
                    <div className="d-flex flex-column gap-2 mb-3">
                      {founder.achievements.map((achievement: string, idx: number) => (
                        <div key={idx} className="d-flex align-items-start">
                          <CheckCircle size={16} className="text-success flex-shrink-0 me-2 mt-1" />
                          <span className="small">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LinkedIn */}
                  <a 
                    href={founder.linkedin} 
                    className="btn btn-sm btn-outline-primary"
                  >
                    <Linkedin size={16} className="me-1" />
                    Connect
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div className="card bg-body-secondary border-0 shadow mb-5">
          <div className="card-body p-4 p-md-5">
            <h3 className="h3 fw-bold text-center mb-4">
              <Award size={28} className="text-primary me-2" />
              {advisors.title}
            </h3>
            <div className="row g-4">
              {advisorList.map((advisor: any, index: number) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card border-primary border-opacity-25 h-100">
                    <div className="card-body p-3">
                      <h5 className="fw-bold mb-1">{advisor.name}</h5>
                      <p className="text-primary fw-semibold small mb-2">{advisor.role}</p>
                      <p className="small text-muted mb-0">{advisor.expertise}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Culture */}
        <div className="card bg-primary text-white border-0 shadow">
          <div className="card-body p-4 p-md-5 text-center">
            <h3 className="h3 fw-bold mb-4">{culture.title}</h3>
            <div className="row g-3">
              {values.map((value: string, index: number) => (
                <div key={index} className="col-6 col-lg-3">
                  <div className="card bg-white bg-opacity-10 border-white border-opacity-25 h-100">
                    <div className="card-body p-3">
                      <p className="small fw-semibold mb-0 text-white">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
