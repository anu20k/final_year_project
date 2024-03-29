import React from 'react'
import { BiFingerprint } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { FaAddressCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function FetchPatientEmergencyRecord() {
  const navigate = useNavigate()
  const onClickFinger =() =>{
       navigate('/hospital/fetchPatientEmergencyRecord/fingerprint')
  }
  const onClickFace =() =>{
    navigate('/hospital/fetchPatientEmergencyRecord/face')
  }
  const onClickAddharId =() =>{
    navigate('/hospital/fetchPatientEmergencyRecord/aadharId')
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
          <div className=' d-flex align-item-center justify-content-evenly border mx-sm-5 mx-2 my-3  py-3 flex-sm-row flex-wrap fs-1' >   
              <BiFingerprint size={70}className='border m-2  text-decoration-none '   onClick={onClickFinger}/>
              <CiFaceSmile size={70} className='border m-2' onClick={onClickFace}/>
              <FaAddressCard  size={70} className='border p-2 m-2 ' onClick={onClickAddharId}/>
          </div>
          
          
        
          <p className='text-center fw-bold mt-2'>Choose an option by click on it...</p>  
          <Link to="/hospital" style={{ color:"black" }}>
          <p className='text-center fw-bold mt-2'>Back</p>
          </Link> 
        </div>
        
      </div>
    
  )
}
