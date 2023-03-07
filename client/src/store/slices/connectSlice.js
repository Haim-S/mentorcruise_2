import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import connectionService from "../../service/connection.service";

export const sendConnectionRequest = createAsyncThunk(
    "connect/request", async (userId)=> {
        const response = await connectionService.sendConnectionRequestById(userId);
        return {response, userId};
    }
);

export const AllConversations = createAsyncThunk(
    "connect/myConversations", async ()=> {
        const response = await connectionService.getAllConversations();
        return response;
    }
);

// export const approveConnectionById = createAsyncThunk(
//     "connect/approve", async () => {
//         const response = await connectionService.approveConnectionById(userId);
//         return response;
//     }
// )

const initialState = {
    status:  "loading",
    error: "",
    users: [],
    connect: [],

}

const connectSlice = createSlice({
    name: "connect",
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [sendConnectionRequest.pending]: (state, action)=> {
            state.status = "loading";
        },
        [sendConnectionRequest.rejected]: (state, {payload})=> {
            state.status = "error";
            state.error = payload;
        },
        [sendConnectionRequest.fulfilled]: (state, {payload})=> {
            state.status = "idle";
            state.connect = payload.response;
            console.log(state.connect);

        },
    }
});

export default connectSlice.reducer;