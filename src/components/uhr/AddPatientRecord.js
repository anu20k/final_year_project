import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import * as Yup from 'yup'
import { useFormik, Field  } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import {addRecord} from '../api/UHR'
import moment from 'moment';

export default function AddPatientRecord() {

    const navigate = useNavigate();

    const URL = "https://drive.google.com/drive/folders/13ACfQmb3AYoZJCohzfe7QvhoQ2sKbWEk?q=sharedwith:public%20parent:13ACfQmb3AYoZJCohzfe7QvhoQ2sKbWEk%20type:pdf"

    const onSubmit = async (values) => {
      console.log(FormData)
    localStorage.removeItem('token')
    const response = await addRecord(
      values.healthRecordTitle,
      values.userAadharId,
      values.doctorEmailId,
      values.date,
      values.documentType,
      values.documentLink,
    )

    localStorage.setItem('token', response.token)
    console.log(response.token)
    console.log(response)

    if (response.token) navigate('/hospital/auth/login')
  }

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formik = useFormik({
    initialValues: {
      healthRecordTitle: ' ',
      userAadharId: ' ',
      doctorEmailId: ' ',
      date: ' ',
      documentType: ' ',
      documentLink: ' ',
    },

    onSubmit,
    // validationSchema,
  })

  return (
    <div>
      <div>
        <div
          className="bg-dark  d-flex mt-5 justify-content-center m-auto boarder rounded-circle fs-4 py-3 px-2 align-item-center text-light "
          style={{ width: 70, height: 70 }}
        >
          EHL
        </div>
        <div className=" text-center">
          <h2>Add Paitent Record</h2>
        </div>
        <div className="d-flex px-lg-5 mx-lg-5 algin-item-center justify-content-center  bg-body">
          <div className="w-lg-75 p-lg-5 rounded-3 mt-5 shadow p-3 mb-5  rounded">
            
            <Form className="75" onSubmit={formik.handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridname">
                  <Form.Label className="fw-bold">
                    Health Record Title*
                  </Form.Label>
                  <Form.Control
                    type="name"
                    name="healthRecordTitle"
                    placeholder="Enter Hospital Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.healthRecordTitle}
                  />
                  {formik.touched.healthRecordTitle &&
                  formik.errors.healthRecordTitle ? (
                    <div className="error">
                      {formik.errors.healthRecordTitle}
                    </div>
                  ) : null}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridemail">
                  <Form.Label className="fw-bold">User Aadhar Id*</Form.Label>
                  <Form.Control
                    type="text"
                    name="userAadharId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userAadharId}
                    placeholder="Enter Hospital userAadharId"
                  />
                </Form.Group>
                {formik.touched.userAadharId && formik.errors.userAadharId ? (
                  <div className="error">{formik.errors.userAadharId}</div>
                ) : null}
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridpassword">
                  <Form.Label className="fw-bold">Doctor Email Id*</Form.Label>
                  <Form.Control
                    type="email"
                    name="doctorEmailId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.doctorEmailId}
                    placeholder="Doctor Email Id"
                  />
                  {formik.touched.doctorEmailId &&
                  formik.errors.doctorEmailId ? (
                    <div className="error">{formik.errors.doctorEmailId}</div>
                  ) : null}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridregistrationNo">
                  <Form.Label className="fw-bold">Date*</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date ? moment(formik.values.date, 'YYYY-MM-DD').format('YYYY-MM-DD') : ''}
                    
                  />
                </Form.Group>
                {formik.touched.date && formik.errors.date ? (
                  <div className="error">{formik.errors.date}</div>
                ) : null}
              </Row>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGriddocumentLink">
              <a href={URL} target="_blank" style={{ color: 'blue', textDecoration:'none' }}>Click to Create a Document URL</a><br></br>
                
                <Form.Control
                  type="text"
                  name="documentLink"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.documentLink}
                  placeholder="Document Url"
                />
                 {formik.touched.documentLink && formik.errors.documentLink ? (
                <div className="error">{formik.errors.documentLink}</div>
              ) : null}
              </Form.Group>
              </Row>
              <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="w-50 fw-bold ">
                Add Record
              </Button>
            </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
