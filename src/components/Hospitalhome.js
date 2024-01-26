import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
import Fetchpage from './Fetchpage'
import { BiLogOut } from 'react-icons/bi'
import DataTable, { createTheme } from 'react-data-table-component'

export default function Hospitalhome() {
  const navigate = useNavigate()
  const handleonClick = () => {
    navigate('/fetchpage')
  }

  const onclicklogout = () => {
    navigate('/')
  }

  const [indata, setindata] = React.useState([])
  React.useEffect(function () {
    fetch('http://localhost:3000/Hospital_info')
      .then((res) => res.json())
      .then((data) => setindata(data))
  }, [])

  createTheme(
    'solarized',
    {
      text: {
        primary: '#111111',
        secondary: '#2aa198',
        fontSize: '32',
        
      },
      background: {
        default: '#EFF5F5',
      },
      context: {
        background: '#cb4b16',
        text: '#FFFFFF',
      },
      divider: {
        default: '#073642',
      },
      
      action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
      },
    },
    'light',
  )
  const customStyles = {
    // rows: {
    //   style: {
    //     minHeight: '72px', // override the row height
    //   }
    // },

    
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        fontSize: 15,
        fontWeight:'bold'
      },
      
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        fontSize: 15,
      },
    },
  };



  const colums = [
    {
      name: 'Sr.No',
      selector: (row) => row.id,
    },
    {
      name: 'Patient Name',
      selector: (row) => row.patient_name,
    },
    {
      name: 'Disease',
      selector: (row) => row.disease,
      sortable: true,
    },
    {
      name: 'Doctor Name',
      selector: (row) => row.doctor_name,
    },
    {
        name: 'Date',
        selector: (row) => row.date,
      },
      {
        name: 'Contact',
        selector: (row) => row.contact1,
      },
  ]

  

  return (
    <div>
      <Navbar expand="lg" className="bg-dark text-white">
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="text-dark ms-lg-5 bg-light border rounded-circle d-flex justify-content-center fs-4 pt-2 px-1 fw-bold align-item-center"
            style={{ width: 60, height: 60 }}
          >
            EHL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 text-white fs-5 mx-3 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link
                href="#action1"
                className="text-white mx-lg-3 text-decoration-underline"
              >
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white mx-lg-3 ">
                Hospital Profile
              </Nav.Link>
              <Nav.Link href="#" className="text-white mx-lg-3 ">
                Doctor Info
              </Nav.Link>
            </Nav>
            <Form className="d-flex me-5">
               
                <Button
                variant="outline-dark"
                className="bg-light me-lg-3 fs-5 fw-bold "
                onClick={handleonClick}
              >
                Patient Record Fetch
              </Button>
                
              
              <Button
                variant="outline-dark"
                className="bg-light me-lg-3 fs-5 fw-bold"
                onClick={onclicklogout}
              >
                <BiLogOut /> LogOut
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container mt-3">
        <h3>Hospital Paitent Records</h3>
        <DataTable
          customStyles={customStyles}
          columns={colums}
         
          data={indata}
          fixedHeader
          theme="solarized customStyles"
          pagination
        ></DataTable>
      </div>
    </div>
  )
}

