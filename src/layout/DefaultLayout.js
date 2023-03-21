import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuthUserdata, getToken, useAuthLocalStorage } from 'src/utils/Utils'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

const DefaultLayout = () => {
  //for unauthorized access
  const dispatch = useDispatch()
  const userAuthReduxStore = useSelector((state) => state.signInToken)
  const navigate = useNavigate()
  const [title, setTitle] = useState('')

  const loadCorrectTitle = (val) => {
    if (val && val.includes('Set')) {
      val = 'Subscriptions | ' + val
      setTitle(val)
    } else if (
      val &&
      (val.includes('Admin') ||
        val.includes('Veepers') ||
        val.includes('Businesses') ||
        val.includes('Biz'))
    ) {
      val = 'Users | ' + val
      setTitle(val)
    } else if (
      val &&
      (val.includes('Transaction List') || val.includes('Receipts') || val.includes('Refunds'))
    ) {
      val = 'Transaction | ' + val
      setTitle(val)
    } else if (
      val &&
      (val.includes('Load Promo Code') || val.includes('Promo Codes Issued List'))
    ) {
      val = 'Promo | ' + val
      setTitle(val)
    } else if (val && (val.includes('Send') || val.includes('List'))) {
      val = 'Notification | ' + val
      setTitle(val)
    } else {
      setTitle(val)
    }
  }

  

  useEffect(() => {
    if (useAuthLocalStorage() == false && userAuthReduxStore == false) {
      navigate('/')
    }
  }, [])

  return (
    <div>
      <AppSidebar
        handleChangeTitle={(val) => {
          loadCorrectTitle(val)
        }}
      />
      <div className="wrapper d-flex flex-column min-vh-100 ">
        <AppHeader
          handleChangeTitle={(val) => {
            loadCorrectTitle(val)
          }}
        />
        <div className="body flex-grow-1 px-0">
          <AppContent title={title} />{' '}
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
