import React, { useEffect, useState } from 'react'
import Table4 from 'src/components/table/Table4'
const PromoCodeIssuedList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    var arrr = []
    for (var y = 0; y < 100; y++) {
      var arr = [
        '#' + y,
        'Custom',
        'Veeper',
        'abx',
        '25/01/2019 05:12',
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
        'Promo Code No.',
        `Promo Code Type`,
        `Promo Code Target`,
        `Promo Code Title`,
        `Date Time`,
        `Action`,
      ]}
      tableBodyHeight="70%"
      tableBodyMaxHeight="56vh"
      onRowClickHandle={(rowData, rowMeta) => {
         console.log('/dashboard/user/veeper-profile', { state: { rowData, rowMeta } })
      }}
    />
   </div>
  )
}

export default PromoCodeIssuedList
