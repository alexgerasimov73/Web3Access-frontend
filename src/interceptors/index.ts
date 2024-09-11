import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
