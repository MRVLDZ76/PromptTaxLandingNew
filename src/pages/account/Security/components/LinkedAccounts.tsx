import { FaFacebook, FaLinkedinIn } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import LinkedAccountCard from './LinkedAccountCard'
import { Card, CardBody, CardHeader } from 'react-bootstrap'

const LinkedAccounts = () => {
  return (
    <Card className="bg-transparent rounded-3">
      <CardHeader className="bg-transparent border-bottom px-0">
        <h6 className="card-header-title mb-0">Linked account</h6>
      </CardHeader>
      <CardBody className="px-0 pb-0">

        <LinkedAccountCard
          logo={{
            icon: FcGoogle,
            className: 'text-google-icon'
          }}
          linkedWith='Google'
          isLinked
        />

        <LinkedAccountCard
          logo={{
            icon: FaLinkedinIn,
            className: 'text-linkedin'
          }}
          linkedWith='Linkedin'
        />

        <LinkedAccountCard
          logo={{
            icon: FaFacebook,
            className: 'text-facebook'
          }}
          linkedWith='Facebook'
        />

      </CardBody>
    </Card>
  )
}

export default LinkedAccounts