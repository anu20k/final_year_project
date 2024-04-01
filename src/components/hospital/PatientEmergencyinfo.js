import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useParams } from "react-router-dom";
import { patientEmergencyInfo } from "../api/hospitalAuth";

export default function PatientInfo() {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState("");

  const onHandleChange = () => {
    navigate("/hospital/auth/otp");
  };

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await patientEmergencyInfo(); 
        setPatientData(data.user); 
        console.log(data)
        console.log(patientData);
      } catch (error) {
        console.error("Error fetching patient info:", error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div className="container my-5 ">
      <Row>
        <Col>
          <h3 className="text-decoration-underline">
            {patientData.firstName} {patientData.lastName}
          </h3>
          <Button variant="light" onClick={onHandleChange}>
            Fetch Patient Health Record
          </Button>
        </Col>
        <Col>
          <img
            src="./src/components/hospital/anuja.jpg"
            className="w-25 border rounded-circle float-end"
            alt="hello"
          />
        </Col>
      </Row>
      <Row>
        <div className="px-lg-5    bg-body">
          <div className=" p-lg-5 rounded-3 mt-5 shadow p-3 mb-5  rounded">
            <div></div>
            <List>
              <ListItem className=" border-bottom">
                <ListItemText primary="Addhar ID" className=" fw-bold" />

                <ListItemText
                  primary={patientData.aadharId}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Abha ID" className=" fw-bold" />
                {/* <ListItemText primary=":" className='fw-bold'/> */}

                <ListItemText
                  primary={patientData.ABHA_Id}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Mobile No." className=" fw-bold" />

                <ListItemText
                  primary={patientData.mobile}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText
                  primary="Emergency Mobile No."
                  className=" fw-bold"
                />

                <ListItemText
                  primary={patientData.emergencyMobile}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Blood Group" className=" fw-bold" />

                <ListItemText
                  primary={patientData.bloodGroup}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText
                  primary="Life Long Diseases"
                  className=" fw-bold"
                />

                <ListItemText
                  primary={patientData.longLifeDisease}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="DOB" className=" fw-bold" />

                <ListItemText
                  primary={patientData.dateOfBirth}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Local Address" className=" fw-bold" />

                <ListItemText
                  primary={patientData.localAddress}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="City" className="fw-bold" />

                <ListItemText primary={patientData.city} className="ms-auto" />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="District" className=" fw-bold" />

                <ListItemText
                  primary={patientData.district}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="State" className="fw-bold" />

                <ListItemText primary={patientData.state} className="ms-auto" />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Pan ID" className=" fw-bold" />

                <ListItemText
                  primary={patientData.PAN_Id}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Email" className=" fw-bold" />

                <ListItemText primary={patientData.email} className="ms-auto" />
              </ListItem>
            </List>
          </div>
        </div>
      </Row>
    </div>
  );
}
