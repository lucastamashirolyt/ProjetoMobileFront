import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.16.14.41:3333',
});

export default api;
