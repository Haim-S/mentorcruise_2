import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerByPayload, loginByEmailAndPassword} from "../../../store/slices/authSlice";
import {SignTextField, RegisterSelectField} from "../../common/customHookForm";
import {REGISTER_TEXTFIELD, PAGE_REGISTER_TITLES} from "../../../constants/constantsSign";
import {Grid, Box, Divider, Typography} from "@mui/material"
import {SignButton} from "../../common/Buttons";
import {joiResolver} from "@hookform/resolvers/joi";
import formValidationSchema from "./formValidationSchema";


const Register = ({setIsLogin}) => {

const dispatch = useDispatch();
const navigate = useNavigate();
const { isAuth } = useSelector((state) => state.auth);

const {register, handleSubmit, formState: {errors}} = useForm({
  resolver: joiResolver(formValidationSchema),
});
  
const [role, setRole] = useState("");

const handleChange = (event) => {
  setRole(event.target.value);
}

const onRegisterSubmit = (formData) => {
  const formValues = {
    email: formData.email,
    password: formData.password,
    passwordConfirmation: formData.passwordConfirmation,
    role: formData.role,
    lastName: formData.lastName,
    firstName: formData.firstName,
  };

  console.log(formData);
  dispatch(registerByPayload(formValues));

  setTimeout(()=> {
    console.log(formValues.email, formValues.password);
    // dispatch(loginByEmailAndPassword(formValues));
  }, 500)
}

useEffect(() => {
  if (isAuth) navigate("/");
}, [isAuth, navigate]);

  return (
<Box sx={{marginTop: "20%" , width: '100%' }}>

<Typography 
     variant="h4"
     noWrap>{PAGE_REGISTER_TITLES.mainTitle}</Typography>
      <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
      {PAGE_REGISTER_TITLES.title}
      </Typography>
      <Typography
                variant="subtitle2"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
      {PAGE_REGISTER_TITLES.subTitle}
              </Typography>
              <Divider/>
              <br></br>

<form onSubmit={handleSubmit(onRegisterSubmit)}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {REGISTER_TEXTFIELD.map((val, index)=>{return(
         <Grid item xs={12} md={6}>
           <SignTextField label={val.label} fialdName={val.fiald} type={val.type} register={register} errors={errors} key={index}/>
       </Grid>
      )})}
      <Grid item xs={12} md={6}>
        <RegisterSelectField value={role}  labelId="role-select" id={"role"} label={"Role"} fieldName={"role"} register={register} handleChange={handleChange} errors={errors}/>
      </Grid>
 
      </Grid>
      <br></br>
      <Divider>
      <SignButton type='submit'>Regisater</SignButton>
      </Divider>
</form>
       <p>Already a member? <span className='sign-color' onClick={()=> setIsLogin(true)}>Sign In</span></p>
</Box>
  )
}

export default Register