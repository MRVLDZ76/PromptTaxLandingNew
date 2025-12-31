import { BsThreeDots } from 'react-icons/bs'
import { useOutletContext } from 'react-router-dom'

import type { OutletContextType } from '@/layouts/AccountLayout/types'
import PageHeading from '../components/PageHeading'
import PersonalInformationForm from './components/PersonalInformationForm'
import UpdateEmailForm from './components/UpdateEmailForm'
import UpdatePasswordForm from './components/UpdatePasswordForm'
import PageTitle from '@/components/PageTitle'

const Profile = () => {

  const { toggleOffcanvas } = useOutletContext<OutletContextType>()

  return (
    <>
      <PageTitle title='Profile' />

      <PageHeading heading='My profile' toggleOffcanvas={toggleOffcanvas} />

      <div>
        <PersonalInformationForm />
        <div className="text-center my-5"><BsThreeDots /></div>

        <UpdateEmailForm />
        <div className="text-center my-5"><BsThreeDots /></div>

        <UpdatePasswordForm />
      </div>
    </>
  )
}

export default Profile