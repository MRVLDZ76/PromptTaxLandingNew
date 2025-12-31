import { BsPlusLg, BsThreeDots } from 'react-icons/bs'
import { Link, useOutletContext } from 'react-router-dom'

import type { OutletContextType } from '@/layouts/AccountLayout/types'
import PageHeading from '../components/PageHeading'
import ActivePlanCard from './components/ActivePlanCard'
import { savedPaymentMethodsData, transactionHistoryData } from './data'
import PaymentMethodCard from './components/PaymentMethodCard'
import TransactionHistoryTableRow from './components/TransactionHistoryTableRow'
import { FaSearch } from 'react-icons/fa'
import { Card, CardBody, CardHeader, Col, Form, FormControl, Row } from 'react-bootstrap'
import PageTitle from '@/components/PageTitle'

const PaymentDetails = () => {

  const { toggleOffcanvas } = useOutletContext<OutletContextType>()

  return (
    <>
      <PageTitle title='Payment Details' />

      <PageHeading heading='Payment Details' toggleOffcanvas={toggleOffcanvas} />

      <ActivePlanCard />

      <div className="text-center my-5"><BsThreeDots /></div>

      <Card className="bg-transparent rounded-3">
        <CardHeader className="bg-transparent border-bottom d-sm-flex justify-content-between px-0 pt-0">
          <h5 className="card-header-title mb-2 mb-sm-0">Saved payment methods</h5>
          <Link to='' className="btn btn-primary mb-0 icons-center" data-bs-toggle="modal" data-bs-target="#addcard"><BsPlusLg className="me-2" />Add new card</Link>
        </CardHeader>
        <CardBody className="px-0 mt-3 vstack gap-4">

          {savedPaymentMethodsData.map((method, idx) => <PaymentMethodCard {...method} key={idx} />)}

        </CardBody>
      </Card>

      <div className="text-center my-5"><BsThreeDots /></div>

      <Card className="bg-transparent rounded-3">
        <CardHeader className="bg-transparent border-bottom px-0 pt-0">
          <h5 className="card-header-title mb-0">Transition history</h5>
        </CardHeader>
        <CardBody className="px-0 mt-3">
          <Row className="g-3 align-items-center justify-content-between mb-4">
            <Col md={8}>
              <Form className="rounded position-relative">
                <FormControl className="pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                  <FaSearch size={20} className='mb-1' />
                </button>
              </Form>
            </Col>
            <Col md={3}>
              <Form>
                <select className="form-select z-index-9 bg-transparent">
                  <option>Sort by</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </Form>
            </Col>
          </Row>
          <div className="table-responsive border-0">
            <table className="table align-middle p-4 mb-0 table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0 text-white rounded-start">Reference</th>
                  <th scope="col" className="border-0 text-white">Payment method</th>
                  <th scope="col" className="border-0 text-white">Status</th>
                  <th scope="col" className="border-0 text-white">Amount</th>
                  <th scope="col" className="border-0 text-white">Date</th>
                  <th scope="col" className="border-0 text-white rounded-end">Action</th>
                </tr>
              </thead>
              <tbody>

                {transactionHistoryData.map((transaction, idx) => <TransactionHistoryTableRow {...transaction} key={idx} />)}

              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </>

  )
}

export default PaymentDetails