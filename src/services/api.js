import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signup = (data) => axios.post(`${API_URL}/auth/signup`, data);
export const login = (data) => axios.post(`${API_URL}/auth/login`, data);
export const getEmployees = (token) =>
  axios.get(`${API_URL}/employees`, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const addEmployee = (data, token) =>
  axios.post(`${API_URL}/employees`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const updateEmployee = (id, data, token) =>
  axios.put(`${API_URL}/employees/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const deleteEmployee = (id, token) =>
  axios.delete(`${API_URL}/employees/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
