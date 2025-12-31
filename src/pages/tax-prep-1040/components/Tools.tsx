import { Col, Container, Row } from 'react-bootstrap'
import { BsRobot, BsLightningChargeFill, BsShieldCheck, BsCurrencyDollar, BsPeopleFill, BsFileEarmarkText } from 'react-icons/bs'

const Tools = () => {
  const features1040 = [
    {
      icon: BsRobot,
      title: 'AI Works for You',
      description: 'Chat in plain English, upload docs, get results'
    },
    {
      icon: BsLightningChargeFill,
      title: 'Document Intelligence',
      description: 'Auto-extract W-2s, 1099s, K-1s, receipts'
    },
    {
      icon: BsShieldCheck,
      title: 'Crypto & DeFi',
      description: 'Wash sales, cost basis, 11+ exchanges'
    },
    {
      icon: BsCurrencyDollar,
      title: 'CPA Review',
      description: 'Expert review at fraction of traditional cost'
    },
    {
      icon: BsPeopleFill,
      title: 'All Filers',
      description: 'Personal, business, freelance, crypto'
    },
    {
      icon: BsFileEarmarkText,
      title: 'IRS Compliant',
      description: 'E-file direct or export to TurboTax'
    }
  ]

  return (
    <section className="pb-6 pt-0" >
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6" style={{paddingTop: '-7.5rem'}}>
          <h2 className="mb-4">Why Choose PromptTax 1040</h2>
          <p className="mb-0">Professional tax filing made simple</p>
        </div>

        <Row className="g-4 g-lg-5">
          {features1040.map((item, idx) => {
            const Icon = item.icon
            return (
              <Col key={idx} md={6} lg={4}>
                <div className="card card-body bg-light text-center border-0 h-100 p-4">
                  <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-3">
                    <Icon size={28} />
                  </div>
                  <h6>{item.title}</h6>
                  <p className="mb-0 text-muted">{item.description}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Tools
