import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  IconButton,
  InputAdornment,
  Box,
  Link,
  Grid,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000",
      paper: "#121212",
    },
    text: {
      primary: "#fff",
      secondary: "#B0B0B0",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#B0B0B0",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
        input: {
          "&::placeholder": {
            color: "#ADD8E6",
            opacity: 1,
          },
        },
      },
    },
  },
});

const RegisterPage = ({ toggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validateForm = () => {
    // Simple validation: check if all fields are filled
    const isValid =
      username.trim() !== "" && email.trim() !== "" && password.trim() !== "";
    setIsFormValid(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      toggleForm(); // Switch to login form
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "auto",
          textAlign: "center",
          backgroundColor: "background.default",
          color: "text.primary",
          width: "100%",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 5,
            boxShadow: "0 0 0 2px white inset",
          }}
        >
          <Typography variant="h6" component="h6" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="h5" gutterBottom color="text.secondary" mb={5}>
            Create an account to continue
          </Typography>

          <Typography
            variant="body1"
            component="h2"
            align="left"
            color="text.secondary"
          >
            Username
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="Enter your username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              validateForm();
            }}
          />

          <Typography
            variant="body1"
            component="h2"
            align="left"
            color="text.secondary"
          >
            Email
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Enter your email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateForm();
            }}
          />

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <Typography
                variant="body1"
                component="h2"
                align="left"
                color="text.secondary"
              >
                Password
              </Typography>
            </Grid>
          </Grid>

          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validateForm();
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={{ color: "text.secondary" }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isFormValid}
          >
            Register Now
          </Button>
          <Typography variant="body1" color="text.secondary" align="left">
            Already have an account?{" "}
            <Link
              href="#"
              variant="body1"
              color="primary.main"
              onClick={toggleForm}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "inherit",
                textDecoration: "none",
              }}
            >
              Login
              <ArrowForwardIcon sx={{ fontSize: "inherit", marginLeft: 0.5 }} />
            </Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterPage;
