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

   async getMovieByType(type, params) {
    console.log(type)
    try {
        const res = await api.get(`/v1/api/danh-sach/${type}`,{
          params: {
            page: params.page,
            sort_field: params.sort_field,
            sort_type: params.sort_type,
            sort_lang: params.sort_lang,
            category: params.category,
            country: params.country,
            year: params.year,
            limit: params.limit || "20",
          },
        });
        return res.data;
      } catch (error) {
        throw new Error('Không thể lấy danh sách phim');
      }
   };

   async getMovieByCate(category, params) {
    console.log("1234")
    try {
        const res = await api.get(`/v1/api/the-loai/${category}`,{
          params: {
            page: params.page || "1",
            sort_field: params.sort_field|| "_id" ,
            sort_type: params.sort_type || "asc",
            sort_lang: params.sort_lang || "",
            category: params.category || "",
            country: params.country || "",
            year: params.year || "",
            limit: params.limit || "20",
          },
        } );
        return res.data;
      } catch (error) {
        console.log(category)

        throw new Error('Không thể lấy danh sách phim');
      }
   }
   async getMovieByCountry(category, params) {
    console.log("123")
    try {
      console.log(category)
        const res = await api.get(`/v1/api/quoc-gia/${category}`,{
          params: {
            page: params.page || "1",
            sort_field: params.sort_field|| "_id" ,
            sort_type: params.sort_type || "asc",
            sort_lang: params.sort_lang || "",
            category: params.category || "",
            country: params.country || "",
            year: params.year || "",
            limit: params.limit || "20",
          },
        } );
        return res.data;
      } catch (error) {
        throw new Error('Không thể lấy danh sách phim');
      }
   }
   async getMovieByYear(category, params) {
    console.log("123")

    try {
      console.log(params.page)
        const res = await api.get(`/v1/api/nam/${category}`,{
          params: {
            page: params.page || "1",
            sort_field: params.sort_field|| "_id" ,
            sort_type: params.sort_type || "asc",
            sort_lang: params.sort_lang || "",
            category: params.category || "",
            country: params.country || "",
            year: params.year || "",
            limit: params.limit || "20",
          },
        } );
        return res.data;
      } catch (error) {
        throw new Error('Không thể lấy danh sách phim');
      }
   }

   async searchMovies(params) {
    try {
        const res = await api.get(`/v1/api/tim-kiem`, {
          params: {
            keyword: params.keyword,
            page: params.page,
            sort_field: params.sort_field,
            sort_type: params.sort_type,
            sort_lang: params.sort_lang,
            category: params.category,
            country: params.country,
            year: params.year,
            limit: params.limit || "20",
          },
        });
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
        console.log(res.data)
        return res.data.cast;
      } catch (error) {
        throw new Error('Không thể lấy chi tiết phim');
      }
   };
}

module.exports = new MovieService();