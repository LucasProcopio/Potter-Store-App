import axios from 'axios';
// const apiUrl = 'http://10.0.3.2:3001';
// http://localhost:8081

const api = axios.create({
  baseURL: 'http://10.0.3.2:3001',
});

export default api;
