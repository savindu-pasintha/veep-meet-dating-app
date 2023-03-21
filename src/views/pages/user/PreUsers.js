import React, { useEffect, useState } from 'react'
import Table4 from 'src/components/table/Table4'
import { useLocation, useOutletContext } from 'react-router-dom'
import { getToken, tableColumnsDataReFormatted, validateFromDateTodate } from 'src/utils/Utils'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

const PreUsers = () => {
  const outLetProps = useOutletContext();
  const location = useLocation()
  const signInToken = useSelector((state) => state.signInToken)
  const  dispatch = useDispatch()
  const [data, setData] = useState([])
  const [columns,setColumns]=useState([])
  

  const fetchPreUsersData = () => {
    if (validateFromDateTodate(outLetProps["fromDate"],outLetProps["toDate"]) && BASE_URL && (getToken || signInToken)) {
     let data = JSON.stringify({
        search_data: '',
        from_date: outLetProps["fromDate"],
        to_date: outLetProps["toDate"]
      })

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BASE_URL}/pre/users`,
        headers: {
          Authorization: `Bearer ${getToken}`,
          'Content-Type': 'application/json',
        },
        data: data,
      }

      axios
        .request(config)
        .then((response) => {
          if (response && response.status == 200) {
            if (response.data?.success && response.data?.output) {
              let outPut = response.data.output
              if (outPut && outPut.length > 0) {
                let columnsData = Object.keys(outPut[0])
                if (columnsData && columnsData.length > 0) {
                  setColumns(columnsData)
                  setData(outPut)
                }
               
              }else{
                setData([])
              }
            } 
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }

    if(!validateFromDateTodate(outLetProps["fromDate"],outLetProps["toDate"])){
      dispatch({ type: 'setAlert', alert: { type: false, message: 'from-date should be less than to-date' } })
    }
  }

  useEffect(() => {
    fetchPreUsersData()
  }, [])

  useEffect(() => {
    fetchPreUsersData()
  }, [outLetProps["fromDate"],outLetProps["toDate"]])
  return  (
    <>
      <div className='p-1'>
        <Table4
          tableTitle={''}
          tableData={data}
          tableColumns={columns}
          tableBodyHeight=""
          tableBodyMaxHeight="56vh"
        />
      </div>
    </>
  )
}

export default PreUsers
