const Connect = require("../models/connect.model");
const {getUserRoleById} = require("../services/user.service");
const { USER_ROLE, SELECTED_USER_FIELDS } = require("../constants/user.constants");
const {ConnectionState} = require("../services/connect.service")



exports.connectionRequest = async (req, res, next) => {
    const userToConnectId = req.params.userToConnectId;
    const userIdRequester = req.userId;
    const fetcherRole = await getUserRoleById(userIdRequester);

    const isEntrepreneur = fetcherRole === USER_ROLE.ENTREPRENEUR;

    const connectCreateOptions = {
        entrepreneurId: isEntrepreneur ? userIdRequester : userToConnectId,
        consultantId: isEntrepreneur ? userToConnectId : userIdRequester,
    };

  const responseService = await ConnectionState(userIdRequester, connectCreateOptions);
  res.status(responseService[0].statusCode).send(responseService[0].data);

}

exports.getAllConnection = async (req, res, next) => {
    const fetcherRole = await getUserRoleById(req.userId);
    const isEntrepreneur = fetcherRole === USER_ROLE.ENTREPRENEUR;
    const connectKeyToFilter = isEntrepreneur ? "entrepreneurId" : "consultantId";
    const connectKeyToPopulate = isEntrepreneur
    ? "consultantId" : "entrepreneurId";

    const connections = await Connect.find({
        [connectKeyToFilter] : req.userId,
    }).populate(connectKeyToPopulate, SELECTED_USER_FIELDS);

    res.send(connections);
}