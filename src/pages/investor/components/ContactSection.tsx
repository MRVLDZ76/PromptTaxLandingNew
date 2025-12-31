import { useLanguage } from '@/contexts/LanguageContext'
import { Rocket, Mail, Phone } from 'lucide-react'
import { useState, FormEvent } from 'react'

const ContactSection = () => {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/.netlify/functions/investment-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email,
            investmentAmount: formData.amount,
            message: formData.message,
            language: language,
          },
          timestamp: Date.now(),
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        alert(result.message)
        setFormData({ name: '', email: '', amount: '', message: '' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Failed to submit inquiry')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const form = t('contact.form')
  const amountOptions = form?.amountOptions || []

  return (
    <section id="contact-section" className="investor-section bg-body-tertiary">
      <div className="container" style={{maxWidth: '800px'}}>
        <div className="card shadow-lg border-0">
          <div className="card-body p-4 p-md-5 text-center">
            <div className="mb-4">
              <Rocket size={64} className="text-info mx-auto mb-3" />
              <h2 className="display-5 fw-bold mb-3">
                {t('contact.title')}
              </h2>
              <p className="lead text-muted">
                {t('contact.subtitle')}
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <div className="row g-3 mb-3">
                <div className="col-md-6 text-start">
                  <label className="form-label fw-bold small">
                    {form?.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-control"
                    placeholder={form?.namePlaceholder}
                  />
                </div>
                <div className="col-md-6 text-start">
                  <label className="form-label fw-bold small">
                    {form?.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-control"
                    placeholder={form?.emailPlaceholder}
                  />
                </div>
              </div>
            
              <div className="mb-3 text-start">
                <label className="form-label fw-bold small">
                  {form?.amountLabel}
                </label>
                <select
                  required
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="form-select"
                >
                  <option value="">Select amount</option>
                  {amountOptions.map((option: string, index: number) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3 text-start">
                <label className="form-label fw-bold small">
                  {form?.messageLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-control"
                  placeholder={form?.messagePlaceholder}
                ></textarea>
              </div>

              {submitStatus === 'error' && (
                <div className="alert alert-danger">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg w-100 mb-3"
              >
                {isSubmitting ? (language === 'es' ? 'Enviando...' : 'Submitting...') : form?.submitButton}
              </button>

              <p className="small text-muted text-center">
                {form?.disclaimer}
              </p>
            </form>

            <div className="border-top pt-4 mt-4">
              <p className="small text-muted text-center mb-3">{t('contact.directContactLabel')}</p>
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <Mail size={20} className="me-2" />
                  <span className="fw-semibold">{t('contact.email')}</span>
                </a>
                <a
                  href={`tel:${t('contact.phone').replace(/\s/g, '')}`}
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <Phone size={20} className="me-2" />
                  <span className="fw-semibold">{t('contact.phone')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
