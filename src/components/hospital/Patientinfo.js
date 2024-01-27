import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Patientinfo() {
  return (
    <div className='container my-5 '>
         <Row>
        <Col>
        <h3 className='text-decoration-underline'>Paitent Name</h3>
        <Button variant="light"  >Fetch Patient Health Record</Button>
        </Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
      <div className="d-flex px-lg-5  algin-item-center   bg-body">
        <div className="w-lg-100 p-lg-5 rounded-3 mt-5 shadow p-3 mb-5  rounded">
            <h5 className='mb-3'>Addhar ID : 123456</h5>
            <h5 className='mb-3'>Abha ID :</h5>
            <h5 className='mb-3'>Mobile No. :</h5>
            <h5 className='mb-3'>Emergency Mobile No. :</h5>
            <h5 className='mb-3'>Blood Group :</h5>
            <h5 className='mb-3'>Life Long Diseases :</h5>
            <h5 className='mb-3'>DOB :</h5>
            <h5 className='mb-3'>Local Address :</h5>
            <h5 className='mb-3'>City :</h5>
            <h5 className='mb-3'>District :</h5>
            <h5 className='mb-3'>State :</h5>
            <h5 className='mb-3'>Pan ID :</h5>
            <h5 className='mb-3'>Email :</h5>
            

            </div>
            </div>
      </Row>
      
    </div>
  )
}
