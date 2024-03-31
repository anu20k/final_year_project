const baseUrl = "https://face-detaction.onrender.com/";
// const checkFace = async (
//   image
// ) => {
//   const url = baseUrl + 'check-face'

//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       File1:image,

//     }),
//   }

//   const response = await fetch(url, requestOptions)
//   const body = await response.json()
//   return body
// }
// Function to fetch the "/post-face" endpoint
const postFaceData = async (files, label) => {
  const formData = new FormData();
  formData.append("File1", files[0]);
  formData.append("File2", files[1]);
  formData.append("File3", files[2]);
  formData.append("label", label);

  try {
    const response = await fetch("/post-face", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // Handle successful response
    console.log(data);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

// const checkFace = async (file) => {
//   try {
//     const response = await fetch('/check-face', {
//       method: 'POST',
//       body: file
//     });

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error checking face:', error);
//     throw error;
//   }
// };

const checkFace = async (formData) => {
  // Prevent default form submission

  console.log(formData["File1"]);

  try {
    const response = await fetch(
      "https://face-detaction.onrender.com/check-face",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response) {
      console.log("error");
    }

    const data = await response.json();
    return data; // Process the response data here
  } catch (error) {
    console.error("Error during upload:", error);
    alert("An error occurred during the upload.");
  }
};

export { checkFace };
