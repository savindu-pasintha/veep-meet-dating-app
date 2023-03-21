import { CAvatar } from '@coreui/react'
import { Avatar } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState, lazy, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AlertBox } from 'src/components/alertBox/AlertBox'
import ImageCropModel from 'src/components/imageCropModel/ImageCropModel'
import ProfileDetails from 'src/components/profileDetails/ProfileDetails'
import Table4 from 'src/components/table/Table4'
import ViewActityLog from 'src/components/viewAllActivity/ViewActityLog'
import { getAuthUserdata, getToken } from 'src/utils/Utils'

const AdminManager = () => {
  const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL
  const token = getToken
  const objAuthUserData = getAuthUserdata()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [clickedEdit, setClikedEdit] = useState(false)
  const [passwords1, setpasswords1] = useState('')
  const [passwords2, setpasswords2] = useState('')
  const [err, setErr] = useState(false)

  // const [columns,setColumns]=useState([])

  const columns = [
    { name: 'ID', options: { filterOptions: { fullWidth: true } } },
    'Activity_Type',
    'Title',
    'Description',
    'Date_Time',
  ]

  const [editData, setEditdata] = useState([
    { key: 'Name', value: '', edit: false },
    { key: 'Surname', value: '', edit: false },
    { key: 'Manager Id', value: '', edit: false },
    { key: 'Password', value: '', edit: false },
    { key: 'Email', value: '', edit: false },
  ])
  const [chg, setChg] = useState(0)
  const [src, setSrc] = useState(objAuthUserData.profile_picture)
  const refUpload = useRef(null)
  const [open, setOpen] = useState(false)
  const handleFileUpload = (event) => {
    const [file] = refUpload.current.files
    if (file) {
      setSrc(URL.createObjectURL(file))
      setOpen(!open)
    }
  }
  const Lazy = lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ default: () => <b>Admin Manager</b> })
        }, 500)
      }),
  )

  const saveUserdata = () => {
    if (token && BASE_URL) {
      let data = JSON.stringify({
        user_id: objAuthUserData?.user_id,
        user_type_id: objAuthUserData?.user_type_id,
        full_name: editData.find((item) => item.key == 'Full Name')?.value,
        email_address: objAuthUserData?.email_address,
        mobile_number: editData.find((item) => item.key == 'Contact No')?.value,
        address: editData.find((item) => item.key == 'Address')?.value,
      })

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BASE_URL}/user/manage`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: data,
      }

      axios
        .request(config)
        .then((response) => {
          if (response && response.status == 200) {
            if (response.data?.success == true) {
              let updateData = JSON.parse(data)
              updateData['profile_picture'] = src
              window.localStorage.setItem('user_data', JSON.stringify(updateData))
              dispatch({ type: 'setAlert', alert: { type: true, message: '' } })
              dispatch({
                type: 'setUserAuthData',
                userAuthData: updateData,
              })
            }
          } else {
            dispatch({ type: 'setAlert', alert: { type: false, message: '' } })
            console.log(response.data)
          }
        })
        .catch((error) => {
          dispatch({
            type: 'setAlert',
            alert: { type: false, message: error.response.data?.message },
          })
        })
    }
  }
  const resetPassword = () => {
    if (
      token &&
      BASE_URL &&
      passwords1 &&
      passwords2 &&
      objAuthUserData?.email_address &&
      passwords1 === passwords2
    ) {
      let data = JSON.stringify({
        email_address: objAuthUserData?.email_address,
        password: passwords1,
        reenter_password: passwords2,
      })

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BASE_URL}/password/reset`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: data,
      }

      axios
        .request(config)
        .then((response) => {
          if (response && response.status == 200) {
            if (response.data?.success == true) {
              dispatch({
                type: 'setAlert',
                alert: { type: true, message: 'password changed successfully !' },
              })
              setpasswords1("")
              setpasswords1("")
            }
          } else {
            dispatch({ type: 'setAlert', alert: { type: false, message: '' } })
          }
        })
        .catch((error) => {
          dispatch({
            type: 'setAlert',
            alert: { type: false, message: error.response.data?.message },
          })
        })
    } else {
      setErr(true)
    }
  }

  useEffect(() => {}, [chg, err])
  useEffect(() => {
    if (objAuthUserData) {
      const {
        full_name,
        login_type,
        mobile_number,
        profile_picture,
        user_id,
        user_type_id,
        address,
        email_address,
        manager_id
      } = objAuthUserData
      setEditdata([
        {
          key: 'Manager Id',
          value: manager_id ? manager_id : objAuthUserData?.manager_id,
          edit: false,
        },
        {
          key: 'Full Name',
          value: full_name ? full_name : objAuthUserData?.full_name,
          edit: false,
        },
        { key: 'Address', value: address ? address : objAuthUserData?.full_address, edit: false },
        {
          key: 'Contact No',
          value: mobile_number ? mobile_number : objAuthUserData?.mobile_number,
          edit: false,
        },
        {
          key: 'Email',
          value: email_address ? email_address : objAuthUserData?.email_address,
          edit: false,
        },
      ])
    }
  }, [])
  useEffect(() => {
    const data = []
    for (var i = 0; i < 100; i++) {
      let arr = ['#' + i, 'Type', 'Calender Updated', 'Description', '2023-03-16 05:15:65']
      data.push(arr)
    }
    setData(data)
  }, [])
  return (
    <>
      <div className="row p-0 m-0">
        {open ? (
          <ImageCropModel
            src={src}
            handleOpen={({ open, srcB64 }) => {
              setOpen(open)
              setSrc(srcB64?srcB64:src)
            }}
          />
        ) : (
          ''
        )}
        <div className="col-2 d-flex justify-content-center">
          <input
            ref={refUpload}
            onChange={(e) => handleFileUpload(e)}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
          />

          {src == '' && (
            <svg
              style={{ width: 150, height: 150, margin: '3rem 0px 10px 10px' }}
              width="237.5"
              height="237.5"
              viewBox="0 0 237.5 237.5"
              onClick={(e) => refUpload.current.click()}
            >
              <defs>
                <clipPath id="clip-path">
                  <rect width="99.744" height="99.744" fill="none" />
                </clipPath>
              </defs>
              <g id="Group_1390" data-name="Group 1390" transform="translate(-419.5 -298.5)">
                <g id="Profile" transform="translate(419.5 298.5)">
                  <g
                    id="Ellipse_96"
                    data-name="Ellipse 96"
                    fill="#464545"
                    stroke="#464545"
                    strokeWidth="2"
                  >
                    <circle cx="118.75" cy="118.75" r="118.75" stroke="none" />
                    <circle cx="118.75" cy="118.75" r="117.75" fill="none" />
                  </g>
                  <g
                    id="Component_6_1"
                    data-name="Component 6 – 1"
                    transform="translate(70.071 41.579)"
                    clipPath="url(#clip-path)"
                  >
                    <path
                      id="Union_1"
                      data-name="Union 1"
                      d="M0,99.744V87.278C0,73.56,22.442,62.339,49.872,62.339S99.744,73.56,99.744,87.278V99.744ZM24.933,24.939A24.936,24.936,0,1,1,49.872,49.872,24.938,24.938,0,0,1,24.933,24.939Z"
                      transform="translate(0 0)"
                      fill="#fff"
                    />
                  </g>
                </g>
                <g
                  id="Component_208_2"
                  data-name="Component 208 – 2"
                  transform="translate(518 461)"
                >
                  <path
                    id="Path_500"
                    data-name="Path 500"
                    d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z"
                    fill="#fff"
                  />
                  <g id="_" data-name="+" transform="translate(12 12)">
                    <path
                      id="Union_1-2"
                      data-name="Union 1"
                      d="M-4613,16V9h-7V7h7V0h2V7h7V9h-7v7Z"
                      transform="translate(4620)"
                      fill="#464545"
                    />
                  </g>
                </g>
              </g>
            </svg>
          )}
          <Avatar
            className="cursor"
            alt="Remy Sharp"
            src={src}
            sx={{ width: 150, height: 150, margin: '3rem 0px 10px 10px' }}
            onClick={(e) => {
              if (clickedEdit) refUpload.current.click()
            }}
          />
        </div>
        <div className="col-10 pt-5">
          <div className="row p-0 mx-1">
            <div className={`d-flex `}>
              <p
                type="button "
                className="mx-0 py-0 my-1 label_p"
                style={{ width: 'auto', border: 'none',fontWeight:600 }}
              >
               Profile Data
              </p>
            </div>
            {editData.map((item, ind) => (
              <div key={ind} className={`d-flex `}>
                {clickedEdit == false ? (
                  <>
                    <p
                      type="button "
                      className="mx-0 py-0 my-1 label_p"
                      style={{ width: 'auto', border: 'none' }}
                    >
                      {item?.key}
                    </p>
                    <p
                      type="button "
                      className="mx-0 py-0 my-1 label_p"
                      style={{ width: 'auto', border: 'none' }}
                    >
                      : {item?.value}
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      type="button "
                      className="mx-0 py-0 my-1 label_p"
                      style={{ width: 'auto', border: 'none' }}
                    >
                      {item?.key}
                    </p>{' '}
                    <>
                      {item.key == 'Email' || item.key == "Manager Id" ? (
                        <input
                          disabled={true}
                          type="text"
                          className="my-1 mx-3 w-75"
                          value={item?.value}
                        />
                      ) : (
                        <input
                          disabled={!clickedEdit}
                          type="text"
                          className="my-1 mx-3 w-75"
                          value={item?.value}
                          onChange={(e) => {
                            if (e && e.target.value) {
                              let editedArr = editData.filter((obj) => {
                                if (item.key === obj.key) {
                                  obj.value = e.target.value
                                  return obj
                                } else return obj
                              })
                              setEditdata(editedArr)
                            }
                            setChg(Math.random(1))
                          }}
                        />
                      )}
                    </>
                  </>
                )}
              </div>
            ))}
            <div className={`d-flex `}>
              <button
                type="button "
                className="mx-0 py-0 my-1 print_button w-50"
                style={{
                  width: 'auto',
                  background: '#464545',
                  color: clickedEdit ? '#FFF' : '#FFF',
                }}
                onClick={(e) => {
                  setClikedEdit(!clickedEdit)
                  if (clickedEdit) {
                    saveUserdata()
                  }
                  setChg(Math.random(1))
                }}
              >
                {clickedEdit ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
          <div className="row p-0 mx-1 mt-2">
          <div className={`d-flex `}>
              <p
                type="button "
                className="mx-0 py-0 my-1  "
                style={{ width: 'auto', border: 'none',fontWeight:600 }}
              >
               Password
              </p>
            </div>
            <div className={`d-flex `}>
              <>
                <p
                  type="button "
                  className="mx-0 py-0 my-1 label_p2"
                  style={{ width: 'auto', border: 'none' }}
                >
                  New Password
                </p>{' '}
                <input
                  style={{ border: err ? '1px solid red' : '' }}
                  type="password"
                  className="my-1 mx-3 w-75"
                  value={passwords1}
                  onChange={(e) => setpasswords1(e.target.value)}
                />
              </>
            </div>
            <div className={`d-flex `}>
              <>
                <p
                  type="button "
                  className="mx-0 py-0 my-1 label_p2"
                  style={{ width: 'auto', border: 'none' }}
                >
                  Confirm Password
                </p>{' '}
                <input
                  style={{ border: err ? '1px solid red' : '' }}
                  type="password"
                  className="my-1 mx-3 w-75"
                  value={passwords2}
                  onChange={(e) => setpasswords2(e.target.value)}
                />
              </>
            </div>

            <div className={`d-flex `}>
              <button
                type="button "
                className="mx-0 py-0 my-1 print_button w-50"
                style={{
                  width: 'auto',
                  background: '#464545',
                  color: clickedEdit ? '#FFF' : '#FFF',
                }}
                onClick={(e) => {
                  resetPassword()
                }}
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ViewActityLog title={'Admin Manager'} /> */}
      <div className="row m-0 pt-2 px-1">
        <Table4
          tableTitle={'Admin Manager | Activity Logs'}
          tableData={data}
          tableColumns={columns}
          tableBodyHeight="300px"
          tableBodyMaxHeight="300px"
        />
      </div>
    </>
  )
}

export default AdminManager
