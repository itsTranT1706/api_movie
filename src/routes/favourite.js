const express = require("express");
const router = express.Router();

const favouriteController = require("../controllers/favouriteController");
const {
    authUserMiddleWare,

} = require("../middleWare/authMiddleWare");


router.post("/", authUserMiddleWare,favouriteController.saveFavouriteMovie);

router.get("/", authUserMiddleWare, favouriteController.getFavouriteMovie);

router.delete("/:movie-id", authUserMiddleWare, favouriteController.deleteFavouriteMovie);

