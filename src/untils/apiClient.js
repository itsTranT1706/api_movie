// sử dụng api có sẵn để lấy data từ 2 nguồn: nguonc và tmdb
//nguonc: để lấy phim, tmdb: lấy thông tin về credits and movie credits

const axios  = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const api_key = process.env.API_KEY;

// console.log("sdf", process.env.API_KEY);
const api = axios.create({
    baseURL: "https://phimapi.com",
    timeout:5000
})

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: api_key,
        language: 'vi-VN'

    },
    timeout:5000

})
module.exports = {
    api,
    tmdb,
};