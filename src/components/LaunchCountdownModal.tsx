import { useState, useEffect } from 'react'
import { Modal, Button, Form, Alert } from 'react-bootstrap'
import { BsCheckCircleFill, BsClockFill } from 'react-icons/bs'

type LaunchCountdownModalProps = {
  show: boolean
  onHide: () => void
}

const LaunchCountdownModal = ({ show, onHide }: LaunchCountdownModalProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Countdown timer to January 19, 2026
  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date('2026-01-19T00:00:00').getTime()
      const now = new Date().getTime()
      const difference = launchDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/.netlify/functions/notify-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          timestamp: new Date().toISOString(),
          source: 'launch-countdown-modal'
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        setName('')
        setEmail('')
        setTimeout(() => {
          onHide()
          setSubmitSuccess(false)
        }, 3000)
      } else {
        setSubmitError(data.error || 'Failed to submit. Please try again.')
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered 
      size="lg"
      backdrop="static"
    >
      <Modal.Body className="p-0">
        <div className="bg-dark text-white rounded-top p-4 p-md-5 text-center position-relative overflow-hidden">
          {/* Background decoration */}
          <figure className="position-absolute top-0 start-0 opacity-1">
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
              <circle cx="150" cy="150" r="150" fill="url(#gradient)" opacity="0.1"/>
              <defs>
                <radialGradient id="gradient">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#000000" />
                </radialGradient>
              </defs>
            </svg>
          </figure>

          <div className="position-relative z-index-2">
            <div className="icon-xl bg-primary bg-opacity-10 rounded-circle flex-centered mx-auto mb-4">
              <BsClockFill size={40} className="text-primary" />
            </div>
            <h2 className="text-white mb-3">Launching Soon!</h2>
            <p className="text-white opacity-8 mb-4">
              PromptTax is launching on January 19th, 2026. Join our early access list to be the first to know and get exclusive launch benefits!
            </p>

            {/* Countdown Timer */}
            <div className="row g-3 justify-content-center mb-4">
              <div className="col-3 col-sm-auto">
                <div className="bg-white bg-opacity-10 rounded p-3">
                  <div className="h2 text-primary mb-0">{timeLeft.days}</div>
                  <small className="text-white opacity-8">Days</small>
                </div>
              </div>
              <div className="col-3 col-sm-auto">
                <div className="bg-white bg-opacity-10 rounded p-3">
                  <div className="h2 text-primary mb-0">{timeLeft.hours}</div>
                  <small className="text-white opacity-8">Hours</small>
                </div>
              </div>
              <div className="col-3 col-sm-auto">
                <div className="bg-white bg-opacity-10 rounded p-3">
                  <div className="h2 text-primary mb-0">{timeLeft.minutes}</div>
                  <small className="text-white opacity-8">Minutes</small>
                </div>
              </div>
              <div className="col-3 col-sm-auto">
                <div className="bg-white bg-opacity-10 rounded p-3">
                  <div className="h2 text-primary mb-0">{timeLeft.seconds}</div>
                  <small className="text-white opacity-8">Seconds</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 p-md-5">
          {submitSuccess ? (
            <Alert variant="success" className="d-flex align-items-center">
              <BsCheckCircleFill size={24} className="me-3 flex-shrink-0" />
              <div>
                <strong>Success!</strong> You're on the list. We'll notify you on January 19th, 2026.
              </div>
            </Alert>
          ) : (
            <>
              <h5 className="mb-3 text-center">Get Notified at Launch</h5>
              <p className="text-center mb-4 text-muted">
                Be the first to access AI-powered tax preparation with exclusive early-bird pricing.
              </p>

              {submitError && (
                <Alert variant="danger" dismissible onClose={() => setSubmitError('')}>
                  {submitError}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Notify Me at Launch'}
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    onClick={onHide}
                    disabled={isSubmitting}
                  >
                    Maybe Later
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-4">
                <small className="text-muted">
                  🎉 Early access members get 15% off their first tax filing
                </small>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default LaunchCountdownModal
