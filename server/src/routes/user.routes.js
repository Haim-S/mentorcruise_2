const router = require("express").Router();
const catchAsyncError = require("../errors/catchAsyncError");
const userController = require("../controllers/user.controller");


// get all users by specific role
router.get("/role/all", catchAsyncError(userController.getAllUserByRole));
router.get("/getOne/:userId", catchAsyncError(userController.getOneUserById));

module.exports = router;