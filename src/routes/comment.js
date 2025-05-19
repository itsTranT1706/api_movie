//api comment

const express = require("express");
const router = express.Router();

const commentController = require("../controllers/commentController.js");
const { authUserMiddleWare } = require("../middleWare/authMiddleWare.js");


router.post("/" ,authUserMiddleWare, commentController.createComment); // gửi comment
router.delete("/:comment_id", commentController.deleteComment); //xoá comment
router.get("/:movie_id", commentController.getCommentsByMovie);// lấy tất cả comment theo phim
router.get("/replyList/:parent_id", commentController.getReplies); // lấy các comment trả lời của 1 comment gốc

module.exports = router;