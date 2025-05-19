const express = require("express");
const router = express.Router();

const favouriteController = require("../controllers/favouriteController");
const {
    authUserMiddleWare,

} = require("../middleWare/authMiddleWare");

router.post("/:id", authUserMiddleWare, favouriteController.addFavourites);

router.get("/:id", authUserMiddleWare, favouriteController.getFavourites);

router.delete("/:id/:movie_id", authUserMiddleWare, favouriteController.deleteFavourites);

module.exports = router;
