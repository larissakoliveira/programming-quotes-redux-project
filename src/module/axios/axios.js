import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://programming-quotes-api.herokuapp.com',
});

export default axiosInstance;
