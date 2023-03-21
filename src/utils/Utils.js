export const remapTableColumns = (arr) => {
  let arrr = []
  if (arr && arr.length > 0) {
    arr.map((item, ind) => {
      if (item) arrr.push({ index: ind, name: item, isSort: false, enable: false, search: false })
    })
    if (arrr && arrr.length > 0) return arrr
  }
}
/** Table2 Component */
export const muiTableHeaderColumnsReFormat = (arr) => {
  let arrr = []
  if (arr && arr.length > 0) {
    arr.map((item, ind) => {
      if (item)
        arrr.push({
          id: item,
          label: item,
          minWidth: 200,
          align: 'left',
          format: (value) => value.toLocaleString('en-US'),
          index: ind,
          name: item,
          isSort: false,
          enable: false,
          search: false,
        })
    })
    if (arrr && arrr.length > 0) return arrr
  }
}

export const muiTableBodyRowDataRemap = (arr) => {
  // let arrr = []
  // if (arr && arr.length > 0) {
  //   arr.map((item, ind) => {
  //     if (item) arrr.push([])
  //   })
  //   if (arrr && arrr.length > 0) return arrr
  // }
}

export const emailaValidation = (eamil) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eamil)) {
    return true
  }
  return false
}

export const getToken = window.localStorage.getItem('token')
export const getAuthUserdata = () => {
  if (window.localStorage.getItem('user_data')) {
    return JSON.parse(window.localStorage.getItem('user_data'))
  }
  return false
}
export const useAuthLocalStorage = () => {
  if (getToken) {
    return true
  } else {
    return false
  }
}

export const DatePickerUserChangeDateFormatedForThePassAPI = (e)=>{
  var date = new Date(e["$d"]);
  return  date.getFullYear()  + '-' +  (date.getMonth() + 1)  + '-' + date.getDate();
}

export const validateFromDateTodate = (fromDateStr, toDateStr) => {
  const fromDate = new Date(fromDateStr)
  const toDate = new Date(toDateStr)
  if (fromDate < toDate) {
    return true
  } else {
    return false
  }
}

export const tableColumnsDataReFormatted = (columnsData) => {
  var newColumns = []
  newColumns = columnsData.map((values, ind) => {
    if (values) {
      return {
        label: (
          <p className="text-capitalize" style={{ color: '#FFF' }}>
            {values}
          </p>
        ),
        name: values,
      }
    }
  })
  return newColumns
}