// frontend/src/api.js
import axios from 'axios';

const API_URL = "http://localhost:4000";

export const login = async (username, password) => {
  return await axios.post(`${API_URL}/api/users/login`, { username, password });
};
