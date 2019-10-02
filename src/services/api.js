import axios from 'axios';
// const apiUrl = 'http://10.0.3.2:3001';

const api = axios.create({
  baseURL: 'http://localhost:8081',
});

export default api;
