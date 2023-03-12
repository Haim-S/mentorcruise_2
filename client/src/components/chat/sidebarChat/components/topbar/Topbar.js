import React, {useState} from 'react'
import {Menu, ListItemIcon, Typography, InputAdornment} from "@mui/material";
import {Send} from "@mui/icons-material";
import { 
  BoxMain,
  BoxTop,
  IconMenu,
  ProfileTopbar,
  BadgeNotification,
  IconNotification,
  MenuItemNotificationAndMessage,
  BoxInbox,
  BoxBottom,
  ArrowDownIcon,
  AddNewChatIcon,
TextFieldSearch,
IconSearch } from './TopbarStyle';
       import {TypographyStyle} from "../../../../../style/globalCss";
       import {useSelector} from "react-redux";
import { capitalizeFirstLetter } from '../../../../../utils/capitalize.utils';


// Demo Data
import notificationDemo from '../../../../../data/notification';
const profileDemo = "/demoProfile/profile.png";

const Topbar = () => {

const {firstName, lastName, imgSRC}= useSelector((store)=> store.auth.user);
const [notification, setNotification] = useState(false);
const open = Boolean(notification);
const [messageType, setMessageType] = useState(false);
const openMessageType = Boolean(messageType);
const [searchFiled, setSearchFiled] = useState("");


  return (
    <BoxMain>
      <BoxTop>
        <IconMenu/>
        <ProfileTopbar>
          <img src={imgSRC ? imgSRC : profileDemo} alt="Profile" />
          <TypographyStyle variant="h2">
            {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
          </TypographyStyle>
        </ProfileTopbar>
        <BadgeNotification 
         onClick={(e) => setNotification(e.currentTarget)}
        badgeContent={3}
        >
          <IconNotification/>
        </BadgeNotification>
        <Menu
         anchorEl={notification}
         open={open}
         onClose={() => setNotification(false)}
        >
        {notificationDemo.map((item, index)=>(
        <MenuItemNotificationAndMessage  key={index}>
        <h4>{item.name}</h4>
        <p>{item.lastMessage}</p>
        </MenuItemNotificationAndMessage>
        ))}
        </Menu>
      </BoxTop>

      <form>
        <TextFieldSearch
         onChange={(e) => setSearchFiled(e.target.value)}
         variant="standard"
         placeholder="Search Chat"
         InputProps={{
           disableUnderline: true,
           endAdornment: (
             <InputAdornment position="start">
               <IconSearch />
             </InputAdornment>
           )
         }}
        />
      </form>

      <BoxBottom>
      <BoxInbox>
        <TypographyStyle variant='h1'>Inbox</TypographyStyle>
        <TypographyStyle
        variant='h3'
        onClick={(e)=> setMessageType(e.currentTarget)}
        sx={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          mt: "5px"
        }}
        >
          All Message <ArrowDownIcon />
        </TypographyStyle>
        <Menu
        anchorEl={messageType}
        open={openMessageType}
        onClose={()=> setMessageType(false)}
        >
          
          <MenuItemNotificationAndMessage>
          <ListItemIcon>
            <Send fontSize='small'/>
            <Typography variant='h4' sx={{ml: "10px"}}>
              All Messages
            </Typography>
          </ListItemIcon>
          </MenuItemNotificationAndMessage>
          <MenuItemNotificationAndMessage>
          <Typography variant='h4' sx={{ml: "10px"}}>
              Project Messages
            </Typography>
          </MenuItemNotificationAndMessage>
        </Menu>
      </BoxInbox>
      {/* <AddNewChatIcon/> */}
      </BoxBottom>
    </BoxMain>
  )
}

export default Topbar