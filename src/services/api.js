import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5d8d1cdb370f02001405bd41.mockapi.io/api/v1/users',
});

export default api;
