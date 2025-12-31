import backgroundImg2 from '@/assets/images/bg/02.jpg'
import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card, CardHeader, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitContactForm } from '@/utils/formService'
import * as yup from 'yup'


const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const contactFormSchema = yup.object({
    name: yup.string().required('please enter your name'),
    email: yup.string().email('please enter valid email').required('please enter your email'),
    phoneNo: yup.string().required('please enter your phone no'),
    job: yup.string().required('please enter your job title'),
    message: yup.string().required('please enter your message'),
  })

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(contactFormSchema)
  })

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await submitContactForm({
        name: data.name,
        email: data.email,
        phone: data.phoneNo,
        company: data.job,
        message: data.message
      })
      
      if (response.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' })
        reset()
      } else {
        setSubmitStatus({ type: 'error', message: response.message })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section className="pt-xl-8">
      <Container>
        <Row className="g-4 g-xxl-5">
          <Col xl={9} className="mx-auto">
            <img src={backgroundImg2} className="rounded" alt="contact-bg" />
            <Row className="mt-n5 mt-sm-n7 mt-md-n8">
              <Col xs={11} lg={9} className="mx-auto">
                <Card className="shadow p-4 p-sm-5 p-md-6">
                  <CardHeader className="border-bottom px-0 pt-0 pb-5">
                    <nav className="mb-3" aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrumb-dots pt-0">
                        <li className="breadcrumb-item"><Link to="">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                      </ol>
                    </nav>
                    <h1 className="mb-3 h3">Let's level up your brand, together</h1>
                    <p className="mb-0">Watch how intelligent document processing transforms photos and scans into filing-ready data. 
                      <br /> Cut data entry time by 95% and catch deductions that human eyes might miss. You can reach us anytime via <Link to="mailto:hi@prompt.tax">hi@prompt.tax</Link></p>
                  </CardHeader>
                  <Form onSubmit={handleSubmit(onSubmit)} className="card-body px-0 pb-0 pt-5">
                    {submitStatus && (
                      <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}>
                        {submitStatus.message}
                      </div>
                    )}
                    <TextFormInput
                      name='name'
                      label="Your name"
                      containerClass='mb-4'
                      control={control}
                      placeholder="Password"
                      floating
                    />
                    <TextFormInput
                      name='email'
                      label="Email address"
                      containerClass='mb-4'
                      control={control}
                      placeholder="name@example.com"
                      floating
                    />
                    <TextFormInput
                      name='phoneNo'
                      label="Phone number"
                      containerClass='mb-4'
                      control={control}
                      placeholder="phone number"
                      floating
                    />

                    <TextAreaFormInput
                      name='message'
                      label="Message"
                      containerClass='mb-4'
                      control={control}
                      placeholder="Leave a comment here"
                      style={{ height: 100 }}
                      floating
                    />

                    <button className="btn btn-lg btn-primary mb-0" type='submit' disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send a message'}
                    </button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Hero