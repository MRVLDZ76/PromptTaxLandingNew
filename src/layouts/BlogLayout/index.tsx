import { lazy, Suspense, type ReactNode } from 'react'
import Preloader from '@/components/Preloader'
import ErrorBoundary from '@/components/ErrorBoundary'

const TopNavigationBar = lazy(() => import('@/components/topbar/TopNavigationBar'))
const Footer9 = lazy(() => import('@/components/footer/Footer1'))
const loading = () => <div></div>

const BlogLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div></div>}>
        <TopNavigationBar menuProps={{ showContactUs: true, showProductLinks: true, ulClassName: 'mx-auto' }} showSignUp showBuyNow />
      </Suspense>

      <main>
        <Suspense fallback={<Preloader />}>
          {children}
        </Suspense>
      </main>

      <Suspense fallback={loading()}>
        <Footer9 />
      </Suspense>
    </ErrorBoundary>
  )
}

export default BlogLayout