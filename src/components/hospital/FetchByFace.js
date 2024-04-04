import React, { useState } from 'react'
import Webcam from 'react-webcam'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { checkFace } from '../api/faceapi'

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const FetchByFace = () => {
  const navigate = useNavigate()
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const [data, setData] = useState('')

  const capture = React.useCallback(async () => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)

    const dataUriParts = pictureSrc.split(',')
    const mimeType = dataUriParts[0].match(/:(.*?);/)[1]
    const byteString = atob(dataUriParts[1])
    const arrayBuffer = new ArrayBuffer(byteString.length)
    const uint8Array = new Uint8Array(arrayBuffer)

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i)
    }

    const blob = new Blob([uint8Array], { type: mimeType })

    // Create a File object (optional)
    const fileName = 'screenshot.jpg' // Specify the desired file name
    const file = new File([blob], fileName, { type: mimeType })

    // Set the Blob or File object in the FormData
    const formData = new FormData()
    formData.append('File1', file || blob)

    const body = await checkFace(formData)
    const label = body.result[0]._label
   
    localStorage.setItem('aadharId', label)
    navigate('/hospital/patientinfo')
  })
  return (
    <div>
      <h2 className="mb-5 text-center">Take image</h2>
      <div className="d-flex  justify-content-center">
        {picture == '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div className="d-flex  justify-content-center mt-3">
        {picture != '' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture()
            }}
            className="btn btn-primary d-flex  justify-content-center"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-success d-flex"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  )
}
export default FetchByFace
