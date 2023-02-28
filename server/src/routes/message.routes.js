const router = require("express").Router();
const catchAsyncError = require("../errors/catchAsyncError");
const messageController = require("../controllers/message.controllers");


router.post("/create", catchAsyncError(messageController.CreateOneMessage));
router.get("/userTo", catchAsyncError(messageController.getAllMyMessage));


module.exports = router;