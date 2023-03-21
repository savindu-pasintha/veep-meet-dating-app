import React, { useState, useEffect } from 'react'

import Table2 from 'src/components/table/Table2'
import Table4 from 'src/components/table/Table4'

const ComplaintsAndSupport = () => {
  const [data, setData] = useState([[]])
  useEffect(() => {
    var arrr = []

    for (let i = 0; i < 12; i++) {
      var arr = ['#' + i, 'veepers', '25/01/2019 25/01', 'open', 'abx']
      arrr.push(arr)
    }
    setData(arrr)
  }, [])
  return (
    <div className='p-1'>
      <Table4
      tableTitle=''
      tableColumns={[
        'Ticket No.',
        `Ticket Category`,
        `Date Time`,
        `Ticket Status`,
        `Ticket Responsibility`,
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
export default ComplaintsAndSupport
