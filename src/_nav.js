import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Users',
    to: '/dashboard/user',
    icon: '',
    items: [
      {
        component: CNavItem,
        name: 'Admin Manager',
        to: '/dashboard/user/admin-manager',
        icon: '',
      },
      {
        component: CNavItem,
        name: 'Veepers',
        to: '/dashboard/user/veepers',
      },
      {
        component: CNavItem,
        name: 'Businesses',
        to: '/dashboard/user/businesses',
      },
      {
        component: CNavItem,
        name: 'Pre Users',
        to: '/dashboard/user/pre-users',
      },

    ],
  },
  {
    component: CNavGroup,
    name: 'Subscriptions',
    to: '/dashboard/subscriptions',
    icon: '',
    items: [
      {
        component: CNavItem,
        name: 'Set Veeper Free Duration',
        to: '/dashboard/subscription/veeper-free-duration',
      },
      {
        component: CNavItem,
        name: 'Set Veeper Peach Price',
        to: '/dashboard/subscription/veeper-peach-price',
      },
      {
        component: CNavItem,
        name: 'Set Veeper Mango Price',
        to: '/dashboard/subscription/veeper-mango-price',
      },

      {
        component: CNavItem,
        name: 'Set Biz Free Duration',
        to: '/dashboard/subscription/biz-free-duration',
      },

      {
        component: CNavItem,
        name: 'Set Biz Potato Price',
        to: '/dashboard/subscription/biz-potato-duration',
      },
      {
        component: CNavItem,
        name: 'Set Biz Pumpkin Price',
        to: '/dashboard/subscription/biz-pumpkin-price',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Transactional Info',
    to: '/dashboard/transaction-info',
    icon: '',
    items: [
      {
        component: CNavItem,
        name: 'Transactional List',
        to: '/dashboard/transaction-info/list',
        icon: '',
      },
      {
        component: CNavItem,
        name: 'Receipts',
        to: '/dashboard/transaction-info/reciepts',
      },
      {
        component: CNavItem,
        name: 'Refunds',
        to: '/dashboard/transaction-info/refunds',
      },
      {
        component: CNavItem,
        name: 'Credit Note',
        to: '/dashboard/transaction-info/credit-note',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Promo Codes',
    to: '/dashboard/promo',
    icon: '',
    items: [
      {
        component: CNavItem,
        name: 'Load Promo Code',
        to: '/dashboard/promo/code',
        icon: '',
      },
      {
        component: CNavItem,
        name: 'Promo Codes Issued List',
        to: '/dashboard/promo/issued-list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    to: '/dashboard/notification',
    icon: '',
    items: [
      {
        component: CNavItem,
        name: 'Send',
        to: '/dashboard/notification/send',
        icon: '',
      },
      {
        component: CNavItem,
        name: 'List',
        to: '/dashboard/notification/list',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Our Story',
    to: '/dashboard/our-story',
    icon: '',

  },
  {
    component: CNavItem,
    name: 'Technical Update',
    to: '/dashboard/technical-update',
    icon: '',
  },
  {
    component: CNavItem,
    name: 'Activity Log',
    to: '/dashboard/activity-log',
    icon: '',
  },
]

export default _nav
