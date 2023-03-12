// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import connectionService from "../../service/connection.service";

// export const sendConnectionRequest = createAsyncThunk(
//     "connect/request", async (user)=> {
//         const response = await connectionService.sendConnectionRequestById(user._id);
//         return {response, user};
//     }
// );

// export const AllConversations = createAsyncThunk(
//     "connect/myConversations", async ()=> {
//         const response = await connectionService.getAllConversations();
//         return response;
//     }
// );

// export const approveConnectionById = createAsyncThunk(
//     "connect/approve", async () => {
//         const response = await connectionService.approveConnectionById(userId);
//         return response;
//     }
// )

// const initialState = {
//     status:  "loading",
//     error: "",
//     users: [],
//     connect: [],

// }

// const connectSlice = createSlice({
//     name: "connect",
//     initialState,
//     reducers: {
//         pushUsers: (state, {payload}) => {
//             console.log(payload);
//             state.users.push(payload);
//         },

//     },
//     extraReducers: {
//         [sendConnectionRequest.pending]: (state, action)=> {
//             state.status = "loading";
//         },
//         [sendConnectionRequest.rejected]: (state, {payload})=> {
//             state.status = "error";
//             state.error = payload;
//         },
//         [sendConnectionRequest.fulfilled]: (state, {payload})=> {
//             state.status = "idle";
//             state.connect = payload.response;
//             state.users = state.users.map((user)=> user._id === payload.user._id ?
//              {...user, connect: payload.response}: user);
//             console.log(state.connect);

//         },
//     }
// });


// export const { pushUsers} = connectSlice.actions;
// export default connectSlice.reducer;