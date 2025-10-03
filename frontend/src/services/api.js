import axios from "axios";

const API_URL = "http://localhost:5001/api/contacts";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getContacts = () => axiosInstance.get("/");
export const addContact = (data) => axiosInstance.post("/", data);
export const deleteContact = (id) => axiosInstance.delete(`/${id}`);
export const updateContact = (id, data) => axiosInstance.put(`/${id}`, data);
