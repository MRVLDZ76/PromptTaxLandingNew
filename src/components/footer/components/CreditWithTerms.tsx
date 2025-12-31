import { currentYear  } from '@/states/constants'
import { Link } from 'react-router-dom'

const CreditWithTerms = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
      
      <div className="text-body"> Copyrights ©{currentYear} Red Pill Software, LLC.  </div>
      <div className="nav mt-2 mt-lg-0">
        <ul className="list-inline mx-auto mb-0">
          <li className="list-inline-item me-0"><Link className="nav-link py-0" to="">Privacy policy</Link></li>
          <li className="list-inline-item me-0"><Link className="nav-link py-0 pe-0" to="">Terms &amp; conditions</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default CreditWithTerms