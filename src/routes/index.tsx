import { lazy } from 'react'
import { type RouteProps } from 'react-router-dom'

// Demo Pages
const ClassicDefault = lazy(() => import('@/pages/demos/ClassicDefault'))
const ProductLanding = lazy(() => import('@/pages/demos/ProductLanding'))
const MobileApp = lazy(() => import('@/pages/demos/MobileApp'))
const FinanceConsulting = lazy(() => import('@/pages/demos/FinanceConsulting'))

// About Pages
const AboutV1 = lazy(() => import('@/pages/about/V1'))
const AboutV2 = lazy(() => import('@/pages/about/V2'))
const AboutV3 = lazy(() => import('@/pages/about/V3'))

// Account Pages
const AccountProfile = lazy(() => import('@/pages/account/Profile'))
const AccountSecurity = lazy(() => import('@/pages/account/Security'))
const AccountNotifications = lazy(() => import('@/pages/account/Notifications'))
const AccountProjects = lazy(() => import('@/pages/account/Projects'))
const AccountPaymentDetails = lazy(() => import('@/pages/account/PaymentDetails'))
const AccountOrderHistory = lazy(() => import('@/pages/account/OrderHistory'))
const AccountWishlist = lazy(() => import('@/pages/account/Wishlist'))
const AccountDeleteProfile = lazy(() => import('@/pages/account/DeleteProfile'))

// Auth Pages
const AuthSignIn = lazy(() => import('@/pages/auth/SignIn'))
const AuthSignUp = lazy(() => import('@/pages/auth/SignUp'))
const AuthForgotPassword = lazy(() => import('@/pages/auth/ForgotPassword'))

// Blog Pages 
const BlogGrid = lazy(() => import('@/pages/blog/Grid'))
const BlogListSidebar = lazy(() => import('@/pages/blog/ListSidebar'))
const BlogSingleV1 = lazy(() => import('@/pages/blog/single/V1'))
const BlogSingleV2 = lazy(() => import('@/pages/blog/single/V2'))
const BlogPostPage = lazy(() => import('@/pages/blog/BlogPostPage'))

// Career Pages
const CareerPage = lazy(() => import('@/pages/career'))
const CareerSingle = lazy(() => import('@/pages/career/Single'))

// Contact Pages
const ContactV1 = lazy(() => import('@/pages/contact/V1'))
const ContactV2 = lazy(() => import('@/pages/contact/V2'))

// Customer Pages
const CustomerStories = lazy(() => import('@/pages/customer/Stories'))
const CustomerStorySingle = lazy(() => import('@/pages/customer/StorySingle'))

// Help Pages
const HelpCenter = lazy(() => import('@/pages/help/Center'))
const HelpDetail = lazy(() => import('@/pages/help/Detail'))

// Other Pages
const Pricing = lazy(() => import('@/pages/other-pages/Pricing'))
const FAQPage = lazy(() => import('@/pages/other-pages/FAQs'))
const NotFound = lazy(() => import('@/pages/other-pages/NotFound'))
const ComingSoon = lazy(() => import('@/pages/other-pages/ComingSoon'))
const TermsNConditions = lazy(() => import('@/pages/other-pages/TermsNConditions'))
const Team = lazy(() => import('@/pages/other-pages/Team'))

// Agency Pages
const AgencyCreative = lazy(() => import('@/pages/demos/agency/Creative'))
const AgencyDigital = lazy(() => import('@/pages/demos/agency/Digital'))
const AgencyDesign = lazy(() => import('@/pages/demos/agency/Design'))
const AgencySEO = lazy(() => import('@/pages/demos/agency/SEO'))

// Portfolio Pages
const PortfolioMasonry = lazy(() => import('@/pages/portfolio/Masonry'))
const PortfolioShowcase = lazy(() => import('@/pages/portfolio/Showcase'))
const PortfolioList = lazy(() => import('@/pages/portfolio/List'))
const PortfolioCaseStudyV1 = lazy(() => import('@/pages/portfolio/case-study/V1'))
const PortfolioCaseStudyV2 = lazy(() => import('@/pages/portfolio/case-study/V2'))

