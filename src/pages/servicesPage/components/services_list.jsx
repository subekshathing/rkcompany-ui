import React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { motion } from "framer-motion";

const OurServicesCard = () => {
  const services = [
    {
      title: "Treatment of Livestocks",
      description:
        "Comprehensive healthcare services for livestock including vaccinations, deworming, and disease management.",
      link: "/livestock-treatment",
      image:
        "url('https://media.istockphoto.com/id/514310488/photo/veterinarian-with-syringe-on-farm.jpg?s=612x612&w=0&k=20&c=kDIGneN_y0d6VfRkC2jYGBCApU7QKNWKyO-GfZ6RKVY=')" // Add the URL or path to the image for this service
    },
    {
      title: "Insecticides/Pesticides",
      description:
        "Effective pest and insect management solutions to protect crops and livestock from harmful pests.",
      link: "/insecticides-pesticides",
      image:
        "url('https://parijatagrochemicals.com/wp-content/uploads/2016/11/Parijat_Products_International-1.jpg')" // Add the URL or path to the image for this service
    },
    {
      title: "Artificial Insemination",
      description:
        "Expert artificial insemination services for improved breeding and genetic diversity.",
      link: "/artificial-insemination",
      image:
        "url('https://eu-images.contentstack.com/v3/assets/blt4175b16074920322/blt978d00efc4aa7dbc/6485e1413d251e823ee34238/cattle_20insemination.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale')"
    },
    {
      title: "Goat Fertilizer",
      description:
        "High-quality organic goat fertilizer for enhancing soil fertility and crop growth.",
      link: "/goat-fertilizer",
      image:
        "url('https://www.greensofkerala.com/wp-content/uploads/2021/03/goat-dung-poop.gif')"
    },
    {
      title: "Goat Sterilization",
      description:
        "High-quality organic goat fertilizer for enhancing soil fertility and crop growth.",
      link: "/goat-fertilizer",
      image:
        "url('https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2019/06/13141313/20190228_210147-e1559587466810-768x1024.jpg')"
    }

    // Add more services with their descriptions, links, and images
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url('path_to_background_image/background.jpg')`, // Add the URL or path to the background image
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
                  backgroundColor: "#f3f3f3",
                  borderRadius: "10px",
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundImage: service.image,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  color="black"
                  sx={{ fontWeight: "bold" }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: "1rem", color: "black" }}
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

export default OurServicesCard;
