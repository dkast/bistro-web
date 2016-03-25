import 'isomorphic-fetch';

const API_ROOT = 'http://localhost:3000/api/';

// function checkHttpStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   } else {
//     const error = new Error(response.statusText);
//     error.response = response;
//     throw error;
//   }
// }

export function loginUser(username, password) {
  return fetch(API_ROOT + 'authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify({
      user: username,
      password: password
    })
  })
  .then(response =>
    response.json().then(json => ({ json, response }))
  ).then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return response.token;
  })
}
