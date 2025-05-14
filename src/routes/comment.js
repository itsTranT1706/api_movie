const express = require("express");
const router = express.Router();

const commentController = require("../controllers/commentController");


router.get("/list", commentController.getListComment );
router.get("/replyList", commentController.getReplyList);

router.post("/", commentController.postComment);

module.exports = router;