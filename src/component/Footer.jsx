import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";
import { motion } from "framer-motion";

const Footer = () => {
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
        color="primary"
        component={Link}
        to="/contact"
      >
        Get in Touch
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