// SaaS Pages
const SaaSV1 = lazy(() => import('@/pages/saas/V1'))
const SaaSV2 = lazy(() => import('@/pages/saas/V2'))
const SaaSV3 = lazy(() => import('@/pages/saas/V3'))
const SaaSV4 = lazy(() => import('@/pages/saas/V4'))
const SaaSV5 = lazy(() => import('@/pages/saas/V5'))
const SaaSFeatures = lazy(() => import('@/pages/saas/Features'))
const SaaSFeatureSingle = lazy(() => import('@/pages/saas/FeatureSingle'))
const SaaSIntegrations = lazy(() => import('@/pages/saas/Integrations'))
const SaaSIntegrationSingle = lazy(() => import('@/pages/saas/IntegrationSingle'))

// Service Pages
const ServiceV1 = lazy(() => import('@/pages/services/V1'))
const ServiceV2 = lazy(() => import('@/pages/services/V2'))
const ServiceSingle = lazy(() => import('@/pages/services/Single'))

// Crypto Bundle Page
const CryptoBundlePage = lazy(() => import('@/pages/crypto-bundle'))

// Shop Pages 
const ShopIndex = lazy(() => import('@/pages/shop/Index'))
const ShopGrid = lazy(() => import('@/pages/shop/Grid'))
const ShopSingle = lazy(() => import('@/pages/shop/Single'))
const ShopCart = lazy(() => import('@/pages/shop/Cart'))
const ShopEmptyCart = lazy(() => import('@/pages/shop/EmptyCart'))
const ShopCheckout = lazy(() => import('@/pages/shop/Checkout'))

// Investor Page
const InvestorPage = lazy(() => import('@/pages/investor'))

// Pool Page
const PoolPage = lazy(() => import('@/pages/pool'))

// Tax Prep Pages
const TaxPreparation1040 = lazy(() => import('@/pages/tax-prep-1040'))


export type RoutesProps = {
  path: RouteProps['path']
  name: string
  element: RouteProps['element']
  exact?: boolean
}


export const accountRoutes: RoutesProps[] = [
  {
    path: '/account/profile',
    name: 'account.profile',
    element: <AccountProfile />
  },
  {
    name: 'account-security',
    path: '/account/security',
    element: <AccountSecurity />,
  },
  {
    name: 'account-notifications',
    path: '/account/notifications',
    element: <AccountNotifications />,
  },
  {
    name: 'account-projects',
    path: '/account/projects',
    element: <AccountProjects />,
  },
  {
    name: 'account-payment-details',
    path: '/account/payment-details',
    element: <AccountPaymentDetails />,
  },
  {
    name: 'account-order-history',
    path: '/account/order-history',
    element: <AccountOrderHistory />,
  },
  {
    name: 'account-wishlist',
    path: '/account/wishlist',
    element: <AccountWishlist />,
  },
  {
    name: 'account-delete-profile',
    path: '/account/delete-profile',
    element: <AccountDeleteProfile />,
  },
]

export const authRoutes: RoutesProps[] = [
  {
    path: '/auth/sign-in',
    name: 'auth.sign-in',
    element: <AuthSignIn />
  },
  {
    path: '/auth/sign-up',
    name: 'auth.sign-up',
    element: <AuthSignUp />
  },
  {
    path: '/auth/forgot-password',
    name: 'auth.forgot-password',
    element: <AuthForgotPassword />
  },
]

