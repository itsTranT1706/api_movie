//api về diễn viên

const express = require("express");
const router = express.Router();

const castController = require("../controllers/castController");

router.get("/:castId", castController.getInfor); //lấy thông tin chi tiết diễn. viên 
router.get("/:castId/movie_credits", castController.getMovieCredits); // lấy thông tin các bộ phim mà diễn viên đó đóng


module.exports = router;
