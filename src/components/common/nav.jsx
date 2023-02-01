import * as React from "react";
import {
  Container,
  Grid,
  Menu,
  Typography,
  IconButton,
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";
import { HomeRounded, Menu as MenuIcon } from "@mui/icons-material";
import { purple, amber } from "@mui/material/colors";
import RenderLogo from "./Logo";
import NavLink from "./navLink";

const OhmswichNavbar = () => {
  const [anchorNav, setanchorNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setanchorNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setanchorNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: amber[600],
        background: {
          md: "linear-gradient(to left bottom, #800080, #ffa000)",
          xs: "linear-gradient(to left, #9c27b0, #ffa000)",
        },
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <HomeRounded
            sx={{
              fontSize: 40,
              color: purple[600],
              display: { xs: "none", md: "flex" },
              mr: 1,
              ml: 3,
            }}
          />
          <Typography
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
              letterSpacing: "0.1rem",
            }}
          >
            {RenderLogo(2.2)}
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: purple[700],
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {NavLink(
                "Personnel Email Signature",
                "personnel",
                handleCloseNavMenu,
                true
              )}
              {NavLink(
                "Department Email Signature",
                "department",
                handleCloseNavMenu,
                true
              )}
              {NavLink("Login", "login", handleCloseNavMenu, true)}
              {NavLink("Register", "register", handleCloseNavMenu, true)}
            </Menu>
          </Box>
          <HomeRounded
            sx={{
              fontSize: 30,
              color: purple[600],
              display: { xs: "none", sm: "flex", md: "none" },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
            }}
          >
            {RenderLogo(1.4)}
          </Typography>
          <Grid
            container
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {NavLink("Personnel Email Signature", "personnel")}
            {NavLink("Department Email Signature", "department")}
            {NavLink("Login", "login")}
            {NavLink("Register", "register")}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default OhmswichNavbar;
