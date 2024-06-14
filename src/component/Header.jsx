import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge, Tooltip } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useQuery } from "@tanstack/react-query";
import $axios from "../lib/axios/axios.instance";
const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },

  {
    id: 2,
    name: "About Us",
    path: "/about"
  },
  {
    id: 3,
    name: "Service",
    path: "/services"
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact"
  }
];

const Header = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // get user role
  const userRole = localStorage.getItem("role");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // get cart item count
  const { isPending, data } = useQuery({
    queryKey: ["get-cart-item-count"],
    queryFn: async () => {
      return await $axios.get("/cart/item/count");
    },
    enabled: userRole === "user"
  });

  const cartItemCount = data?.data?.cartItemCount;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        R Krishi & Pashu Firm
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "4rem" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#25783e" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            R Krishi & Pashu Firm
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" }
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={{ color: "#fff" }}
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.name}
              </Button>
            ))}
            {userRole !== "user" && userRole !== "admin" && (
              <>
                <Button
                  sx={{ color: "#fff", fontWeight: "500" }}
                  onClick={() => {
                    navigate("/shop");
                  }}
                >
                  Shop
                </Button>
                <Button
                  sx={{ color: "#fff", fontWeight: "bold" }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
              </>
            )}
            {userRole === "user" && (
              <>
                <Button
                  sx={{ color: "#fff" }}
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  Shop
                </Button>
                <IconButton
                  sx={{ color: "#fff" }}
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <Badge badgeContent={cartItemCount} color="success">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
                <Typography sx={{ margin: "1rem", fontWeight: "bold" }}>
                  Hi, {localStorage.getItem("firstName")}
                </Typography>
                <Tooltip title="Logout">
                  <IconButton
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      navigate("/home");

                      // clear local storage
                      localStorage.clear();
                    }}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              </>
            )}
            {userRole === "admin" && (
              <>
                <Button
                  sx={{ color: "#fff" }}
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  Shop
                </Button>
                <Typography sx={{ m: "1rem", fontWeight: "bold" }}>
                  Hi, {localStorage.getItem("firstName")}
                </Typography>
                <Tooltip title="Logout">
                  <IconButton
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      navigate("/home");

                      // clear local storage
                      localStorage.clear();
                    }}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
