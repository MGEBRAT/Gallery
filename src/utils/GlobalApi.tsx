const axios = require("axios");
// вызываем переменную с токенном из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// создаем подключение клиента
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
    headers: {
        Authorization: 'Bearer ' + API_TOKEN,
    }
});



const getPicture = () => axiosClient.get('/pictures?populate=*');
const getAutors = () => axiosClient.get('/autors?populate=*');
const getReviews = () => axiosClient.get('/reviews?populate=*');
const createReview = (data) => axiosClient.post('/reviews', data);

export default {
    getPicture,
    getAutors,
    getReviews,
    createReview
}
