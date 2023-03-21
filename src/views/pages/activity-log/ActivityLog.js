import React, { useEffect, useState } from 'react'
import ActivityLogs from 'src/components/viewAllActivity/ActivityLogs'
import { SlCalender } from 'react-icons/sl'
import TableHeaderDataFilteringAndExportingRow from 'src/components/TableHeaderDataFilteringAndExportingRow.js/TableHeaderDataFilteringAndExportingRow'
import Table4 from 'src/components/table/Table4'
import { useLocation } from 'react-router-dom'
const ActivityLog = () => {
  const location = useLocation()
  console.log(location)
  const [data,setData]=useState([])
  // const [columns,setColumns]=useState([])
  const columns = [
    { name: "ID", options: { filterOptions: { fullWidth: true } } },
    "Activity_Type","Title","Description","Date_Time"];
  
  useEffect(() => {
    const data = [];
     for (var i = 0; i < 100; i++) {
      let arr = ['#'+i, 'Type', 'Calender Updated', 'Description', '2023-03-16 05:15:65']
      data.push(arr)
    }
    setData(data)
  }, [])
  return (
    <>
      
      {/*
      <div className="w-100 py-3">
        <TableHeaderDataFilteringAndExportingRow />
      </div>
      <ActivityLogs
        data={[
          { icon: <SlCalender />, label: 'calender update', updateTime: 'just now' },
          { icon: <SlCalender />, label: 'commented on post', updateTime: 'just now' },
          { icon: <SlCalender />, label: 'order 392 shiped', updateTime: 'just now' },
          { icon: <SlCalender />, label: 'invoice 653 has been paid', updateTime: '2 hour ago' },
          { icon: <SlCalender />, label: 'a new user has been added', updateTime: 'just now' },
          {
            icon: <SlCalender />,
            label: 'completed task "pick up dry cleaning"',
            updateTime: 'just now',
          },
          { icon: <SlCalender />, label: 'saved the world', updateTime: 'just now' },
          {
            icon: <SlCalender />,
            label: 'completed task "fix error on sales page"',
            updateTime: 'just now',
          },
        ]}
      /> */}
      <div className='p-1'>
      <Table4
          tableTitle={''}
          tableData={data}
          tableColumns={columns}
          tableBodyHeight="100vh"
          tableBodyMaxHeight="56vh"
        />
      </div>
    </>
  )
}

export default ActivityLog
