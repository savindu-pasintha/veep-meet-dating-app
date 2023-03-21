import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CCard, CCardBody, CCardGroup, CCol, CContainer, CRow } from '@coreui/react'
import '../../../scss/custom-styles.css'
import { emailaValidation, getToken } from 'src/utils/Utils'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

const Login = () => {
  const dispatch = useDispatch()
  const signInToken = useSelector((state) => state.signInToken)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState({ email: false, password: false })

  const handleOnChange = (type, val) => {
    if (type == 'email') {
      setErr({ email: false, password: err.password })
      setEmail(val)
    }
    if (type == 'password') {
      setErr({ email: err.email, password: false })
      setPassword(val)
    }
  }

  const handleLoginButton = () => {
    if (!email) {
      setErr({ email: true, password: err.password })
      return
    }
    if (!password) {
      setErr({ email: err.email, password: true })
      return
    }

    if (email && password) {
      var data = JSON.stringify({
        email_address: email,
        password: password,
      })

      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BASE_URL}/admin/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      }

      axios(config)
        .then(function (response) {
          if (response && response.status == 200) {
            if (response.data?.success && response.data?.output) {
              window.localStorage.setItem('token', response.data.output)
              dispatch({ type: 'setToken', signInToken: response.data.output })
              fetchAuthUserdata(response.data.output)
            } else {
              setErr({ email: true, password: true })
            }
          } else {
            setErr({ email: true, password: true })
          }
        })
        .catch(function (error) {
          setErr({ email: true, password: true })
        })
    }
    console.log(err)
  }

  const handleFrogotButton = () => {}

  const fetchAuthUserdata = (token) => {
    if (token) {
      let data = ''
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BASE_URL}/auth/user`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      }
      axios
        .request(config)
        .then((response) => {
          if (response && response.status == 200) {
            if (response.data?.success == true && response.data?.output) {
              dispatch({ type: 'setUserAuthData', userAuthData: response.data.output })
              window.localStorage.setItem('user_data', JSON.stringify(response.data.output))
              navigate('/dashboard')
            } else {
              window.localStorage.setItem('user_data', JSON.stringify({}))
            }
          } else {
            window.localStorage.setItem('user_data', JSON.stringify({}))
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

 useEffect(() => {}, [email, password])
  useEffect(() => {

    if (getToken || signInToken) {
      navigate('/dashboard')
    }
  }, [])

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4 border-0">
                <CCardBody>
                  <CRow className="py-2 m-0">
                    <div className="text-center">
                      <svg style={{ width: '380px', height: '320px' }}>
                        <defs>
                          <linearGradient
                            id="linear-gradient"
                            x1="0.5"
                            y1="-0.547"
                            x2="0.5"
                            y2="1"
                            gradientUnits="objectBoundingBox"
                          >
                            <stop offset="0" stopColor="#109b11" />
                            <stop offset="0.379" stopColor="#6ec321" />
                            <stop offset="1" stopColor="#0f76af" />
                          </linearGradient>
                        </defs>
                        <g
                          id="Group_2662"
                          data-name="Group 2662"
                          transform="translate(-96.16 -437.521)"
                        >
                          <g
                            id="Group_242"
                            data-name="Group 242"
                            transform="translate(96.16 437.521)"
                          >
                            <g id="Group_242-2" data-name="Group 242" transform="translate(85.334)">
                              <path
                                id="Path_3016"
                                data-name="Path 3016"
                                d="M3436.169,1941.758c-11.279,12.47-29.739,12.453-41.015,0l-35.562-39.275-22.781-25.161a10.967,10.967,0,0,1,0-14.376,8.633,8.633,0,0,1,13.016,0l14.394,15.9.247.282v0l41.726,46.079a12.563,12.563,0,0,0,18.942,0l27.95-30.865,13.773-15.213c10.711-11.83-5.561-29.8-16.276-17.973l-34.917,38.566-26.789-29.581v0l-22.78-25.16c-12.53-13.839-33.04-13.827-45.558,0h0c-12.518,13.826-12.518,36.492,0,50.318l22.781,25.161,35.559,39.28c20.249,22.366,53.295,22.388,73.569,0l24.708-27.286-18.419-15.611Z"
                                transform="translate(-3311.151 -1811.696)"
                                fill="url(#linear-gradient)"
                              />
                              <path
                                id="Path_3017"
                                data-name="Path 3017"
                                d="M3597.8,1759.972c-10.3-11.376-23.888-17.063-37.424-17.065-13.508,0-27.076,5.694-37.416,17.065l-5.635,6.22-5.635-6.22c-18.821-20.779-45.553-21.418-65.049-8.421,11.477-4.129,26.039,1.277,36.8,13.171l11.969,13.226,11.429,12.615,10.482,11.577c12.337-13.628,9.563-10.57,21.886-24.214,18.472-20.366,51.024-6.394,51.069,23.389a34.78,34.78,0,0,1-8.753,23.355l-6.562,7.246,17.951,16.128,4.885-5.394c10.274-11.347,15.41-26.338,15.455-41.338C3613.259,1786.343,3608.11,1771.357,3597.8,1759.972Z"
                                transform="translate(-3412.812 -1742.865)"
                                fill="url(#linear-gradient)"
                              />
                            </g>
                            <g
                              id="Group_243"
                              data-name="Group 243"
                              transform="translate(0 198.866)"
                            >
                              <path
                                id="Path_3018"
                                data-name="Path 3018"
                                d="M2995.033,2581.894h-12.07l-13.569-39.209h11.448l8.157,29.772h.219l8.12-29.772h11.155Z"
                                transform="translate(-2969.394 -2541.843)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3019"
                                data-name="Path 3019"
                                d="M3167.871,2567.367c-1.17,7.681-8.193,12.838-17.885,12.838-12.07,0-19.312-7.717-19.312-20.263,0-12.509,7.314-20.629,18.91-20.629,11.411,0,18.616,7.718,18.616,19.641v3.256H3141.17v.658c0,5.6,3.548,9.437,9,9.437,3.914,0,6.913-1.938,7.9-4.937Zm-26.591-11.7h16.643c-.22-5.01-3.475-8.448-8.23-8.448C3145.01,2547.215,3141.646,2550.761,3141.28,2555.663Z"
                                transform="translate(-3090.403 -2539.314)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3020"
                                data-name="Path 3020"
                                d="M3334.423,2567.367c-1.17,7.681-8.192,12.838-17.885,12.838-12.07,0-19.312-7.717-19.312-20.263,0-12.509,7.314-20.629,18.91-20.629,11.411,0,18.618,7.718,18.618,19.641v3.256h-27.03v.658c0,5.6,3.548,9.437,9,9.437,3.914,0,6.913-1.938,7.9-4.937Zm-26.59-11.7h16.642c-.219-5.01-3.475-8.448-8.23-8.448C3311.563,2547.215,3308.2,2550.761,3307.833,2555.663Z"
                                transform="translate(-3215.369 -2539.314)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3021"
                                data-name="Path 3021"
                                d="M3508.444,2560.419c0,12.619-6.072,20.227-15.874,20.227-5.707,0-10.1-2.78-12.18-7.205h-.219v19.385H3469.49v-52.01h10.535v6.839h.219c2.121-4.608,6.474-7.461,12.143-7.461C3502.336,2540.193,3508.444,2547.765,3508.444,2560.419Zm-10.936,0c0-7.1-3.365-11.667-8.706-11.667-5.229,0-8.668,4.645-8.668,11.667,0,7.1,3.438,11.632,8.668,11.632C3494.143,2572.051,3497.508,2567.552,3497.508,2560.419Z"
                                transform="translate(-3344.621 -2539.973)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3022"
                                data-name="Path 3022"
                                d="M3700.414,2540.485h10.314v7.1h.219a11.509,11.509,0,0,1,11.192-7.828c5.669,0,9.619,2.926,10.937,8.046h.219c1.756-4.937,6.438-8.046,12.18-8.046,7.681,0,12.839,5.267,12.839,13.167v26.773h-10.681v-24.1c0-4.536-2.268-7.022-6.4-7.022-4.06,0-6.729,2.962-6.729,7.315v23.811h-10.278v-24.433c0-4.206-2.377-6.693-6.328-6.693-4.06,0-6.8,3.072-6.8,7.461v23.665h-10.68Z"
                                transform="translate(-3517.885 -2539.644)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3023"
                                data-name="Path 3023"
                                d="M3990.883,2567.367c-1.17,7.681-8.193,12.838-17.885,12.838-12.07,0-19.312-7.717-19.312-20.263,0-12.509,7.315-20.629,18.91-20.629,11.411,0,18.617,7.718,18.617,19.641v3.256h-27.029v.658c0,5.6,3.548,9.437,9,9.437,3.914,0,6.912-1.938,7.9-4.937Zm-26.591-11.7h16.642c-.219-5.01-3.474-8.448-8.229-8.448C3968.023,2547.215,3964.659,2550.761,3964.292,2555.663Z"
                                transform="translate(-3707.917 -2539.314)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3024"
                                data-name="Path 3024"
                                d="M4157.435,2567.367c-1.17,7.681-8.192,12.838-17.885,12.838-12.07,0-19.312-7.717-19.312-20.263,0-12.509,7.315-20.629,18.91-20.629,11.412,0,18.617,7.718,18.617,19.641v3.256h-27.03v.658c0,5.6,3.549,9.437,9,9.437,3.913,0,6.913-1.938,7.9-4.937Zm-26.591-11.7h16.643c-.219-5.01-3.475-8.448-8.229-8.448C4134.576,2547.215,4131.21,2550.761,4130.844,2555.663Z"
                                transform="translate(-3832.883 -2539.314)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3025"
                                data-name="Path 3025"
                                d="M4331.456,2560.419c0,12.619-6.07,20.227-15.873,20.227-5.706,0-10.095-2.78-12.18-7.205h-.219v19.385H4292.5v-52.01h10.533v6.839h.221c2.12-4.608,6.474-7.461,12.143-7.461C4325.349,2540.193,4331.456,2547.765,4331.456,2560.419Zm-10.936,0c0-7.1-3.364-11.667-8.7-11.667-5.231,0-8.669,4.645-8.669,11.667,0,7.1,3.438,11.632,8.669,11.632C4317.156,2572.051,4320.521,2567.552,4320.521,2560.419Z"
                                transform="translate(-3962.136 -2539.973)"
                                fill="#0f76af"
                              />
                            </g>
                            <g
                              id="Group_244"
                              data-name="Group 244"
                              transform="translate(62.27 264.399)"
                            >
                              <path
                                id="Path_3026"
                                data-name="Path 3026"
                                d="M3237.864,2847.074h-3.021l-4.011-13.74h-.068l-3.995,13.74h-3.021l-4.967-17.751h2.953l3.55,14.44h.069l4.011-14.44h2.868l4.028,14.44h.068l3.55-14.44h2.936Z"
                                transform="translate(-3218.781 -2822.443)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3027"
                                data-name="Path 3027"
                                d="M3325.354,2801.773h2.97v9.712h.068a5.879,5.879,0,0,1,5.633-3.141c3.891,0,6.247,2.629,6.247,6.589v11.47h-2.97v-10.924c0-2.816-1.417-4.506-4.2-4.506-2.953,0-4.779,2.014-4.779,5.086V2826.4h-2.97Z"
                                transform="translate(-3298.743 -2801.773)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3028"
                                data-name="Path 3028"
                                d="M3412.287,2841.064c-.512,3.107-3.516,5.394-7.391,5.394-5.086,0-8.175-3.533-8.175-9.114,0-5.514,3.14-9.251,8.039-9.251,4.8,0,7.749,3.482,7.749,8.858v1.127h-12.733v.171c0,3.4,2,5.632,5.188,5.632,2.253,0,3.909-1.144,4.4-2.816Zm-12.494-5.309h9.644c-.068-2.97-1.928-5.086-4.728-5.086C3401.926,2830.669,3399.98,2832.8,3399.793,2835.755Z"
                                transform="translate(-3352.291 -2821.52)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3029"
                                data-name="Path 3029"
                                d="M3471.916,2828.4h2.8v2.9h.068a4.348,4.348,0,0,1,4.3-3.209,7.661,7.661,0,0,1,1.2.12v2.885a5.955,5.955,0,0,0-1.587-.171c-2.305,0-3.807,1.656-3.807,4.165v11.06h-2.97Z"
                                transform="translate(-3408.71 -2821.52)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3030"
                                data-name="Path 3030"
                                d="M3523.713,2841.064c-.512,3.107-3.516,5.394-7.39,5.394-5.087,0-8.177-3.533-8.177-9.114,0-5.514,3.141-9.251,8.04-9.251,4.8,0,7.75,3.482,7.75,8.858v1.127H3511.2v.171c0,3.4,2,5.632,5.189,5.632,2.253,0,3.909-1.144,4.4-2.816Zm-12.494-5.309h9.643c-.068-2.97-1.929-5.086-4.728-5.086C3513.352,2830.669,3511.406,2832.8,3511.219,2835.755Z"
                                transform="translate(-3435.894 -2821.52)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3031"
                                data-name="Path 3031"
                                d="M3615.475,2847.074h-3.038l-6.538-17.751h3.124l4.9,14.594h.068l4.916-14.594H3622Z"
                                transform="translate(-3509.24 -2822.443)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3032"
                                data-name="Path 3032"
                                d="M3689.689,2841.064c-.512,3.107-3.516,5.394-7.391,5.394-5.086,0-8.176-3.533-8.176-9.114,0-5.514,3.141-9.251,8.039-9.251,4.8,0,7.749,3.482,7.749,8.858v1.127h-12.733v.171c0,3.4,2,5.632,5.189,5.632,2.252,0,3.908-1.144,4.4-2.816Zm-12.494-5.309h9.644c-.069-2.97-1.929-5.086-4.729-5.086C3679.329,2830.669,3677.383,2832.8,3677.2,2835.755Z"
                                transform="translate(-3560.428 -2821.52)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3033"
                                data-name="Path 3033"
                                d="M3746.532,2847.619h3.055a4.587,4.587,0,0,0,4.558,2.7c3.072,0,4.933-1.775,4.933-4.42v-2.8h-.068a6.423,6.423,0,0,1-5.684,3.193c-4.523,0-7.494-3.568-7.494-9.081,0-5.564,2.971-9.115,7.562-9.115a6.456,6.456,0,0,1,5.77,3.294h.051V2828.4h2.833v17.393c0,4.233-3.124,7.049-8.022,7.049C3750.116,2852.841,3747.026,2850.64,3746.532,2847.619Zm12.545-10.412c0-3.909-2.065-6.5-5.155-6.5-3.055,0-5.052,2.526-5.052,6.5s2,6.469,5.052,6.469C3757.012,2843.675,3759.077,2841.115,3759.077,2837.207Z"
                                transform="translate(-3614.232 -2821.52)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3034"
                                data-name="Path 3034"
                                d="M3823.352,2841.132c0-3.038,2.338-4.95,6.435-5.189l5.086-.29v-1.485c0-2.167-1.434-3.465-3.892-3.465-2.287,0-3.72,1.075-4.1,2.816h-2.867c.2-3.072,2.833-5.428,7.032-5.428,4.165,0,6.793,2.253,6.793,5.786v12.272h-2.816v-3.056h-.068a6.472,6.472,0,0,1-5.7,3.363C3825.725,2846.458,3823.352,2844.324,3823.352,2841.132Zm11.521-1.724v-1.451l-4.745.29c-2.39.153-3.755,1.211-3.755,2.884,0,1.69,1.417,2.8,3.55,2.8A4.671,4.671,0,0,0,3834.873,2839.409Z"
                                transform="translate(-3672.396 -2821.52)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3035"
                                data-name="Path 3035"
                                d="M3896.5,2828.4h2.8v2.833h.068a5.94,5.94,0,0,1,5.633-3.141c3.891,0,6.145,2.509,6.145,6.538v11.521h-2.97v-10.992c0-2.868-1.349-4.438-4.08-4.438-2.8,0-4.625,1.98-4.625,4.984v10.446H3896.5Z"
                                transform="translate(-3727.276 -2821.52)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3036"
                                data-name="Path 3036"
                                d="M3974.211,2828.092c3.67,0,6.367,2.185,6.5,5.189h-2.833c-.2-1.707-1.587-2.765-3.772-2.765-2.167,0-3.6,1.075-3.6,2.628,0,1.229.939,2.048,2.954,2.56l2.748.666c3.584.9,4.882,2.2,4.882,4.813,0,3.089-2.919,5.274-7.067,5.274-3.891,0-6.6-2.116-6.913-5.257h2.971c.324,1.843,1.724,2.833,4.13,2.833s3.892-1.023,3.892-2.628c0-1.263-.734-1.946-2.731-2.475l-3.124-.8c-3.123-.8-4.66-2.407-4.66-4.831C3967.589,2830.26,3970.3,2828.092,3974.211,2828.092Z"
                                transform="translate(-3780.259 -2821.52)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3037"
                                data-name="Path 3037"
                                d="M4060.626,2817.528c0-5.564,3.056-9.184,7.527-9.184a6.235,6.235,0,0,1,5.649,3.192h.068v-9.764h2.971v24.63h-2.834v-3h-.052a6.35,6.35,0,0,1-5.734,3.311C4063.7,2826.71,4060.626,2823.092,4060.626,2817.528Zm3.038,0c0,4.028,1.98,6.571,5.121,6.571,3.055,0,5.1-2.595,5.1-6.571,0-3.96-2.049-6.571-5.1-6.571C4065.645,2810.956,4063.665,2813.516,4063.665,2817.528Z"
                                transform="translate(-3850.426 -2801.773)"
                                fill="#0f76af"
                              />
                              <path
                                id="Path_3038"
                                data-name="Path 3038"
                                d="M4138.146,2837.275c0-5.667,3.312-9.183,8.229-9.183,4.9,0,8.209,3.516,8.209,9.183,0,5.65-3.312,9.183-8.209,9.183C4141.457,2846.458,4138.146,2842.925,4138.146,2837.275Zm13.417,0c0-4.182-2.049-6.572-5.188-6.572s-5.208,2.39-5.208,6.572,2.066,6.571,5.208,6.571S4151.563,2841.456,4151.563,2837.275Z"
                                transform="translate(-3908.589 -2821.52)"
                                fill="#0f76af"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </CRow>

                  <CRow className="py-2 m-0">
                    <div className="w-100 text-center">
                      <input
                        className="login_input"
                        placeholder="Username"
                        style={{ border: err.email ? '1px solid red' : '' }}
                        onChange={(e) => handleOnChange('email', e.target.value)}
                      />
                    </div>
                  </CRow>
                  <CRow className="pt-2 m-0">
                    <div className="w-100 text-center">
                      <input
                        style={{ border: err.password ? '1px solid red' : '' }}
                        type="password"
                        placeholder="Password"
                        className="login_input"
                        onChange={(e) => handleOnChange('password', e.target.value)}
                      />
                    </div>
                  </CRow>
                  <CRow className="py-2 m-0">
                    <div className=" w-100">
                      <p
                        style={{ width: '350px' }}
                        className="text-end frogot_password "
                        onClick={(e) => handleFrogotButton()}
                      >
                        Forgot password ?
                      </p>
                    </div>
                  </CRow>
                  <CRow className="py-2 m-0">
                    <div className="w-100 text-center">
                      <button className="login_button " onClick={(e) => handleLoginButton()}>
                        Login
                      </button>
                    </div>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
