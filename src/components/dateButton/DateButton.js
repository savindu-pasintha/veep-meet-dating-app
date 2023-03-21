import React, { useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const DateButton = ({ name, handleChange }) => {
  const [open, setOpen] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const refInput = useRef(null)
  return (
    <div className="d-flex">
      {open == true && (
        <DatePicker
          className="mx-2 text-light font-4 horizontal_button_list text-center"
          ref={refInput}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          style={{ visibility: 'hidden' }}
          placeholder="Return flight date"
        />
      )}
      {open == false && (
        <button
          className="mx-2 font-4 horizontal_button_list text-center"
          onClick={(e) => {
            setOpen(true)
            if (refInput.current) refInput.current.onInputClick()
          }}
        >
          {name}
        </button>
      )}
    </div>
  )
}

export default DateButton
