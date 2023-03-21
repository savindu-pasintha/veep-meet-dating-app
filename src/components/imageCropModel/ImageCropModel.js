import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import './styles.css'
import getCroppedImg from './cropedImage'
import { getAuthUserdata, getToken } from 'src/utils/Utils'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import FormData from 'form-data'

const ImageCropModel = ({ src, handleOpen,from="" }) => {
  const dispatch = useDispatch()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL
  const token = getToken
  const objAuthUserData = getAuthUserdata()

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const onCancel = () => {
    handleOpen({ open: false, srcB64: src })
  }
  const onCrop = async () => {

    //b64 -> file blob
    if(["ProfileDetails"].includes(from) == false){
      const croppedImageUrl = await getCroppedImg(src, croppedAreaPixels)
      if (token && BASE_URL && croppedImageUrl) {
        fetch(croppedImageUrl)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], 'profile.jpeg', { type: 'image/jpeg' })
            save(file)
          })

        const save = (file) => {
          let data = new FormData()
          data.append('profile_picture', file)
          data.append('user_id', objAuthUserData?.user_id)
          data.append('file_extension', 'jpeg')
          /* ...data.getHeaders(), */
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${BASE_URL}/user/image`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: data,
          }

          axios
            .request(config)
            .then((response) => {
              if (response && response.status == 200) {
                console.log(response)
                if (response.data?.success == true) {
                  objAuthUserData['profile_picture'] = croppedImageUrl
                  window.localStorage.setItem('user_data', JSON.stringify(objAuthUserData))
                  dispatch({
                    type: 'setAlert',
                    alert: { type: true, message: 'successfully image uploaded' },
                  })

                  dispatch({
                    type: 'setUserAuthData',
                    userAuthData: objAuthUserData,
                  })
                  handleOpen({ open: false, srcB64: croppedImageUrl })
                }
              } else {
                dispatch({ type: 'setAlert', alert: { type: false, message: '' } })
                handleOpen({ open: false, srcB64: croppedImageUrl })
              }
            })
            .catch((error) => {
              dispatch({ type: 'setAlert', alert: { type: false, message: '' } })
              console.log(error)
              handleOpen({ open: false, srcB64: croppedImageUrl })
            })
        }
      }
    }else{
      handleOpen({ open: false, srcB64: src })
    }
  }

  const onResetImage = () => {}

  return (
    <>
      <div className="popup_screen">
        <div className="popup_box">
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            style={{ containerStyle: {}, mediaStyle: {}, cropAreaStyle: { width: '100px' } }}
            cropShape="rect"
            //   cropSize={width=100,height=100}
            //   disableAutomaticStylesInjection={false}
          />
        </div>
        <div className="controls">
          <input
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e) => {
              setZoom(e.target.value)
            }}
            className="zoom-range"
          />
        </div>
      </div>
      <div className="popup_screen d-flex justify-content-start p-0">
        <button onClick={onCancel} className="crop_button text-center">
          x
        </button>
        <button onClick={onCrop} className="crop_button text-center mx-1">
          save
        </button>
      </div>
    </>
  )
}

export default ImageCropModel
