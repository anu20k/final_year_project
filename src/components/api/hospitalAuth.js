const api_url = 'https://ehl.onrender.com/api/'
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
  speciality,
) => {
  const url = api_url + 'hospital/register'

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name:name,
      email:email,
      password:password,
      registrationNo:registrationNo,
      contactNo_1:contactNo_1,
      contactNo_2:contactNo_2,
      localAddress:localAddress,
      city:city,
      district:district,
      state:state,
      speciality:speciality,
    }),
  }
  const response = await fetch(url, requestOptions)
  const body = await response.json()

  return body
}

const login = async (email, password) => {
  const url = api_url + 'hospital/login'

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email:email,
      password: password,
    }),
  }

  const response = await fetch(url, requestOptions)

  const body = await response.json()

  return body
}
const changePassword = async (password) => {
  const url = api_url + 'user/changepassword'
  const jwt = 'Bearer ' + localStorage.getItem('token')
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: jwt },
    body: JSON.stringify({
      password: password,
    }),
  }
  const response = await fetch(url, requestOptions)

  const body = await response.json()

  return body
}
const loggedHospital = async () => {
  const url = api_url + "hospital/loggedhospital";
  const jwt = "Bearer " + localStorage.getItem("token");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: jwt },
  };
  const response = await fetch(url, requestOptions);

  const body = await response.json();

  return body;
};
const sentResetPasswordEmail = async (email) => {
  const url = api_url + 'user/sent-reset-password-email'
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
    }),
  }
  const response = await fetch(url, requestOptions)

  const body = await response.json()

  return body
}
const resetPassword = async (password, id, token) => {
  const url = api_url + 'user/sent-reset-password-email'

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password: password,
    }),
  }
  const response = await fetch(url, requestOptions)

  const body = await response.json()

  return body
}
export {
  login,
  register,
  changePassword,
  loggedHospital,
  sentResetPasswordEmail,
  resetPassword,
}
