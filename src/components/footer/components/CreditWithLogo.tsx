import LogoBox from '@/components/LogoBox'
import { currentYear} from '@/states/constants'

const CreditWithLogo = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-3">
      <LogoBox imageClassName='h-40px' />
      <div className="text-body"> Copyrights ©{currentYear} Red Pill Software, LLC.  </div>     </div>
  )
}

export default CreditWithLogo