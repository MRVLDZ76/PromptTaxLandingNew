import LogoBox from '@/components/LogoBox'
import StickyHeader from '@/components/topbar/StickyHeader'
import { buyLink } from '@/states/constants'
import { Container } from 'react-bootstrap'

const Topbar = () => {
  return (
    <StickyHeader>
    <nav className="navbar navbar-expand-xl">
      <Container>

        <LogoBox />

        <div className="nav align-items-center ms-2">
          <a href={buyLink} target='_blank' className="btn btn-sm btn-dark mb-0">Login!</a>
        </div>
      </Container>
    </nav>
  </StickyHeader>
  )
}

export default Topbar