import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table4 from 'src/components/table/Table4'

const Veepers = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [columns, setColumns] = useState([
    { name: 'User  No.', label: 'User_No.', options: { filterOptions: { fullWidth: true } } },'User','User_Id',
    {
      label: 'User_Name_&_Surename',
      name: 'User Name & Surename',
    },
    `Account`,
    `Date_&_Time_Created`,
    `Date_&_Time_Last_Active`,
    `Continent`,
    `Country_&_State/Province`,
    'City',
    `Age`,
    'DOB',
    'Email',
    'Phone_Number',
    'Total_Receipts',
    'Total_Refunds',
    'Dating/Friendship',
    'Gender',
    'Vegan_Scale',
    'E_Subscription_New_Matches',
    'E_Subscription_New_Messages',
    'E_Subscription_Promotions',
    'View_Style',
    'Distance',
    'Include_Offerings',
    'Show_Me_Age_Bracket',
    'Subscription_Duration',
    'Banned_Yes/No',
    'Warning',
    'Sexuality',
    'Show_me_Gender',
    'Facebook',
    'Linkedin',
    'Snapchat',
    'Twitter',
    'Show_Distance_in',
    'Share_My_Feed',
    'Recommended_Sort',
    'Show_me_in_top_Picks',
    'Active_Status',
    'Payment_Account',
    'Upgrade/Downloaded',
    'Date_&_time_Upgrade/Downloaded',
    'Include_Other_Countries',
    'Share_Quantity',
    'Action',
  ])

  useEffect(() => {
    var arrr = []
    var arr = [
      '#1','12','f4',
      'Karlind Govender',
      'Peach',
      '2021-03-14 05:24:00',
      '2021-03-14 05:24:00',
      'Africa',
      'South Africa Western Cape',
    ]
    var l = arr.length
    for (var i = 0; i < (43 - l+2); i++) {
      arr.push('Etc')
    }
    arr.push(
      <>
        <span
          style={{ color: '#2D2D2D' }}
          onClick={(e) => {
            console.log('#' + i, 'Active')
          }}
        >
          Active{' '}
        </span>
        <br />
        <span
          style={{ color: '#F70606' }}
          onClick={(e) => {
            console.log('#' + i, 'Warning')
          }}
        >
          Warning
        </span>
        <br />
        <span
          style={{ color: '#4189DD' }}
          onClick={(e) => {
            console.log('#' + i, 'View More')
          }}
        >
          View More
        </span>
        <br />
        <span
          style={{ color: '#1C8104' }}
          onClick={(e) => {
            console.log('#' + i, 'Ban')
          }}
        >
          Ban
        </span>
      </>,
    )

    for (var y = 0; y < 100; y++) {
      arrr.push(arr)
    }
    setData(arrr)
  }, [])
  return (
    <div className='p-1'>
      <Table4
      tableTitle={''}
      tableData={data}
      tableColumns={columns}
      tableBodyHeight="70%"
      tableBodyMaxHeight="56vh"
      onRowClickHandle={(rowData, rowMeta) => {
        navigate('/dashboard/user/veeper-profile', { state: { rowData, rowMeta } })
      }}
    />
    </div>
  )
}

export default Veepers
