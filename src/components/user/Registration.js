import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import {register} from '../api/userAuth'

export default function UserRegistration() {
  const [images, setImages] = useState([])

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    middleName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    dateOfBirth: Yup.string().required('Required'),
    PAN_ID: Yup.string().required('Required'),
    addharID: Yup.string().required('Required'),
    mobile: Yup.string().required('Required'),
    emergencyMobile: Yup.string().required('Required'),
    localAddress: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    district: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    ABHA_ID: Yup.string().required('Required'),
    bloodGroup: Yup.string().required('Required'),
    longLifeDisease: Yup.string().required('Required'),
  })

  // const onSubmit = (values) => {
  //   console.log('Form data', values)
  // }

  const navigate = useNavigate()

  const onSubmit = async (values) => {
    localStorage.removeItem('token')
    const response = await register(
      values.firstName,
      values.middleName,
      values.lastName,
      values.email,
      values.password,
      values.dateOfBirth,
      values.PAN_ID,
      values.addharID,
      values.mobile,
      values.emergencyMobile,
      values.localAddress,
      values.city,
      values.district,
      values.state,
      values.gender,
      values.image,
      values.ABHA_ID,
      values.bloodGroup,
      values.longLifeDisease,
    )

    localStorage.setItem('token', response.token)
    console.log(response.token)
    console.log(response)

    if (response.token) 
    navigate('/user/auth/login')
  }

  function onImageChange(e) {
    setImages([...e.target.files[0]])
  }

  const formik = useFormik({
    initialValues: {
      firstName: ' ',
      middleName: ' ',
      lastName: ' ',
      email: ' ',
      password: ' ',
      dateOfBirth: ' ',
      PAN_ID: ' ',
      addharID: ' ',
      mobile: ' ',
      emergencyMobile: ' ',
      localAddress: ' ',
      city: ' ',
      district: ' ',
      state: ' ',
      gender: ' ',
      image: ' ',
      ABHA_ID: ' ',
      bloodGroup: ' ',
      longLifeDisease: ' ',
    },
    onSubmit,
    validationSchema,
    onImageChange,
    
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
        <h2>User Registration</h2>
      </div>
      <div className="d-flex px-lg-5 mx-lg-5 algin-item-center justify-content-center  bg-body">
        <div className="w-lg-75 p-lg-5 rounded-3 mt-5 shadow p-3 mb-5  rounded">
          <Form className="75" onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridfirstName">
                <Form.Label className="fw-bold">Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  placeholder="First"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error">{formik.errors.firstName}</div>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridmiddleName">
                <Form.Label className="fw-bold mb-4"></Form.Label>
                <Form.Control
                  type="text"
                  name="middleName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.middleName}
                  placeholder="Second"
                />
                {formik.touched.middleName && formik.errors.middleName ? (
                  <div className="error">{formik.errors.middleName}</div>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridlastName">
                <Form.Label className="fw-bold mb-4"></Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  placeholder="last"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error">{formik.errors.lastName}</div>
                ) : null}
              </Form.Group>

              <Col xs={6}>
                <Form.Group controlId="formGridemail">
                  <Form.Label className="fw-bold">User Email*</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Enter Hospital Email"
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
              <Form.Group as={Col} controlId="formGridPAN_ID">
                <Form.Label className="fw-bold">Pan ID*</Form.Label>
                <Form.Control
                  type="text"
                  name="PAN_ID"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.PAN_ID}
                  placeholder="Pan id"
                />
                {formik.touched.PAN_ID && formik.errors.PAN_ID ? (
                  <div className="error">{formik.errors.PAN_ID}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridaddharID">
                <Form.Label className="fw-bold">Adhar ID*</Form.Label>
                <Form.Control
                  type="text"
                  name="addharID"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.addharID}
                  placeholder="Adhar ID"
                />
              </Form.Group>
              {formik.touched.addharID && formik.errors.addharID ? (
                <div className="error">{formik.errors.addharID}</div>
              ) : null}
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridmobile">
                <Form.Label className="fw-bold">Contact No*</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                  placeholder="Contact No."
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="error">{formik.errors.mobile}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridemergencyMobile">
                <Form.Label className="fw-bold">Emergency No*</Form.Label>
                <Form.Control
                  type="text"
                  name="emergencyMobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emergencyMobile}
                  placeholder="Emergency no"
                />
              </Form.Group>
              {formik.touched.emergencyMobile &&
              formik.errors.emergencyMobile ? (
                <div className="error">{formik.errors.emergencyMobile}</div>
              ) : null}
            </Row>

            <Row className="mb-3">
              <Col xs={6}>
                <Form.Group controlId="formGridlocalAddress">
                  <Form.Label className="fw-bold">Local Address*</Form.Label>
                  <Form.Control
                    type="adress"
                    name="localAddress"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.localAddress}
                    placeholder="Local Address"
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

              <Form.Group as={Col} controlId="formGridimages">
                <Form.Label className="fw-bold">Upload Image*</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={images}
                  placeholder="upload"
                  // multiple
                  // accept="image/*"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridABHA_ID">
                <Form.Label className="fw-bold">ABHA ID*</Form.Label>
                <Form.Control
                  type="text"
                  name="ABHA_ID"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ABHA_ID}
                  placeholder="abha_id"
                />
                {formik.touched.ABHA_ID && formik.errors.ABHA_ID ? (
                  <div className="error">{formik.errors.ABHA_ID}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridbloodGroup">
                <Form.Label className="fw-bold">Blood Group*</Form.Label>
                <Form.Control
                  type="text"
                  name="bloodGroup"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bloodGroup}
                  placeholder="Blood Group"
                />
              </Form.Group>
              {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
                <div className="error">{formik.errors.bloodGroup}</div>
              ) : null}
            </Row>

            <Row className="mb-5">
              <Col xs={12}>
                <Form.Group controlId="formGridlongLifeDisease">
                  <Form.Label className="fw-bold">
                    Long Term Diseases
                  </Form.Label>
                  <Form.Select
                    defaultValue="Choose..."
                    name="longLifeDisease"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.longLifeDisease}
                  >
                    <option>Cardic Attack</option>
                    <option>Asthma</option>
                    <option>Hypertension</option>
                    <option>Diabetes</option>
                  </Form.Select>
                </Form.Group>
                {formik.touched.longLifeDisease &&
                formik.errors.longLifeDisease ? (
                  <div className="error">{formik.errors.longLifeDisease}</div>
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
