const baseUrl = "https://ehl.onrender.com/api/user/";
// firstName,middleName,lastName,email,password,dateOfBirth,PAN_Id,aadharId,mobile,emergencyMobile,localAddress,city,district,state ,gender ,image,ABHA_Id,bloodGroup,longLifeDisease
const register = async (
  firstName,
  middleName,
  lastName,
  email,
  password,
  dateOfBirth,
  PAN_Id,
  aadharId,
  mobile,
  emergencyMobile,
  localAddress,
  city,
  district,
  state,
  gender,
  image,
  ABHA_Id,
  bloodGroup,
  longLifeDisease
) => {
  const url = baseUrl + "register";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      email: email,
      password: password,
      dateOfBirth: dateOfBirth,
      PAN_Id: PAN_Id,
      aadharId: aadharId,
      mobile: mobile,
      emergencyMobile: emergencyMobile,
      localAddress: localAddress,
      city: city,
      district: district,
      state: state,
      gender: gender,
      image: image,
      ABHA_Id: ABHA_Id,
      bloodGroup: bloodGroup,
      longLifeDisease: longLifeDisease,
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
  const jwt = "Bearer " + localStorage.getItem("userToken");
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

const loggedUser = async () => {
  const url = baseUrl + "loggedUser";
  const jwt = "Bearer " + localStorage.getItem("userToken");
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
  const jwt = "Bearer " + localStorage.getItem("userToken");

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
  loggedUser,
  sentResetPasswordEmail,
  resetPassword,
  deleteRecord,
};
