const api_url = 'https://face-detaction.onrender.com/'
const checkFace = async (
  image
) => {
  const url = api_url + 'check-face'

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      File1:image,
      
    }),
  }

  const response = await fetch(url, requestOptions)
  const body = await response.json()
  return body
}

export {
    checkFace
}
