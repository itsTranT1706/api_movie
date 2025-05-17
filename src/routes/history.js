const express = require("express");
const router = express.Router();

const historyController = require("../controllers/historyController");
const {
    authUserMiddleWare,

} = require("../middleWare/authMiddleWare");

router.get("/", authUserMiddleWare, historyController.getHistoryMovie);
router.post("/", authUserMiddleWare, historyController.saveHistoryMovie);
router.delete("/:movie-id", authUserMiddleWare, historyController.deleteHistoryMovie);



