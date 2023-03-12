import React, {Fragment, useState} from 'react';
import {Divider} from "@mui/material";
import {useSelector} from "react-redux";
import CardMessageBox from '../cardMessageBox/CardMessageBox';
// import ActiveCardMessageBox from "../ActiveCardMessage/ActiveCardMessageBox";

const MessageBox = () => {
  const [searchFiled, setsearchFiled] = useState("");
  const {user} = useSelector((store)=> store.auth);
  const {conversations} = useSelector((store)=> store.message);



  return (
    <Fragment>
      {/* <ActiveCardMessageBox/> */}
      {conversations.filter((item, index)=> {
        const isConsultant = user.role === "CONSULTANT";
        return isConsultant
        ? item.entrepreneurId.firstName
        .toLowerCase()
        .includes(searchFiled.toLocaleLowerCase())
        : item.consultantId.firstName
        .toLowerCase()
        .includes(searchFiled.toLocaleLowerCase());
      })
      .map((item, index)=> (
        <Fragment key={index}>
        <CardMessageBox chat={item} />
        <Divider variant='fullWidth' orientation='horizontal'/>
        
        </Fragment>
      ))
    
    }
    
    </Fragment>
  )
}

export default MessageBox