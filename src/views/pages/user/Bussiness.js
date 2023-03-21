import React, { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import Table4 from 'src/components/table/Table4'

const Bussiness = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  // const [columns, setColumns] = useState([
  //   { name: 'User  No.', label: 'User_No.', options: { filterOptions: { fullWidth: true } } },
  //   {
  //     label: 'User_Name_&_Surename',
  //     name: 'User Name & Surename',
  //   },
  //   `Account`,
  //   `Date_&_Time_Created`,
  //   `Date_&_Time_Last_Active`,
  //   `Continent`,
  //   `Country_&_State/Province`,
  //   'City',
  //   `Age`,
  //   'DOB',
  //   'Email',
  //   'Phone_Number',
  //   'Total_Recipts',
  //   'Total_Refunds',
  //   'Dating/Friendship',
  //   'Gender',
  //   'Vegan_Scale',
  //   'E_Subscription_New_Matches',
  //   'E_Subscription_New_Messages',
  //   'E_Subscription_Promotions',
  //   'View_Style',
  //   'Distance',
  //   'Include_Offerings',
  //   'Show_Me_Age_Bracket',
  //   'Subscription_Duration',
  //   'Banned_Yes/No',
  //   'Warning',
  //   'Sexuality',
  //   'Show_me_Gender',
  //   'Facebook',
  //   'Linkedin',
  //   'Snapchat',
  //   'Twitter',
  //   'Show_Distance_in',
  //   'Share_My_Feed',
  //   'Recommended_Sort',
  //   'Show_me_in_top_Picks',
  //   'Active_Status',
  //   'Payment_Account',
  //   'Upgrade/Downloaded',
  //   'Date_&_time_Upgrade/Downloaded',
  //   'Include_Other_Countries',
  //   'Share_Quantity',
  //   'Action',
  // ])

  const [columns, setColumns] = useState([
    'User_No.','User','User_Id',
    `Product/Service_Username`,
    `Account`,
    `Date_&_Time_Created`,
    `Date_&_Time_Last_Active`,
    `Continent`,
    `Country_&_State/Province`,
    'City',
    `Product_Service_Type`,
    'Overview PDF',
    'Email',
    'Phone_Number',
    'Total_Receipts',
    'Total_Refunds',
    'E-Subscription_New_Matches',
    'E-Subscription_New_Messages',
    'E-Subscription_Promotions',
    'View_Style',
    'Distance',
    'Include_Offerings',
    'Show_Me_Age_Bracket',
    'Subscription_Duration',
    'Compl/Support Queries',
    'Banned_Yes/No',
    'Warning',
    'Show_me_Sexuality',
    'Show_me_Gender',
    'Facebook',
    'Linkedin',
    'Snapchat',
    'Twitter',
    'Show_Distance_in',
    'Share_My_Feed',
    'Recommended_Sort',
    'Show_me_in_top_Picks',
    'Automated_Away_Messages',
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
      '#1233','12','f4',
      'savindu pasintha',
      '5665500',
      '2021-03-14 05:24:00',
      '2021-03-14 05:24:00',
      'ectttt',
      'Africa',
      'Colombo',
      '24',
      '1888-05-12',
      'example@gmail.com',
      '+94787578799',
      '58',
      'ect',
      'mail',
      'ect',
    ]
    for (let i = arr.length; i < columns.length - 1; i++) {
      arr.push('Ect')
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
    for (let i = 0; i < 12; i++) {
      arrr.push(arr)
    }
    setData(arrr)
  }, [])
  return (
<div className='p-1'>
<Table4
      tableTitle={''}
      tableBodyHeight="70%"
      tableBodyMaxHeight="56vh"
      onRowClickHandle={(rowData, rowMeta) => {
        navigate('/dashboard/user/biz-profile', { state: { rowData, rowMeta } })
      }}
      tableData={data}
      tableColumns={columns}
    />
</div>
  )
}

export default Bussiness
