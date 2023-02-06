import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://fakestoreapi.com/products/"
});

export default axiosClient;