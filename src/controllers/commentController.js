const CommentService = require('../services/commentService');

const createComment = async (req, res) => {
  try {
    const user_id = req.params.id;
    const comment = await CommentService.create(user_id, req.body);
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await CommentService.deleteCmt(req.body);
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCommentsByMovie = async (req, res) => {
  try {
    const comments = await CommentService.getByMovieId(req.params.movie_id);
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getReplies = async (req, res) => {
  try {
    const replies = await CommentService.getReplies(req.params.parent_id);
    res.status(200).json(replies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createComment,
  deleteComment,
  getCommentsByMovie,
  getReplies,
};
