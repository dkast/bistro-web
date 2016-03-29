import 'isomorphic-fetch';

const API_ROOT = 'http://localhost:3000/api/';

export function loginUser(username, password) {
  return fetch(API_ROOT + 'authenticate', {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
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
    return json.token;
  })
}
