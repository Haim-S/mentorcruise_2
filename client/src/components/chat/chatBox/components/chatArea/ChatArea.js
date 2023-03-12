import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {userById} from "../../../../../store/slices/user&connectSlice"
import {
BoxChatArea,
BoxTopChat,
LeftTopChat,
RightTopChat,
BoxBottomChat,
ReceiverMessage,
SenderMessage
} from "./ChatArea.style";
import { Avatar, Divider } from "@mui/material";
import {TypographyStyle} from "../../../../../style/globalCss";
import {IconSearch} from "../../../sidebarChat/components/topbar/TopbarStyle";


const ChatArea = () => {

    let {userId} = useParams();
    const dispatch = useDispatch();
    const {firstName, lastName, imgSRC, role} = useSelector((store)=> store.userANDconnect.UserIdInformation)
    useEffect(()=> {
        if(userId){
         dispatch(userById(userId));
        }
    },[userId])

  return (
    <BoxChatArea>
        <BoxTopChat>
            <LeftTopChat>
           <Avatar alt='Image Profile' src={imgSRC} />
           <TypographyStyle variant='h1'>
            {firstName} {lastName} - {role}
           </TypographyStyle>
            </LeftTopChat>
            <RightTopChat>
            <Divider orientation="vertical" flexItem />
                <IconSearch/>
            </RightTopChat>
        </BoxTopChat>

        <BoxBottomChat>

            <ReceiverMessage>
                 <TypographyStyle variant="h2">John Doe</TypographyStyle>
               <TypographyStyle paragraph>
                 Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard
               </TypographyStyle>
            </ReceiverMessage>

            <SenderMessage>
               <TypographyStyle variant="h2">Tom Collins</TypographyStyle>
               <TypographyStyle paragraph>
                 Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard
               </TypographyStyle>
            </SenderMessage>
           
        </BoxBottomChat>

    </BoxChatArea>
  )
}

export default ChatArea