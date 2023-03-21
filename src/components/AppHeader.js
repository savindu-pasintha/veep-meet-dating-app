import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const AppHeader = ({ handleChangeTitle }) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky">
      <CContainer fluid>
        <CHeaderToggler
          className=""
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          {sidebarShow ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </CHeaderToggler>

        <CHeaderNav className="d-none d-md-flex me-auto p-0">
          <CNavItem>
            <CNavLink
              onClick={(e) => handleChangeTitle('Dashboard')}
              className={"font-7 m-0"}
              to="/dashboard"
              component={NavLink}
            >
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              onClick={(e) => handleChangeTitle('Contact Us')}
              className={"font-7 m-0"}
              to="/dashboard/contact-us"
              component={NavLink}
            >
              Contact Us
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              onClick={(e) => handleChangeTitle('Complaints & Support')}
              className={"font-7 m-0"}
              to="/dashboard/complaints-and-supports"
              component={NavLink}
            >
              Complaints & Support
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
