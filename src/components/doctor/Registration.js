import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../api/doctorAuth'

export default function Registration() {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    dateOfBirth: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    degree: Yup.string().required('Required'),
    contactNo: Yup.string().required('Required'),
    localAddress: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    district: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    specialty: Yup.string().required('Required'),
    subSpeciality: Yup.string().required('Required'),
  })

  const navigate = useNavigate()

  const onSubmit = async (values) => {
    localStorage.removeItem("token")
    const response = await register(
      values.name,
      values.email,
      values.password,
      values.dateOfBirth,
      values.gender,
      values.degree,
      values.contactNo,
      values.localAddress,
      values.city,
      values.district,
      values.state,
      values.specialty,
      values.subSpeciality,
    )

    localStorage.setItem("token", response.token)
    console.log(response.token)
    console.log(response)

    if (response.token) navigate('/doctor/auth/login')
    else{
         console.log("error")
  }
  }

  const formik = useFormik({
    initialValues: {
      name: ' ',
      email: ' ',
      password: ' ',
      dateOfBirth: ' ',
      gender: ' ',
      degree: ' ',
      contactNo: ' ',
      localAddress: ' ',
      city: ' ',
      district: ' ',
      state: ' ',
      specialty: ' ',
      subSpeciality: ' ',
    },
    onSubmit,
    validationSchema,
  })
  console.log('Form values', formik.values)

  return (
    <div>
      <div
        className="bg-dark  d-flex mt-5 justify-content-center m-auto boarder rounded-circle fs-4 py-3 px-2 align-item-center text-light "
        style={{ width: 70, height: 70 }}
      >
        EHL
      </div>
      <div className=" text-center">
        <h2>Doctor Registration</h2>
      </div>
      <div className="d-flex px-lg-5 mx-lg-5 algin-item-center justify-content-center  bg-body">
        <div className="w-lg-75 p-lg-5 rounded-3 mt-5 shadow p-3 mb-5  rounded">
          <Form className="75" onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridname">
                <Form.Label className="fw-bold">Full Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Enter full name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </Form.Group>

              <Col xs={6}>
                <Form.Group controlId="formGridemail">
                  <Form.Label className="fw-bold">Doctor Email*</Form.Label>
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
              </Col>
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

              <Form.Group as={Col} controlId="formGriddateOfBirth">
                <Form.Label className="fw-bold">Date of Birth*</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth}
                  placeholder="DOB"
                />
              </Form.Group>
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                <div className="error">{formik.errors.dateOfBirth}</div>
              ) : null}
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridgender">
                <Form.Label className="fw-bold">Gender*</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                  placeholder="...."
                >
                  <option>select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Form.Select>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="error">{formik.errors.gender}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGriddegree">
                <Form.Label className="fw-bold">Degree*</Form.Label>
                <Form.Control
                  type="text"
                  name="degree"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.degree}
                  placeholder="degree"
                />
              </Form.Group>
              {formik.touched.degree && formik.errors.degree ? (
                <div className="error">{formik.errors.degree}</div>
              ) : null}
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridcontactNo">
                <Form.Label className="fw-bold">Contact No*</Form.Label>
                <Form.Control
                  type="text"
                  name="contactNo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contactNo}
                  placeholder="Contact No."
                />
                {formik.touched.contactNo && formik.errors.contactNo ? (
                  <div className="error">{formik.errors.contactNo}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridlocalAddress">
                <Form.Label className="fw-bold">Local Address*</Form.Label>
                <Form.Control
                  type="text"
                  name="localAddress"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.localAddress}
                  placeholder="localAddress"
                />
              </Form.Group>
              {formik.touched.localAddress && formik.errors.localAddress ? (
                <div className="error">{formik.errors.localAddress}</div>
              ) : null}
            </Row>

            <Row className="mb-3">
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

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridspecialty">
                <Form.Label className="fw-bold">Speciality*</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="specialty"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.specialty}
                >
                  <option>select speciality</option>
                  <option>Cardiologist</option>
                  <option>Endocrinologist</option>
                  <option>Gynecologist</option>
                  <option>Dermatologist</option>
                  <option>Oncologist</option>
                  <option>Allergist</option>
                  <option>Gastroenterologist</option>
                  <option>Familly physician</option>
                  <option>Neurologist</option>
                  <option>Other</option>
                </Form.Select>
                {formik.touched.specialty && formik.errors.specialty ? (
                  <div className="error">{formik.errors.specialty}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridsubSpeciality1">
                <Form.Label className="fw-bold">Sub Speciality*</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="subSpeciality"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subSpeciality}
                >
                  <option>select speciality</option>
                  <option>Cardiologist</option>
                  <option>Endocrinologist</option>
                  <option>Gynecologist</option>
                  <option>Dermatologist</option>
                  <option>Oncologist</option>
                  <option>Allergist</option>
                  <option>Gastroenterologist</option>
                  <option>Familly physician</option>
                  <option>Neurologist</option>
                  <option>Other</option>
                </Form.Select>
                {formik.touched.subSpeciality && formik.errors.subSpeciality ? (
                  <div className="error">{formik.errors.subSpeciality}</div>
                ) : null}
              </Form.Group>
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
