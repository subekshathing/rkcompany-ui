import { Box, Button, Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import $axios from "../../../lib/axios/axios.instance";
import Loader from "../../../component/Loader";
import ProductCard from "../../../component/ProductCard";
import SellProductPrompt from "../../../component/SellerProductPrompt";

const AdminProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const { isPending, data } = useQuery({
    queryKey: ["get-seller-products", currentPage],
    queryFn: async () => {
      return await $axios.post("/product/list/admin", {
        page: currentPage,
        limit: 3
      });
    }
  });

  const productList = data?.data?.productList;
  const totalPage = data?.data?.totalPage;

  if (isPending) {
    return <Loader />;
  }
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          navigate("/add-product");
        }}
        sx={{ marginBottom: "2rem" }}
      >
        add product
      </Button>

      {productList.length === 0 && <SellProductPrompt />}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          mb: "2rem"
        }}
      >
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </Box>

      <Pagination
        count={totalPage}
        color="secondary"
        page={currentPage}
        onChange={(_, value) => {
          setCurrentPage(value);
        }}
      />
    </>
  );
};

export default AdminProductList;
