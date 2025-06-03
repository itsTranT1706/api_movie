const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

router.get("/phim-moi-nhat", movieController.getMovieUpdated);
router.get("/loai-phim/:type", movieController.getMovieByType);
router.get("/quoc-gia/:country", movieController.getMovieByCountry);

router.get("/the-loai/:cate", movieController.getMovieByCate);

router.get("/nam/:year", movieController.getMovieByYear);

router.get("/tim-kiem", movieController.searchMovies);
router.get("/phim/:slug", movieController.getMovieDetail);
router.get("/phim/:movieId/credits", movieController.getCredits);

// router.get("/popular", movieController.)

module.exports = router;