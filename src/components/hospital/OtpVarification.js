
import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { login } from "../api/userAuth";

export default function FetchByAadharId() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    addharID: Yup.string().required('Required'),
    
  })

  const onSubmit= async (values) => {
    // localStorage.removeItem("token")
    // const response = await login(values.addharID, values.password);

    // localStorage.setItem("token", response.token);
    // console.log(response.token)
    
    // if(response.token){
    //   navigate('/');
    // }
    // else{
    //   alert("Invalid Credential");
    // }
       
    navigate('/hospital/patientinfo')

  
  }

  const formik = useFormik({
    initialValues: {
      addharID: '',
      // password: '',
    },
    onSubmit,
    validationSchema,
  })
  
  return (
    <div>
      <div
        className="bg-dark mt-5 d-flex justify-content-center m-auto boarder rounded-circle fs-4 py-3 px-2 align-item-center text-light "
        style={{ width: 70, height: 70 }}
      >
        EHL
      </div>
      <div className="d-flex  algin-item-center justify-content-center">
        <h2>OTP Varification</h2>
      </div>
      <div className="d-flex  algin-item-center justify-content-center  bg-body">
        <div className="w-lg-25 p-lg-5 border rounded-3 mt-lg-5 shadow p-lg-3 mb-5  rounded">
          <Form className="" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicaddharID">
              <Form.Label className="fw-bold">Enter Otp*</Form.Label>
              <Form.Control
                type="text"
                name="otp"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.addharID}
                placeholder="Enter otp"
              />
              {formik.touched.otp && formik.errors.otp ? (
                <div className="error">{formik.errors.otp}</div>
              ) : null}
            </Form.Group>

            <p><Link to="/hospital/resetPass" style={{ color: 'black', textDecoration:'none' }}>
                <strong className='text-decoration-none fw-normal' >
                  Reset Password
                </strong>
              </Link></p>
            

            <Button variant="primary" type="submit" className="w-100 fw-bold">
              Submit
            </Button>
            <p className='d-flex justify-content-center mt-3'>
             
              <Link to="/hospital/fetchPatientEmergencyRecord" style={{color: 'black' }}>
                <strong>
                  Back
                </strong>
              </Link>
              </p>
          </Form>
        </div>
      </div>
    </div>
  )
}


