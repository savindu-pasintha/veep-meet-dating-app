import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { muiTableHeaderColumnsReFormat } from 'src/utils/Utils'
import CustomizedCheckbox from '../customCheckbox/CustomizedCheckbox'
import styles from './table.module.css'
import DateButton from '../dateButton/DateButton'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import CustomPagination from '../customPagination/CustomPagination'
import TableHeaderDataFilteringAndExportingRow from '../TableHeaderDataFilteringAndExportingRow.js/TableHeaderDataFilteringAndExportingRow'


const Table3 = ({ table_columns, table_data, header_columns_background = false }) => {
  const [headerColumns, setHeaderColumns] = React.useState(
    muiTableHeaderColumnsReFormat(table_columns),
  )
  const [rows, setRow] = React.useState(table_data)
  const [chg, setChg] = useState(0)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  
  useEffect(() => {}, [chg])
  return (
    <Paper sx={{ width: '100%',borderShadow:'none' ,boxShadow:"none"}}>
     <TableHeaderDataFilteringAndExportingRow />
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#9D9B9D' }}>
              {headerColumns.map((column, index) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, borderBottom: 'none' }}
                >
                  <CustomizedCheckbox
                    isChecked={column.enable}
                    handleChange={(e) => {
                      let arr = headerColumns
                      arr[column.index].enable = e.target.checked
                      setHeaderColumns(arr)
                      setChg(Math.random(1))
                    }}
                  />
                </TableCell>
              ))}
            </TableRow>
            <TableRow sx={{ backgroundColor: '#9D9B9D' }}>
              {headerColumns.map((column, index) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, borderBottom: 'none' }}
                >
                  <CustomizedCheckbox
                    isChecked={column.enable}
                    handleChange={(e) => {
                      let arr = headerColumns
                      arr[column.index].enable = e.target.checked
                      setHeaderColumns(arr)
                      setChg(Math.random(1))
                    }}
                  />
                </TableCell>
              ))}
            </TableRow>
            <TableRow sx={{ backgroundColor: '#464545' }}>
              {headerColumns.map((column) => {
                return (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, borderBottom: 'none', minWidth: '150px', height:'50px'}}
                  >
                    <p
                      className={`${
                        header_columns_background
                          ? styles.report_table_row_header_item2
                          : styles.report_table_row_header_item
                      }`}
                    >
                      {column?.label}
                    </p>
                  </TableCell>
                )
              })}
            </TableRow>
            <TableRow sx={{ backgroundColor: '#9D9B9D' }}>
              {headerColumns.map((column, ind) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, borderBottom: 'none',padding:'0px 10px 1px 10px' }}
                >
                  {column?.isSort ? (
                    <RiArrowDropDownLine
                      className={styles.parent_column_sorting_icon_box}
                      onClick={(e) => {
                        let arr = headerColumns
                        arr[column.index].isSort = !arr[ind].isSort
                        setHeaderColumns(arr)
                        setChg(Math.random(1))
                      }}
                    />
                  ) : (
                    <RiArrowDropUpLine
                      className={styles.parent_column_sorting_icon_box}
                      onClick={(e) => {
                        let arr = headerColumns
                        arr[column.index].isSort = !arr[ind].isSort
                        setHeaderColumns(arr)
                        setChg(Math.random(1))
                      }}
                    />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {table_data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, ind) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={ind}
                    style={{ border: 'none' }}
                  >
                    {row.map((column, ind) => {
                      return (
                        <TableCell
                          align={column.align}
                          sx={{ borderBottom: 'none' }}
                          key={ind}
                          scope="row"
                        >
                          {column.value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
        <div className="row ">
          <div className="d-flex justify-content-center">
            <CustomPagination />
          </div>
        </div>
      </TableContainer>
    </Paper>
  )
}

export default Table3
