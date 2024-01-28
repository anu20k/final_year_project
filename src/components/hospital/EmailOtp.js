import React from "react";
// import { Form } from 'react-bootstrap';
// import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik'


export default function EmailOtp(){
    return(

        <>
        <div
        className="bg-dark fs-2 rounded-circle text-light p-5 mt-5 m-auto d-flex align-items-center justify-content-center "
        style={{ width: 70, height: 70 }}
      >
        EHL
      </div>
      <div className="mt-4 text-center d-flex align-item-center justify-content-center " >
        <h2>Select Mobile Number for OTP</h2>
      </div>


      <div className=" d-flex m-auto align-item-center justify-content-center  bg-body w-50">
        <div className="w-lg-25 p-lg-5 border rounded-3 mt-lg-5 shadow p-lg-3 mb-5  rounded">
      <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <div >
            <Form>
          <div id="my-radio-group">
            <h5>
            Select Phone Number:
            </h5>
          </div>
          <div role="group" aria-labelledby="my-radio-group" className="d-flex flex-column mb-3  align-item-center justify-content-center mt-3">
            <div className="">
            <label className="">
              <Field type="radio" name="picked" value="Mobile" className="" />
              &nbsp;  <strong>Mobile</strong>
                 <br/> 
                 &nbsp; &nbsp; +91 9370257156 
            </label>
            </div>
            <label className="mt-3">
              <Field type="radio" name="picked" value="Emergency Mobile" />
              &nbsp;  <strong>Emergency Mobile</strong>
              <br/>
              &nbsp; &nbsp; +91 7856639386
            </label>
        
          </div>
             
             <div className="d-flex justify-content-center align-item-center">
          <Button variant="primary" type="submit" className=" w-100 px-4 py-2 fw-bold ">Send OTP</Button>
          </div>
        </Form>
        </div>
       
      )}
      </Formik>
      </div>
        </div> 
        </>
    )
}