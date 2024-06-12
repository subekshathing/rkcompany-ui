import React from "react";

import UserProductList from "./components/UserProductList";
import AdminProductList from "./components/AdminProductList";

const ProductList = () => {
  const userRole = localStorage.getItem("role");

  return (
    <>{userRole === "admin" ? <AdminProductList /> : <UserProductList />}</>
  );
};

export default ProductList;
