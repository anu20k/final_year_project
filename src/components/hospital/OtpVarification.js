import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { verifyOTP } from '../api/hospitalAuth'

export default function FetchByAadharId() {
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    OTP: Yup.string().required('Required'),
  })

  const onSubmit = async (values) => {
    const email = localStorage.getItem("email")
    
    console.log(email)
    const response = await verifyOTP(email, values.OTP)

    console.log(response)
    navigate('/hospital/patientAllRecords')
  }

  const formik = useFormik({
    initialValues: {
      OTP: ' ',
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
            <Form.Group className="mb-3" controlId="formBasicOTP">
              <Form.Label className="fw-bold">Enter Otp*</Form.Label>
              <Form.Control
                type="text"
                name="OTP"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.OTP}
                placeholder="Enter otp"
              />
              {formik.touched.OTP && formik.errors.OTP ? (
                <div className="error">{formik.errors.OTP}</div>
              ) : null}
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 fw-bold">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}
