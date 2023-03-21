import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import routes from './routes'
import './scss/style.scss'
import ContactUs from './views/pages/contact-us/ContactUs'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="" element={<Login />} />
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="/dashboard" name="" element={<DefaultLayout />}>
              {routes.map((route, idx) => {
                return (
                  route.element && (
                    <Route
                      key={idx}
                      path={route?.path}
                      name={route?.name}
                      element={route?.element}
                    />
                  )
                )
              })}
            </Route>
            <Route path="*" name="Page 404" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
