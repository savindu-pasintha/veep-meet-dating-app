import React, { useEffect } from 'react'
import Alert from '@mui/material/Alert'
import { useDispatch, useSelector } from 'react-redux'

export const AlertBox = ({type="",msg=""}) => {
  const reduxAlert = useSelector((state)=>state.alert)
  const dispatch=useDispatch()
  useEffect(()=>{
    const timer = setTimeout(() => {
      dispatch({ type: 'setAlert', alert: { type: null, message: '' } })
    }, 4000);
    return () => clearTimeout(timer);
  },[reduxAlert.type])
  return (
    <>
      {reduxAlert.type == true && (
        <div className="alert_overlay p-0 m-0">
          <Alert
            severity="success"
            color="success"
            sx={{ minHeight: 20 }}
            className="p-0 m-0 text-center"
          >
            {reduxAlert?.message ? reduxAlert?.message : 'success'}
          </Alert>
        </div>
      )}

      {reduxAlert.type == false && (
        <div className="alert_overlay p-0 m-0">
          <Alert severity="error" color="error" sx={{ minHeight: 20 }} className="p-0 m-0">
            {reduxAlert?.message ? reduxAlert?.message : 'error '}
          </Alert>
        </div>
      )}
    </>
  )
}

