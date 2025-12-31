import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import Counter from './components/Counter'
import Value from './components/Value'
import JobList from './components/JobList'
import CTA from './components/CTA'
import PageTitle from '@/components/PageTitle'

const Career = () => {
  return (
    <>
      <PageTitle title='Career' />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showProductLinks: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        showBuyNow
      />
      <main>
        <Hero />

        <Counter />

        <Value />

        <JobList />

        <CTA />
      </main>
      <Footer1 />

    </>
  )
}

export default Career