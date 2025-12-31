import { BsThreeDots } from 'react-icons/bs'
import { useOutletContext } from 'react-router-dom'

import PageHeading from '../components/PageHeading'
import LinkedAccounts from './components/LinkedAccounts'
import LoggedInDevices from './components/LoggedInDevices'
import SecuritySettingCard from './components/SecuritySettingCard'
import SocialMediaProfile from './components/SocialMediaProfile'
import type { OutletContextType } from '@/layouts/AccountLayout/types'
import { Form, Row } from 'react-bootstrap'
import PageTitle from '@/components/PageTitle'

const Security = () => {

  const { toggleOffcanvas } = useOutletContext<OutletContextType>()

  return (
    <>
      <PageTitle title='Security' />

      <PageHeading heading='My profile' toggleOffcanvas={toggleOffcanvas} />

      <Form>

        <SecuritySettingCard
          title='Activity Logs'
          description='You can save your all activity logs including unusual activity detected.'
        />

        <SecuritySettingCard
          title='Two factor authentication'
          description='Secure your account with 2 Step security. When it is activated you will need to enter not only your password, but also a special code using app. You can receive this code by in mobile app.'
        />

        <LinkedAccounts />

      </Form>
      <div className="text-center my-5"><BsThreeDots /></div>
      <Row className="g-lg-6">

        <SocialMediaProfile />

        <LoggedInDevices />

      </Row>
    </>
  )
}

export default Security