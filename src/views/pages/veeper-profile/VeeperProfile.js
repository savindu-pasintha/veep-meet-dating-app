import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ImageCropModel from 'src/components/imageCropModel/ImageCropModel'
import ProfileDetails from 'src/components/profileDetails/ProfileDetails'
import Table4 from 'src/components/table/Table4'
import ViewActityLog from 'src/components/viewAllActivity/ViewActityLog'

const VeeperProfile = () => {
  const location = useLocation()
  console.log(location)
  const [data, setData] = useState([])
  // const [columns,setColumns]=useState([])
  const columns = [
    { name: 'ID', options: { filterOptions: { fullWidth: true } } },
    'Activity_Type',
    'Title',
    'Description',
    'Date_Time',
  ]

  useEffect(() => {
    const data = []
    for (var i = 0; i < 100; i++) {
      let arr = ['#' + i, 'Type', 'Calender Updated', 'Description', '2023-03-16 05:15:65']
      data.push(arr)
    }
    setData(data)
  }, [])
  return (
    <div className='p-0 m-0'>
    
      <>
        <ProfileDetails
          column1={[
            { key: 'Name', value: '' },
            { key: 'Surname', value: '' },
            { key: 'Age', value: '' },
            { key: 'DOB', value: '' },
            { key: 'User No', value: '' },
            { key: 'Password', value: '**********' },
            { key: 'Phone Number', value: '' },
            { key: 'Total Receipts:', value: '$5000,00' },
            { key: 'Total Refunds', value: '$5,00' },
            { key: 'Dating/Friendship', value: '' },
            { key: 'Gender', value: 'Insert Gender' },
            { key: 'Vegan  Scale', value: 'Insert Scale' },
            { key: 'Hobbies', value: 'Insert Hobby' },
            { key: 'Motto | Job Title', value: 'Insert Motto' },
            { key: 'About Description', value: 'Loremp ipsum etc etc et etc' },
            { key: '', value: '' },
            { key: 'Email Subscriptions', value: '' },
            { key: 'New Matches', value: 'On' }, 
            { key: 'New Messages', value: 'Off' },
            { key: 'Promotions', value: 'Off' }, 
            { key: '', value: '' },
            { key: 'View Style', value: '' },
            { key: 'Distance', value: '' }, 
            { key: 'Include Offerings', value: 'Yes' },
            { key: 'Show me age bracket', value: '20-35' }, 
            { key: 'Account Date & Time Last Active, value'},
           
          ]}
          column2={[
            { key: 'Subscription Duration', value: '3' },
            { key: 'Complaint/Support Queries', value: '2' },
            { key: 'Banned', value: 'Yes/No' },
            { key: 'Warnings', value: '1' },
            { key: 'Sexuality', value: 'Insert Sexuality' },
            { key: 'Neighbourhood', value: '' },
            { key: 'Show me', value: 'Woman' },
            { key: 'Location', value: 'Insert City, State/Province, Country' },
            { key: 'Website', value: 'Insert URL or N/A' },
            { key: 'Facebook', value: 'Insert Linkedin handle or N/A' },
            { key: 'Linkedin', value: 'Insert Linkedin handle or N/A' },
            { key: 'Snapchat', value: 'Insert Snapchat handle or N/A' },
            { key: 'Twitter', value: 'Insert Twitter URL or N/A' },
            { key: 'Account', value: 'Peach' },
            { key: 'Show Distance in', value: 'Km' },
            { key: 'Share My Feed', value: 'On' },
            { key: 'Recommended Sort', value: 'Off' },
            { key: 'Show me in Top Picks', value: 'On' },
            { key: 'Automated Decline Message', value: 'Off' },
            { key: 'Active Status', value: 'On' },
            { key: 'Payment Account', value: 'VISA' },
            { key: 'Account Upgraded/Downgraded', value: '' },
            { key: 'Date & Time Upgraded/Downgraded', value: '' },
            { key: 'Include other Continents', value: 'No' },
            { key: 'Current Continent', value: 'North America' },
            { key: 'Share Quantity', value: '10' },
            { key: 'Account Date & Time Created', value: '' },
          ]}
        />
      </>
      <div className="p-1">
        {/* <ViewActityLog title={'Veeper Profile'} /> */}
        <Table4
          tableTitle={'Veeper Profile | Activity Logs'}
          tableData={data}
          tableColumns={columns}
          tableBodyHeight="350px"
          tableBodyMaxHeight="56vhx"
        />
      </div>
    </div>
  )
}

export default VeeperProfile
