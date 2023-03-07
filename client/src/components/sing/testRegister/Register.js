import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "./Register.module.css";
import formValidationSchema from "./formValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { registerByPayload, loginByEmailAndPassword } from "../../../store/slices/authSlice";
// import { loginByEmailAndPassword } from "../../app/redux/slices/authSlice";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  FormControl,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { SignButton } from "../../common/Buttons";
import {SignTextField, RegisterSelectField } from "../../common/customHookForm"
// import {RegisterTextField, RegisterSelectField} from "./customHook";
import {REGISTER_TEXTFIELD } from "../../../constants/constantsSign";

const Register = ({setIsLogin}) => {

 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(formValidationSchema),
  });

  React.useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const onRegisterSubmit = (formData) => {
    const formValues = {
      email: formData.email,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation,
      role: formData.role,
      lastName: formData.lastName,
      firstName: formData.firstName,
    };
    dispatch(registerByPayload(formValues));

    setTimeout(() => {
      console.log(formValues.email, formValues.password);
      dispatch(loginByEmailAndPassword(formValues));
    }, 500);
  };

  const pageTitles = {
    mainTitle: "Register",
    title: "Manage all your connection efficiently",
    subTitle:
      "Let's get you all set up so you can verify your personal account.",
  };

  return (
    <Box className={classes.page_container}>
      <div className={classes.register_left_container}>
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
          <div className={classes.desktop_input_section}>
            <div className={`titles_container ${classes.top_bottom_margin}`}>
              <Typography
                variant="h4"
                noWrap
                component="div"
                className={classes.top_bottom_margin}
              >
                {pageTitles.mainTitle}
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                {pageTitles.title}
              </Typography>
              <Typography
                variant="p"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                {pageTitles.subTitle}
              </Typography>
              <hr />
            </div>
            {/* Fields */}
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 3, md: 5, lg: 1, xl: 0 }}
              >
                
                {REGISTER_TEXTFIELD.map((itemRegister, index) => {
                  return (
                    <SignTextField
                      label={itemRegister.label}
                      fieldName={itemRegister.field}
                      register={register}
                      type={itemRegister.type}
                      errors={errors}
                      key={index}
                    />
                  );
                })}

                <Grid item xs={0} sm={6}>
                  <FormControl sx={{ m: 0, minWidth: 222 }} size="small">
                    <RegisterSelectField
                      label="Role"
                      value={role}
                      id={"role"}
                      labelId="role-select"
                      fieldName="role"
                      register={register}
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <FormGroup
              className={classes.top_bottom_margin}
              sx={{ color: blueGrey[600] }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: blueGrey[200],
                      "&.Mui-checked": {
                        color: blueGrey[500],
                      },
                    }}
                    size="small"
                    defaultChecked
                  />
                }
                label="Yes, I want to recive newsletter emails"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    sx={{
                      color: blueGrey[200],
                      "&.Mui-checked": {
                        color: blueGrey[500],
                      },
                    }}
                    size="small"
                    defaultChecked
                  />
                }
                label="I agree to all the Terms, Privacy Policy and Fees"
              />
            </FormGroup>
            <Box component={"div"} className={classes.top_bottom_margin}>
              <SignButton type="submit">Register</SignButton>
              <div className={classes.top_bottom_margin}>
                Already have an account? <Link to="/login">Log in</Link>
              </div>
            </Box>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default Register;
