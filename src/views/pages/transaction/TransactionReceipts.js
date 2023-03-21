import React, { useEffect, useState } from 'react'
import { useNavigate,useOutletContext } from 'react-router-dom'

import Table2 from 'src/components/table/Table2'
import Table4 from 'src/components/table/Table4'
import Transaction from 'src/components/transactional/Transaction'

const TransactionReceipts = () => {
  const outLetProps = useOutletContext();
  console.log('\n',outLetProps)
  const navigate = useNavigate()
  const [data, setData] = useState([[]])
  useEffect(() => {
    var arrr = []
   
    for (let i = 0; i < 12; i++) {
      var arr = [
        '#'+i,
        'Peach',
        'Cre_M_0001',
        'K_G_002',
        'Karlinder Governder',
        'Affrica',
        'Etc',
        'Etc',
        'Debit',
        '25/01/2019 25/01',
        <>
          <span
            style={{ color: '#4189DD' }}
            onClick={(e) => {
              console.log('#' + i, 'view')
            }}
          >
            View{' '}
          </span>
          <br />
          <span
            style={{ color: '#1C8104' }}
            onClick={(e) => {
              console.log('#' + i, 'Email')
            }}
          >
            Email
          </span>
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
        `Transaction Item`,
        `Credit Note No.`,
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
        console.log('/dashboard/transaction-info/reciept', { state: { rowData, rowMeta } })
      }}
    />
   </div>
  )
}

export default TransactionReceipts
