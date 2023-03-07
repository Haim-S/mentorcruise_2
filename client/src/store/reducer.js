import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import connectReducer from "./slices/connectSlice";

export const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    connect: connectReducer,
});