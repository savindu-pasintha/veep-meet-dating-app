import React, { useEffect, useState } from 'react'

import Table2 from 'src/components/table/Table2'
import Table4 from 'src/components/table/Table4'

const NotificationList = () => {
  const [data, setData] = useState([[]])
  useEffect(() => {
    var arrr = []

    for (let i = 0; i < 12; i++) {
      var arr = [
        '#'+i,
        'Custom',
        'Veeper',
        'abx',
        '25/01/2019 05:12',
        <>
          <span style={{ color: '#4189DD' }} onClick={(e)=>{console.log( '#'+i,"view")}}>View </span>
          <br />
          <span style={{ color: '#1C8104' }} onClick={(e)=>{console.log( '#'+i,"Email")}}>Email</span>
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
      tableColumns={[
        'Notification No.',
        `Notification Type`,
        `Notification Target`,
        `Notification Title`,
        `Date Time`,
        `Action`,
      ]}
      tableData={data}
      tableBodyHeight="70%"
      tableBodyMaxHeight="56vh"
      onRowClickHandle={(rowData, rowMeta) => {
        console.log('/dashboard/user/biz-profile', { state: { rowData, rowMeta } })
      }}
    />
   </div>
  )
}

export default NotificationList