export const blogRoutes: RoutesProps[] = [
  {
    path: '/blog/grid',
    name: 'blog.grid',
    element: <BlogGrid />
  },
  {
    name: 'blog-list-sidebar',
    path: '/blog/list-sidebar',
    element: <BlogListSidebar />,
  },
  {
    name: 'blog-single-v1',
    path: '/blog/single/v1',
    element: <BlogSingleV1 />,
  },
  {
    name: 'blog-single-v2',
    path: '/blog/single/v2',
    element: <BlogSingleV2 />,
  },
  {
    name: 'blog-post',
    path: '/blog/:slug',
    element: <BlogPostPage />,
  },
]

export const shopRoutes: RoutesProps[] = [
  {
    path: '/shop/index',
    name: 'shop.index',
    element: <ShopIndex />
  },
  {
    path: '/shop/grid',
    name: 'shop.grid',
    element: <ShopGrid />
  },
  {
    name: 'shop-single',
    path: '/shop/single/:id',
    element: <ShopSingle />,
  },
  {
    name: 'shop-cart',
    path: '/shop/cart',
    element: <ShopCart />,
  },
  {
    name: 'shop-empty-cart',
    path: '/shop/empty-cart',
    element: <ShopEmptyCart />,
  },
  {
    name: 'shop-checkout',
    path: '/shop/checkout',
    element: <ShopCheckout />,
  },
]

const demoRoutes: RoutesProps[] = [
  {
    path: '/demos/classic',
    name: 'demo-classic-default',
    element: <ClassicDefault />,
  },
  {
    path: '/demos/product-landing',
    name: 'demo-product-landing',
    element: <ProductLanding />,
  },
  {
    path: '/demos/mobile-app',
    name: 'demo-mobile-app',
    element: <MobileApp />,
  },
  {
    path: '/demos/finance-consulting',
    name: 'demo-finance-consulting',
    element: <FinanceConsulting />,
  },
]

const aboutRoutes: RoutesProps[] = [
  {
    name: 'about-v1',
    path: '/about/v1',
    element: <AboutV1 />,
  },
  {
    name: 'about-v2',
    path: '/about/v2',
    element: <AboutV2 />,
  },
  {
    name: 'about-v3',
    path: '/about/v3',
    element: <AboutV3 />,
  },
]


const careerRoutes: RoutesProps[] = [
  {
    name: 'about-career',
    path: '/career',
    element: <CareerPage />,
  },
  {
    name: 'about-career-single',
    path: '/career/single',
    element: <CareerSingle />,
  },
]

const contactRoutes: RoutesProps[] = [
  {
    name: 'pages-contact-1',
    path: '/contact/v1',
    element: <ContactV1 />,
  },
  {
    name: 'pages-contact-2',
    path: '/contact/v2',
    element: <ContactV2 />,
  },
]

const customerRoutes: RoutesProps[] = [
  {
    name: 'about-customer-stories',
    path: '/customer/stories',
    element: <CustomerStories />,
  },
  {
    name: 'about-customer-story-single',
    path: '/customer/story-single',
    element: <CustomerStorySingle />,
  },
]

const helpRoutes: RoutesProps[] = [
  {
    name: 'specialty-help-center',
    path: '/help/center',
    element: <HelpCenter />,
  },
  {
    name: 'specialty-help-detail',
    path: '/help/detail',
    element: <HelpDetail />,
  },
]

const otherRoutes: RoutesProps[] = [
  {
    name: 'specialty-pricing',
    path: '/pricing',
    element: <Pricing />,
  },
  {
    name: 'specialty-faqs',
    path: '/faq',
    element: <FAQPage />,
  },
  {
    name: 'specialty-error-404',
    path: '/not-found',
    element: <NotFound />,
  },
  {
    name: 'specialty-coming-soon',
    path: '/coming-soon',
    element: <ComingSoon />,
  },
  {
    name: 'specialty-terms-&-conditions',
    path: '/terms-conditions',
    element: <TermsNConditions />,
  },
  {
    name: 'about-team',
    path: '/team',
    element: <Team />,
  },
]

