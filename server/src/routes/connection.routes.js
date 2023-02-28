const router = require("express").Router();
const catchAsyncError = require("../errors/catchAsyncError");
const connectionController = require("../controllers/connection.controllers");


router.post("/request/:userToConnectId", catchAsyncError(connectionController.connectionRequest));
router.get("/all", catchAsyncError(connectionController.getAllConnection));

module.exports = router;