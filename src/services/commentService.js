const { comments, users } = require('../models');

const create = async (data) => {
//   return await comments.create(data);
  return {
    status: "OK",
    message: "Login successful!",
    data: await comments.create(data)
};
};

const getByMovieId = async (movie_id) => {
  return await comments.findAll({
    where: { movie_id, parent_id: null },
    include: [
      {
        model: comments,
        as: 'replies'
      },
      {
        model: users,
        attributes: ['id', 'username']
      }
    ],
    order: [['created_at', 'DESC']]
  });
};

const getReplies = async (parent_id) => {
  return await comments.findAll({
    where: { parent_id },
    include: [{ model: users, attributes: ['id', 'username'] }],
    order: [['created_at', 'ASC']]
  });
};

module.exports = {
  create,
  getByMovieId,
  getReplies
};
