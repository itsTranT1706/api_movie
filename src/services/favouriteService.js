const { favourites, users } = require('../models');

class Favourite {
    async addFavourite(userId, movieId) {   
        const checkUser = await users.findOne({ where: { id: userId, } });
        const checkMovie = await favourites.findOne({ where : {user_id :userId, movie_id: movieId}})
        if (checkMovie) {
            return {
                status: "ERR",
                message: "Duplicate movieId"
            }
        }
        if (!checkUser) {
            return {
                status: "ERR",
                message: "this user do not exist!",
            };
        }
        try {   
            return {
                status: "OK",
                message: "Thêm phim yêu thích thành công",
                data: await favourites.create({
                    user_id: userId,
                    movie_id: movieId
                })
              };

        }catch(error) {
            console.error("Lỗi khi thêm phim yêu thích:", error);
            throw new Error(error.message);
        }
    };

    async getFavourites(userId) {   
        try {
            
            return {
                status: "OK",
                message: "Danh sách phim yêu thích.",
                data: await favourites.findAll({
                    where: { user_id: userId },
                })
              };

        }catch(error) {
            throw new Error('Không lấy được danh sách yêu thích');
        }
    };

    async deleteFavourites(movieId, userId) {  
        const checkMovie = await favourites.findOne({ where: { movie_id: movieId, } });
        if (!checkMovie) {
            return {
                status: "ERR",
                message: "this movie do not exist!",
            };
        }

        try {
            await favourites.destroy({ where: { 
                user_id: userId,
                movie_id:  movieId 
            }});

            return {
                status: "OK",
                message: "Remove movie from favourite successfully!",
            };
        }catch(error) {
            console.error("Lỗi khi thêm phim yêu thích:", error);

            throw new Error('Không xoá được phim khỏi yêu thích');
        }
    };
}

module.exports = new Favourite();