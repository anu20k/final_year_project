import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import {register} from '../api/hospitalAuth'
import { useNavigate } from 'react-router-dom'

export default function HospitalRegistration() {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    registrationNo: Yup.string().required('Required'),
    contactNo_1: Yup.string().required('Required'),
    contactNo_2: Yup.string().required('Required'),
    localAddress: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    district: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    speciality: Yup.string().required('Required'),
  })

  // const onSubmit = (values) => {

  //   console.log('Form data', values)
  // }

  const navigate = useNavigate();

  const onSubmit= async (values) => {
    localStorage.removeItem("token")
    const response = await register( values.name,
      values.email,
      values.password,
      values.registrationNo,
      values.contactNo_1,
      values.contactNo_2,
      values.localAddress,
      values.city,
      values.district,
      values.state,
      values.speciality);

    localStorage.setItem("token", response.token);
    console.log(response.token)
    console.log(response);
    
    if(response.token)

    navigate('/');
  
  }


  const formik = useFormik({
    initialValues: {
      name: ' ',
      email: '',
      password: '',
      registrationNo: '',
      contactNo_1: '',
      contactNo_2: '',
      localAddress: '',
      city: '',
      district: '',
      state: '',
      speciality:'',
    },
    
    onSubmit,
    validationSchema,
  })
  // console.log('Form values', formik.values)

  return (
    <div>
      <div
        className="bg-dark  d-flex mt-5 justify-content-center m-auto boarder rounded-circle fs-4 py-3 px-2 align-item-center text-light "
        style={{ width: 70, height: 70 }}
      >
        EHL
      </div>
      <div className=" text-center">
        <h2>Hospital Registration</h2>
      </div>
      <div className="d-flex px-lg-5 mx-lg-5 algin-item-center justify-content-center  bg-body">
        <div className="w-lg-75 p-lg-5 rounded-3 mt-5 shadow p-3 mb-5  rounded">
          <Form className="75" onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridname">
                <Form.Label className="fw-bold">Hospital Name*</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Enter Hospital Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridemail">
                <Form.Label className="fw-bold">Hospital Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Enter Hospital Email"
                />
              </Form.Group>
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridpassword">
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

              <Form.Group as={Col} controlId="formGridregistrationNo">
                <Form.Label className="fw-bold">Hospital registrationNo*</Form.Label>
                <Form.Control
                  type="text"
                  name="registrationNo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.registrationNo}
                  placeholder="Hospital registrationNo"
                />
              </Form.Group>
              {formik.touched.registrationNo && formik.errors.registrationNo ? (
                <div className="error">{formik.errors.registrationNo}</div>
              ) : null}
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridcontactNo_1">
                <Form.Label className="fw-bold">Contact No.1*</Form.Label>
                <Form.Control
                  type="text"
                  name="contactNo_1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contactNo_1}
                  placeholder="Contact No.1"
                />
                {formik.touched.contactNo_1 && formik.errors.contactNo_1 ? (
                  <div className="error">{formik.errors.contactNo_1}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridcontactNo_2">
                <Form.Label className="fw-bold">Contact No.2*</Form.Label>
                <Form.Control
                  type="text"
                  name="contactNo_2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contactNo_2}
                  placeholder="Contact No.2"
                />
              </Form.Group>
              {formik.touched.contactNo_2 && formik.errors.contactNo_2 ? (
                <div className="error">{formik.errors.contactNo_2}</div>
              ) : null}
            </Row>

            <Row className="mb-3">
              <Col xs={6}>
                <Form.Group controlId="formGridadress">
                  <Form.Label className="fw-bold">Local localAddress*</Form.Label>
                  <Form.Control
                    type="adress"
                    name="localAddress"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.localAddress}
                    placeholder="Local localAddress"
                  />
                </Form.Group>
                {formik.touched.localAddress && formik.errors.localAddress ? (
                  <div className="error">{formik.errors.localAddress}</div>
                ) : null}
              </Col>

              <Form.Group as={Col} controlId="formGridcity">
                <Form.Label className="fw-bold">City*</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  placeholder="City"
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="error">{formik.errors.city}</div>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} controlId="formGriddistrict">
                <Form.Label className="fw-bold">District*</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.district}
                  placeholder="district"
                />
                {formik.touched.district && formik.errors.district ? (
                  <div className="error">{formik.errors.district}</div>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridstate">
                <Form.Label className="fw-bold">state*</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                  placeholder="State"
                />
              </Form.Group>
              {formik.touched.state && formik.errors.state ? (
                <div className="error">{formik.errors.state}</div>
              ) : null}
            </Row>

            <Row className="mb-5">
              <Col xs={12}>
                <Form.Group controlId="formGridspeciality">
                  <Form.Label className="fw-bold">
                    Hospital Speciality
                  </Form.Label>
                  <Form.Select
                    defaultValue="Choose..."
                    name="speciality"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.speciality}
                    Multival 
                  >
                    <option>Cardiology</option>
                    <option>Gynacology</option>
                    <option>Multi-speciality</option>
                  </Form.Select>
                </Form.Group>
                {formik.touched.speciality && formik.errors.speciality ? (
                  <div className="error">{formik.errors.speciality}</div>
                ) : null}
              </Col>
            </Row>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="w-50 fw-bold ">
                Register
              </Button>
            </div>
            <p className="text-center">
              All ready have an account?{' '}
              <Link to="/">
              <strong>
                <u> Login</u>
              </strong>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  )
}
