import useBSStepper from '@/hooks/useBSStepper'
import { useEffect, useRef } from 'react'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { Col, Row } from 'react-bootstrap'
import PageTitle from '@/components/PageTitle'

const ForgotPassword = () => {

  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepperInstance = useBSStepper(stepperRef)

  useEffect(() => {
    stepperInstance?.to(2)
    stepperInstance?.to(1)
  }, [stepperInstance])

  return (
    <>
      <PageTitle title='Forgot Password' />

      <div id="stepper" ref={stepperRef} className="bs-stepper stepper-outline position-relative col-sm-10 col-lg-5 d-flex m-auto vh-100">

        <div className="bs-stepper-header position-absolute top-0 start-50 translate-middle-x" role="tablist">

          <div className="step" data-target="#step-1">
            <div className="text-center">
              <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
                <span className="bs-stepper-circle">1</span>
              </button>
            </div>
          </div>

          <div className="step" data-target="#step-2">
            <div className="text-center">
              <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
                <span className="bs-stepper-circle">2</span>
              </button>
            </div>
          </div>

          <div className="step" data-target="#step-3">
            <div className="text-center">
              <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
                <span className="bs-stepper-circle">3</span>
              </button>
            </div>
          </div>

          <div className="step" data-target="#step-4">
            <div className="text-center">
              <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger4" aria-controls="step-4">
                <span className="bs-stepper-circle">4</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bs-stepper-content d-flex justify-content-center m-auto w-100">
          <div className="w-100">
            <Row className="g-4 m-auto">

              <Col lg={10} className="m-auto">

                <Step1 stepperInstance={stepperInstance} />

                <Step2 stepperInstance={stepperInstance} />

                <Step3 stepperInstance={stepperInstance} />

                <Step4 />

              </Col>

            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword