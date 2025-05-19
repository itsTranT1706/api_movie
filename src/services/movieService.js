//service gọi api lấy data phim

const {api, tmdb} = require("../untils/apiClient");
// const filterParams = `sort_field=${sort_field}&sort_lang=${sort_lang}&category=${category}&country=${country}&year=${year}&limit=${limit}`
class MovieService {
    
   async getMovieUpdated() {
    try {
        const res = await api.get(`/danh-sach/phim-moi-cap-nhat-v3`);
        return res.data;
      } catch (error) {
        throw new Error('Không thể lấy danh sách phim');
      }
   };

   async getMovieByType(type) {
    try {
        const res = await api.get(`/v1/api/danh-sach/${type}`);
        return res.data;
      } catch (error) {
        throw new Error('Không thể lấy danh sách phim');
      }
   };

   async getMovieByCate(category) {
    try {
        const res = await api.get(`/v1/api/${category}`);
        return res.data;
      } catch (error) {
        throw new Error('Không thể lấy danh sách phim');
      }
   }

   async searchMovies(keyword) {
    try {
        const res = await api.get(`/v1/api/tim-kiem`, { params: { keyword } });
        return res.data;
      } catch (error) {
        throw new Error('Không thể tìm kiếm phim');
      }
   };

   async getMovieDetail(slug) {
    try {
        const res = await api.get(`/phim/${slug}`);
        // const bonus = await tmdb.get(/)
        return res.data;
      } catch (error) {
        throw new Error('Không thể lấy chi tiết phim');
      }
   };

   async getCredits(movieId) {
    try {
        const res = await tmdb.get(`/movie/${movieId}/credits`);
        // const bonus = await tmdb.get(/)
        return res.data.cast;
      } catch (error) {
        throw new Error('Không thể lấy chi tiết phim');
      }
   };
}

module.exports = new MovieService();