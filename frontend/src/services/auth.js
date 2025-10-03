import axios from "axios";

const AUTH_URL = "http://localhost:5001/api/users";

export const loginUser = (email, password) =>
  axios.post(
    `${AUTH_URL}/login`,
    { email, password },
    { headers: { "Content-Type": "application/json" } } // Ensure JSON
  );

export const registerUser = (userData) => {
  return axios.post(`${AUTH_URL}/register`, userData, {
    headers: { "Content-Type": "application/json" }, // Ensure JSON
  });
};

export const getCurrentUser = (token) =>
  axios.get(`${AUTH_URL}/current`, {
    headers: { Authorization: `Bearer ${token}` },
  });
