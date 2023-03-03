import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form";
import { SignTextField } from "../../common/customHookForm";
import {LOGIN_TEXTFIELD} from "../../../constants/constantsSign"; 
import {SignButton} from "../../common/Buttons";
import {Box, Typography, CircularProgress} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import {loginByEmailAndPassword, clearErrorMessage} from "../../../store/slices/authSlice"

const TIME_TO_CLEAR_ERROR_MSG = 3500;

const Login = ({isLogin, setIsLogin}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuth } = useSelector((state) => state.auth);
  const {register, handleSubmit, formState: {errors}, formState} = useForm()


const onLoginSubmit = (formData)=>{
  console.log(formData);
  const formValues = {
    email: formData.Email,
    password: formData.Password,
  }
  console.log(formValues);
  dispatch(loginByEmailAndPassword(formValues));
 
}


useEffect(() => {
  if (error) {
    setTimeout(() => {
      dispatch(clearErrorMessage());
    }, TIME_TO_CLEAR_ERROR_MSG);
  }
}, [error]);

useEffect(() => {
  if (isAuth) navigate("/");

}, [isAuth, navigate]);

  return (
    <Box sx={{marginTop: "160px"}}>
      {isLoading && <CircularProgress />}
    <form style={{marginTop: "10%"}} onSubmit={handleSubmit(onLoginSubmit)}>
     <div style={{display: "flex", flexDirection: "column", margin: "0 20%" }}>
    <Typography variant="h3"
     noWrap
     sx={{paddingBottom: "60px"}}>welcome back</Typography>
     <Typography 
     variant="h4"
     noWrap
     sx={{paddingBottom: "60px"}}
     >Login</Typography>
     
     {LOGIN_TEXTFIELD.map((val, index)=> { return (
      <SignTextField key={index} label={val.label} fialdName={val.fiald} register={register} errors={errors} type={val.type}/>
     )})}
     <SignButton type='submit'>Login</SignButton>
     <SignButton><GoogleIcon sx={{paddingRight: "20px"}}/>Sign in with Google</SignButton>
     <p>New here? <span className='sign-color' onClick={()=> setIsLogin(false)}>Sign Up</span></p>
     </div>
    </form>
    </Box>
  )
}

export default Login