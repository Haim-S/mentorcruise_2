const router = require("express").Router();
const {authJwtToken} = require("../middlewares/authentication.middleware");
const {NotFoundError} = require("../errors/Errors");
const errorHandler = require("../errors/errorHandler");

const authRoutes = require("./authentication.routes");
const userRoutes = require("./user.routes");
const connectionRoutes = require("./connection.routes");
const messageRoutes = require("./message.routes");

router.use("/auth", authRoutes);
router.use("/user", authJwtToken, userRoutes);
router.use("/connection", authJwtToken, connectionRoutes);
router.use("/message", authJwtToken, messageRoutes);

router.all("*", (req, res, next)=>{
    next(new NotFoundError());
});

router.use(errorHandler);

module.exports = router;