import axios from 'axios';

const api = axios.create({
    baseURL: 'https://escala-backend.herokuapp.com'
});

export default api;
