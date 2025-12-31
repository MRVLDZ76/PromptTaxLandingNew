import type { IconType } from 'react-icons'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

type LinkedAccountCardProps = {
  linkedWith: string
  logo: {
    icon: IconType
    className?: string
  }
  isLinked?: boolean
}

const LinkedAccountCard = ({ linkedWith, logo, isLinked }: LinkedAccountCardProps) => {
  const Icon = logo.icon
  return (
    <div className={`d-md-flex align-items-center border rounded mb-4 p-4 ${isLinked ? 'position-relative bg-success bg-opacity-10 border-success' : ''}`}>
      {isLinked &&
        <div className="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
          <BsCheckCircleFill size={24} className="text-success" />
        </div>
      }
      <h2 className="mb-0 me-3"><Icon size={60} className={logo.className} /></h2>
      <div className="mb-3 mb-md-0">
        <h6 className="mb-1">{linkedWith}</h6>
        <p className="mb-1 small">
          {isLinked ?
            `You are successfully connected to your ${linkedWith} account` :
            `Connect with ${linkedWith} account for a personalized experience`
          }
        </p>
      </div>
      <div className="ms-auto">
        {isLinked ?
          <button type="button" className="btn btn-sm btn-danger mb-0">Invoke</button> :
          <button type="button" className="btn btn-sm btn-dark mb-0">Connect {linkedWith}</button>
        }
        <Link to="" className="btn btn-sm btn-link text-primary-hover mb-0">Learn more</Link>
      </div>
    </div>
  )
}

export default LinkedAccountCard