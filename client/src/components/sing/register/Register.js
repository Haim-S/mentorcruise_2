import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {SignTextField, RegisterSelectField} from "../../common/customHookForm";
import {REGISTER_TEXTFIELD, PAGE_REGISTER_TITLES} from "../../../constants/constantsSign";
import {Grid, Box, Divider, Typography} from "@mui/material"
import {SignButton} from "../../common/Buttons";


const Register = ({setIsLogin}) => {


  const {register, handleSubmit, formState: {errors}, formState} = useForm()
  
const [role, setRole] = useState("");

const handleChange = (event) => {
  setRole(event.target.value);
}


  return (
<Box sx={{marginTop: "20%" , width: '100%' }}>
    <form>
      
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
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
{REGISTER_TEXTFIELD.map((val, index)=>{return(
   <Grid item xs={12} md={6}>
     <SignTextField key={index} label={val.label} fialdName={val.fiald} type={val.type} register={register} errors={errors}/>
 </Grid>
)})}
 <Grid item xs={12} md={6}>
<RegisterSelectField value={role} label={"Role"} fieldName={"role"} register={register} handleChange={handleChange} errors={errors}/>
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