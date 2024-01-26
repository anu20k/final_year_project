import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { login } from "./api/userAuth";

export default function UserLogin() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    addharID: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  })

  const onSubmit= async (values) => {
    localStorage.removeItem("token")
    const response = await login(values.addharID, values.password);

    localStorage.setItem("token", response.token);
    console.log(response.token)
    
    if(response.token)

    navigate('/hospitalhome');
  
  }

  const formik = useFormik({
    initialValues: {
      addharID: '',
      password: '',
    },
    onSubmit,
    validationSchema,
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
      <div className="d-flex  algin-item-center justify-content-center">
        <h2>User Login</h2>
      </div>
      <div className="d-flex  algin-item-center justify-content-center  bg-body">
        <div className="w-lg-25 p-lg-5 border rounded-3 mt-lg-5 shadow p-lg-3 mb-5  rounded">
          <Form className="" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Addhar ID*</Form.Label>
              <Form.Control
                type="text"
                name="addharID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.addharID}
                placeholder="Enter Adhar ID"
              />
              {formik.touched.addharID && formik.errors.addharID ? (
                <div className="error">{formik.errors.addharID}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password*</Form.Label>
              <Form.Control
                type="password"
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
            <p>Forget Password?</p>

            <Button variant="primary" type="submit" className="w-100 fw-bold">
              Login
            </Button>
            <p>
              Don't have an account?{' '}
              <Link to="/UserRegistration">
                <strong>
                  <u>Register</u>
                </strong>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  )
}
