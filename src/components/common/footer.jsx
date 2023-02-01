import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
// import {  Link } from "react-router-dom";
import RenderLogo from "./Logo";
import { amber, cyan } from "@mui/material/colors";
const OhmswichFooter = () => {
  return (
    <Box
      sx={{
        px: { xs: 3, sm: 10 },
        background: {
          lg: "linear-gradient(to left bottom, #800080, #ffa000)",
          md: "linear-gradient(to left top, #800080, #ffa000)",
          xs: "linear-gradient(to top, #800080, #ffa000)",
        },
        bgcolor: amber[700],
        color: cyan[50],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} lg={4}>
            <Typography
              component="a"
              href="/"
              sx={{
                textAlign: { lg: "justify", md: "center" },
                textDecoration: "none",
                letterSpacing: "0.1rem",
              }}
            >
              {RenderLogo(2.5)}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box borderBottom={1} sx={{ mb: 1 }}>
              Repository
            </Box>
            <Box>
              <Link
                color="inherit"
                href="/personnel"
                sx={{ textDecoration: "none" }}
              >
                Email Signature Generated History
              </Link>
            </Box>

            <Box>
              <Link
                color="inherit"
                href="/personnel"
                sx={{ textDecoration: "none" }}
              >
                All Email Signatures
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box borderBottom={1} sx={{ mb: 1 }}>
              Help
            </Box>
            <Box>
              <Link
                color="inherit"
                href="/department"
                sx={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </Box>
            <Box>
              <Link
                color="inherit"
                href="/department"
                sx={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 1 }}>
          Ohmswich Ltd. &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
};

export default OhmswichFooter;
