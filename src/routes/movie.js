const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");


router.get("/tim-kiem", movieController.searchMovie);
router.get("/danh-sach", movieController.getListMovie);
router.get("/chi-tiet-phim", movieController.getDetailMovie);
router.get("/loc", movieController.filterMovie);
router.get("the-loai", movieController.getListCate);
router.get("/quoc-gia", movieController.getListCountry);

module.exports = router;