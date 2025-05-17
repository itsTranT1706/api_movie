const axios  = require("axios");

const api = axios.create({
    baseURL: "https://phimapi.com/",
    timeout:5000
})

module.exports = api;