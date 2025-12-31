import { Navigate, Route, Routes, type RouteProps } from 'react-router-dom'

import AccountLayout from '@/layouts/AccountLayout'
import AuthLayout from '@/layouts/AuthLayout'
import BlogLayout from '@/layouts/BlogLayout'
import DefaultLayout from '@/layouts/DefaultLayout'
import ShopLayout from '@/layouts/ShopLayout'

import { accountRoutes, appRoutes, authRoutes, blogRoutes, shopRoutes } from '@/routes/index'

import { useAuthContext } from '@/states/useAuthContext'

const AppRouter = (props: RouteProps) => {

  const { isAuthenticated } = useAuthContext()

  return (
    <Routes>

      {(appRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<DefaultLayout {...props}>{route.element}</DefaultLayout>} />
      ))}

      {(authRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<AuthLayout {...props}>{route.element}</AuthLayout>} />
      ))}

      {(blogRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<BlogLayout {...props}>{route.element}</BlogLayout>} />
      ))}

      {(shopRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<ShopLayout {...props}>{route.element}</ShopLayout>} />
      ))}

      <Route path="/account" element={<AccountLayout />}>
        {(accountRoutes || []).map((route, idx) => (
          <Route key={idx + route.name} path={route.path} element={
            isAuthenticated ?
              route.element :
              <Navigate
                to={{
                  pathname: '/auth/sign-in',
                  search: 'redirectTo=' + route.path,
                }}
              />
          } />
        ))}
      </Route>

    </Routes>
  )
}

export default AppRouter
