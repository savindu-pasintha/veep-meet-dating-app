import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import {BiLogOutCircle} from 'react-icons/bi'
import { CBadge } from '@coreui/react'
import { useDispatch } from 'react-redux'

export const AppSidebarNav = ({ items, handleChangeTitle }) => {
  const  dispatch=useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const navLink = (name, icon, badge, title) => {
    return (
      <>
        {icon && icon}
        <span className="font-3" onClick={(e) => handleChangeTitle(name)}>
          {' '}
          {name && name}
        </span>
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component
      style={{paddingTop:20}}

        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}

        key={index}

        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }
  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item
    const Component = component
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon, '')}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index, ''),
        )}
      </Component>
    )
  }

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
      <div style={{ paddingTop: 40 }}  className="d-flex">
        <p
          className="font-3 mx-2 louout_hover cursor"
          onClick={(e) => {
            window.localStorage.clear()
           dispatch({ type: 'setToken', signInToken: null })
            navigate("/")
          }}
        >
        <BiLogOutCircle className='m-1' />
          Logout
        </p>
        <CBadge className="ms-auto"></CBadge>
      </div>
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
