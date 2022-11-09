import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Login = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    username: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box minHeight={"50rem"}>
      <Box display="flex" margin="4rem auto" justifyContent={"center"}>
        <Typography variant="h5">Login</Typography>
      </Box>
      <Box
        bgcolor={"white"}
        display="flex"
        flexDirection="column"
        margin="2rem auto 2rem auto"
        width="fit-content"
      >
        <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
          <InputLabel>Username</InputLabel>
          <OutlinedInput
            id="username"
            value={values.username}
            onChange={handleChange("username")}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <Box margin="1rem auto">
            <Button variant="contained" type="submit" fullWidth>
              Submit
            </Button>
          </Box>
        </FormControl>
      </Box>
      <Box display={"flex"} margin="auto" justifyContent={"center"}>
        <Typography variant="body1">
          Don't have an account? <a href="/register">Create one now!</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
