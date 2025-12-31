import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { submitContactForm } from '@/utils/formService'
import * as yup from 'yup'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const contactFormSchema = yup.object({
    name: yup.string().required('please enter your name'),
    email: yup.string().email('please enter valid email').required('please enter your email'),
    phoneNo: yup.string().required('please enter your phone no'),
    company: yup.string().required('please enter company name'),
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
        company: data.company,
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
    <Row as={Form} className="g-4" onSubmit={handleSubmit(onSubmit)}>
      <TextFormInput
        name='name'
        label="Your name *"
        labelClass='heading-color'
        size="lg"
        control={control}
        containerClass='col-md-6'
        placeholder="Full name"
      />
      <TextFormInput
        name='email'
        type='email'
        label="Email address *"
        labelClass='heading-color'
        size="lg"
        control={control}
        containerClass='col-md-6'
        placeholder="name@example.com"
      />
      <TextFormInput
        name='phoneNo'
        label="Phone number *"
        labelClass='heading-color'
        size="lg"
        control={control}
        containerClass='col-md-6'
        placeholder="(xxx) xx xxxx"
      />
      <TextFormInput
        name='company'
        label="Company *"
        labelClass='heading-color'
        size="lg"
        control={control}
        containerClass='col-md-6'
        placeholder="Company name"
      />

      <TextAreaFormInput
        name='message'
        label="Message *"
        labelClass='heading-color'
        control={control}
        containerClass='col-12'
        style={{ height: 150 }}
        placeholder="Write your message here...."
      />

      {submitStatus && (
        <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} col-12`}>
          {submitStatus.message}
        </div>
      )}

      <button className="btn btn-lg btn-primary mb-0" type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send a message'}
      </button>
    </Row>
  )
}

export default ContactForm