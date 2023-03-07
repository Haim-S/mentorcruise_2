import React, {useEffect} from 'react'
import { Grid, Box, Container } from "@mui/material";
import { useSelector, useDispatch} from "react-redux";
import SkeletonLoader from "../components/common/skeleton/SkeletonLoader";
import ListCards from '../components/cards/listCards/ListCards';
// import ListCards from '../components/cards/listCards/test/ListCards';
import {AllUser} from "../store/slices/userSlice";


const HomePage = () => {

  const dispatch = useDispatch();
  const {isLoading} = useSelector((state)=> state.user);


  useEffect(()=>{

    dispatch(AllUser());
    
     },[isLoading]);

  return (
    <Container>
      <Box component={"section"} sx={{my: 10}}>
        <p>wher is the place for the posts</p>
      </Box>
    <Box component={"section"} sx={{my: 10}}>
      <ListCards/>
    </Box>
      </Container>
  )
}

export default HomePage