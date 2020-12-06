import axios from 'axios';
import getBaseUrl from './BaseUrl';

/**
 * This function takes care of changing the password using backend API.
 * @param {*} user 
 * @param {*} oldPassword 
 * @param {*} newPassword 
 */
async function handlePasswordChange(user, oldPassword, newPassword) {
  const baseUrl = getBaseUrl(window);
  const options = {
    headers: {
      "Access-Control-Allow-Origin": baseUrl,
      "X-Powered-By": "Express",
      "Content-Type": "application/json; charset=utf-8",
    },
  };

  const data = {
    username: user,
    old_password: oldPassword,
    new_password: newPassword
  };

  const promise = await axios.post(`${baseUrl}/change_password`, data, options);
  return promise;
}

/**
 * This function takes care of changing the user status using backend API.
 * @param {*} user 
 * @param {*} newStatus 
 */
async function handleStatusChange(user, newStatus) {
  const baseUrl = getBaseUrl(window);
  const options = {
    headers: {
      "Access-Control-Allow-Origin": baseUrl,
      "X-Powered-By": "Express",
      "Content-Type": "application/json; charset=utf-8",
    },
  };

  const data = {
    username: user,
    status: newStatus
  };

  const promise = await axios.post(`${baseUrl}/new_status`, data, options);
  return promise;
}

/**
 * This function takes care of deleting/deactivating a user using backend API.
 * @param {*} user 
 */
async function deactivateUser(user) {
  const baseUrl = getBaseUrl(window);
  const options = {
    headers: {
      "Access-Control-Allow-Origin": baseUrl,
      "X-Powered-By": "Express",
      "Content-Type": "application/json; charset=utf-8",
    },
  };

  const data = {
    username: user
  };

  const promise = axios.post(`${baseUrl}/delete_user`, data, options);
  return promise;
}

export {
    handlePasswordChange,
    handleStatusChange,
    deactivateUser
}
