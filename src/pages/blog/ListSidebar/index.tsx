import PageTitle from '@/components/PageTitle'
import BlogList from "./components/BlogList"
import Hero from "./components/Hero"

const ListSidebar = () => {
  return (
    <>
      <PageTitle title='Blog List Sidebar' />

      <Hero />

      <BlogList />
    </>
  )
}

export default ListSidebar