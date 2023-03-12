import React, {useEffect} from 'react'
import { Grid, Box, Container } from "@mui/material";
import { useSelector, useDispatch} from "react-redux";
import SkeletonLoader from "../components/common/skeleton/SkeletonLoader";
import ListCards from '../components/cards/listCards/ListCards';
import {AllUser} from "../store/slices/user&connectSlice";


const HomePage = () => {

  const dispatch = useDispatch();
  const {isLoading, users} = useSelector((state)=> state.userANDconnect);
 
  
// console.log(users);
  useEffect(()=>{

    dispatch(AllUser());

     },[isLoading]);

  return (
    <Container>
      <Box component={"section"} sx={{my: 10}}>
        <p>wher is the place for the posts</p>
      </Box>
    <Box component={"section"} sx={{my: 10}}>
      <ListCards />
    </Box>
      </Container>
  )
}

export default HomePage