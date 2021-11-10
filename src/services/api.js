import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://api-github.com/',
});

export default api;