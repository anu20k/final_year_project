import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loggedHospital } from "../api/hospitalAuth";
import { useEffect, useState } from "react";

export default function FetchByAadharId() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const validationSchema = Yup.object({
    aaddharID: Yup.string().required("Required"),
  });
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
  const onSubmit = async (values) => {
    console.log(values);
    localStorage.setItem("aadharId", values.aaddharID);
    navigate("/hospital/patientinfo");
  };

  const formik = useFormik({
    initialValues: {
      aaddharID: "",
    },
    onSubmit,
    validationSchema,
  });
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
          className="bg-dark mt-5 d-flex justify-content-center m-auto boarder rounded-circle fs-4 py-3 px-2 align-item-center text-light "
          style={{ width: 70, height: 70 }}
        >
          EHL
        </div>
        <div className="d-flex  algin-item-center justify-content-center">
          <h2>Fetch Paitent EmergencyRecord</h2>
        </div>
        <div className="d-flex  algin-item-center justify-content-center  bg-body">
          <div className="w-lg-25 p-lg-5 border rounded-3 mt-lg-5 shadow p-lg-3 mb-5  rounded">
            <Form className="" onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicaaddharID">
                <Form.Label className="fw-bold">Addhar ID*</Form.Label>
                <Form.Control
                  type="text"
                  name="aaddharID"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.aaddharID}
                  placeholder="Enter Adhar ID"
                />
                {formik.touched.aaddharID && formik.errors.aaddharID ? (
                  <div className="error">{formik.errors.aaddharID}</div>
                ) : null}
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 fw-bold">
                Submit
              </Button>
              <p className="d-flex justify-content-center mt-3">
                <Link
                  to="/hospital/fetchPatientEmergencyRecord"
                  style={{ color: "black" }}
                >
                  <strong>Back</strong>
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
