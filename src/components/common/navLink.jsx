import React from "react";
import { Link, Grid, MenuItem, Typography } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

const NavLink = (
  label,
  href,
  handleCloseNavMenu = () => {},
  menuitem = false
) => {
  return menuitem ? (
    <MenuItem key={href} onClick={handleCloseNavMenu}>
      <Typography
        component="a"
        href={"/" + href}
        sx={{ textDecoration: "none" }}
        color={grey[900]}
        textAlign="center"
      >
        {label}
      </Typography>
    </MenuItem>
  ) : (
    <Link
      href={"/" + href}
      key={href}
      onClick={handleCloseNavMenu}
      sx={{
        marginX: 0,
        paddingX: 2,

        textDecoration: "none",
        fontWeight: "bold",
        color: grey[50],
        display: "block",
        "&:hover": {
          backgroundColor: amber[50],
          color: amber[900],
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Grid item sx={{ paddingY: 3 }}>
        {label}
      </Grid>
    </Link>
  );
};

export default NavLink;
