const castService = require("../services/castService");

class CastController {
     async getInfor(req, res) {
        try {
            const { castId } = req.params;
            if (!castId) return res.status(400).json({ error: 'Diễn viên không tồn tại' });
        
            const data = await castService.getInfor(castId);
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

    async getMovieCredits(req, res) {
        try {
            const { castId } = req.params;
            if (!castId) return res.status(400).json({ error: 'Diễn viên không tồn tại' });
        
            const data = await castService.getMovieCredits(castId);
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

module.exports = new CastController() ;