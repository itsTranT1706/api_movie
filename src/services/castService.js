const { tmdb } = require("../untils/apiClient");

class CastService {
     async getInfor(castId) {
        try {
            const res = await tmdb.get(`/person/${castId}`);
            return res.data;
          } catch (error) {
            throw new Error('Không thể lấy thông tin diễn viên này');
          }
    };

    async getMovieCredits(castId) {
        try {
            const res = await tmdb.get(`/person/${castId}/movie_credits`);
            return res.data.cast;
        } catch (error) {
            
        }
    }
}

module.exports = new CastService() ;