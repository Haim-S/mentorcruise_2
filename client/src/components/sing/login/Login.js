import React from 'react'
import {useForm} from "react-hook-form";
import { SignTextField } from "../../common/customHookForm";
import {LOGIN_TEXTFIELD} from "../../../constants/constantsSign"; 
import {SignButton} from "../../common/Buttons";
import {Box, Typography} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

const Login = ({isLogin, setIsLogin}) => {

const {register, handleSubmit, formState: {errors}, formState} = useForm()


const onLoginSubmit = (formData)=>{
  console.log(formData);
}
  return (
    <Box sx={{marginTop: "160px"}}>
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