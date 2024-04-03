import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/userAuth'
import { sendOTP} from '../api/hospitalAuth'

// Mock function to simulate OTP sending

export default function EmailOtp() {
  const navigate = useNavigate()
  

  

  const onSubmit = async (values) => {
    
    
    const response = await sendOTP(values.email)
    localStorage.setItem('email', values.email)
    console.log(response)
    navigate('/hospital/auth/otpverification')
    
  }

  const formik = useFormik({
    initialValues: {
      email: '', 
      
    },
    onSubmit,
  })

  return (
    <div>
      <div
        className="bg-dark mt-5 d-flex justify-content-center m-auto border rounded-circle fs-4 py-3 px-2 align-item-center text-light"
        style={{ width: 70, height: 70 }}
      >
        EHL
      </div>

      <div className="d-flex align-item-center justify-content-center bg-body">
        <div className="w-lg-25 p-lg-5 border rounded-3 mt-lg-5 shadow p-lg-3 mb-5 rounded">
          <Form className="" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Enter Email*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </Form.Group>

            {/* {otpSent && (
              <Form.Group className="mb-3" controlId="formBasicOTP">
                <Form.Label className="fw-bold">Enter OTP*</Form.Label>
                <Form.Control
                  type="text"
                  name="otp"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.otp}
                  placeholder="Enter OTP"
                />
                {formik.touched.otp && formik.errors.otp ? (
                  <div className="error">{formik.errors.otp}</div>
                ) : null}
              </Form.Group>
            )} */}

            
              <Button variant="primary" type="submit" className="w-100 fw-bold">
                Send OTP
              </Button>
            

            {/* {otpSent && (
              <Button variant="primary" type="submit" className="w-100 fw-bold">
                Verify OTP
              </Button>
            )} */}
          </Form>
        </div>
      </div>
    </div>
  )
}
