import React from 'react'
import { SlCalender } from 'react-icons/sl'
import TableHeaderDataFilteringAndExportingRow from '../TableHeaderDataFilteringAndExportingRow.js/TableHeaderDataFilteringAndExportingRow'
import ActivityLogs from './ActivityLogs'

const ViewActityLog = ({title}) => {
  return (
    <div>
      <div className="w-100 py-3">
        <TableHeaderDataFilteringAndExportingRow />
      </div>
      <div className="w-100 py-3 px-4">
        <span className="font_2 d-flex">{title && title} | Activity Log</span>
      </div>
      <div className="w-100 py-3 px-3">
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
        />
      </div>
    </div>
  )
}

export default ViewActityLog