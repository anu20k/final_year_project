import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { patientEmergencyInfo } from "../api/hospitalAuth.js";

export default function PatientInfo() {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState({});

  const onHandleChange = () => {
    navigate("/hospital/auth/otp");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("aadharId")) {
        try {

          const aadharId = localStorage.getItem("aadharId");
          console.log(aadharId)
          const response = await patientEmergencyInfo(aadharId);
          setPatientData(response.user);
        } catch (error) {
          console.error("Error fetching patient data:", error);
        }
      } else {
        navigate("/hospital/fetchPatientEmergencyRecord");
      }
    };
  
    fetchData();
  }, []); 
  
  useEffect(() => {
    console.log(patientData);
  }, [patientData]);

  // useEffect(async () => {
  //   if (localStorage.getItem("aadharId")) {
  //     const aadharId = localStorage.getItem("aadharId");
  //     console.log(aadharId);
  //     const response = await patientEmergencyInfo(aadharId);
  //     // console.log(response.user);
      
  //     setPatientData(response.user);
  //     console.log(patientData);
  //     // console.log(patientData.json());
  //   } else {
  //     navigate("/hospital/fetchPatientEmergencyRecord");
  //   }
  // }, {});

  return (
    <div className="container my-5 ">
      <Row>
        <Col>
          <h3 className="text-decoration-underline">
            {patientData && patientData.firstName} {patientData && patientData.lastName}
          </h3>
          <Button variant="light" onClick={onHandleChange}>
            Fetch Patient Health Record
          </Button>
        </Col>
        <Col>
        <img src="https://drive.google.com/file/d/17mPtp2QD-ukqVb2oG5iP_0O_cwkkOcQg/view" class="w-25 border rounded-circle float-end" alt="hello" />

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
                  primary={patientData && patientData.aadharId}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Abha ID" className=" fw-bold" />
                {/* <ListItemText primary=":" className='fw-bold'/> */}

                <ListItemText
                  primary={patientData && patientData.ABHA_Id}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Mobile No." className=" fw-bold" />

                <ListItemText
                  primary={patientData && patientData.mobile}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText
                  primary="Emergency Mobile No."
                  className=" fw-bold"
                />

                <ListItemText
                  primary={patientData && patientData.emergencyMobile}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Blood Group" className=" fw-bold" />

                <ListItemText
                  primary={patientData && patientData.bloodGroup}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText
                  primary="Life Long Diseases"
                  className=" fw-bold"
                />

                <ListItemText
                  primary={patientData && patientData.longLifeDisease}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="DOB" className=" fw-bold" />

                <ListItemText
                  primary={patientData && patientData.dateOfBirth}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Local Address" className=" fw-bold" />

                <ListItemText
                  primary={patientData && patientData.localAddress}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="City" className="fw-bold" />

                <ListItemText primary={patientData && patientData.city} className="ms-auto" />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="District" className=" fw-bold" />

                <ListItemText
                  primary={patientData && patientData.district}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="State" className="fw-bold" />

                <ListItemText primary={patientData && patientData.state} className="ms-auto" />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Pan ID" className=" fw-bold" />

                <ListItemText
                  primary={patientData && patientData.PAN_Id}
                  className="ms-auto"
                />
              </ListItem>

              <ListItem className="border-bottom">
                <ListItemText primary="Email" className=" fw-bold" />

                <ListItemText primary={patientData && patientData.email} className="ms-auto" />
              </ListItem>
            </List>
          </div>
        </div>
      </Row>
    </div>
    
  );
}


// import React, { useEffect, useState } from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";

// import { patientEmergencyInfo } from "../api/hospitalAuth.js";

// export default function PatientInfo() {
//   const navigate = useNavigate();
//   const [patientData, setPatientData] = useState(null);

//   const fetchData = async () => {
//     try {
//       const aadharId = localStorage.getItem(aadharId);
//       if (aadharId) {
//         const response = await patientEmergencyInfo(aadharId);
//         setPatientData(response.user);
//       } else {
//         navigate("/hospital/fetchPatientEmergencyRecord");
//       }
//     } catch (error) {
//       console.error("Error fetching patient data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Empty dependency array to run only once

//   return (
//     <div className="container my-5 ">
//       <Row>
//         <Col>
//           <h3 className="text-decoration-underline">
//             {patientData && patientData.firstName} {patientData && patientData.lastName}
//           </h3>
//           <Button variant="light" onClick={() => navigate("/hospital/auth/otp")}>
//             Fetch Patient Health Record
//           </Button>
//         </Col>
//         <Col>
//           <img
//             src="./src/components/hospital/anuja.jpg"
//             className="w-25 border rounded-circle float-end"
//             alt="hello"
//           />
//         </Col>
//       </Row>
//       <Row>
//         <div className="px-lg-5    bg-body">
//           <div className=" p-lg-5 rounded-3 mt-5 shadow p-3 mb-5  rounded">
//             <div></div>
//             <List>
//               {patientData && (
//                 <>
//                   <ListItem className=" border-bottom">
//                     <ListItemText primary="Addhar ID" className=" fw-bold" />
//                     <ListItemText primary={patientData.aadharId} className="ms-auto" />
//                   </ListItem>
//                   <ListItem className="border-bottom">
//                     <ListItemText primary="Abha ID" className=" fw-bold" />
//                     <ListItemText primary={patientData.ABHA_Id} className="ms-auto" />
//                   </ListItem>
//                   {/* Add other list items similarly */}
//                 </>
//               )}
//             </List>
//           </div>
//         </div>
//       </Row>
//     </div>
//   );
// }
