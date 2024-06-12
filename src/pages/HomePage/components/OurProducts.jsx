import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { motion } from "framer-motion";

const OurProducts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          padding: "1rem",
          backgroundColor: "#f3f3f3",
          borderRadius: "10px"
        }}
      >
        <Typography variant="h4" gutterBottom>
          Our Products
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
          Explore our wide range of organic fruits, vegetables, and livestock
          products.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/products"
        >
          View Products
        </Button>
      </Box>
    </motion.div>
  );
};

export default OurProducts;
