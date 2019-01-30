import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin';

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
        localStorage.setItem('role', 'admin');
      });
  }

  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    return Promise.resolve();
  }

  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      return Promise.reject();
    }
    return Promise.resolve();
  }

  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {

    //console.log(type, params);

    return Promise.resolve()

    /*return localStorage.getItem('username') &&
      localStorage.getItem('token') &&
      localStorage.getItem('role')
      ? Promise.resolve()
      : Promise.reject({ redirectTo: '/' });*/
  }

  if (type === AUTH_GET_PERMISSIONS) {

    console.log(type, params);

    const role = localStorage.getItem('role');
    if (role) {
      return Promise.resolve(role);
    }

    return Promise.resolve({ redirectTo: '/' });

    /*const role = localStorage.getItem('role');

    if (!params) {
      console.log("GG");
      return role ? Promise.resolve(role) : Promise.reject({ redirectTo: '/' });
    }

    const { location } = params;

    switch (location) {
      case '/categories':
        return Promise.resolve();
      case '/products':
        return Promise.resolve();
      case '/users':
        return role ? Promise.resolve(role) : Promise.reject({ redirectTo: '/' });
      default:
        console.log("GG");
        return Promise.resolve();
    }*/

    /*if (location === '/categories') {

    }
    if (location === '/products') {

    }
    if (location === '/users') {
      return role ? Promise.resolve(role) : Promise.reject();
    }

    return role ? Promise.resolve(role) : Promise.reject();*/
  }

  return Promise.reject('Unknown method');
};