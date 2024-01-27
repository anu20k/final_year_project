import React from 'react'
import { FaHospitalAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div >
      <div >
        <div
          className="bg-dark fs-2 rounded-circle text-light mt-5 m-auto d-flex align-items-center justify-content-center "
          style={{ width: 120, height: 120 }}>
          EHL
        </div>
        <div className="m-2 fs-2 text-center">
          Emergency Health Link
        </div>
      </div>
       
       <div style={{ width: "100vw", height: "25vh" }} className='d-none d-lg-block'></div>

      <div className="row mt-5 mx-0 ">
        
        <div className="col-12 col-lg-4  text-center h1 fs-1">
        <Link to="/user/auth/login" style={{ textDecoration: 'none',color:"black" }}>
          <FaUser size={100} className='border  rounded-circle p-2  '/>
          <p>User</p>
          </Link>
         </div>
        
         
         
         <div className="col-12 col-lg-4 text-center  h1 fs-1 ">
         <Link to="/hospital" style={{ textDecoration: 'none', color:"black"}} >
          <FaHospitalAlt size={100}className=' p-2 ' />
          <p>Hospital</p>
          </Link>
         </div>
         
         
         
         <div className="col-12 col-lg-4 text-center h1 fs-1 ">
         <Link to="/doctor/auth/login" style={{ textDecoration: 'none',color:"black" }}>
          <FaUserDoctor size={100}className='border  rounded-circle p-2 '/>
          <p>Doctor</p>
          </Link>
          </div>  
        
         
         </div>  
    </div>
  )
}