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
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CalculateIcon from "@mui/icons-material/Calculate";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

const LoginPage = ({ toggleForm, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setSnackbarMessage("Please fill in all fields.");
      setSnackbarOpen(true);
      return;
    }

    handleClose();
    setSnackbarMessage("Login successful!");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
          sx={{
            position: "absolute",
            top: -40,
            left: "50%",
            transform: "translateX(-50%)",
            color: "text.secondary",
          }}
        >
          <CalculateIcon sx={{ fontSize: 40 }} />
        </Box>

        <Box
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 5,
            boxShadow: "0 0 0 2px white inset",
          }}
        >
          <Typography variant="h6" component="h6" gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="h5" gutterBottom color="text.secondary" mb={5}>
            Login into your account
          </Typography>

          <form onSubmit={handleSubmit}>
            <Typography
              variant="body1"
              component="h2"
              align="left"
              color="text.secondary"
            >
              Email or Username
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter your email or username"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Link href="#" variant="body2" color="primary.main">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            >
              Login Now
            </Button>
            <Typography variant="body1" color="text.secondary" align="left">
              Not registered yet?{" "}
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
                Register
                <ArrowForwardIcon
                  sx={{ fontSize: "inherit", marginLeft: 0.5 }}
                />
              </Link>
            </Typography>
          </form>
        </Box>

        {/* Snackbar Component */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
