import React, { Suspense, useEffect, useState } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { CContainer, CHeaderDivider, CSpinner } from '@coreui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CiCircleRemove } from 'react-icons/ci'
import '../scss/custom-styles.css'
import {
  currentDate,
  CustomDatePicker,
  CustomFromToDatePicker,
  CustomFromToDatePickerForAppContent,
} from './dateRanger/CustomDatePicker'
import { AlertBox } from './alertBox/AlertBox'
import { DatePickerUserChangeDateFormatedForThePassAPI } from 'src/utils/Utils'
import dayjs from 'dayjs'

const AppContent = ({ title }) => {
  const location = useLocation()
  const path = location?.pathname
  const [isSearching, setIsSearching] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [pageTitle, setPageTitle] = useState('')
  const [fromDate, setFromDate] = useState(DatePickerUserChangeDateFormatedForThePassAPI(dayjs(currentDate('01'))))
  const [toDate, setToDate] = useState(DatePickerUserChangeDateFormatedForThePassAPI(dayjs(currentDate())))

  const methodForPageTitile = () => {
    if (path == '/dashboard/user/businesses') {
      setPageTitle('Users | Businesses')
      document.title = 'veep meep | Admin Panel - Businesses'
    }
    if (path == '/dashboard/user/veepers') {
      setPageTitle('Users | Veepers')
      document.title = 'veep meep | Admin Panel - Veepers'
    }
    if (path == '/dashboard/user/admin-manager') {
      setPageTitle('Users | Admin Manager')
      document.title = 'veep meep | Admin Panel - Admin Manager'
    }
    if (path == '/dashboard/user/pre-users') {
      setPageTitle('Users | Pre Users')
      document.title = 'veep meep | Admin Panel - Pre Users'
    }
    if (path == '/dashboard/subscription/veeper-free-duration') {
      setPageTitle('Subscriptions | Set Veeper Free Duration')
      document.title = 'veep meep | Admin Panel - Set Veeper Free Duration'
    }
    if (path == '/dashboard/subscription/veeper-peach-price') {
      setPageTitle('Subscriptions | Set Veeper Peach Price')
      document.title = 'veep meep | Admin Panel - Set Veeper Peach Price'
    }
    if (path == '/dashboard/subscription/veeper-mango-price') {
      setPageTitle('Subscriptions | Set Veeper Mango Price')
      document.title = 'veep meep | Admin Panel - Set Veeper Mango Price'
    }
    if (path == '/dashboard/subscription/biz-free-duration') {
      setPageTitle('Subscriptions | Set Biz Free Duration')
      document.title = 'veep meep | Admin Panel - Set Biz Free Duration'
    }
    if (path == '/dashboard/subscription/biz-potato-duration') {
      setPageTitle('Subscriptions | Set Biz Potato Price')
      document.title = 'veep meep | Admin Panel - Set Biz Potato Price'
    }
    if (path == '/dashboard/subscription/biz-pumpkin-price') {
      setPageTitle('Subscriptions | Set Biz Pumpkin Price')
      document.title = 'veep meep | Admin Panel - Set Biz Pumpkin Price'
    }
    if (path == '/dashboard/transaction-info/list') {
      setPageTitle('Transactional Info | List')
      document.title = 'veep meep | Admin Panel - Transactional List'
    }
    if (path == '/dashboard/transaction-info/reciept') {
      setPageTitle(<div className='d-block w-100 p-0 m-0'><p className='font_pageTitle p-0 m-0'>Transactional Info | Receipt</p></div>)
      document.title = 'veep meep | Admin Panel - Transactional Receipt'
    }
    if (path == '/dashboard/transaction-info/reciepts') {
      setPageTitle(<div className='d-block w-100 p-0 m-0'><p className='font_pageTitle p-0 m-0'>Transactional Info | Receipts</p></div>)
      document.title = 'veep meep | Admin Panel - Transactional Receipts'
    }
    if (path == '/dashboard/transaction-info/refunds') {
      setPageTitle(<div className='d-block w-100 p-0 m-0'><p className='font_pageTitle p-0 m-0'>Transactional Info |  Refunds</p><p className='font_pageTitleSub pt-1  m-0'> 2022 | MTD | $50.00 </p></div>)
      document.title = 'veep meep | Admin Panel - Refunds'
    }
    if(path == "/dashboard/transaction-info/credit-note"){
      setPageTitle(<div className='d-block w-100 p-0 m-0'><p className='font_pageTitle p-0 m-0'>Transactional Info |  Credit Note</p></div>)
   
      document.title = 'veep meep | Admin Panel - Credit Note'
    }
    if (path == '/dashboard/promo/code') {
      setPageTitle('Promo | Load Promo Code')
      document.title = 'veep meep | Admin Panel - Load Promo Code'
    }
    if (path == '/dashboard/promo/issued-list') {
      setPageTitle('Promo | Codes Issued List')
      document.title = 'veep meep | Admin Panel - Promo Codes Issued List'
    }
    if (path == '/dashboard/notification/send') {
      setPageTitle('Notification | Send')
      document.title = 'veep meep | Admin Panel - Notification Send'
    }
    if (path == '/dashboard/notification/list') {
      setPageTitle('Notification | List')
      document.title = 'veep meep | Admin Panel - Notification List'
    }
    if (path == '/dashboard/our-story') {
      setPageTitle('Our Story')
      document.title = 'veep meep | Admin Panel - Our Story'
    }
    if (path == '/dashboard/technical-update') {
      setPageTitle('Technical Update')
      document.title = 'veep meep | Admin Panel - Technical Update'
    }
    if (path == '/dashboard/activity-log') {
      setPageTitle('Activity Log')
      document.title = 'veep meep | Admin Panel - Activity Log'
    }
    if (path == '/dashboard') {
      setPageTitle('Dashboard')
      document.title = 'veep meep | Admin Panel - Dashboard'
    }
    if (path == '/dashboard/contact-us') {
      setPageTitle('Contact Us')
      document.title = 'veep meep | Admin Panel - Contact Us'
    }
    if (path == '/dashboard/complaints-and-supports') {
      setPageTitle('Complaints & Support')
      document.title = 'veep meep | Admin Panel - Complaints & Support'
    }

    if (path == '/dashboard/user/veeper-profile') {
      setPageTitle('Veeper Profile')
      document.title = 'veep meep | Admin Panel - Veeper Profile'
    }

    if (path == '/dashboard/user/biz-profile') {
      setPageTitle('Biz Profile')
      document.title = 'veep meep | Admin Panel - Biz Profile'
    }

   
  }

  useEffect(() => {
    methodForPageTitile()
  }, [path])

  return (
    <div className="px-0 ">
      <div className="row pt-3 px-0 m-0">
        {[
          '/dashboard/user/businesses',
          '/dashboard/user/veepers',
          '/dashboard/transaction-info/list',
          '/dashboard/transaction-info/refunds',
          '/dashboard/promo/issued-list',
          '/dashboard/notification/list',
          '/dashboard/complaints-and-supports',
          '/dashboard/activity-log',
          '/dashboard/technical-update',
          '/dashboard/user/pre-users',
          "/dashboard/transaction-info/reciepts",
          
        ].includes(path) ? (
          <>
            <div className="col-md-5 com-xs-12 ">
              <p className="font_pageTitle mx-3 mt-3 d-flex">{pageTitle}</p>
            </div>
            <div className="col-md-7 com-xs-12  p-0 mx-0 my-2">
              <CustomFromToDatePickerForAppContent getFrom={(e)=>{ 
              if(e && e["$d"])
                setFromDate(DatePickerUserChangeDateFormatedForThePassAPI(e))
            }}

              getTo={(e)=>{ 
                if(e && e["$d"])
                setToDate(DatePickerUserChangeDateFormatedForThePassAPI(e))
              }}
              />
            </div>
          </>
        ) : (
          <div className="col-md-12 com-xs-12 ">
            <p className="font_pageTitle mx-3 mt-3">{pageTitle}</p>
          </div>
        )}
        {false && (
          <div className="col-md-6 com-xs-12 p-0 m-0 py-2">
            <div className="row d-flex">
              <button type="button " className="mx-0 py-0 print_button" style={{ width: 'auto' }}>
                Print
              </button>

              <div className="search_input_box d-flex mx-2 " style={{ width: 'auto' }}>
                <input
                  value={searchVal}
                  type="text"
                  placeholder="Search"
                  className="search_input"
                  style={{ width: 'auto' }}
                  onFocus={(e) => {
                    setIsSearching(true)
                  }}
                  onChange={(e) => {
                    setSearchVal(e.target.val)
                  }}
                />
                <div className="my-auto">
                  {isSearching == false ? (
                    <AiOutlineSearch
                      style={{
                        width: '20px',
                        height: '20px',
                        fontSize: '20px',
                        padding: '0px',
                        margin: '0px',
                      }}
                    />
                  ) : (
                    <CiCircleRemove
                      onClick={(e) => {
                        setSearchVal('')
                      }}
                    />
                  )}
                </div>
              </div>
            </div>{' '}
          </div>
        )}
      </div>
      <div className="mt-0 w-100 h-100" style={{ borderBottom: '1px solid #D8D5D5' }}>
        {' '}
      </div>
      <AlertBox />
      <Suspense
        fallback={
          <div className="row p-0 m-0">
            <div className="col-12 mx-auto w-auto">
              <CSpinner color="primary" style={{ top: '50%', position: 'absolute' }} />
            </div>
          </div>
        }
      >
        <Outlet context={{fromDate: fromDate,toDate: toDate}} />
      </Suspense>
    </div>
  )
}

export default React.memo(AppContent)
