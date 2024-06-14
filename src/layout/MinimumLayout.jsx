import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import CustomSnackbar from "../component/CustomerSnackbar";
import Home from "../pages/HomePage/Home";
import Footer from "../component/Footer";
import { Box } from "@mui/material";

const MinimumLayout = () => {
  return (
    <Box sx={{ width: "100%", padding: 0, margin: 0 }}>
      <Header />

      <CustomSnackbar />

      <Home />
      <Outlet />

      <Footer />
    </Box>
  );
};

export default MinimumLayout;
