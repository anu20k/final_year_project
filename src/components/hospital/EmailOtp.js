import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { login } from "../api/userAuth";

export default function EmailOtp() {
  const navigate = useNavigate();


  const onSubmit= async (values) => {
    // localStorage.removeItem("token")
    // const response = await login(values.aadharID, values.password);

    // localStorage.setItem("token", response.token);
    // console.log(response.token)
    
    // if(response.token){
      navigate('/hospital/patientAllRecords');
    // }
    // else{
      alert("Invalid Credential");
    // }
       

  
  }

  const formik = useFormik({
    initialValues: {
      aadharID: '',
     
    },
    onSubmit,
   
  })
  // console.log('Form values', formik.values)
  return (
    <div>
      <div
        className="bg-dark mt-5 d-flex justify-content-center m-auto boarder rounded-circle fs-4 py-3 px-2 align-item-center text-light "
        style={{ width: 70, height: 70 }}
      >
        EHL
      </div>
      
      <div className="d-flex  algin-item-center justify-content-center  bg-body">
        <div className="w-lg-25 p-lg-5 border rounded-3 mt-lg-5 shadow p-lg-3 mb-5  rounded">
          <Form className="" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicaadharID">
              <Form.Label className="fw-bold">Enter Email*</Form.Label>
              <Form.Control
                type="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter Adhar ID"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </Form.Group>

           
            

            <Button variant="primary" type="submit" className="w-100 fw-bold">
              Send OTP
            </Button>
            
          </Form>
        </div>
      </div>
    </div>
  )
}
