import React from 'react'

const HorizontalButtonList = ({ items, onClickhandleChange }) => {
  return (
    <div className="d-flex">
      {items &&
        items.length &&
        items.map((item, ind) => (
          <button
            key={ind}
            className="mx-2 font-4 horizontal_button_list"
            onClick={(e) => onClickhandleChange}
          >
            {item}
          </button>
        ))}
    </div>
  )
}

export default HorizontalButtonList
