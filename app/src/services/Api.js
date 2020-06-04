import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://escala-backend.herokuapp.com'
    baseURL: 'http://10.10.10.87:3030'
});

export default api;
