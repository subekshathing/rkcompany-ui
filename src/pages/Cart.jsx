import React from "react";
import OrderSummary from "../component/OrderSummary";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import $axios from "../lib/axios/axios.instance";
import CartItemTable from "../component/CartItemTable";
import KeepShopping from "../component/KeepShoping";

const Cart = () => {
  // get cart items
  const { isPending, data } = useQuery({
    queryKey: ["get-cart-item-list"],
    queryFn: async () => {
      return await $axios.get("/cart/item/list");
    }
  });

  const cartData = data?.data?.cartData;

  const orderSummary = data?.data?.orderSummary;

  if (isPending) {
    return <CircularProgress />;
  }

  return (
    <>
      {cartData?.length === 0 ? (
        <KeepShopping />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            width: "90%"
          }}
        >
          <CartItemTable cartData={cartData} />
          <OrderSummary orderSummary={orderSummary} />
        </Box>
      )}
    </>
  );
};

export default Cart;
