import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { changePassword } from "../api/hospitalAuth";

export default function ResetPass() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    password: Yup.string().required('Required'),
    confirm_password: Yup.string().required('Required'),
  })

  const onSubmit= async (values) => {
    localStorage.removeItem("token")
    const response = await changePassword(values.password, values.confirm_password);

    localStorage.setItem("token", response.token);
    console.log(response.token)
    
    if(response.token)

    navigate('#');
  
  }

  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_password: '',
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
        <h2>Reset Password</h2>
      </div>
      <div className="d-flex  algin-item-center justify-content-center  bg-body">
        <div className="w-lg-25 p-lg-5 border rounded-3 mt-lg-5 shadow p-lg-3 mb-5  rounded">
          <Form className="" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password*</Form.Label>
              <Form.Control
                type="text"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirm_password">
              <Form.Label className="fw-bold">Confirm-Password*</Form.Label>
              <Form.Control
                type="password"
                name="confirm_password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirm_password}
                placeholder="Confirm-Password"
              />
               {formik.touched.confirm_password && formik.errors.confirm_password ? (
                <div className="error">{formik.errors.confirm_password}</div>
              ) : null}
            </Form.Group>
           

            <Button variant="primary" type="submit" className="w-100 fw-bold">
              Submit
            </Button>
            <p className='d-flex justify-content-center mt-3'>
             
              <Link to="/hospital/otpVarification" style={{color: 'black' }}>
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
