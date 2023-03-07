import React, { useReducer } from "react";
import { TextField,  InputAdornment, } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {InputLabel, Select, MenuItem, FormHelperText, FormControl, Typography, Divider } from "@mui/material";



function passwordReducer(state, action) {
    switch (action.type) {
      case "TEXT":
        return { typeText: !state.typeText };
      default:
        break;
    }
  }

const SignTextField = ({label, fieldName, register, errors, type})=> {

    const [typeTextState, dispatch] = useReducer(passwordReducer, {
        typeText: false,
      });

      

    return(
      
        <TextField
        label={label}
        error={Boolean(errors[fieldName])}
        helperText={errors[fieldName] ? errors[fieldName]?.message : " "}
        {...register(fieldName, {required: true})}
        type={label === "Password" || label === "Confirm Password" ? (typeTextState.typeText ? "text": "password" ) : type}
        InputProps={{
            endAdornment:
              label === "Password" || label === "Confirm Password" ? (
                !typeTextState.typeText ? (
                  <InputAdornment position="end">
                    <IconButton onClick={() => dispatch({ type: "TEXT" })}>
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
                ) : (
                  <InputAdornment position="end">
                    <IconButton onClick={() => dispatch({ type: "TEXT" })}>
                      <VisibilityOff />
                    </IconButton>
                  </InputAdornment>
                )
              ) : null,
          }}
        />
      
    );
}

const RegisterSelectField = ({
label,
fieldName,
register,
errors,
handleChange,
value,
labelId,
id,

}) => {

  

    return(
        <FormControl sx={{ m: 0, minWidth: 222 }} size="small">
        <InputLabel error={Boolean(errors[fieldName])} id="role-select">
        {label}
        </InputLabel>
        <Select
        error={Boolean(errors[fieldName])}
        value={value}
        {...register(fieldName)}
        // helpertext={errors[fieldName] ? errors[fieldName]?.message : " "}
        label={label}
        onChange={handleChange}
        labelId={labelId}
        id={id}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={"ENTREPRENEUR"}> ENTREPRENEUR</MenuItem>
            <MenuItem value={"CONSULTANT"}>CONSULTANT</MenuItem>
        </Select>
        <FormHelperText error={Boolean(errors[fieldName])}>
         {errors[fieldName] ? errors[fieldName]?.message : " "}
        </FormHelperText>
        </FormControl>
    )
}

export const RegisterTypographyTitels =  ({mainTitle, title, subTitle}) =>{
return(
<>
<Typography 
     variant="h4"
     noWrap
     component="div"
     >{mainTitle}</Typography>
      <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
      {title}
      </Typography>
      <Typography
                variant="subtitle2"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
      {subTitle}
              </Typography>
              <Divider/>
              </>
              )
}




export {SignTextField, RegisterSelectField};