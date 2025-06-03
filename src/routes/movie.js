const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

router.get("/phim-moi-nhat", movieController.getMovieUpdated);
router.get("/loai-phim/:type", movieController.getMovieByType);  //phim le, phim bo, tv show
router.get("/quoc-gia/:country", movieController.getMovieByCountry);

router.get("/the-loai/:cate", movieController.getMovieByCate); // co trang, hanh dong, kinh di

router.get("/nam/:year", movieController.getMovieByYear);

router.get("/tim-kiem", movieController.searchMovies);
router.get("/phim/:slug", movieController.getMovieDetail); // lay chi tiet phim
router.get("/phim/:movieId/credits", movieController.getCredits); // lay danh sach dien vien  phim

// router.get("/popular", movieController.)

module.exports = router;