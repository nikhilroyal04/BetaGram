import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import ChatIcon from "@mui/icons-material/Chat";

const posts = [
  {
    name: "Theresa Webb",
    text: "Just completed a 5k run! Feeling great and accomplished. What's everyone else up to?",
    comments: 24,
    avatar: "https://i.pravatar.cc/150?img=5",
    time: "5 mins ago",
    emoji: "🏃",
  },
  {
    name: "Marvin McKinney",
    text: "Excited to announce that I'll be starting a new job next week! Can't wait to get started.",
    comments: 8,
    avatar: "https://i.pravatar.cc/150?img=3",
    time: "8 mins ago",
    emoji: "🎉",
  },
];

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedPostIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedPostIndex(null);
  };

  const handleEdit = () => {
    handleClose();
  };

  const handleDelete = () => {
    handleClose();
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Box sx={{ width: "100%", margin: "0 auto" }}>
        <Typography variant="h4" color="white">
          Hello, John
        </Typography>
        <Typography variant="body1" color="#B0B0B0" sx={{ marginBottom: 4 }}>
          How are you doing today? Would you like to share something with the
          community🥰
        </Typography>
        <Box
          sx={{
            padding: 2,
            backgroundColor: "#2c2c2c",
            borderRadius: 2,
            marginBottom: 2,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography
            variant="h7"
            color="#B0B0B0"
            sx={{ marginBottom: 2, fontWeight: "bold" }}
          >
            Create Post
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="How are you feeling today?"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    marginRight: 1,
                    backgroundColor: "#a1a29c",
                    borderRadius: "50%",
                    width: "36px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChatIcon sx={{ color: "#1c1c1c" }} />
                </InputAdornment>
              ),
              sx: {
                "& .MuiInputBase-input": {
                  color: "white",
                  padding: "14px 0",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#B0B0B0",
                },
                height: "76px",
              },
            }}
            sx={{
              marginBottom: 2,
              backgroundColor: "#1c1c1c",
              borderRadius: "16px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "16px",
              },
            }}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" color="primary">
              Post
            </Button>
          </Box>
        </Box>
        {posts.map((post, index) => (
          <Box
            key={index}
            sx={{
              padding: 2,
              backgroundColor: "#2c2c2c",
              borderRadius: 2,
              marginBottom: 2,
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 2,
                width: "100%",
              }}
            >
              <Avatar src={post.avatar} sx={{ marginRight: 2 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" color="white">
                  {post.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#a9a9a9",
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: 14, marginRight: 0.5 }} />
                  <Typography variant="body2">{post.time}</Typography>
                </Box>
              </Box>
              <IconButton onClick={(event) => handleClick(event, index)}>
                <MoreVertIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <Box
              sx={{
                padding: 2,
                backgroundColor: "#1c1c1c",
                borderRadius: 2,
                marginBottom: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#a9a9a9",
                  marginBottom: 1,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    marginRight: 1,
                    backgroundColor: "#a1a29c",
                    borderRadius: "50%",
                    width: "53px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {post.emoji}
                </Typography>
                <Typography variant="body1">{post.text}</Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", color: "#a9a9a9" }}
            >
              <CommentIcon sx={{ fontSize: 18, marginRight: 0.5 }} />
              <Typography variant="body2">{post.comments} comments</Typography>
            </Box>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  backgroundColor: "#1c1c1c",
                  color: "white",
                },
              }}
            >
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
