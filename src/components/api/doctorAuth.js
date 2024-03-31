const baseUrl = "https://emergencyhealthlink.onrender.com/api/doctor/";
const register = async (
  name,
  email,
  password,
  dateOfBirth,
  gender,
  degree,
  contactNo,
  localAddress,
  city,
  district,
  state,
  specialty,
  subSpeciality
) => {
  const url = baseUrl + "doctor/register";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      dateOfBirth: dateOfBirth,
      gender: gender,
      degree: degree,
      contactNo: contactNo,
      localAddress: localAddress,
      city: city,
      district: district,
      state: state,
      specialty: specialty,
      subSpeciality: subSpeciality,
    }),
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const login = async (aaddharID, password) => {
  const url = baseUrl + "login";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      aadharId: aaddharID,
      password: password,
    }),
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const changePassword = async (password) => {
  const url = baseUrl + "changePassword";
  const jwt = "Bearer " + localStorage.getItem("doctorToken");
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

const loggedDoctor = async () => {
  const url = baseUrl + "loggedDoctor";
  const jwt = "Bearer " + localStorage.getItem("doctorToken");
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
  const jwt = "Bearer " + localStorage.getItem("doctorToken");

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: jwt },
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

export {
  login,
  register,
  changePassword,
  loggedDoctor,
  sentResetPasswordEmail,
  resetPassword,
  deleteRecord,
};
