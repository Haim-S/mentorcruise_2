import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {getAllConversations} from "../store/slices/messageSlice";
import {ChatPageContainer} from "../style/globalCss";
import Grid from "@mui/material/Unstable_Grid2";
import SidebarChat from '../components/chat/sidebarChat/SidebarChat';
import ChatBox from '../components/chat/chatBox/ChatBox';
import io from "socket.io-client";

const SERVER_ENDPOINT = "http://localhost:9001";
const socket = io(SERVER_ENDPOINT);

const ChatPage = () => {

const dispatch = useDispatch();

useEffect(()=> {

  dispatch(getAllConversations());

socket.on("connect", ()=> {
  console.log("is socket");
})

socket.on("disconnect", ()=> {
  console.log("is disconnect socket");
});

return () => {
  socket.off("connect");
  socket.off("disconnect");
};

},[dispatch]);




  return (
    <ChatPageContainer>
      <Grid container>
        <Grid item xs={12} sm={5} md={4} lg={3}>
    <SidebarChat/>
        </Grid>
        <Grid item xs={12} sm={7} md={8} lg={9} 
        sx={{display: {xs: "none", sm: "grid"}}}
        >
          <ChatBox/>
        </Grid>
      </Grid>
      </ChatPageContainer>
  )
}

export default ChatPage