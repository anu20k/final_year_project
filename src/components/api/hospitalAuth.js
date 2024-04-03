const baseUrl = "https://ehl.onrender.com/api/hospital/";
// name,email,password,registrationNo,contactNo_1,contactNo_2,localAddress,city,district,state,speciality
const register = async (
  name,
  email,
  password,
  registrationNo,
  contactNo_1,
  contactNo_2,
  localAddress,
  city,
  district,
  state,
  speciality
) => {
  const url = baseUrl + "register";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      registrationNo: registrationNo,
      contactNo_1: contactNo_1,
      contactNo_2: contactNo_2,
      localAddress: localAddress,
      city: city,
      district: district,
      state: state,
      speciality: speciality,
    }),
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const login = async (email, password) => {
  const url = baseUrl + "login";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const changePassword = async (password) => {
  const url = baseUrl + "changePassword";
  const jwt = "Bearer " + localStorage.getItem("hospitalToken");

  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: jwt },
    body: JSON.stringify({
      password: password,
    }),
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const loggedHospital = async () => {
  const url = baseUrl + "loggedHospital";
  const jwt = "Bearer " + localStorage.getItem("hospitalToken");

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: jwt },
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const sentResetPasswordEmail = async (email) => {
  const url = baseUrl + "sentResetPasswordEmail";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
    }),
  };
  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const resetPassword = async (password, id, token) => {
  let url = baseUrl + "resetPassword/";
  url += id.toString() + "/";
  url += token.tostring();
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password: password,
    }),
  };
  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const deleteRecord = async (id) => {
  let url = baseUrl + "delete";
  url += `?id=${id}`;
  const jwt = "Bearer " + localStorage.getItem("hospitalToken");

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: jwt },
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const patientEmergencyInfo = async (aadharId) => {
  let url = baseUrl + "patientEmergencyInfo";
  url += `?aadharId=${aadharId}`;
  const jwt = "Bearer " + localStorage.getItem("hospitalToken");

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: jwt },
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const sendOTP = async (email) => {
  const url = baseUrl + "sendOTP";
  const jwt = "Bearer " + localStorage.getItem("hospitalToken");
  

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: jwt },
    body: JSON.stringify({
      email: email,
    }),
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();

  return body;
};

const verifyOTP = async (email, OTP) => {
  const url = baseUrl + "verifyOTP";
  const jwt = "Bearer " + localStorage.getItem("hospitalToken");

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: jwt },
    body: JSON.stringify({
      email: email,
      OTP: OTP,
    }),
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

export {
  login,
  register,
  changePassword,
  loggedHospital,
  sentResetPasswordEmail,
  resetPassword,
  deleteRecord,
  patientEmergencyInfo,
  sendOTP,
  verifyOTP,
};
