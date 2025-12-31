import PageTitle from '@/components/PageTitle'
import BlogDetails from "./components/BlogDetails"
import RelatedBlogs from "./components/RelatedBlogs"

const SingleV1 = () => {
  return (
    <>
      <PageTitle title='Blog Single v.1' />

      <BlogDetails />

      <RelatedBlogs />
    </>
  )
}

export default SingleV1