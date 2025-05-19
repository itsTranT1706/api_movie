const movieService = require('../services/movieService');

class MovieController {
    async getMovieUpdated(req, res) {
        try {
            const data = await movieService.getMovieUpdated();
            res.json({
                success: true,
                data: data
            });

          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message
             });
          }
       };
    
       async getMovieByType(req, res) {
        try {
            const { type } = req.params;
            if (!type) return res.status(400).json({ error: 'Không đúng loại phim' });
        
            const data = await movieService.getMovieByType(type);
            res.json({
                success: true,
                data: data
            });
          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message
             });
          }
       };
    
       async getMovieByCate(req, res) {
        try {
            const { cate } = req.params;
            if (!cate) return res.status(400).json({ error: 'không có quốc gia hoặc thể loại hoặc năm này' });
        
            const data = await movieService.getMovieByType(cate);
            res.json({
                success: true,
                data: data
            });
          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message
             });
          }
       }
    
       async searchMovies(req, res) {
        try {
            const { keyword } = req.query;
            if (!keyword) return res.status(400).json({ error: 'Thiếu từ khóa tìm kiếm' });
        
            const data = await movieService.searchMovies(keyword);
            res.json({
                success: true,
                data: data
            });
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
       };
    
       async getMovieDetail(req, res) {
        try {
            const { slug } = req.params;
            if (!slug) return res.status(400).json({ error: 'Thiếu slug phim' });
        
            const data = await movieService.getMovieDetail(slug);
            res.json({
                success: true,
                data: data
            });
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
            res.json({
                success: true,
                data: data
            });
          } catch (err) {
            res.status(500).json({ 
                success: false,
                error: err.message
             });
          }
       };

}

module.exports = new MovieController();