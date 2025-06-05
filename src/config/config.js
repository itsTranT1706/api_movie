const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "secret",
    database: process.env.DB_DATABASE || "movie_api",
    host: process.env.DB_HOST || "10.110.69.14",
    port: process.env.PORT || "3301",
    dialect: process.env.DB_DIALECT || "mysql",

  },
  test: {
    username: "root",
    password: "secret",
    database: "movie_api",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
};
