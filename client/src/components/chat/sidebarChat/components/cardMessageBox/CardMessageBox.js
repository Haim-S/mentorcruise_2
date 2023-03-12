import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {
  BadgeMessageNoRead,
  BoxLastMessageTime,
  BoxMessage,
  BoxMessageContent,
  BoxMessageUser
} from "./CardMessageBox.style";
import {TypographyStyle} from "../../../../../style/globalCss";
import {capitalizeFirstLetter} from "../../../../../utils/capitalize.utils";



const CardMessageBox = ({chat}) => {

  
  const navigate = useNavigate();
  const {user} = useSelector((store)=> store.auth);
  const { _id, firstName, lastName, imgSRC } =
    user.role === "CONSULTANT" ? chat.entrepreneurId : chat.consultantId;

    const handleNoReadMessages = async () => {
      navigate(`/chat/${_id}`, {replace: true});
    };



  return (
    
    <BoxMessage onClick={handleNoReadMessages}>
      <BoxMessageContent>
        <img
        src={imgSRC}
        alt={`Image ${" "} Profiel ${firstName}-${lastName}`}
        />
        <BoxMessageUser>
          <TypographyStyle variant='h2' sx={{mb: "5px"}}>
            {capitalizeFirstLetter(firstName)}{" "}
            {capitalizeFirstLetter(lastName)}
          </TypographyStyle>
          <TypographyStyle paragraph={true}>Last Message</TypographyStyle>
        </BoxMessageUser>
      </BoxMessageContent>

      <BoxLastMessageTime>
        <BadgeMessageNoRead
        badgeContent={1}
        color="primary"
        >
          <TypographyStyle variant='h5'>Just now</TypographyStyle>
        </BadgeMessageNoRead>
      </BoxLastMessageTime>
    </BoxMessage>
  )
}

export default CardMessageBox