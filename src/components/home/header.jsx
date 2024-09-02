import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LoginPage from "../login/login";
import RegisterPage from "../login/register";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleLoginClick = () => setOpenLogin(true);
  const handleClose = () => {
    setOpenLogin(false);
    setOpenRegister(false);
  };

  return (
    <>
      {(openLogin || openRegister) && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(3px)",
            zIndex: 1200,
          }}
        />
      )}

      <AppBar position="static" sx={{ backgroundColor: "#333" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "white", marginLeft: 20 }}>
            MyApp
          </Typography>
          <Box sx={{ display: "flex", gap: 2, marginRight: 20 }}>
            <Button
              color="inherit"
              sx={{
                backgroundColor: "#60615d",
                color: "white",
                borderRadius: 5,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#4a4b47",
                  transform: "scale(1.05)",
                },
              }}
              onClick={handleLoginClick}
            >
              Login / Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog
        open={openLogin}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-paper": { padding: 0, zIndex: 1300 },
        }}
      >
        <IconButton
          color="inherit"
          onClick={handleClose}
          sx={{ position: "absolute", right: 35, top: 10, color: "white" }}
        >
          <CloseIcon />
        </IconButton>
        <LoginPage
          toggleForm={() => {
            setOpenLogin(false);
            setOpenRegister(true);
          }}
          handleClose={handleClose}
        />
      </Dialog>

      <Dialog
        open={openRegister}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-paper": { padding: 0, zIndex: 1300 },
        }}
      >
        <IconButton
          color="inherit"
          onClick={handleClose}
          sx={{ position: "absolute", right: 35, top: 10, color: "white" }}
        >
          <CloseIcon />
        </IconButton>
        <RegisterPage
          toggleForm={() => {
            setOpenRegister(false);
            setOpenLogin(true);
          }}
          handleClose={handleClose}
        />
      </Dialog>
    </>
  );
};

export default Header;
