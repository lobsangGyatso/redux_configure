import axios from 'axios';
import { API_URL } from './constants';

// const config = process.env.REACT_APP_PLATFORM === 'django' ? API_DJANGO : API;

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
