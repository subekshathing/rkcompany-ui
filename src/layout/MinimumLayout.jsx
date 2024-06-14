import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import CustomSnackbar from "../component/CustomerSnackbar";
import Home from "../pages/HomePage/Home";

const MinimumLayout = () => {
  return (
    <>
      <Header />
      <Home />
      <CustomSnackbar />
      <Outlet />
    </>
  );
};

export default MinimumLayout;
