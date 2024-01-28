import React from 'react'
import { BiFingerprint } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function FetchPatientEmergencyRecord() {
  const navigate = useNavigate()
  const fingeronclick =() =>{
       navigate('/patientinfo')
  }
  const faceonclick =() =>{
    navigate('/hospital/fetchPatientEmergencyRecord/face')
}

  
  return (
    <div>
      <div
        className="bg-dark fs-2 rounded-circle text-light p-5 mt-5 m-auto d-flex align-items-center justify-content-center "
        style={{ width: 70, height: 70 }}
      >
        EHL
      </div>
      <div className="mt-4 text-center d-flex align-item-center justify-content-center " >
        <h2>Fetch Patient Emergency Record</h2>
      </div>
      <div className="mx-md-auto mx-5 border rounded shadow mt-5 " style={{"max-width":"500px"}}>
          
          
          
          <div className='d-flex align-item-center justify-content-center'>
            <BiFingerprint size={70} className=' text-success mt-4  fw-bold' />
          </div>
          <Link to="/hospital/auth/otp">
          <p className='text-center fw-bold mt-2'>Scan Fingerprint</p>  </Link>
          <Link to="/hospital/fetchPatientEmergencyRecord" style={{ color:"black" }}>
          <p className='text-center fw-bold mt-2'>Back</p>
          </Link> 
        </div>
        
      </div>
    
  )
}
