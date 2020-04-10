import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://127.0.0.1:3333', //10.0.0.111
})

export default api;