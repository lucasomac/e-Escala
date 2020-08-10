import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.10.10.87:3030'
})

export default api;
