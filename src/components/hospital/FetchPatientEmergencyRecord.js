import React from "react";
import { BiFingerprint } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loggedHospital } from "../api/hospitalAuth.js";
import { useState, useEffect } from "react";

export default function FetchPatientEmergencyRecord() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const onClickFinger = () => {
    navigate("/hospital/fetchPatientEmergencyRecord/fingerprint");
  };
  const onClickFace = () => {
    navigate("/hospital/fetchPatientEmergencyRecord/face");
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
    }
  };
  const onClickAddharId = () => {
    navigate("/hospital/fetchPatientEmergencyRecord/aadharId");
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
        <div
          className="bg-dark fs-2 rounded-circle text-light p-5 mt-5 m-auto d-flex align-items-center justify-content-center "
          style={{ width: 70, height: 70 }}
        >
          EHL
        </div>
        <div className="mt-4 text-center d-flex align-item-center justify-content-center ">
          <h2>Fetch Patient Emergency Record</h2>
        </div>
        <div
          className="mx-md-auto mx-5 border rounded shadow mt-5 "
          style={{ "max-width": "500px" }}
        >
          <div className=" d-flex align-item-center justify-content-evenly border mx-sm-5 mx-2 my-3  py-3 flex-sm-row flex-wrap fs-1">
            <BiFingerprint
              size={70}
              className="border m-2  text-decoration-none "
              onClick={onClickFinger}
            />
            <CiFaceSmile
              size={70}
              className="border m-2"
              onClick={onClickFace}
            />
            <FaAddressCard
              size={70}
              className="border p-2 m-2 "
              onClick={onClickAddharId}
            />
          </div>

          <p className="text-center fw-bold mt-2">
            Choose an option by click on it...
          </p>
          <Link to="/hospital" style={{ color: "black" }}>
            <p className="text-center fw-bold mt-2">Back</p>
          </Link>
        </div>
      </div>
    );
  }
}
