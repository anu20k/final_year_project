import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

export default function UserRegistration() {
  const validationSchema = Yup.object({
    firstname: Yup.string().required('Required'),
    middlename: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    code: Yup.string().required('Required'),
    contact1: Yup.string().required('Required'),
    contact2: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    district: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    speciality: Yup.string().required('Required'),
  })

  const onSubmit = (values) => {
    console.log('Form data', values)
  }

  const formik = useFormik({
    initialValues: {
      firstname: ' ',
      middlename: ' ',
      lastname: ' ',
      email: '',
      password: '',
      code: '',
      contact1: '',
      contact2: '',
      address: '',
      city: '',
      district: '',
      state: '',
      speciality: '',
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
        <h2>Use Registration</h2>
      </div>
      <div className="d-flex px-lg-5 mx-lg-5 algin-item-center justify-content-center  bg-body">
        <div className="w-lg-75 p-lg-5 rounded-3 mt-5 shadow p-3 mb-5  rounded">
          <Form className="75" onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridfirst">
                <Form.Label className="fw-bold">Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                  placeholder="First"
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div className="error">{formik.errors.firstname}</div>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridsecond">
                <Form.Label className="fw-bold mb-4"></Form.Label>
                <Form.Control
                  type="text"
                  name="middlename"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.middlename}
                  placeholder="Second"
                />
                {formik.touched.middlename && formik.errors.middlename ? (
                  <div className="error">{formik.errors.middlename}</div>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridthird">
                <Form.Label className="fw-bold mb-4"></Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                  placeholder="last"
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className="error">{formik.errors.lastname}</div>
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

              <Form.Group as={Col} controlId="formGriddob">
                <Form.Label className="fw-bold">Date of Birth*</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                  placeholder="DOB"
                />
              </Form.Group>
              {formik.touched.dob && formik.errors.dob ? (
                <div className="error">{formik.errors.dob}</div>
              ) : null}
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridadhar">
                <Form.Label className="fw-bold">Addhar ID*</Form.Label>
                <Form.Control
                  type="text"
                  name="addharid"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.addharid}
                  placeholder="Addhar id"
                />
                {formik.touched.addharid && formik.errors.addharid ? (
                  <div className="error">{formik.errors.addharid}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridpanid">
                <Form.Label className="fw-bold">Pan ID*</Form.Label>
                <Form.Control
                  type="text"
                  name="panid"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.panid}
                  placeholder="Contact No.2"
                />
              </Form.Group>
              {formik.touched.panid && formik.errors.panid ? (
                <div className="error">{formik.errors.panid}</div>
              ) : null}
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridcontact1">
                <Form.Label className="fw-bold">Contact No*</Form.Label>
                <Form.Control
                  type="text"
                  name="contact"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contact}
                  placeholder="Contact No."
                />
                {formik.touched.contact && formik.errors.contact ? (
                  <div className="error">{formik.errors.contact}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridemergencyno">
                <Form.Label className="fw-bold">Emergency No*</Form.Label>
                <Form.Control
                  type="text"
                  name="emergencyno"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emergencyno}
                  placeholder="Emergency no"
                />
              </Form.Group>
              {formik.touched.emergencyno && formik.errors.emergencyno ? (
                <div className="error">{formik.errors.emergencyno}</div>
              ) : null}
            </Row>

            <Row className="mb-3">
              <Col xs={6}>
                <Form.Group controlId="formGridadress">
                  <Form.Label className="fw-bold">Local Address*</Form.Label>
                  <Form.Control
                    type="adress"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    placeholder="Local Address"
                  />
                </Form.Group>
                {formik.touched.address && formik.errors.address ? (
                  <div className="error">{formik.errors.address}</div>
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
              <Form.Group as={Col} controlId="formGridmale ">
              <Form.Label className="fw-bold">Gender*</Form.Label><br></br>
                <Form.Check
                 inline
                  label="Male"
                  name="male"
                  type="radio"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.male}
                  
                />
                 <Form.Check
                  inline
                  label="Female"
                  name="female"
                  type="radio"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.female}
                  
                />
                 <Form.Check
                  inline
                  label="Other"
                  name="Other"
                  type="radio"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.other}
                  
                />
                {formik.touched.male && formik.errors.male? (
                  <div className="error">{formik.errors.male}</div>
                ) : null}

                
              </Form.Group>

              <Form.Group as={Col} controlId="formGridemergencyno">
                <Form.Label className="fw-bold">Upload Image*</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emergencyno}
                  placeholder="upload"
                />
              </Form.Group>
              {/* {formik.touched.image && formik.errors.image ? (
                <div className="error">{formik.errors.image}</div>
              ) : null} */}
            </Row>

            <Row className="mb-5">
              <Col xs={12}>
                <Form.Group controlId="formGridspeciality">
                  <Form.Label className="fw-bold">
                    Long Term Diseases
                  </Form.Label>
                  <Form.Select
                    defaultValue="Choose..."
                    name="speciality"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.speciality}
                  >
                    <option>Cardic Attack</option>
                    <option>Asthma</option>
                    <option>Hypertension</option>
                    <option>Diabetes</option>
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
              <Link to='/'>
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
