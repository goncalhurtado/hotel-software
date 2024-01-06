import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CustomLink, CustomLinkMobile } from "./Links";

const Navbar = ({ isLogged, setIsLogged }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    navigate("/login");
  };

  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Rooms",
      path: "/rooms",
    },
    {
      name: "Booking",
      path: "/bookings",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const pagesAdmin = [
    {
      name: "Admin",
      path: "/admin",
    },
    {
      name: "Contact",
      path: "/admin/contact",
    },
    {
      name: "Categories",
      path: "/admin/categories",
    },
    {
      name: "Rooms",
      path: "/admin/rooms",
    },

    {
      name: "Booking",
      path: "/admin/bookings",
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      {isLogged && (
        <Box style={{ width: "100%", textAlign: "center", background: "red" }}>
          ADMIN
        </Box>
      )}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <img
              src="https://res.cloudinary.com/dr2iqnauy/image/upload/v1704579341/hotel-software/logo_hotel_goncal_copia_ouudm1.png"
              alt="hotel goncal logo"
              style={{
                width: "60px",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {!isLogged
                ? pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <CustomLinkMobile page={page} />
                      </Typography>
                    </MenuItem>
                  ))
                : pagesAdmin.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <CustomLinkMobile page={page} />
                      </Typography>
                    </MenuItem>
                  ))}

              {isLogged && (
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Loggout</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Hotel Goncal
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {/* <NavLink> */}
            {!isLogged
              ? pages.map((page) => (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                    }}
                  >
                    <CustomLink page={page} />
                  </Button>
                ))
              : pagesAdmin.map((page) => (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                    }}
                  >
                    <CustomLink page={page} />
                  </Button>
                ))}

            {isLogged && (
              <Button
                onClick={handleLogout}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Loggout
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
