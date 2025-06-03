// api danh sách yêu thích

const express = require("express");
const router = express.Router();

const favouriteController = require("../controllers/favouriteController");
const {
    authUserMiddleWare,

} = require("../middleWare/authMiddleWare");

router.post("/:id", authUserMiddleWare, favouriteController.addFavourites); //lưu phim yêu thích mỗi người dùng

router.get("/:id", authUserMiddleWare, favouriteController.getFavourites); //lấy danh sách phim yêu thích của người dùng

router.delete("/:id/:movie_id", authUserMiddleWare, favouriteController.deleteFavourites); //xoá phim khỏi ds yêu thích

module.exports = router;
