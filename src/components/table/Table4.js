import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CustomFromToDatePicker } from '../dateRanger/CustomDatePicker'
import { useLocation, useOutletContext } from 'react-router-dom'
import { DatePickerUserChangeDateFormatedForThePassAPI, tableColumnsDataReFormatted } from 'src/utils/Utils'


const getMuiCustomizedTheme = createTheme({
  
  components: {
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          backgroundColor: '#464545',
          color: 'white',
          padding: '0px 0px 0px 10px',
          justifyContetnt:"center"
        },
        toolButton: {
          backgroundColor: '#464545',
          color: 'white',
          textAlign:'center'
        },
        sortAction: {
          '& path': {
            color: "white" // or whatever you need
          }, 
          }, 
        
      },
    },
   
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF',
          color:"",
          width: '20%',
          paddingLeft: '10px',
          borderRight:"1px solid #D8D5D5",
          borderBottom:"1px solid #D8D5D5",
          cursor:"pointer"
        },
      },
    },
  },
})

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
})

const Table4 = ({
  tableTitle="data",
  tableData,
  tableColumns,
  tableBodyHeight = '400px',
  tableBodyMaxHeight = '800px',
  onRowClickHandle,
}) => {
  const outLetProps = useOutletContext();
  // console.log('\n',outLetProps)
  const location = useLocation()
  const path = location?.pathname
  const [responsive, setResponsive] = useState('vertical')
  const [searchBtn, setSearchBtn] = useState(true)
  const [downloadBtn, setDownloadBtn] = useState(true)
  const [printBtn, setPrintBtn] = useState(true)
  const [viewColumnBtn, setViewColumnBtn] = useState(true)
  const [filterBtn, setFilterBtn] = useState(true)
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")

  const tableColumnsData = tableColumnsDataReFormatted(tableColumns)
  console.log(tableColumnsData)

  const columns = [
    { name: 'Name', options: { filterOptions: { fullWidth: true } } },
    'Title',
    'Location',
  ]
  const data = [
    ['Gabby George', 'Business Analyst', 'Minneapolis'],
    [
      'Aiden Lloyd',
      "Business Consultant for an International Company and CEO of Tony's Burger Palace",
      'Dallas',
    ],
    ['Jaden Collins', 'Attorney', 'Santa Ana'],
    ['Franky Rees', 'Business Analyst', 'St. Petersburg'],
    ['Aaren Rose', null, 'Toledo'],
    ['Johnny Jones', 'Business Analyst', 'St. Petersburg'],
    ['Jimmy Johns', 'Business Analyst', 'Baltimore'],
    ['Jack Jackson', 'Business Analyst', 'El Paso'],
    ['Joe Jones', 'Computer Programmer', 'El Paso'],
    ['Jacky Jackson', 'Business Consultant', 'Baltimore'],
    ['Jo Jo', 'Software Developer', 'Washington DC'],
    ['Donna Marie', 'Business Manager', 'Annapolis'],
  ]
  const options = {
    search: searchBtn,
    searchPlaceholder: 'Search ....',
    selectableRows: false,
    download: downloadBtn,
 
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: 'dropdown',
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    sortFilterList: true,
    textLabels: {
      body: {
        noMatch: tableData.length > 0  ? "" : "",
      }
    },
    // onTableChange: (action, state) => {
    // },
    downloadOptions: {
      filename: `${tableTitle}.csv`,
      filterOptions:{
        useDisplayedColumnsOnly:true,
        useDisplayedRowsOnly:true
      }
    },
    onRowClick: (rowData, rowMeta = { dataIndex, rowIndex }) => {
      onRowClickHandle(rowData, rowMeta)
    },
    onDownload: (buildHead, buildBody, columns, data) => {
      var headerColumnsReformat = []
      headerColumnsReformat = columns.filter((val,ind)=>{
        if(val.name){val["label"] = val.name; return val}
      })
       return `${buildHead(headerColumnsReformat)}${buildBody(data)}`.trim();
       },
  }

  return (
    <>
      {[
        '/dashboard/user/businesses',
        '/dashboard/user/veepers',
        '/dashboard/transaction-info/list',
        '/dashboard/transaction-info/refunds',
        '/dashboard/promo/issued-list',
        '/dashboard/notification/list',
        '/dashboard/activity-log',
        '/dashboard/technical-update',
        '/dashboard/complaints-and-supports',
        '/dashboard/user/pre-users',
        "/dashboard/transaction-info/reciepts",
        "/dashboard/transaction-info/credit-note"
      ].includes(path) == false && (
        <div className="col-md-12 com-xs-12  p-0 mx-0 my-2">
          <div className="row p-0 mx-4 justify-content-end">
            <CustomFromToDatePicker getFrom={(e)=>{ 
              if(e && e["$d"])
                setFromDate(DatePickerUserChangeDateFormatedForThePassAPI(e))
            }}

              getTo={(e)=>{ console.log(Object.keys(e))
                if(e && e["$d"])
                setToDate(DatePickerUserChangeDateFormatedForThePassAPI(e))
              }} />
          </div>
        </div>
      )}
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={getMuiCustomizedTheme}>
          <MUIDataTable
            title={tableTitle ? tableTitle : ''}
            data={tableData}
            columns={tableColumns}
            options={options}
          />
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default Table4
