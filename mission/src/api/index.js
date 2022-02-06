import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0',
  headers: { Authorization: 'abcd1234' },
  timeout: 1000,
});

export default instance;
