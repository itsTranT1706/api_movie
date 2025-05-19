const express = require("express");
const router = express.Router();

const castController = require("../controllers/castController");

router.get("/:castId", castController.getInfor);
router.get("/:castId/movie_credits", castController.getMovieCredits);


module.exports = router;
