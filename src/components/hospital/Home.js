import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import DataTable, { createTheme } from "react-data-table-component";
import { loggedHospital } from "../api/hospitalAuth.js";
import { useState, useEffect } from "react";

export default function Hospitalhome() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleonClick = () => {
    navigate("/hospital/fetchPatientEmergencyRecord");
  };

  const onclicklogout = () => {
    navigate("/");
  };

  const [indata, setindata] = React.useState([]);

  const resSeat = async () => {
    const response = await loggedHospital();
    console.log(response.status);
    if (response.status != "success") {
      localStorage.clear();
      navigate("/hospital/auth/login");
    } else {
      localStorage.setItem("hospital", JSON.stringify(response.hospital));
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("hospitalToken")) {
      resSeat();
    } else {
      localStorage.clear();
      navigate("/hospital/auth/login");
    }
  }, []);

  createTheme(
    "solarized",
    {
      text: {
        primary: "#111111",
        secondary: "#2aa198",
        fontSize: "32",
      },
      background: {
        default: "#EFF5F5",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },

      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "light"
  );

  const customStyles = {
    // rows: {
    //   style: {
    //     minHeight: '72px', // override the row height
    //   }
    // },

    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        fontSize: 15,
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        fontSize: 15,
      },
    },
  };

  const colums = [
    {
      name: "Sr.No",
      selector: (row) => row.id,
    },
    {
      name: "Patient Name",
      selector: (row) => row.patient_name,
    },
    {
      name: "Disease",
      selector: (row) => row.disease,
      sortable: true,
    },
    {
      name: "Doctor Name",
      selector: (row) => row.doctor_name,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Contact",
      selector: (row) => row.contact1,
    },
  ];

  if (loading) {
    return (
      <div
        className="m-auto d-flex align-items-center justify-content-center "
        style={{ width: "100vw ", height: "100vh" }}
      >
        <div
          className="spinner-border "
          style={{ width: "4rem", height: "4rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
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
                style={{ maxHeight: "100px" }}
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
                  className="bg-light text-dark me-lg-3 fs-5 fw-bold "
                  onClick={handleonClick}
                >
                  Patient Record Fetch
                </Button>

                <Button
                  className="bg-light text-dark me-lg-3 fs-5 fw-bold"
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
    );
  }
}
