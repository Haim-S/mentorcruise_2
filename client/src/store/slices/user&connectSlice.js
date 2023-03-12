import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import userService from "../../service/user.service";
import connectionService from "../../service/connection.service";

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



export const sendConnectionRequest = createAsyncThunk(
    "connect/request", async (user)=> {
        const response = await connectionService.sendConnectionRequestById(user._id);
        return {response, user};
    }
);


export const AllConversations = createAsyncThunk(
    "connect/myConversations", async ()=> {
        const response = await connectionService.getAllConversations();
        return response;
    }
);




const initialState = {
    isLoading: false,
    error: "",
    users: [],
    UserIdInformation : [],
};

const userSlice = createSlice({
    name: "userANDconnect",
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
            state.UserIdInformation = payload;
        },
        [sendConnectionRequest.pending]: (state, action)=> {
            state.isLoading = false;
        },
        [sendConnectionRequest.rejected]: (state, {payload})=> {
            state.isLoading = false;
            state.status = "error";
            state.error = payload;
        },
        [sendConnectionRequest.fulfilled]: (state, {payload})=> {
            state.isLoading = false;
            // state.status = "idle";
            state.connect = payload.response;
            state.users = state.users.map((user)=> user._id === payload.user._id ?
             {...user, connect: payload.response}: user);
            console.log(state.connect);

        },
    }
});

export default userSlice.reducer;