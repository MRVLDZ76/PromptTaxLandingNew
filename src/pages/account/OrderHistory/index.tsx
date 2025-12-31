import type { OutletContextType } from '@/layouts/AccountLayout/types'
import { Link, useOutletContext } from 'react-router-dom'
import PageHeading from '../components/PageHeading'
import { ordersData } from './data'
import OrderHistoryItem from './components/OrderHistoryItem'
import { Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Form } from 'react-bootstrap'
import { Fragment } from 'react'
import PageTitle from '@/components/PageTitle'

const OrderHistory = () => {

  const { toggleOffcanvas } = useOutletContext<OutletContextType>()

  return (
    <>
      <PageTitle title='Order History' />

      <PageHeading heading='Order history' toggleOffcanvas={toggleOffcanvas} />

      <Card className="bg-transparent">
        <CardHeader className="bg-transparent border-bottom d-flex justify-content-between align-items-center p-0 pb-3">
          <CardTitle as={"h6"} className="mb-0">Your order</CardTitle>
          <Col md={3} className="ms-auto">
            <Form>
              <select className="form-select js-choice" aria-label=".form-select-sm">
                <option>Sort by</option>
                <option defaultChecked>All</option>
                <option>Delivered</option>
                <option>Processing</option>
                <option>Cancelled</option>
              </select>
            </Form>
          </Col>
        </CardHeader>

        <CardBody className="p-0 pt-5">

          {ordersData.map((order, idx) => {
            return (
              <Fragment key={idx}>
                <OrderHistoryItem {...order} key={idx} />
                <hr className="my-5" />
              </Fragment>
            )
          })}

        </CardBody>

        <CardFooter className="bg-transparent text-end p-0">

          <ul className="pagination pagination-primary-soft list-unstyled d-flex justify-content-sm-end flex-wrap mb-0">
            <li className="page-item disabled">
              <Link className="page-link" to="">Prev</Link>
            </li>
            <li className="page-item"><Link className="page-link" to="">1</Link></li>
            <li className="page-item active"><Link className="page-link" to="">2</Link></li>
            <li className="page-item"><Link className="page-link" to="">..</Link></li>
            <li className="page-item"><Link className="page-link" to="">5</Link></li>
            <li className="page-item">
              <Link className="page-link" to="">Next</Link>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </>

  )
}

export default OrderHistory