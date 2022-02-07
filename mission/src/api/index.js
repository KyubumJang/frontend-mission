import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: process.env.VUE_APP_AUTHORIZATION_PASSWORD,
  },
  timeout: 1000,
});

export default instance;
