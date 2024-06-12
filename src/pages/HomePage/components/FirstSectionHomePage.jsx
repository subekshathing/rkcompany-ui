import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { motion } from "framer-motion";

const HomePage = () => {
  const backgroundImageUrl =
    "https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=sph"; // Replace this with your image URL

  return (
    <Box
      sx={{
        padding: "2rem",
        textAlign: "center",
        backgroundImage: `url(${backgroundImageUrl})`, // Directly use the image URL here
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to Our Farm
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
        We specialize in sustainable agriculture and high-quality livestock.
      </Typography>
    </Box>
  );
};

export default HomePage;
