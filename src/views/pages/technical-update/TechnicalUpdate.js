import React, { useEffect, useState } from 'react'
import Table4 from 'src/components/table/Table4'

const TechnicalUpdate = () => {
  const [data, setData] = useState([[]])
  useEffect(() => {
    var arrr = []
    for (let i = 0; i < 12; i++) {
      var arr = ['#' + i, 'Custom', '25/01/2019 14:05']
      arrr.push(arr)
    }
    setData(arrr)
  }, [])
  return (
    <div className='p-1'>
      <Table4
      tableTitle={''}
      tableData={data}
      tableColumns={['Update No.', `Update Name`, `Date Time`]}
      tableBodyHeight="70%"
      tableBodyMaxHeight="56vh"
      onRowClickHandle={(rowData, rowMeta) => {}}
    />
    </div>
  )
}

export default TechnicalUpdate
