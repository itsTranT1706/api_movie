const favouriteService = require("../services/favouriteService");

class FavouriteController {
    async getFavourites (req, res, next) {
        try {
            const userId = req.params.id;
            if (!userId) {
              return res
                .status(200)
                .json({ status: "ERR", message: "User ID is required!" });
            }
            const response = await favouriteService.getFavourites(userId);
            return res.status(200).json(response);
          } catch (error) {
            return res.status(404).json({ message: e });
          }
    }; 

    async addFavourites (req, res, next) {
        try {
            const user_id = req.params.id;
            const {movie_id} = req.body;
            // console.log(req.body);
            if (!user_id) {
              return res
                .status(200)
                .json({ status: "ERR", message: "User ID is required!" });
            }
            if (!movie_id) {
              return res
                .status(200)
                .json({ status: "ERR", message: "Movie ID is required!" });
            }
            const response = await favouriteService.addFavourite(user_id, movie_id);
            return res.status(200).json(response);
          } catch (error) {
            return res.status(404).json({ message: error.message });
          }
    }; 

    async deleteFavourites (req, res, next) {
        try {
            const userId = req.params.id
            const movieId = req.params.movie_id;

            if (!userId) {
              return res
                .status(200)
                .json({ status: "ERR", message: "User ID is required!" });
            }
            const response = await favouriteService.deleteFavourites(movieId, userId);
            return res.status(200).json(response);
          } catch (error) {
            return res.status(404).json({ message: error.message });
          }
    }; 
}
module.exports = new FavouriteController();