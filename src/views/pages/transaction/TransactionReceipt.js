
import React, { useEffect, useState } from 'react'
import Table4 from 'src/components/table/Table4'
import Transaction from 'src/components/transactional/Transaction'

const TransactionReceipt = () => {
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
    <Transaction data={{ header:[{ key: 'Receipt Number', value: 'REC_VP_000001' }] ,list:[
            { key: 'Subscription', value: 'Insert' },
            { key: 'Date', value: 'Year, Day at Time of Purchase' },
            { key: 'Paid with', value: 'Insert' },
            { key: 'Name', value: 'Insert' },
            { key: 'Surname', value: 'Insert' },
            { key: 'Username', value: 'insert@insert.com' }
          ], tableItems:['Mango', '1  x  $12,34', '$12,34']}} />
   </div>
  )
}

export default TransactionReceipt