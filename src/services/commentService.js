const { comments, users } = require('../models');

const create = async (data) => {
  return {
    status: "OK",
    message: "Comment successful!",
    data: await comments.create(data)
  };

};

const deleteCmt = async (id) => {
  try {
    const checkCmt = await comments.findOne({ where: { id } });
    if (!checkCmt) {
      return {
        status: "ERR",
        message: "Comment not found!",
      };
    }

    await comments.destroy({ where: { id } });

    return {
      status: "OK",
      message: "Delete comment successful!",
    };
  } catch (error) {
    throw new Error(error.message);
  }
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
  deleteCmt,
  getByMovieId,
  getReplies
};
