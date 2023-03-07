
import React, { useReducer } from "react";
import { TextField,  InputAdornment, } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {InputLabel, Select, MenuItem, FormHelperText, Grid } from "@mui/material";





function passwordReducer(state, action) {
    switch (action.type) {
      case "TEXT":
        return { typeText: !state.typeText };
      default:
        break;
    }
  }
  
  
 
    
  export const RegisterTextField = ({ label, fieldName, register, errors, type }) => {

      const [typeTextState, dispatch] = useReducer(passwordReducer, {
        typeText: false,
      });
  
      return (
        <Grid item xs={0} sm={6}>
          <TextField
            label={label}
            error={Boolean(errors[fieldName])}
            type={label === "Password" || label === "Confirm Password" ? (typeTextState.typeText ? "text": "password" ) : type}
            helperText={errors[fieldName] ? errors[fieldName]?.message : " "}
            {...register(fieldName)}
            size="small"
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
        </Grid>
      );
    };



export const RegisterSelectField = ({
    label,
    fieldName,
    register,
    errors,
    handleChange,
    value,
    labelId,
    inputLabel,
    inputLabelId,
    id,
  }) => {
    return (
      <>
        <InputLabel error={Boolean(errors[fieldName])} id="role-select">
          {label}
        </InputLabel>
        <Select
          error={Boolean(errors[fieldName])}
          {...register(fieldName)}
          // helpertext={errors[fieldName] ? errors[fieldName]?.message : " "}
          value={value}
          label={label}
          onChange={handleChange}
          labelId={labelId}
          id={id}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"ENTREPRENEUR"}>ENTREPRENEUR</MenuItem>
          <MenuItem value={"CONSULTANT"}>CONSULTANT</MenuItem>
        </Select>
        <FormHelperText error={Boolean(errors[fieldName])}>
          {errors[fieldName] ? errors[fieldName]?.message : " "}
        </FormHelperText>
      </>
    );
  };