const authRouter = require("./auth.js");

// const movieRouter = require("./movie")

const commentRouter = require("./comment");
// const ratingRouter = require("./rating");
// const historyRouter = require("./history");
// const favouriteRouter = require("./favourite");

// const recommendRouter = require("./recommend");
// const feedbackRouter = require("./feedback");


const routes = (app) =>{
    app.use("/auth", authRouter);
    app.get("/webhook", (req, res)=> {
        console.log(req.params);
    })
    // app.use("/movie", movieRouter);

    app.use("/comment", commentRouter);

    // app.use("rating", ratingRouter);

    // app.use("/history", historyRouter);

    // app.use("/favourite", favouriteRouter);

    // app.use("/recommend", recommendRouter);

    // app.use("/feedback", feedbackRouter);

}

module.exports = routes;