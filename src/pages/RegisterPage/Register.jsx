import React, { useState } from "react";
import {
  Box,
  FormControl,
  Typography,
  FormHelperText,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  LinearProgress
} from "@mui/material";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { registerValidationSchema } from "../../validationSchema/register.validation.schema";

import {
  openErrorSnackbar,
  openSuccessSnackbar
} from "../../store/slices/snackbarSlice";
import { values } from "lodash";
import $axios from "../../lib/axios/axios.instance";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () =>
    setShowPassword((prevValue) => !prevValue);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // hit register api
  const { isPending, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (values) => {
      console.log(values);
      return await $axios.post("/user/register", values);
    },

    onSuccess: (res) => {
      navigate("/login");
      dispatch(openSuccessSnackbar(res?.data?.message));
    },
    onError: (error) => {
      console.log(error);
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    }
  });
  return (
    <>
      {isPending && <LinearProgress color="secondary" />}
      <Box>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            number: "",
            gender: ""
          }}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => {
            mutate(values);
          }}
        >
          {({ handleSubmit, getFieldProps, touched, errors }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                padding: "1rem",
                gap: "1rem",
                width: "400px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
              }}
            >
              <Typography variant="h4">Sign up</Typography>

              <FormControl>
                <TextField
                  label="First name"
                  {...getFieldProps("firstName")}
                  required
                />
                {touched.firstName && errors.firstName ? (
                  <FormHelperText error>{errors.firstName}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Last name"
                  {...getFieldProps("lastName")}
                  required
                />
                {touched.lastName && errors.lastName ? (
                  <FormHelperText error>{errors.lastName}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField label="Email" {...getFieldProps("email")} required />
                {touched.email && errors.email ? (
                  <FormHelperText error>{errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  {...getFieldProps("password")}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />

                {touched.password && errors.password ? (
                  <FormHelperText error>{errors.password}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="Phone Number"
                  {...getFieldProps("number")}
                  required
                />
                {touched.number && errors.number ? (
                  <FormHelperText error>{errors.number}</FormHelperText>
                ) : null}
              </FormControl>
              {/* <FormControl fullWidth required>
                <InputLabel>Role</InputLabel>
                <Select label="Role" {...getFieldProps("role")}>
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>

                {touched.role && errors.role ? (
                  <FormHelperText error>{errors.role}</FormHelperText>
                ) : null}
              </FormControl> */}

              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select label="Gender" {...getFieldProps("gender")}>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="preferNotToSay">Prefer not to say</MenuItem>
                </Select>

                {touched.gender && errors.gender ? (
                  <FormHelperText error>{errors.gender}</FormHelperText>
                ) : null}
              </FormControl>

              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{ mt: "1rem" }}
              >
                Register
              </Button>

              <Link to="/login">Already registered? Login</Link>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Register;
