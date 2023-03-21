import React from 'react'
import { styled } from '@mui/material/styles'
import usePagination from '@mui/material/usePagination'
import styles from '../table/table.module.css'

const CustomPagination =() => {
    const { items } = usePagination({ count: 10 })
    const List = styled('ul')({
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
    })
    return (
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…'
          } else if (type === 'page') {
            children = (
              <button
                className={`${selected ? styles.pagination_box2 : styles.pagination_box}  mx-2`}
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                  border: 'none',
                  outline: 'none',
                }}
                {...item}
              >
                {page}
              </button>
            )
          } else {
            children = (
              <button
                type="button"
                {...item}
                className=" font-4 horizontal_button_list text-capitalize"
              >
                {type}
              </button>
            )
          }

          return <li key={index}>{children}</li>
        })}
      </List>
    )
  }

export default CustomPagination