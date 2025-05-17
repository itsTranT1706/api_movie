const express = require("express");
const router = express.Router();

const ratingController = require("../controllers/ratingController");
const {
    authUserMiddleWare, 

} = require("../middleWare/authMiddleWare");

router.post("/", authUserMiddleWare, ratingController.rating);


