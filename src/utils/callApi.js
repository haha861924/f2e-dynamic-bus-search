function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}

export const callApi = (url = '', options) => {
  return fetch(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    },
    credentials: 'include',
    ...options,
  })
    .then(handleErrors)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export default callApi;
