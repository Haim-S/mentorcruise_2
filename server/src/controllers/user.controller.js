const User = require("../models/user.model");
const Connect = require("../models/connect.model");
const userService = require("../services/user.service");
const {USER_ROLE, SELECTED_USER_FIELDS} = require("../constants/user.constants");


exports.getAllUserByRole = async (req, res, next) => {
const userRole = await userService.getUserRoleById(req.userId);

const filterRoleByFetcherRole =
userRole === USER_ROLE.ENTREPRENEUR 
? USER_ROLE.CONSULTANT
: USER_ROLE.ENTREPRENEUR;

const users = await User.find({role: filterRoleByFetcherRole}).select(
    SELECTED_USER_FIELDS
);

const connectionKeyByRole = userRole === USER_ROLE.ENTREPRENEUR ? "entrepreneurId" : "consultantId";
const connectionKeyToAddConnect = connectionKeyByRole === "entrepreneurId" ? "consultantId" : "entrepreneurId";

const connections = await Connect.find({[connectionKeyByRole] : req.userId});

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const connect = connections.find((c) => c[connectionKeyToAddConnect] == user._id.toString());
    if(connect){
        users[i] = {...user._doc, connect};
    }
}

res.status(200).send(users);

};


exports.getOneUserById = async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return next(new NotFoundError());
    res.send(user);
  };