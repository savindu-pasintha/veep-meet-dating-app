import { Avatar } from '@mui/material'
import React, { useRef, useState } from 'react'
import { getAuthUserdata } from 'src/utils/Utils'
import ImageCropModel from '../imageCropModel/ImageCropModel'


const ProfileDetails = ({column1,column2}) => {
  const objAuthUserData = getAuthUserdata()

  const [src, setSrc] = useState("")
  const refUpload = useRef(null)
  const [open, setOpen] = useState(false)
 
    const handleFileUpload = (event) => {
      const [file] = refUpload.current.files
      if (file) {
        setSrc(URL.createObjectURL(file))
        setOpen(!open)
      }
    }

  return (
    <div className="row p-0 mx-0 mb-5 mt-0">
        {open ? (
          <ImageCropModel
            from="ProfileDetails"
            src={src}
            handleOpen={({ open, srcB64 }) => {
              setOpen(open)
              setSrc(srcB64)
            }}
          />
        ) : (
          ''
        )}
      <div className="col-2 d-flex justify-content-center">

        <input
          ref={refUpload}
          onChange={(e) => handleFileUpload(e)}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
        />

        {refUpload && refUpload.current && src ? (
          <Avatar
            alt="Remy Sharp"
            src={src}
            sx={{ width: 150, height: 150, margin: '1rem 0px 10px 10px' }}
            onClick={(e)=> refUpload.current.click()}
          />
        ) : (
          <svg
            style={{ width: 150, height: 150, margin: '1rem 0px 10px 10px' }}
            width="237.5"
            height="237.5"
            viewBox="0 0 237.5 237.5"
            onClick={(e) => refUpload.current.click()}
          >
            <defs>
              <clipPath id="clip-path">
                <rect width="99.744" height="99.744" fill="none" />
              </clipPath>
            </defs>
            <g id="Group_1390" data-name="Group 1390" transform="translate(-419.5 -298.5)">
              <g id="Profile" transform="translate(419.5 298.5)">
                <g
                  id="Ellipse_96"
                  data-name="Ellipse 96"
                  fill="#464545"
                  stroke="#464545"
                  strokeWidth="2"
                >
                  <circle cx="118.75" cy="118.75" r="118.75" stroke="none" />
                  <circle cx="118.75" cy="118.75" r="117.75" fill="none" />
                </g>
                <g
                  id="Component_6_1"
                  data-name="Component 6 – 1"
                  transform="translate(70.071 41.579)"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Union_1"
                    data-name="Union 1"
                    d="M0,99.744V87.278C0,73.56,22.442,62.339,49.872,62.339S99.744,73.56,99.744,87.278V99.744ZM24.933,24.939A24.936,24.936,0,1,1,49.872,49.872,24.938,24.938,0,0,1,24.933,24.939Z"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g id="Component_208_2" data-name="Component 208 – 2" transform="translate(518 461)">
                <path
                  id="Path_500"
                  data-name="Path 500"
                  d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z"
                  fill="#fff"
                />
                <g id="_" data-name="+" transform="translate(12 12)">
                  <path
                    id="Union_1-2"
                    data-name="Union 1"
                    d="M-4613,16V9h-7V7h7V0h2V7h7V9h-7v7Z"
                    transform="translate(4620)"
                    fill="#464545"
                  />
                </g>
              </g>
            </g>
          </svg>
        )}
      </div>
      <div className="col-5 pt-4">
        <div className="row p-0 mx-1">
          {column1.map((item, ind) => (
            <div key={ind}>
              <label>
              {item && item.key && item.key +":"} {item && item?.value}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="col-5 pt-4">
        <div className="row p-0 mx-1">
          {column2.map((item, ind) => (
            <div key={ind}>
              <label>
              {item && item.key && item.key +":"} {item && item?.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
/*
[
            { key: 'Subscription', value: 'Insert' },
            { key: 'Date', value: 'Year, Day at Time of Purchase' },
            { key: 'Paid with', value: 'Insert' },
            { key: 'Surname', value: 'Insert' },
            { key: 'Username', value: 'insert@insert.com' },
          ]
*/