const agencyRoutes: RoutesProps[] = [
  {
    path: '/demos/agency/creative',
    name: 'demo-creative-agency',
    element: <AgencyCreative />,
  },
  {
    path: '/demos/agency/digital',
    name: 'demo-digital-agency',
    element: <AgencyDigital />,
  },
  {
    path: '/demos/agency/design',
    name: 'demo-design-agency',
    element: <AgencyDesign />,
  },
  {
    path: '/demos/agency/seo',
    name: 'demo-seo-agency',
    element: <AgencySEO />,
  },
]

const portfolioRoutes: RoutesProps[] = [
  {
    path: '/portfolio/masonry',
    name: 'portfolio.masonry',
    element: <PortfolioMasonry />,
  },
  {
    name: 'portfolio-showcase',
    path: '/portfolio/showcase',
    element: <PortfolioShowcase />,
  },
  {
    name: 'portfolio-list',
    path: '/portfolio/list',
    element: <PortfolioList />,
  },
  {
    name: 'portfolio-case-study-v1',
    path: '/portfolio/case-study/v1',
    element: <PortfolioCaseStudyV1 />,
  },
  {
    name: 'portfolio-case-study-v2',
    path: '/portfolio/case-study/v2',
    element: <PortfolioCaseStudyV2 />,
  },
]

const saasRoutes: RoutesProps[] = [
  {
    path: '/k1-forms',
    name: 'k1-forms',
    element: <SaaSV1 />,
  },
  {
    path: '/',
    name: 'home',
    element: <SaaSV2 />,
  },
  {
    path: '/crypto-tax',
    name: 'crypto-tax',
    element: <SaaSV3 />,
  },
  {
    path: '/crypto-bundle',
    name: 'crypto-bundle',
    element: <CryptoBundlePage />,
  },
  {
    path: '/saas/v4',
    name: 'demo-saas-v4',
    element: <SaaSV4 />,
  },
  {
    path: '/saas/v5',
    name: 'demo-saas-v5',
    element: <SaaSV5 />,
  },
  {
    name: 'saas-features',
    path: '/saas/features',
    element: <SaaSFeatures />,
  },
  {
    name: 'saas-feature-single',
    path: '/saas/feature-single',
    element: <SaaSFeatureSingle />,
  },
  {
    name: 'saas-integrations',
    path: '/saas/integrations',
    element: <SaaSIntegrations />,
  },
  {
    name: 'saas-integration-single',
    path: '/saas/integration-single',
    element: <SaaSIntegrationSingle />,
  },
]

const servicesRoutes: RoutesProps[] = [
  {
    name: 'about-services-v1',
    path: '/services/v1',
    element: <ServiceV1 />,
  },
  {
    name: 'about-services-v2',
    path: '/services/v2',
    element: <ServiceV2 />,
  },
  {
    name: 'about-services-single',
    path: '/services/single',
    element: <ServiceSingle />,
  },
]

const investorRoutes: RoutesProps[] = [
  {
    path: '/invest',
    name: 'investor',
    element: <InvestorPage />,
  },
]

const poolRoutes: RoutesProps[] = [
  {
    path: '/pool',
    name: 'pool-manager',
    element: <PoolPage />,
  },
]

const taxPrepRoutes: RoutesProps[] = [
  {
    path: '/tax-prep-1040',
    name: 'tax-prep-1040',
    element: <TaxPreparation1040 />,
  },
]

const initialRoutes: RoutesProps[] = [
  {
    path: '*',
    name: 'all-routes',
    element: <NotFound />,
  },
]

export const appRoutes = [
  ...demoRoutes,
  ...aboutRoutes,
  ...careerRoutes,
  ...contactRoutes,
  ...customerRoutes,
  ...helpRoutes,
  ...otherRoutes,
  ...agencyRoutes,
  ...portfolioRoutes,
  ...saasRoutes,
  ...servicesRoutes,
  ...investorRoutes,
  ...poolRoutes,
  ...taxPrepRoutes,
  ...initialRoutes,  // Wildcard must be last
]
