import React, {useEffect, useMemo} from 'react'
import { Grid, Box } from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import UserCard from '../card/UserCard';


const ListCards = () => {

const dispatch = useDispatch();
const {users} = useSelector((state) => state.userANDconnect);
console.log(users);

useEffect(()=>{
  
  
   
    },[]);

  return (
    <Grid container spacing={4}>
        {users?.map((user, index)=> {
            return(
              <Grid key={user._id} item xs={12} sm={4} md={3} lg={2.5}>
                <UserCard key={index} user={user}/>
            </Grid>
              )
             
        })}
    </Grid>
  )
}

export default ListCards