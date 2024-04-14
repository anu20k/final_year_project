const baseUrl = "https://ehl.onrender.com/api/userHealthRecord/";

const addRecord = async (
  healthRecordTitle,
  userAadharId,
  doctorEmailId,
  date,
  documentType,
  documentLink
) => {
  const url = baseUrl + "add";
  const jwt = "Bearer " + localStorage.getItem("hospitalToken");

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: jwt },
    body: JSON.stringify({
      healthRecordTitle: healthRecordTitle,
      userAadharId: userAadharId,
      doctorEmailId: doctorEmailId,
      date: date,
      documentType: documentType,
      documentLink: documentLink,
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

const updateRecord = async (
  healthRecordTitle,
  userAadharId,
  doctorEmailId,
  date,
  documentType,
  documentLink
) => {
  const url = baseUrl + "update";
  const jwt = "Bearer " + localStorage.getItem("hospitalToken");

  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: jwt },
    body: JSON.stringify({
      healthRecordTitle: healthRecordTitle,
      userAadharId: userAadharId,
      doctorEmailId: doctorEmailId,
      date: date,
      documentType: documentType,
      documentLink: documentLink,
    }),
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const getRecord = async (token) => {
  const url = baseUrl + "get";
  const jwt = "Bearer " + token.toString();
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: jwt },
  };
  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const filterRecord = async (start, limit, token) => {
  let url = baseUrl + "filter";
  url += `?start=${start}&limit=${limit}`;
  const jwt = "Bearer " + token.toString();
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: jwt },
  };
  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};
export { addRecord, deleteRecord, updateRecord, getRecord, filterRecord };
