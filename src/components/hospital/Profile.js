import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { loggedHospital } from "../api/hospitalAuth.js";
import { useState, useEffect } from "react";

export default function Hospitalhome() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const handleonClick = () => {
    navigate("/hospital/fetchPatientEmergencyRecord");
  };

  const onclicklogout = () => {
    localStorage.removeItem("hospitalToken");
    navigate("/");
  };

  const resSeat = async () => {
    const response = await loggedHospital();
    console.log(response.status);
    if (response.status != "success") {
      localStorage.clear();
      navigate("/hospital/auth/login");
    } else {
      localStorage.setItem("hospital", JSON.stringify(response.hospital));
      setLoading(false);
      setData(response.hospital);
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
              href="/hospital"
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
                <Nav.Link href="/hospital" className="text-white mx-lg-3">
                  Home
                </Nav.Link>
                <Nav.Link
                  href="../ hospital/profile"
                  className="text-white mx-lg-3  text-decoration-underline"
                >
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
          <h3 className="mt-1 mb-5">Hospital Profile</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{data.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{data.email}</td>
              </tr>
              <tr>
                <th>Registration Number</th>
                <td>{data.registrationNo}</td>
              </tr>
              <tr>
                <th>Contact Number 1</th>
                <td>{data.contactNo_1}</td>
              </tr>
              <tr>
                <th>Contact Number 2</th>
                <td>{data.contactNo_2}</td>
              </tr>
              <tr>
                <th>Local Address</th>
                <td>{data.localAddress}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{data.city}</td>
              </tr>
              <tr>
                <th>District</th>
                <td>{data.district}</td>
              </tr>
              <tr>
                <th>State</th>
                <td>{data.state}</td>
              </tr>
              <tr>
                <th>Speciality</th>
                <td>{data.speciality}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
