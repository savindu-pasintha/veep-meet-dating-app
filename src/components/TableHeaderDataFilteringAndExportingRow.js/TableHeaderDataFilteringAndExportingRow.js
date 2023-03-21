import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../table/table.module.css'
import DateButton from '../dateButton/DateButton'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

const TableHeaderDataFilteringAndExportingRow = ({rowsPerPage=10}) => {
  return (
    <Paper sx={{ width: '100%',borderShadow:'none' ,boxShadow:"none"}}>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow className="text-center">
              <TableCell style={{ top: 57, borderBottom: 'none' }}>
                <div className="d-flex  p-0">
                  <p className="font-6 mx-2">Show entries per page </p>
                </div>
              </TableCell>
              <TableCell style={{ top: 57, borderBottom: 'none' }}>
                <div className="d-flex  p-0 justify-content-between">
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
              </TableCell>
              <TableCell style={{ top: 57, borderBottom: 'none' }}>
                <div className="d-flex justify-content-between p-0">
                  <p className="font-6 p-0 m-0 d-flex">Choose Backup Date/s</p>
                </div>
              </TableCell>
              <TableCell style={{ top: 57, borderBottom: 'none' }}>
                <div className="d-flex justify-content-between p-0">
                  <DateButton name="From Date" />
                  <DateButton name="To Date" />
                </div>
              </TableCell>

              <TableCell style={{ top: 57, borderBottom: 'none' }}>
                <div className="d-flex justify-content-between">
                  {['Backup', 'Excel', 'PDF', 'CSV'].map((item, ind) => (
                    <button key={ind} className="mx-1 font-4 horizontal_button_list text-center">
                      {item}
                    </button>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      </Paper>
  )
}

export default TableHeaderDataFilteringAndExportingRow


