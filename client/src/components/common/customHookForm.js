import React, { useReducer } from "react";
import { TextField,  InputAdornment, } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {InputLabel, Select, MenuItem, FormHelperText, FormControl } from "@mui/material";



function passwordReducer(state, action) {
    switch (action.type) {
      case "TEXT":
        return { typeText: !state.typeText };
      default:
        break;
    }
  }

const SignTextField = ({label, fialdName, register, errors, type})=> {

    const [typeTextState, dispatch] = useReducer(passwordReducer, {
        typeText: false,
      });

    return(
        <TextField
        label={label}
        error={errors[fialdName]}
        helperText={errors[fialdName] ? errors[fialdName]?.message : " "}
        {...register(fialdName, {required: true})}
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

}) => {


    return(
        <FormControl sx={{ m: 0, minWidth: 222 }} size="small">
        <InputLabel>
        {label}
        </InputLabel>
        <Select
        {...register(fieldName)}
        label={label}
        onChange={handleChange}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={"ENTREPRENEUR"}> ENTREPRENEUR</MenuItem>
            <MenuItem value={"CONSULTANT"}>CONSULTANT</MenuItem>
        </Select>
        <FormHelperText>

        </FormHelperText>
        </FormControl>
    )
}




export {SignTextField, RegisterSelectField};