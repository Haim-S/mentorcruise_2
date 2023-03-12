import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import messageReducer from "./slices/messageSlice";
import userANDconnectReducer from "./slices/user&connectSlice";

export const reducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
    userANDconnect: userANDconnectReducer,
});