import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://meowfacts.herokuapp.com/',
});

export default axiosInstance;
