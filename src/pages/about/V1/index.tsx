import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import Video from './components/Video'
import Counter from './components/Counter'
import About from './components/About'
import CTA from './components/CTA'
import Team from './components/Team'
import PageTitle from '@/components/PageTitle'

const AboutV1 = () => {
    return (
        <>
      <PageTitle title='About v.1' />

            <TopNavigationBar
                menuProps={{
                    showContactUs: true,
                    showProductLinks: true,
                    ulClassName: 'mx-auto'
                }}
                showSignUp
                showBuyNow
                data-bs-theme='dark'
            />
            <main>
                <Hero/>

                <Video/>

                <Counter/>

                <About/>

                <CTA/>

                <Team/>
            </main>

            <Footer1/>
        </>
    )
}

export default AboutV1