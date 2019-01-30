import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export default (type, params) => {
  // called when the user attempts to log in
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request('http://localhost:4000/users/authenticate', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          if (response.status === 401) {
            throw new Error('Username or password is incorrect');
          }
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ username, token }) => {
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
      });
  }
  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    return Promise.resolve();
  }
  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  }
  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return localStorage.getItem('username') && localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject();
  }
  return Promise.reject('Unknown method');
};