import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../api/userAuth'
import { Multiselect } from 'multiselect-react-dropdown'

export default function UserRegistration() {
 

  const URL = "https://drive.google.com/drive/folders/1SCJXdAAAIbjRP1KXL_E06HK5rVZ4YW2N?q=sharedwith:public%20parent:1SCJXdAAAIbjRP1KXL_E06HK5rVZ4YW2N"

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    middleName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    dateOfBirth: Yup.string().required('Required'),
    PAN_Id: Yup.string().required('Required'),
    aadharId:Yup.string().required('Required'),
    mobile:Yup.string().required('Required'),
    emergencyMobile:Yup.string().required('Required'),
    localAddress:Yup.string().required('Required'),
    city:Yup.string().required('Required'),
    district:Yup.string().required('Required'),
    state:Yup.string().required('Required'),
    gender:Yup.string().required('Required'),
    image:Yup.string().required('Required'),
    ABHA_Id:Yup.string().required('Required'),
    bloodGroup:Yup.string().required('Required'),
    longLifeDisease:Yup.array().required('Required'),
  })

 
  const navigate = useNavigate()

  const customSerialize = (values, { setSubmitting }) => {
    const serializedValues = { ...values }
    
    return JSON.stringify(serializedValues)
    setSubmitting(false);
  }

  const onSubmit = async (values) => {
    localStorage.removeItem('token')
    const response = await register(
      values.firstName,
      values.middleName,
      values.lastName,
      values.email,
      values.password,
      values.dateOfBirth,
      values.PAN_Id,
      values.aadharId,
      values.mobile,
      values.emergencyMobile,
      values.localAddress,
      values.city,
      values.district,
      values.state,
      values.gender,
      values.image,
      values.ABHA_Id,
      values.bloodGroup,
      customSerialize(values),
    )

    localStorage.setItem('token', response.token)
    console.log(response.token)
    console.log(response)

    if (response.token) navigate('/user/auth/login')
  }

  

  const formik = useFormik({
    initialValues: {
      firstName: ' ',
      middleName: ' ',
      lastName: ' ',
      email: ' ',
      password: ' ',
      dateOfBirth: ' ',
      PAN_Id: ' ',
      aadharId: ' ',
      mobile: ' ',
      emergencyMobile: ' ',
      localAddress: ' ',
      city: ' ',
      district: ' ',
      state: ' ',
      gender: ' ',
      image: ' ',
      ABHA_I: ' ',
      bloodGroup: ' ',
      longLifeDisease: [],
    },
    
    onSubmit,
    validationSchema,
    
    
  })

  // console.log('Form values', formik.values)

  const data = [
    { disease: 'cardiacAttack', id: 1 },
    { disease: 'asthma', id: 2 },
    { disease: 'hypertension', id: 3 },
    { disease: 'diabetes', id: 4 },
  ]

  const [diseasesOptions] = useState(data)
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
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                <div className="error">{formik.errors.dateOfBirth}</div>
              ) : null}
              </Form.Group>
              
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPAN_Id">
                <Form.Label className="fw-bold">Pan ID*</Form.Label>
                <Form.Control
                  type="text"
                  name="PAN_Id"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.PAN_ID}
                  placeholder="Pan id"
                />
                 {formik.touched.PAN_Id && formik.errors.PAN_Id ? (
                <div className="error">{formik.errors.PAN_Id}</div>
              ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridaadharId">
                <Form.Label className="fw-bold">Adhar ID*</Form.Label>
                <Form.Control
                  type="text"
                  name="aadharId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.aadharId}
                  placeholder="Adhar ID"
                />
              </Form.Group>
              {formik.touched.aadharId && formik.errors.aadharId ? (
                <div className="error">{formik.errors.aadharId}</div>
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
                {formik.touched.emergencyMobile && formik.errors.emergencyMobile ? (
                <div className="error">{formik.errors.emergencyMobile}</div>
              ) : null}
              </Form.Group>
              
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
                   {formik.touched.localAddress && formik.errors.localAddress ? (
                <div className="error">{formik.errors.localAddress}</div>
              ) : null}
                </Form.Group>
               
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

              <Form.Group as={Col} controlId="formGridimage">
              <a href={URL} target="_blank" style={{ color: 'blue', textDecoration:'none' }}>Click to Create a Image URL</a><br></br>
                
                <Form.Control
                  type="text"
                  name="image"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.image}
                  placeholder="upload Image Url"
                />
                 {formik.touched.image && formik.errors.image ? (
                <div className="error">{formik.errors.image}</div>
              ) : null}
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridABHA_Id">
                <Form.Label className="fw-bold">ABHA ID*</Form.Label>
                <Form.Control
                  type="text"
                  name="ABHA_Id"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ABHA_Id}
                  placeholder="abha_id"
                />
                {formik.touched.ABHA_Id&& formik.errors.ABHA_Id ? (
                <div className="error">{formik.errors.ABHA_Id}</div>
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
                {formik.touched.bloodGroup && formik.errors.bloodGroup? (
                <div className="error">{formik.errors.bloodGroup}</div>
              ) : null}
              </Form.Group>
              
            </Row>

            <Row className="mb-5">
              <Col xs={12}>
                <Form.Group controlId="formGridlongLifeDisease">
                  <Form.Label className="fw-bold">
                    Long Term Diseases
                  </Form.Label>
                  <Multiselect
                    name="longLifeDisease"
                    isMulti
                    options={diseasesOptions}
                    value={formik.values.longLifeDisease}
                    onChange={(longLifeDisease) =>
                      formik.setFieldValue('longLifeDisease', longLifeDisease)
                    }
                    onBlur={formik.handleBlur('longLifeDisease')}
                    displayValue="disease"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.longLifeDisease}
                  >
                    {diseasesOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Multiselect>
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
              <Link to="/user/auth/login">
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
