import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { Collapse, Dropdown, DropdownToggle } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa6'

import { findAllParent, findMenuItem, getAppMenuItems, getMenuItemFromURL } from '@/helpers/menu'
import type { MenuItemType } from '@/types/menu'
import { basePath } from '@/states/constants'

const DemosMenuDropdown = lazy(() => import('./DemosMenuDropdown'))
const PagesMenuDropdown = lazy(() => import('./PagesMenuDropdown'))
const ResourcesMenuDropdown = lazy(() => import('./ResourcesMenuDropdown'))
const PortfolioMenuDropdown = lazy(() => import('./PortfolioMenuDropdown'))
const MegaMenuDropdown = lazy(() => import('./MegaMenuDropdown'))

export type AppMenuProps = {
  mobileMenuOpen: boolean
  showMegaMenu?: boolean
  showResourceMenu?: boolean
  showContactUs?: boolean
  showDocs?: boolean
  showProductLinks?: boolean
  ulClassName?: string
}

const loading = () => <div></div>

const AppMenu = ({
  mobileMenuOpen,
  ulClassName,
  showMegaMenu,
  showResourceMenu,
  showContactUs,
  showDocs,
  showProductLinks
}: AppMenuProps) => {

  const { pathname } = useLocation()
  const [activeMenuItems, setActiveMenuItems] = useState<string[]>([])

  const menuItems: MenuItemType[] = getAppMenuItems()
  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    const trimmedURL = pathname?.replaceAll(basePath !== '' ? basePath : '', '/')
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)

    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)])
      }
    }
  }, [pathname, menuItems])

  useEffect(() => {
    activeMenu()
  }, [pathname, menuItems])

  return (
    <Collapse in={mobileMenuOpen} className='navbar-collapse'>
      <div>

        <ul className={`navbar-nav navbar-nav-scroll ${ulClassName ?? ''}`}>

          {showProductLinks ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tax-prep-1040">
                  1040 Tax Prep
                </Link>
              </li>
              <Dropdown as="li" className="nav-item">
                <DropdownToggle
                  as={Link}
                  to=""
                  variant='link'
                  className="nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle"
                  data-bs-auto-close="outside"
                  aria-haspopup="true"
                >
                  Crypto
                  <FaAngleDown size={12} className='ms-1' />
                </DropdownToggle>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/crypto-tax">
                      Crypto Tax
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/crypto-bundle">
                      Crypto Bundle
                    </Link>
                  </li>
                </ul>
              </Dropdown>
              <li className="nav-item">
                <Link className="nav-link" to="/k1-forms">
                  K-1 Forms
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog/grid">
                  Blog
                </Link>
              </li>
            </>
          ) : (
            <>
              <Suspense fallback={loading()}>
                <DemosMenuDropdown
                  menuItems={menuItems[0].children!}
                  activeMenuItems={activeMenuItems}
                />
              </Suspense>

              <Suspense fallback={loading()}>
                <PagesMenuDropdown
                  menuItems={menuItems[1].children!}
                  activeMenuItems={activeMenuItems}
                />
              </Suspense>

              {showResourceMenu &&
                <Suspense fallback={loading()}>
                  <ResourcesMenuDropdown />
                </Suspense>
              }

              <Suspense fallback={loading()}>
                <PortfolioMenuDropdown
                  menuItems={menuItems[2].children!}
                  activeMenuItems={activeMenuItems}
                />
              </Suspense>

              {showMegaMenu &&
                <Suspense fallback={loading()}>
                  <MegaMenuDropdown />
                </Suspense>
              }
            </>
          )}

          {showContactUs &&
            <li className="nav-item">
              <Link className="nav-link" to="/contact/v2">
                Contact us
              </Link>
            </li>
          }

          {showDocs &&
            <li className="nav-item">
              <a className="nav-link" href="https://themes.coderthemes.com/mizzle_r/docs" target='_blank'>
                Docs
              </a>
            </li>
          }

        </ul>

      </div>
    </Collapse>
  )
}

export default AppMenu