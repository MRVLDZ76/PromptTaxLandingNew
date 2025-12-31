import PasswordFormInput from '@/components/form/PasswordFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card, CardBody, CardHeader, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const UpdatePasswordForm = () => {

  const passwordSchema = yup.object({
    currentPassword: yup.string().required('Please enter your old password.'),
    newPassword: yup.string().notOneOf([yup.ref('currentPassword')], 'New password should not be same as old password').min(8, 'New password must be at least 8 characters long.').required('Please enter a new password.'),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword')], 'New password and confirm password do not match.')
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(passwordSchema)
  })

  return (
    <Form onSubmit={handleSubmit(() => { })}>
      <Card className="bg-transparent p-0">

        <CardHeader className="bg-transparent border-bottom px-0">
          <h6 className="mb-0">Update password</h6>
        </CardHeader>

        <CardBody className="px-0">

          <PasswordFormInput
            control={control}
            name='currentPassword'
            label='Current password'
            containerClass='mb-3'
            placeholder='Enter current password'
          />

          <PasswordFormInput
            control={control}
            name='newPassword'
            label='Enter new password'
            containerClass='mb-3'
            placeholder='Enter your password'
          />

          <PasswordFormInput
            control={control}
            name='confirmPassword'
            label='Confirm new password'
            placeholder='Enter new password'
          />

          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-primary mb-0">Change password</button>
          </div>
        </CardBody>
      </Card>
    </Form>
  )
}

export default UpdatePasswordForm