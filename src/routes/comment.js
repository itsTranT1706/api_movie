const express = require("express");
const router = express.Router();

const commentController = require("../controllers/commentController.js");
const { authUserMiddleWare } = require("../middleWare/authMiddleWare.js");


router.post("/" ,commentController.createComment);

router.get("/:movie_id", commentController.getCommentsByMovie);
router.get("/replyList/:parent_id", commentController.getReplies);

module.exports = router;