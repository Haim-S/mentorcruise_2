/**
 * @param {string} status
 * return color based on connection status
 */ 
export const getConnectionStatusColor = (status) => {
    switch (status) {
        case "PENDING":
            return "primary";
        case "APPROVED":
            return "success";
        case "REJECTED":
            return "error";
        default:
            return "default";
    }
};


/**
 * @param {Object} user
 * return connection status
 */ 
export const getUserStatusConnection = (connect) => {
    return connect ? connect.status : "Request";
};
