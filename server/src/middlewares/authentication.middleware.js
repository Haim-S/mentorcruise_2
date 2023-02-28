const jwtTokenService = require("../services/jwt.service");
// const {UnauthorizeError} = require("../errors/Errors");

const authJwtToken = (req, res, next) => {
    try {
        const token = req.headers["access-token"];
        if(!token) return res.sendStatus(401);
        const decodedToken = jwtTokenService.verifyAccessToken(token);
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        res.send(error);
    }
}

module.exports = {authJwtToken};



