import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import { Box } from "@mui/material";
import Footer from "../component/Footer";
import CustomSnackbar from "../component/CustomerSnackbar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "5rem 0"
        }}
      >
        <Outlet />
      </Box>

      <CustomSnackbar />
      <Footer />
    </>
  );
};

export default MainLayout;
