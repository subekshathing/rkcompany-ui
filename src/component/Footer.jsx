import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "2rem",
        marginTop: "2rem",
        textAlign: "center"
      }}
    >
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Have questions or need assistance? Contact our team.
      </Typography>
      <Button
        variant="contained"
        sx={{ color: "#fff", fontWeight: "500" }}
        onClick={() => {
          navigate("/contact");
        }}
      >
        Get In Touch
      </Button>
      <Box mt={3}>
        <Typography variant="body2">
          © 2024 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
