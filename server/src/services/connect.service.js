const Connect = require("../models/connect.model");
const {CONNECT_STATUS} = require("../constants/connect.constants");

exports.ConnectionState = async (userIdRequester, connectCreateOptions, ) => {
    
    let information = [];
    
    
    const isConnectionExist = await Connect.findOne(connectCreateOptions);
    
    if (!isConnectionExist) {
        connectCreateOptions.requestedBy = userIdRequester;
        const newConnection = await Connect.create(connectCreateOptions);
        information.push({statusCode : 200, data : newConnection});
        return information;
    }
    
    const requestedByUserId = isConnectionExist.requestedBy.toString();
    
    console.log(isConnectionExist.status);
    switch (isConnectionExist.status) {
        case "PENDING":
            if (requestedByUserId === userIdRequester){
                await Connect.findByIdAndDelete(isConnectionExist._id);
                information.push({statusCode : 200, data : "Connection deleted"});
                return information;
            }
            isConnectionExist.status = CONNECT_STATUS.APPROVED;
            const updatedConnection = await isConnectionExist.save();
            console.log(updatedConnection);
            information.push({statusCode : 200, data : updatedConnection});
            return information;
            break;
        case "APPROVED":
            await Connect.findByIdAndDelete(isConnectionExist._id);
            information.push({statusCode : 200, data : "Connection deleted"});
            return information;
        case "REJECTED":

        break;

        default:
            await Connect.findByIdAndDelete(isConnectionExist._id);
            information.push({statusCode : 200, data : "Connection deleted"});
            return information;
            break;
    }
}