import React from 'react'
import { BiFingerprint } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import webcam from './components/Webcam';

export default function Fetchpage() {
  const navigate = useNavigate()
  const faceonclick =() =>{
       navigate('/webcam')
  }

  
  return (
    <div>
      <div
        className="bg-dark mt-5 d-flex justify-content-center m-auto boarder rounded-circle fs-4 py-3 px-2 align-item-center text-light "
        style={{ width: 70, height: 70 }}
      >
        EHL
      </div>
      <div className="d-flex  algin-item-center justify-content-center text-wrap" >
        <h2 className="d-flex align-item-center" style={{width:200}}>Fetch Paitent Emergency Record</h2>
      </div>
      <div className="d-flex  algin-item-center justify-content-center  bg-body">
        <div className="w-lg-50 p-lg-5 border rounded-3 mt-lg-5 shadow p-lg-3 mb-5  rounded">
          <div className='d-flex border fs-1 mx-2 p-2 g-3' style={{fontSize:40}}>
          <BiFingerprint className='border mx-2 fs-1 text-decoration-none' />
          <CiFaceSmile className='border mx-2' onClick={faceonclick}/>
          <BsFillEyeFill className='border mx-2 fs-1'/>
          </div>
          <div clasName=" ">
          <BiFingerprint className='text-center  fs-1 text-success mt-4  fw-bold' style={{marginLeft:80}}/>
          </div>
          
          <p className='text-center fw-bold mt-2'>Scan Fingerprint</p>
          </div>
      </div>
    </div>
  )
}
