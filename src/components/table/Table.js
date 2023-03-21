import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import styles from './table.module.css'
import { remapTableColumns } from 'src/utils/Utils'
import CustomizedCheckbox from '../customCheckbox/CustomizedCheckbox'
import HorizontalButtonList from '../horizontalButtonList/HorizontalButtonList'
import DateButton from '../dateButton/DateButton'
import usePagination from '@mui/material/usePagination'
import { styled } from '@mui/material/styles'

export default function Table({
  table_columns,
  table_data = [],
  header_columns_background = false,
}) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [columns, setColumns] = useState(remapTableColumns(table_columns))
  const [chg, setChg] = useState(0)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const SortingIconRow = () => {
    useEffect(() => {}, [chg])
    return (
      <>
        {columns &&
          columns.map((column, ind) => (
            <div className={`col p-0 mx-2`} key={ind} style={{ height: '50px' }}>
              <div>
                {column?.isSort ? (
                  <RiArrowDropDownLine
                    className={styles.parent_column_sorting_icon_box}
                    onClick={(e) => {
                      let arr = columns
                      arr[column.index].isSort = !arr[ind].isSort
                      setColumns(arr)
                      setChg(Math.random(1))
                    }}
                  />
                ) : (
                  <RiArrowDropUpLine
                    className={styles.parent_column_sorting_icon_box}
                    onClick={(e) => {
                      let arr = columns
                      arr[column.index].isSort = !arr[ind].isSort
                      setColumns(arr)
                      setChg(Math.random(1))
                    }}
                  />
                )}
              </div>
            </div>
          ))}
      </>
    )
  }

  const CheckBoxRow1 = () => {
    useEffect(() => {}, [chg])
    return (
      <>
        {columns &&
          columns.map(
            (column, ind) =>
              column && (
                <div className={`col p-0 m-0`} key={ind}>
                  <div className="py-2 text-center">
                    <CustomizedCheckbox
                      isChecked={column.enable}
                      handleChange={(e) => {
                        let arr = columns
                        arr[column.index].enable = e.target.checked
                        setColumns(arr)
                        setChg(Math.random(1))
                      }}
                    />
                  </div>
                </div>
              ),
          )}
      </>
    )
  }
  const CheckBoxRow2 = () => {
    useEffect(() => {}, [chg])
    return (
      <>
        {columns &&
          columns.map(
            (column, ind) =>
              column && (
                <div className={`col p-0 m-0`} key={ind}>
                  <div className="py-2 text-center">
                    <CustomizedCheckbox
                      isChecked={column.search}
                      handleChange={(e) => {
                        let arr = columns
                        arr[column.index].search = e.target.checked
                        setColumns(arr)
                        setChg(Math.random(1))
                      }}
                    />
                  </div>
                </div>
              ),
          )}
      </>
    )
  }

  const TopRow = () => {
    return (
      <>
        <div className="col-sm-6 col-md-3 col-xs-12 m-0 p-0">
          <div className="d-flex  p-0">
            <p className="font-6 mx-2">Show entries per page </p>
            <div className={`${styles.pagination_box} text-center pt-3`}>{rowsPerPage}</div>
            <div className={`${styles.pagination_box} mx-2`}>
              <RiArrowDropUpLine
                style={{ color: 'white' }}
                className="w-100 "
                onClick={(e) => {
                  if (rowsPerPage >= 0) setRowsPerPage(rowsPerPage + 1)
                }}
              />
              <RiArrowDropDownLine
                style={{ color: 'white' }}
                className="w-100"
                onClick={(e) => {
                  if (rowsPerPage > 1) setRowsPerPage(rowsPerPage - 1)
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xs-12 m-0 p-0">
          <div className="d-flex justify-content-between p-0">
            <p className="font-6 p-0 m-0 d-flex">Choose Backup Date/s</p>
            <DateButton name="From Date" />
            <DateButton name="To Date" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xs-12 p-0 d-flex justify-content-center">
          <HorizontalButtonList
            items={['Backup', 'Excel', 'PDF', 'CSV']}
            onClickhandleChange={(e) => console.log(e)}
          />
        </div>
      </>
    )
  }

  const CustomPagination = () => {
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
                className={`${styles.pagination_box} mx-2`}
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

  return (
    <div className={` p-0 mx-0`} style={{overflowX:'scroll'}}>
      <div className={`row mx-0 p-0 mt-0 mb-0 ${styles.parent_column_row_style}`}>
        <div className={`row p-0 m-0 ${styles.row_height} `} style={{ backgroundColor: '#FFF' }}>
          <TopRow />
        </div>
        <div className={`row p-0 m-0 ${styles.parent_column_row_2_style} ${styles.row_height}`}>
          <CheckBoxRow1 />
        </div>
        <div className={`row p-0 m-0 ${styles.parent_column_row_2_style}  ${styles.row_height}`}>
          <CheckBoxRow2 />
        </div>
        {columns &&
          columns.map(
            (column, ind) =>
              column && (
                <div className={`col py-2`} key={ind}>
                  <div>
                    <p
                      className={`${
                        header_columns_background
                          ? styles.report_table_row_header_item2
                          : styles.report_table_row_header_item
                      }`}
                    >
                      {column?.name}
                    </p>
                  </div>
                </div>
              ),
          )}
      </div>
      <div className={`row p-0 m-0 ${styles.parent_column_row_2_style}`}>
        <SortingIconRow />
      </div>
      <>
        {table_data &&
          table_data.map((row, ind) => (
            <>
              <div key={ind + 'x'} className={`row mx-2 ${styles.parent_row_style2}`}>
                {row.length > 1 &&
                  row.map(
                    (obj, indd) =>
                      obj?.value != (null || undefined) && (
                        <div className={`col py-2 `} key={indd}>
                          <div>
                            <p
                              className={` ${styles.report_table_row_header_item}`}
                              style={{ color: obj?.color ? obj.color : '' }}
                            >
                              {obj?.value}
                            </p>
                          </div>
                        </div>
                      ),
                  )}
              </div>
            </>
          ))}
      </>

      <div className="row ">
        <div className="d-flex justify-content-end">
          <CustomPagination />
        </div>
      </div>
      {(table_data === null || table_data === undefined || table_data.length == 0) && (
        <div className="row">
          <div height={'100%'}>Not found</div>
        </div>
      )}
    </div>
  )
}
