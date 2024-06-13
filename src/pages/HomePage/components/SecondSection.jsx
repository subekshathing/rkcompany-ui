import React from "react";
import { Box, Typography, Button, Grid, Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { motion } from "framer-motion";
import { services } from "../../../constants/general.costants";

const OurServices = () => {
  return (
    <Box
      sx={{
        // Add the URL or path to the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem"
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        color="black"
        sx={{ fontWeight: "bold" }}
      >
        Our Services
      </Typography>
      <Divider flexItem sx={{ my: "0.5rem", borderWidth: 1 }} />
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Box
                sx={{
                  padding: "1.5rem",
                  borderRadius: "10px",
                  height: "300px",
                  width: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Stack direction="row" alignItems="center">
                  {service.icon}
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="black"
                    sx={{ fontWeight: "bold" }}
                  >
                    {service.title}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "1rem",
                    color: "black",
                    textAlign: "justify"
                  }}
                >
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  component={Link}
                  to={service.link}
                >
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

export default OurServices;
