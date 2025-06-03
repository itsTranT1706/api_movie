const express = require("express");
const router = express.Router();

const commentController = require("../controllers/commentController.js");
const { authUserMiddleWare } = require("../middleWare/authMiddleWare.js");


router.post("/:id/" , authUserMiddleWare, commentController.createComment);
router.delete("/:id/:comment_id", authUserMiddleWare, commentController.deleteComment);
router.get("/:movie_id", commentController.getCommentsByMovie);
router.get("/replyList/:parent_id", authUserMiddleWare,  commentController.getReplies);

module.exports = router;