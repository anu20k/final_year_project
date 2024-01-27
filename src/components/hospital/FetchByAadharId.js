import React from 'react'
import { Link } from 'react-router-dom';

export default function FetchPatientEmergencyRecord() {
 
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
          
          
          
          
          <p className='text-center fw-bold mt-2'>Enter Addhar Id : </p> 
           
          <Link to="/hospital/fetchPatientEmergencyRecord" style={{ color:"black" }}>
          <p className='text-center fw-bold mt-2'>Back</p>
          </Link> 
        </div>
        
      </div>
    
  )
}
