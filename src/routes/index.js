const authRouter = require("./auth.js");

// const movieRouter = require("./movie")

const commentRouter = require("./comment");
// const ratingRouter = require("./rating");
// const historyRouter = require("./history");
// const favouriteRouter = require("./favourite");

// const recommendRouter = require("./recommend");
const movieRouter = require("./movie");

const routes = (app) =>{
    app.use("/api/auth", authRouter);

    // app.use("/movie", movieRouter);

    app.use("/api/comment", commentRouter);

    // app.use("rating", ratingRouter);

    // app.use("/history", historyRouter);

    // app.use("/favourite", favouriteRouter);

    // app.use("/recommend", recommendRouter);

    app.use("/api/movies", movieRouter);

    // app.use("/cast", feedbackRouter);

}

module.exports = routes;