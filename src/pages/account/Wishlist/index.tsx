import { Fragment } from 'react'
import { useOutletContext } from 'react-router-dom'

import type { OutletContextType } from '@/layouts/AccountLayout/types'
import PageHeading from '../components/PageHeading'
import WishlistTableRow from './components/WishlistTableRow'
import { wishlistItems } from './data'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap'
import PageTitle from '@/components/PageTitle'

const Wishlist = () => {
  const { toggleOffcanvas } = useOutletContext<OutletContextType>()

  return (
    <>
      <PageTitle title='Wishlist' />

      <PageHeading heading='Wishlist' toggleOffcanvas={toggleOffcanvas} />

      <Card className="bg-transparent">
        <CardHeader className="bg-transparent border-bottom d-flex justify-content-between align-items-center p-0 pb-3">
          <CardTitle as={"h6"} className="mb-0">Recently added</CardTitle>
          <span>{wishlistItems.length} Items</span>
        </CardHeader>
        <CardBody className="p-0 pt-5">

          {wishlistItems.map((item, idx) => (
            <Fragment key={idx}>
              <WishlistTableRow {...item} />
              <hr className="my-5" />
            </Fragment>
          ))}

        </CardBody>
        <CardFooter className="bg-transparent text-end p-0">
          <button className="btn btn-light border mb-0">Continue shopping</button>
        </CardFooter>
      </Card>
    </>
  )
}

export default Wishlist