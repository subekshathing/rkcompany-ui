import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import CustomSnackbar from "../component/CustomerSnackbar";

const MinimumLayout = () => {
  return (
    <>
      <Header />

      <CustomSnackbar />
      <Outlet />
    </>
  );
};

export default MinimumLayout;
