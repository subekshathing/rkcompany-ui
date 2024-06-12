import React from "react";
import OrderSummary from "../component/OrderSummary";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import $axios from "../lib/axios/axios.instance";
import CartItemTable from "../component/CartItemTable";
import KeepShopping from "../component/KeepShoping";
import theme from "../theme/theme";

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
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: "2rem",
            alignItems: "center",
            width: "100%"
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
