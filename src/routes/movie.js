const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

router.get("/phim-moi-nhat", movieController.getMovieUpdated); //lấy phim mới nhất
router.get("/:type", movieController.getMovieByType); //lấy phim theo dạng: phim-le, phim-bo, phim-thuyet-minh, phim-long-tieng
router.get("/quoc-gia/:country", movieController.getMovieByCate); //lấy phim theo quốc gia
router.get("/the-loai/:category", movieController.getMovieByCate); // lấy phim theo thể loại
router.get("/nam/:year", movieController.getMovieByCate); // lấy phim theo năm
router.get("/tim-kiem", movieController.searchMovies); //tìm kiếm phim
router.get("/phim/:slug", movieController.getMovieDetail); //thông tin chi tiết phim
router.get("/phim/:movieId/credits", movieController.getCredits); //danh sách diễn viên đóng phim đó

// router.get("/popular", movieController.)

module.exports = router;