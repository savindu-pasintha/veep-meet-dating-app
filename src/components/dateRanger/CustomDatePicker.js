import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

const style = {
  label: { fontSize: 12, paddingTop: 10 },
}

export const currentDate = (d) => {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  return yyyy + '-' + mm + '-' + (d ? d : dd)
}

export const CustomDatePicker = ({ label, current_date, handleChnageDate }) => {
  const [value, setValue] = useState(dayjs('2022-04-17'))
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        sx={{ maxHeight: '50px', '.MuiInputBase-input': { padding: 1 } }}
        value={current_date}
        onChange={(newValue) => {
          // console.log(newValue)
          handleChnageDate(newValue)
        }}
      />
    </LocalizationProvider>
  )
}

export const CustomFromToDatePicker = ({ getFrom = (e) => {}, getTo = (e) => {} }) => {
  const [from, setFrom] = useState(dayjs(currentDate('01')))
  const [to, setTo] = useState(dayjs(currentDate()))
  return (
    <>
      <div className="d-flex  p-0 m-0  w-25">
        <CustomDatePicker
          label={<p style={style.label}>From</p>}
          current_date={from}
          handleChnageDate={(e) => {
            setFrom(e)
            getFrom(e)
            // console.log(e)
          }}
        />
      </div>
      <div className="d-flex  p-0 mx-2  w-25">
        <CustomDatePicker
          label={<p style={style.label}>To</p>}
          current_date={to}
          handleChnageDate={(e) => {
            setTo(e)
            getTo(e)
            // console.log(e)
          }}
        />
      </div>
    </>
  )
}

export const CustomFromToDatePickerForAppContent = ({ getFrom = (e) => {}, getTo = (e) => {} }) => {
  const [from, setFrom] = useState(dayjs(currentDate('01')))
  const [to, setTo] = useState(dayjs(currentDate()))
  return (
    <>
      <div className=" d-flex p-0 m-0 w-100 ">
        <div className="d-flex  p-0 w-50 justify-content-end">
          <CustomDatePicker
            label={<p style={style.label}>From</p>}
            current_date={from}
            handleChnageDate={(e) => {
              setFrom(e)
              getFrom(e)
            }}
          />
        </div>
        <div className="d-flex  p-0 mx-2  justify-content-end">
          <CustomDatePicker
            label={<p style={style.label}>To</p>}
            current_date={to}
            handleChnageDate={(e) => {
              setTo(e)
              getTo(e)
              // console.log(e)
            }}
          />
        </div>
      </div>
    </>
  )
}
