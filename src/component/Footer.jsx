import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { Avatar, Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ width: "100%", padding: 0, margin: 0 }}>
      <Box
        sx={{
          bgcolor: "#25783e",

          padding: "1rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          alignItems: "flex-start"
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Avatar
            alt="Remy Sharp"
            src="/src/assets/images/plant.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <Typography sx={{ textAlign: "justify", color: "white" }}>
            We are a trusted leader in agriculture, livestock, and veterinary
            services. With a team of dedicated professionals, we provide a
            comprehensive range of products and expert guidance to support the
            well-being of animals and the success of farming communities. Our
            commitment to quality, sustainability, and ethical practices drives
            everything we do. Whether youre a farmer, livestock professional, or
            involved in agriculture, were here to empower your journey towards
            prosperity and sustainability.
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Button variant="contained">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedinIn color="white" />
              </a>
            </Button>
            <Button variant="contained">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebookF color="white" />
              </a>
            </Button>
            <Button variant="contained">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineTwitter color="white" />
              </a>
            </Button>
            <Button variant="contained">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillInstagram color="white" />
              </a>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "3rem",
            width: { xs: "100%", md: "50%" },
            justifyContent: "space-evenly"
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", color: "white" }}
          >
            <h4>Permalinks</h4>
            <Link to="/about" style={{ color: "white" }}>
              About
            </Link>
            <Link to="/services" style={{ color: "white" }}>
              Services
            </Link>
            <Link to="/shop" style={{ color: "white" }}>
              Shop
            </Link>
            <Link to="/gallery" style={{ color: "white" }}>
              Gallery
            </Link>
            <Link to="/contact" style={{ color: "white" }}>
              Contact
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ color: "white" }}>Insights</h4>
            <Link to="/s" style={{ color: "white" }}>
              Blog
            </Link>
            <Link to="/s" style={{ color: "white" }}>
              Case studies
            </Link>
            <Link to="/s" style={{ color: "white" }}>
              Events
            </Link>
            <Link to="/s" style={{ color: "white" }}>
              Communities
            </Link>
            <Link to="/s" style={{ color: "white" }}>
              FAQs
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ color: "white" }}>Contact</h4>
            <Link to="/contact" style={{ color: "white" }}>
              Contact us
            </Link>
            <Link to="/s" style={{ color: "white" }}>
              Support
            </Link>
          </Box>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#25783e", padding: "1rem", textAlign: "center" }}>
        <small>2022 SUBE &copy; All rights Reserved</small>
      </Box>
    </footer>
  );
};

export default Footer;
