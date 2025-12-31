import { Card, Col, Container, Row } from "react-bootstrap"
import Sticky from 'react-sticky-el'
import useViewPort from '@/hooks/useViewPort'
import { ChatUploadIllustration, AIProcessingIllustration, CPAReviewIllustration } from './StepIllustrations.tsx'



type WorkFlowStepType = {
    stepNumber: number
    title: string
    description: string
    illustration: React.ComponentType
}

type StepCardProps = {
    step: WorkFlowStepType
}

const StepCard = ({step}: StepCardProps) => {
    const IllustrationComponent = step.illustration
    
    return (
        <Card className="border p-4 p-sm-5 mb-5">
            <Card.Body className="p-0 pb-5">
                {
                    step.stepNumber &&
                    <div
                        className="icon-lg bg-primary rounded-circle fw-bold text-white mb-3">
                        {
                            step.stepNumber < 10 && <span>0</span>
                        }
                        {step.stepNumber}
                    </div>
                }
                <h4 className="mb-3">{step.title}</h4>
                <p className="heading-color">{step.description}</p>
            </Card.Body>

            <Card.Footer className="bg-transparent text-center p-0">
                <IllustrationComponent />
            </Card.Footer>
        </Card>
    )
}

const Features2 = () => {
  const { width } = useViewPort()

  const steps: WorkFlowStepType[] = [
    {
        stepNumber: 1,
        title: "Chat & Upload Documents",
        description: "Describe your tax situation in plain English. Upload W-2s, 1099s, K-1s, receipts, and crypto statements. AI understands your tax story without complex forms.",
        illustration: ChatUploadIllustration,
    },
    {
        stepNumber: 2,
        title: "AI Processes Everything",
        description: "AI extracts data from documents, validates entries, applies crypto wash sale logic, handles Schedule C/E/K-1 forms with 99%+ accuracy. Zero manual data entry required.",
        illustration: AIProcessingIllustration,
    },
    {
        stepNumber: 3,
        title: "CPA Review & E-File",
        description: "Licensed CPA reviews your AI-completed return, answers your questions, and e-files directly to IRS. Get professional oversight at a fraction of traditional CPA costs.",
        illustration: CPAReviewIllustration,
    }
  ]

  return (
    <section className="bg-dark" data-bs-theme="dark">
      <Container data-sticky-container>
        <Row>

          <Col lg={5} className="mb-5">
            <Sticky boundaryElement="div.container" hideOnBoundaryHit={false}
              stickyStyle={{ transition: '0.2s all linear', marginTop: 100 }}
              disabled={width <= 768}>
              <h2 className="mb-4">Workflow become clearer and more organized</h2>
              <p className="mb-0">Experience the power of AI-driven tax preparation that transforms complex 1040 filing into simple conversations. Stop working for your tax software—let AI work for you.</p>
              <hr className="my-5" />

              <div className="d-flex align-items-sm-center mb-3">

                <div className="avatar avatar-xl flex-shrink-0 bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 64, height: 64 }}>
                  <span className="text-white fw-bold" style={{ fontSize: 28 }}>SC</span>
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Sarah Chen, CPA</h6>
                  <p className="mb-0">Tax Director at PromptTax</p>
                </div>
              </div>

              <q className="fs-6 fw-normal heading-color mb-4">We've revolutionized tax filing by letting AI handle the 99% of work that machines do better, while our CPAs focus on the 1% that requires human expertise and judgment.</q>
            </Sticky>
          </Col>

          <Col lg={6} className="ms-auto">
            {
              steps.map((step, idx) => (
                <StepCard step={step} key={idx} />
              ))
            }
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Features2
