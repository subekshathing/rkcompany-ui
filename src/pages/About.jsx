import React from "react";
import { Box, Typography, Grid, Avatar, Button } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const backgroundImageUrl =
    "https://img.freepik.com/premium-photo/indian-farmer-working-green-pigeon-peas-field-with-bullock_54391-6543.jpg";

  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      avatarUrl: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      name: "Jane Smith",
      role: "Head of Veterinary Services",
      avatarUrl: "https://via.placeholder.com/150" // Replace with actual image URL
    }
    // Add more team members as needed
  ];

  return (
    <Box sx={{ padding: "2rem" }}>
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
          About Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
          We are a leading agriculture and veterinary company dedicated to
          providing high-quality products and services for farmers and livestock
          owners.
        </Typography>
      </Box>
      <Typography variant="h4" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Box
                sx={{
                  padding: "1rem",
                  backgroundColor: "#f3f3f3",
                  borderRadius: "10px",
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Avatar
                  src={member.avatarUrl}
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography variant="h5" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
                  {member.role}
                </Typography>
                <Button variant="contained" color="success">
                  Learn More
                </Button>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
