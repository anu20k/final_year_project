import React, { useState } from 'react'
import Webcam from 'react-webcam'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { checkFace } from "./api/faceapi";

const WebcamComponent = () => <Webcam />



const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const Webcam1 = () => {
  const navigate = useNavigate()
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
 
  const capture = React.useCallback(() => {
    
    const pictureSrc = webcamRef.current.getScreenshot()
    console.log(pictureSrc)
    setPicture(pictureSrc)
    
    const body = checkFace(pictureSrc)
    console.log(body)
  })
  return (
    <div>
      <h2 className="mb-5 text-center">
        Take image
      </h2>
      <div className='d-flex  justify-content-center'>
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
      <div className='d-flex  justify-content-center mt-3'>
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
export default Webcam1;