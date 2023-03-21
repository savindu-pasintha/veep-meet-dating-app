import React from 'react'
import Login from './views/pages/login/Login'


const DashboardPage = React.lazy(()=>import('./views/dashboard/Dashboard'))

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const OurStory = React.lazy(() => import('./views/pages/our-story/OurStory'))

const AdminManager = React.lazy(() => import('./views/pages/user/AdminManager'))
const Veepers = React.lazy(() => import('./views/pages/user/Veepers'))
const Businesses = React.lazy(() => import('./views/pages/user/Bussiness'))
const VeeperProfile  = React.lazy(()=>import('./views/pages/veeper-profile/VeeperProfile'))
const Biz = React.lazy(()=>import("./views/pages/user/Biz"))
const BizProfile = React.lazy(()=>import("./views/pages/biz-profile/BizProfile"))
const PreUsers = React.lazy(()=>import("./views/pages/user/PreUsers"))

const VeeperFreeDuration = React.lazy(() => import('./views/pages/subcriptions/VeeperFreeDuration'))
const VeeperPeachPrice = React.lazy(() => import('./views/pages/subcriptions/VeeperPeachPrice'))
const VeeperMangoPrice = React.lazy(() => import('./views/pages/subcriptions/VeeperMangoPrice'))
const BizFreeDuration = React.lazy(() => import('./views/pages/subcriptions/BizFreeDuration'))
const BizPotatoPrice = React.lazy(() => import('./views/pages/subcriptions/BizPotatoPrice'))
const BizPumpkinPrice = React.lazy(() => import('./views/pages/subcriptions/BizPumpkinPrice'))
const TransactionList = React.lazy(() => import('./views/pages/transaction/TransactionList'))
const TransactionReceipt = React.lazy(() => import('./views/pages/transaction/TransactionReceipt'))
const TransactionRefunds = React.lazy(() => import('./views/pages/transaction/TransactionRefunds'))
const TransactionReceipts = React.lazy(() => import('./views/pages/transaction/TransactionReceipts'))

const PromoCode = React.lazy(() => import('./views/pages/promo/PromoCode'))
const PromoCodeIssuedList = React.lazy(() => import('./views/pages/promo/PromoCodeIssuedList'))

const NotificationSend = React.lazy(() => import('./views/pages/notification/NotificationSend'))
const NotificationList = React.lazy(() => import('./views/pages/notification/NotificationList'))
const TechnicalUpdate = React.lazy(() => import('./views/pages/technical-update/TechnicalUpdate'))

const ContactUs = React.lazy(() => import('./views/pages/contact-us/ContactUs'))
const ActivityLog = React.lazy(() => import('./views/pages/activity-log/ActivityLog'))
const ComplaintsAndSupport = React.lazy(() =>
  import('./views/pages/Compalints-and-support/ComplaintsAndSupport'),
)
const CreaditNote = React.lazy(()=>import('./views/pages/creditNote/CreaditNote'))

const routes = [
  { path: '/dashboard/', name: '', element: <DashboardPage />, exact: true },
  { path: '/dashboard/our-story', name: '', element: <OurStory />, exact: true },
  { path: '/dashboard/user/admin-manager', name: '', element: <AdminManager />, exact: true },
  { path: '/dashboard/user/veepers', name: '', element: <Veepers />, exact: true },
  { path: '/dashboard/user/veeper-profile', name: '', element: <VeeperProfile />, exact: true },
  {path:'/dashboard/user/pre-users',name: '',element: <PreUsers />, exact: true },
 
  { path: '/dashboard/user/businesses', name: '', element: <Businesses />, exact: true },
  { path: '/dashboard/user/biz', name: '', element: <Biz />, exact: true },
  { path: '/dashboard/user/biz-profile', name: '', element: <BizProfile />, exact: true },
 
  {
    path: '/dashboard/subscription/veeper-free-duration',
    name: '',
    element: <VeeperFreeDuration />,
    exact: true,
  },
  {
    path: '/dashboard/subscription/veeper-peach-price',
    name: '',
    element: <VeeperPeachPrice />,
    exact: true,
  },
  {
    path: '/dashboard/subscription/veeper-mango-price',
    name: '',
    element: <VeeperMangoPrice />,
    exact: true,
  },
  {
    path: '/dashboard/subscription/biz-free-duration',
    name: '',
    element: <BizFreeDuration />,
    exact: true,
  },
  {
    path: '/dashboard/subscription/biz-potato-duration',
    name: '',
    element: <BizPotatoPrice />,
    exact: true,
  },
  {
    path: '/dashboard/subscription/biz-pumpkin-price',
    name: '',
    element: <BizPumpkinPrice />,
    exact: true,
  },
  {
    path: '/dashboard/transaction-info/list',
    name: '',
    element: <TransactionList />,
    exact: true,
  },
  {
    path: '/dashboard/transaction-info/reciept',
    name: '',
    element: <TransactionReceipt />,
    exact: true,
  },
  {
    path: '/dashboard/transaction-info/reciepts',
    name: '',
    element: <TransactionReceipts />,
    exact: true,
  },
  {
    path: '/dashboard/transaction-info/refunds',
    name: '',
    element: <TransactionRefunds />,
    exact: true,
  },
  {
    path: '/dashboard/transaction-info/credit-note',
    name: '',
    element: <CreaditNote />,
    exact: true,
  },
  {
    path: '/dashboard/promo/code',
    name: '',
    element: <PromoCode />,
    exact: true,
  },
  {
    path: '/dashboard/promo/issued-list',
    name: '',
    element: <PromoCodeIssuedList />,
    exact: true,
  },
  {
    path: '/dashboard/notification/list',
    name: '',
    element: <NotificationList />,
    exact: true,
  },
  {
    path: '/dashboard/notification/send',
    name: '',
    element: <NotificationSend />,
    exact: true,
  },
  {
    path: '/dashboard/technical-update',
    name: '',
    element: <TechnicalUpdate />,
    exact: true,
  },
  {
    path: '/dashboard/technical-update',
    name: '',
    element: <TechnicalUpdate />,
    exact: true,
  },
  {
    path: '/dashboard/activity-log',
    name: '',
    element: <ActivityLog />,
    exact: true,
  },
  {
    path: '/dashboard/contact-us',
    name: '',
    element: <ContactUs />,
    exact: true,
  },
  {
    path: '/dashboard/complaints-and-supports',
    name: '',
    element: <ComplaintsAndSupport />,
    exact: true,
  },
]

export default routes
