import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import authService from "../../service/auth.service";
import {setLocalStorageValue} from "../../utils/localStorage.util"

export const loginByEmailAndPassword = createAsyncThunk(
    
    "auth/loginByEmailAndPassword", async (values) => {
        console.log(values);
        const response = await authService.login(values.email, values.password);
        return response.data;       
    }
);

export const isLoginByToken = createAsyncThunk(
    "auth/isLoginByToken",
    async ()=> {
        const response = await authService.isLogin();
        return response.data;
    }
);

export const registerByPayload = createAsyncThunk(
    "auth/register", async (values) => {
        const response = await authService.register(
             values.email,
             values.password,
             values.passwordConfirmation,
             values.role,
             values.lastName,
             values.firstName
        );
        return response.data;
    }
);

const initialState = {
    isLoading: false,
    isAuth: false,
    error: "",
    user: {},
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearErrorMessage: (state) => {
            state.error = "";
        },
        setIsAuth: (state) => {
            state.isAuth = !state.isAuth;
        },
    },
    extraReducers: {
        [loginByEmailAndPassword.pending]: (state, action) => {
            state.isLoading = true;
            state.error = "";
            state.isAuth = false;
        },
        [loginByEmailAndPassword.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = "Invalid token";
            state.isAuth = false;
        },
        [loginByEmailAndPassword.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.error = "";
            state.isAuth = true;
            state.user = payload;
            console.log(payload);
            setLocalStorageValue("ac_token", payload.jwt_ac_token);
        },
        [isLoginByToken.pending]: (state, action) => {
            state.isLoading = true;
            state.error = "";
            state.isAuth = false;
        },
        
        [isLoginByToken.rejected]: (state, action) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = "Invalid token";
        },
        [isLoginByToken.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.error = "";
            state.isAuth = true;
            state.user = payload;
        },
        [registerByPayload.pending]: (state, action) => {
            state.isLoading = true;
            state.isAuth = false;
            state.error = "";
        },
        [registerByPayload.rejected]: (state, action) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = "missing information";
        },
        [registerByPayload.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = "";
        }, 
    },
});

export const {clearErrorMessage, setIsAuth} = authSlice.actions;
export default authSlice.reducer;
