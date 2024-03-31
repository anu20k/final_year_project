const api_url = 'https://ehl.onrender.com/api/hospital/patientEmergencyInfo'


const pateintinfo = async () => {

    const aadharId = '123456789124';
    const urlWithParams = `${api_url}?aadharId=${aadharId}`;
    const jwt = 'Bearer ' + localStorage.getItem('token')
  
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: jwt }
      
      
    }
  
    const response = await fetch(urlWithParams, requestOptions)
    const body = await response.json()
    // console.log(body)
    return body
  }

  export {pateintinfo};