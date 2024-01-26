const api_url = 'https://emergencyhealthlink.onrender.com/api/'
const register = async (
  firstName,
  middleName,
  lastName,
  email,
  password,
  dateOfBirth,
  PAN_ID,
  addharID,
  mobile,
  emergencyMobile,
  localAddress,
  city,
  district,
  state,
  gender,
  image,
  ABHA_ID,
  bloodGroup,
  longLifeDisease,
) => {
  const url = api_url + 'user/register'

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName:firstName,
      middleName:middleName,
      lastName:lastName,
      email:email,
      password:password,
      dateOfBirth:dateOfBirth,
      PAN_ID:PAN_ID,
      addharID:addharID,
      mobile:mobile,
      emergencyMobile:emergencyMobile,
      localAddress:localAddress,
      city:city,
      district:district,
      state:state,
      gender:gender,
      image:image,
      ABHA_ID:ABHA_ID,
      bloodGroup:bloodGroup,
      longLifeDisease:longLifeDisease,
    }),
  }

  const response = await fetch(url, requestOptions)

  const body = await response.json()

  return body
}

const login = async (addharID, password) => {
  const url = api_url + 'user/login'

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      addharID:addharID,
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
const loggedUser = async () => {
  const url = api_url + 'user/loggeduser'
  const jwt = 'Bearer ' + localStorage.getItem('token')
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: jwt },
  }
  const response = await fetch(url, requestOptions)

  const body = await response.json()

  return body
}
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
const resetPassword = async (password , id, token) => {
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
  loggedUser,
  sentResetPasswordEmail,
  resetPassword,
}
