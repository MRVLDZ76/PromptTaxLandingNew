import PasswordFormInput from '@/components/form/PasswordFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { Link } from 'react-router-dom'
import PageHeading from '../components/PageHeading'
import useSignIn from './useSignIn'
import ThirdPartyAuth from '../components/ThirdPartyAuth'
import { Col, Form, Row } from 'react-bootstrap'
import PageTitle from '@/components/PageTitle'

const SignIn = () => {

  const { control, loading, login } = useSignIn()

  return (
    <>
      <PageTitle title='Sign In' />

      <Col sm={10} lg={5} className="d-flex m-auto vh-100">
        <Row className="w-100 m-auto">
          <Col sm={10} className="my-5 m-auto">
            <PageHeading heading='Welcome back' subHeading='Welcome back, please enter your detail' />

            <ThirdPartyAuth />

            <Form onSubmit={login}>

              <TextFormInput
                control={control}
                name='email'
                label='Email address'
                placeholder='name@example.com'
                type='email'
                containerClass='mb-4'
                floating
              />

              <PasswordFormInput
                control={control}
                name='password'
                label='Password'
                containerClass='mb-4 position-relative'
                className='pe-6'
                placeholder='Enter your password'
                floating
              />

              <div className="mb-4 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="checkbox-1" />
                  <label className="form-check-label" htmlFor="checkbox-1">Remember me</label>
                </div>
                <Link to="/auth/forgot-password" className="link-underline-primary"> Forgot password?</Link>
              </div>

              <div className="align-items-center mt-0">
                <div className="d-grid">
                  <button className="btn btn-dark mb-0" type="submit" disabled={loading}>Login</button>
                </div>
              </div>
            </Form>

            <div className="mt-4 text-center">
              <span>Not registered yet?<Link to="/auth/sign-up"> Create an account</Link></span>
            </div>
          </Col>
        </Row>
      </Col>
    </>

  )
}

export default SignIn