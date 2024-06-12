import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";

const ContactPage = () => {
  const ImageUrl =
    "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1";
  return (
    <Box
      sx={{
        padding: "2rem",
        textAlign: "center"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
          <div>
            <img src={ImageUrl} alt="Worker Cutting tree" />
          </div>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <Typography variant="h2" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
              Have questions or want to know more? Reach out to us!
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  padding: "1rem",
                  backgroundColor: "#f3f3f3",
                  borderRadius: "10px"
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Email Us
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
                  Send us an email at contact@example.com
                </Typography>
                <Button variant="contained" color="success">
                  Send Email
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Box
                sx={{
                  padding: "1rem",
                  backgroundColor: "#f3f3f3",
                  borderRadius: "10px"
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Call Us
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
                  Call us at +1-234-567-8901
                </Typography>
                <Button variant="contained" color="success">
                  Call Now
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ContactPage;
