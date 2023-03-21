import React from 'react'


const Transaction = ({items=['Backup', 'Excel', 'PDF', 'CSV', 'Print'],onClickhandleChange}) => {
  return (
    <div className="row p-0 m-0">
      <div className="col-12 d-flex justify-content-center">
        <div className="d-flex">
          {items &&
            items.length &&
            items.map((item, ind) => (
              <button
                key={ind}
                className="mx-2 font-4 horizontal_button_list"
                onClick={(e) => onClickhandleChange}
              >
                {item}
              </button>
            ))}
        </div>
      </div>
      <div className="col-6 p-0 m-0">
        <div className="row my-3 text-center">
          <svg
            id="Group_2701"
            data-name="Group 2701"
            width="140.067"
            height="115.175"
            viewBox="0 0 140.067 115.175"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                y1="-0.547"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#109b11" />
                <stop offset="0.379" stopColor="#6ec321" />
                <stop offset="1" stopColor="#0f76af" />
              </linearGradient>
            </defs>
            <path
              id="Path_3016"
              data-name="Path 3016"
              d="M3398.511,1909.48a18.987,18.987,0,0,1-28.66,0L3345,1882.036l-15.919-17.582a7.664,7.664,0,0,1,0-10.046,6.033,6.033,0,0,1,9.1,0l10.058,11.109.172.2v0l29.157,32.2a8.779,8.779,0,0,0,13.236,0l19.531-21.568,9.625-10.63c7.485-8.267-3.885-20.827-11.374-12.559l-24.4,26.949-18.719-20.67v0l-15.918-17.582a21.1,21.1,0,0,0-31.834,0h0c-8.748,9.662-8.748,25.5,0,35.161l15.919,17.582,24.848,27.448c14.149,15.629,37.241,15.645,51.408,0l17.265-19.067-12.871-10.908Z"
              transform="translate(-3311.151 -1818.595)"
              fill="url(#linear-gradient)"
            />
            <path
              id="Path_3017"
              data-name="Path 3017"
              d="M3552.27,1754.819a34.631,34.631,0,0,0-52.3,0l-3.937,4.347-3.937-4.347c-13.152-14.52-31.832-14.966-45.455-5.885,8.02-2.885,18.2.892,25.718,9.2l8.364,9.242,7.986,8.815,7.324,8.09c8.621-9.523,6.683-7.386,15.294-16.92,12.908-14.232,35.655-4.468,35.686,16.344a24.3,24.3,0,0,1-6.117,16.32l-4.585,5.063,12.544,11.27,3.413-3.769a44.033,44.033,0,0,0,0-57.774Z"
              transform="translate(-3423.003 -1742.865)"
              fill="url(#linear-gradient)"
            />
          </svg>
        </div>
        <div className="row text-center p-0">
          {[{ key: 'Receipt Number', value: 'REC_VP_000001' }].map((item, ind) => (
            <label className="p-0 m-0">
              {item && item?.key}:{item && item?.value}
            </label>
          ))}
        </div>
        <div className="row p-0 mx-1">
          {[
            { key: 'Subscription', value: 'Insert' },
            { key: 'Date', value: 'Year, Day at Time of Purchase' },
            { key: 'Paid with', value: 'Insert' },
            { key: 'Name', value: 'Insert' },
            { key: 'Surname', value: 'Insert' },
            { key: 'Username', value: 'insert@insert.com' },
          ].map((item, ind) => (
            <div>
              <label>
                {item && item?.key}:{item && item?.value}
              </label>
            </div>
          ))}
        </div>

        <div className="row p-2 mx-1">
          <table class="table table-bordered">
            <thead>
              <tr>
                {['Item', 'Quantity', 'Price'].map((item, ind) => (
                  <th scope="col" className="text-center " style={{ backgroundColor: '#9D9B9D' }}>
                    {item && item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {['Mango', '1  x  $12,34', '$12,34'].map((item, ind) => (
                  <td scope="col" className="text-center ">
                    {item && item}
                  </td>
                ))}
              </tr>
              <tr>
                <td colspan="2" className="text-end " styles={{ fontWeight: '800' }}>
                  Tax
                </td>
                <td className="text-center">$0,68</td>
              </tr>
              <tr>
                <td colspan="2" className="text-end" styles={{ fontWeight: '800' }}>
                  Total
                </td>
                <td className="text-center">$12,68</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Transaction
