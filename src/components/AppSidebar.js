import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../assets/veep-meep/sidebar_logo.png'
import Logo2 from '../assets/veep-meep/App-Icon.png'

import {AiOutlineClose} from 'react-icons/ai'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { Link } from 'react-router-dom'

const AppSidebar = ({ handleChangeTitle }) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      // unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex " to="/" style={{ minHeight: '5rem' }}>
        <div className="my">
          <Link to="/">
            <img src={Logo2} alt="veep meep logo" width={40} height={40} />
          </Link>
        </div>
      </CSidebarBrand>

      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav handleChangeTitle={(val) => handleChangeTitle(val)} items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      /> */}
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
