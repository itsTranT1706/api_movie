const movieService = require('../services/movieService');

class MovieController {
    async getMovieUpdated(req, res) {
        try {
            const data = await movieService.getMovieUpdated();
            res.json(data);

          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message
             });
          }
       };
    
       async getMovieByType(req, res) {
        try {
            const type= req.params.type;
            const params = req.query;

            if (!type) return res.status(400).json({ error: 'Không đúng loại phim' });
        
            const data = await movieService.getMovieByType(type, params);
            res.json(data);

          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message
             });
          }
       };
    
       async getMovieByCate(req, res) {
         //  console.log("asdcabsdjchkb", cate);
        try {
            const cate = req.params.cate;
            const params = req.query || "";

            if (!cate) return res.status(400).json({ error: 'không có quốc gia hoặc thể loại hoặc năm này' });
        
            const data = await movieService.getMovieByCate(cate, params);
            res.json(data);

          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message 
             });
          }
       }

       async getMovieByYear(req, res) {
        try {
         const cate = req.params.year;
         const params = req.query || "";
         console.log(params);
            if (!cate) return res.status(400).json({ error: 'không có quốc gia hoặc thể loại hoặc năm này' });
        
            const data = await movieService.getMovieByYear(cate, params);
            res.json(data);

          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message
             });
          }
       }
    
       async getMovieByCountry(req, res) {
        try {
         const cate = req.params.country;
         console.log(cate);

         const params = req.query || "";
            if (!cate) return res.status(400).json({ error: 'không có quốc gia hoặc thể loại hoặc năm này' });
        
            const data = await movieService.getMovieByCountry(cate, params);
            res.json(data);

          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message
             });
          }
       }
    
       async searchMovies(req, res) {
        try {
            const params = req.query;
            if (!params) return res.status(400).json({ error: 'Thiếu từ khóa tìm kiếm' });
        
            const data = await movieService.searchMovies(params);
            res.json(data);

          } catch (err) {
            res.status(500).json({ error: err.message });
          }
       };
    
       async getMovieDetail(req, res) {
        try {
            const { slug } = req.params;
            if (!slug) return res.status(400).json({ error: 'Thiếu slug phim' });
        
            const data = await movieService.getMovieDetail(slug);
            res.json(data);

          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message
             });
          }
       };

       async getCredits(req, res) {
        try {
            const { movieId } = req.params;
            if (!movieId) return res.status(400).json({ error: 'không tìm thấy id phim' });
        
            const data = await movieService.getCredits(movieId);
            // console.log(data)
            res.json({data});

          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message
             });
          }
       };

}

module.exports = new MovieController();