import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import userService from "../../service/user.service";

export const AllUser = createAsyncThunk(
    "user/allByRole", async () => {
        const response = await userService.getAllUserByRole();
        return response;
    }
);

export const userById = createAsyncThunk(
    "user/userByRole", async(userId)=> {
        const response = await userService.getUserById(userId);
        return response;
    }
);

export const deleteUserById = createAsyncThunk(
    "user/deleteUser", async(userId) => {
        const response = await userService.deleteUserById(userId);
        return response;
    }
);

export const updateUser = createAsyncThunk(
    "user/update", async(values) =>{
        const response = await userService.updateUser(values);
        return response;
    }
)



const initialState = {
    isLoading: false,
    error: "",
    users: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: {

        [AllUser.pending]: (state, action)=> {
            state.isLoading = false;
            state.error = "";
        },
        [AllUser.rejected]: (state, action)=> {
            state.isLoading = false;
            state.error = "";
        },
        [AllUser.fulfilled]: (state, {payload})=> {
            state.isLoading = false;
            state.error = "";
            state.users = payload;
        },
        [userById.pending]: (state, action)=> {
            state.isLoading = true;
            state.error = "";
        },
        [userById.rejected]: (state, action)=> {
            state.isLoading = false;
            state.error = "";
        },
        [userById.fulfilled]: (state, {payload})=> {
            state.isLoading = false;
            state.error = "";
            state.users = payload;
        },
    }
});

export default userSlice.reducer;