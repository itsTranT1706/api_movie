const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authAdminMiddleWare = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            status: "ERR",
            message: "Authentication failed, Token is missing."
        });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err ){
            return res.status(401).json({
                status: "ERR",
                message: "Authentication is failed, Token is invalid."
            })
        }
        if (decoded.role === 2){
            next();
        }
        else {
            return res.status(403).json({
                status: "ERR",
                message: "Access is denied. You do not have the required role."
            });
        };
    });
};

const authUserMiddleWare = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token){
         return res.status(401).json({
            status: "ERR",
            message: "Authentication is failed. Token is missing."
         });
    }

    const userId = parseInt(req?.params?.id, 10);
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(401).json({
                status: "ERR",
                message: "Authentication is failed. Token is invalid"
            })

        }
        if (decoded?.id === userId || decoded?.role === 2 ) {
            next();
        }
        else {
            return res.status(403).json({
                status: "ERR",
                message: "Authentication is failed. You do not have the required role"
            });
        }
    });
};

module.exports = {
    authAdminMiddleWare,
    authUserMiddleWare,

};