import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import TeamMembers from './components/TeamMembers'
import Achievements from './components/Achievements'
import PageTitle from '@/components/PageTitle'

const Team = () => {
  return (
    <>
      <PageTitle title='Team' />

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

        <TeamMembers />

        <Achievements />
      </main>

      <Footer1 />
    </>
  )
}

export default Team