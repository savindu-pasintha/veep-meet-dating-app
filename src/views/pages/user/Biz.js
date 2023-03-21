import React, { useState ,useEffect} from 'react'
import Table2 from 'src/components/table/Table2'

const Biz = () => {
    const [data, setData] = useState([[]])
    useEffect(() => {
      var arrr = []
      var arr = [
        { value: <span style={{ color: '#52575D' }}>00001</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        { value: <span style={{ color: '#52575D' }}>Etc</span>, color: '#52575D' },
        {
          value: (
            <>
              <span style={{ color: '#4189DD' }}>View </span>
              <br />
              <span style={{ color: '#1C8104' }}>Email</span>
              </>
          ),
          color: '#52575D',
        },
      ]
      for (let i = 0; i < 12; i++) {
        arrr.push(arr)
      }
      setData(arrr)
    }, [])
    return (

       <Table2
        table_columns={[
          'User No.',
          `Product/Service Username`,
          `Account`,
          `Date & Time Created`,
          `Date & Time Last Active`,
          `Continent`,
          `Country & State/Province`,
          'City',
          `Product Service Type`,
          'Overview PDF',
          'Email',
          'Phone Number',
          'Total Recipts',
          'Total Refunds',
          'Dating/Friendship',
          'E-Subscription New Matches',
          'E-Subscription New Messages',
          'E-Subscription Promotions',
          'View Style',
          'Distance',
          'Include Offerings',
          'Show Me Age Bracket',
          'Subscription Duration',
          'Compl/Support Queries',
          'Banned Yes/No',
          'Warning',
          'Show me Sexuality',
          'Show me Gender',
          'Facebook',
          'Linkedin',
          'Snapchat',
          'Twitter',
          'Show Distance in',
          'Share My Feed',
          'Recommended Sort',
          'Show me in top Picks',
          'Automated Away Messages',
          'Show me in top Picks',
          'Active Status',
          'Payment Account',
          'Upgrade/Downloaded',
          'Date & time Upgrade/Downloaded',
          'Include Other Countries',
          'Share Quantity',
          'Action',
        ]}
         table_data={data}
       />
    )
  }

export default Biz
