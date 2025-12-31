import { lazy, Suspense, useEffect, type ReactNode } from 'react'
import { BsPersonCircle } from 'react-icons/bs' 
import { Button, Container, type ButtonProps } from 'react-bootstrap'

import LogoBox from '@/components/LogoBox'
import { type AppMenuProps } from '@/components/topbar/AppMenu'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler'
import StickyHeader from '@/components/topbar/StickyHeader'
import useToggle from '@/hooks/useToggle'
import { useLaunchModal } from '@/hooks/useLaunchModal'
import LaunchCountdownModal from '@/components/LaunchCountdownModal' 

const FloatingSearch = lazy(() => import('./FloatingSearch'))
const SearchInput = lazy(() => import('./SearchInput'))
const ThemeToggleDropdown = lazy(() => import('@/components/topbar/ThemeToggleDropdown'))
const AppMenu = lazy(() => import('@/components/topbar/AppMenu'))
const ShoppingCartOffcanvas = lazy(() => import('@/components/topbar/ShoppingCartOffcanvas'))

type TopNavigationBarProps = {
  containerFluid?: boolean
  showSignUp?: boolean
  showLogin?: boolean
  showSearchInput?: boolean
  showShoppingCart?: boolean
  showFloatingSearch?: boolean
  showBuyNow?: boolean
  hideThemeToggler?: boolean
  darkButton?: { text: string, size?: ButtonProps['size'] }
  navClassName?: string
  menuProps?: Omit<AppMenuProps, "mobileMenuOpen">,
  children?: ReactNode,
}

const TopNavigationBar = ({ showLogin, showSignUp, showSearchInput, showShoppingCart, showBuyNow, navClassName, hideThemeToggler, darkButton, showFloatingSearch, menuProps, containerFluid, children, ...props }: TopNavigationBarProps) => {
  const { isTrue: isMenuOpen, toggle: toggleMenu, setTrue: openMenu, setFalse: closeMenu } = useToggle(false)
  const { showModal, openModal, closeModal } = useLaunchModal()

  // Ensure the navbar menu is open on desktop widths and collapsible on smaller screens.
  useEffect(() => {
    const syncMenuState = () => {
      if (window.innerWidth >= 1200) {
        openMenu()
      } else {
        closeMenu()
      }
    }

    syncMenuState()
    window.addEventListener('resize', syncMenuState)
    return () => window.removeEventListener('resize', syncMenuState)
  }, [openMenu, closeMenu])

  return (
    <StickyHeader className="header-absolute" {...props}>
      {children}
      <nav className={`navbar navbar-expand-xl ${navClassName ?? ''}`}>
        <Container fluid={containerFluid}>

          <LogoBox className='me-0' />

          <Suspense>
            <AppMenu mobileMenuOpen={isMenuOpen} {...menuProps} />
          </Suspense>

          <ul className="nav align-items-center ms-sm-2">

            <Suspense>
              {!hideThemeToggler && <ThemeToggleDropdown />}
            </Suspense>

            {showSignUp && <li className="nav-item me-2 d-none d-sm-block">
              <a href="#" onClick={openModal} className="btn btn-sm btn-light mb-0">
                <BsPersonCircle className="me-1" />
                Sign up
              </a>
            </li>}

            {showLogin && <li className="nav-item d-none d-sm-block">
              <a href="#" onClick={openModal} className="btn btn-sm btn-primary mb-0">Login</a>
            </li>}

 

            {showFloatingSearch &&
              <Suspense>
                <FloatingSearch />
              </Suspense>
            }

            {darkButton &&
              <li className="nav-item d-none d-sm-block ms-2">
                <Button variant='dark' size={darkButton.size} className="btn mb-0">{darkButton.text}</Button>
              </li>
            }

            {showSearchInput &&
              <Suspense>
                <SearchInput />
              </Suspense>
            }

            {showShoppingCart && (
              <Suspense>
                <ShoppingCartOffcanvas />
              </Suspense>
            )}

            <li className="nav-item">
              <MobileNavbarToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </li>

          </ul>
        </Container>
      </nav>

      <LaunchCountdownModal show={showModal} onHide={closeModal} />
    </StickyHeader>
  )
}

export default TopNavigationBar