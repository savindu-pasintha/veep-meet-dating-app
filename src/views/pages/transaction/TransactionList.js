import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Table4 from 'src/components/table/Table4'

const TransactionList = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
 
  useEffect(() => {
    var arrr = []
    for (let i = 0; i < 100; i++) {
      var arr = [
        '#' + i,
        'Reciept',
        'Peach',
        'Rec_Pe_00001',
        'K_G_002',
        'Karlinder Governder',
        'Affrica',
        'Etc',
        'Africa',
        'Etc',
        '25/01/2019 25/01',
        <>
          <span style={{ color: '#F7632C' }}>View </span>
          <br />
          <span style={{ color: '#1C8104' }}>Email</span>
          <br />
          <span style={{ color: '#4189DD' }}>Refund</span>
        </>,
      ]
      arrr.push(arr)
    }
    
    setData(arrr)
  }, [])


  return (
   <div className='p-1'>
     <Table4
      tableTitle={''}
      tableData={data}
      tableColumns={[
        'Transaction No.',
        `Transaction Type`,
        `Transaction Item`,
        "Receipt/ Credit Note No",
        `User No.`,
        `User Name&Surename`,
        `Continent`,
        `Country & State/Province`,
        'City',
        'Payment Method',
        'Date Time',
        'Action',
      ]}
      tableBodyHeight="70%"
      tableBodyMaxHeight="56vh"
      onRowClickHandle={(rowData, rowMeta) => {
        navigate('/dashboard/transaction-info/reciept', { state: { rowData, rowMeta } })
      }}
    />
   </div>
  )
}

export default TransactionList
/*
(
            <>
              <span style={{ color: '#4189DD' }}>View </span>
              <br />
              <span style={{ color: '#1C8104' }}>Email</span>
            </>
          )
*/