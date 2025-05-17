const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

router.get("/phim-moi-nhat", movieController.getMovieUpdated);
router.get("/:type", movieController.getMovieByType);
router.get("/quoc-gia/:country", movieController.getMovieByCate);
router.get("/the-loai/:category", movieController.getMovieByCate);
router.get("/nam/:year", movieController.getMovieByCate);
router.get("/tim-kiem", movieController.searchMovies);
router.get("/phim/:slug", movieController.getMovieDetail);


module.exports = router;