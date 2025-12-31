
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card, CardBody, CardHeader, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const UpdateEmailForm = () => {

  const emailSchema = yup.object({
    email: yup.string().email('Enter a valid email address').required('Email Address is required')
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      email: 'hello@gmail.com'
    }
  })

  return (
    <Form onSubmit={handleSubmit(() => { })}>
      <Card className="bg-transparent p-0">

        <CardHeader className="bg-transparent border-bottom px-0">
          <h6 className="mb-0">Update email</h6>
        </CardHeader>

        <CardBody className="px-0">

          <div className="mb-4">
            <p className="mb-4">Your current email address is <span className="text-primary">hi@prompt.tax</span></p>

            <TextFormInput
              name="email"
              placeholder='Enter your email id'
              label='Email address'
              control={control}
            />

          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-primary mb-0">Save Changes</button>
          </div>
        </CardBody>
      </Card>
    </Form>
  )
}

export default UpdateEmailForm