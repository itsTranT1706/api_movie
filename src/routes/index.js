// route các api theo chức năng

const authRouter = require("./auth");

const castRouter = require("./cast");

const commentRouter = require("./comment");
// const ratingRouter = require("./rating");
// const historyRouter = require("./history");
const favouriteRouter = require("./favourite");

// const recommendRouter = require("./recommend");
const movieRouter = require("./movie");

const routes = (app) =>{
    app.use("/api/auth", authRouter);

    app.use("/api/comment", commentRouter);

    // app.use("rating", ratingRouter);

    // app.use("/history", historyRouter);

    app.use("/api/favourite", favouriteRouter);

    // app.use("/recommend", recommendRouter);

    app.use("/api/movies", movieRouter);

    app.use("/api/cast", castRouter);

}

module.exports = routes;