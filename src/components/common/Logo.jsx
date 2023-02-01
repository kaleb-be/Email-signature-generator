import React from "react";
import { Box } from "@mui/material";

const RenderLogo = (fontSize) => {
  return (
    <Box>
      <b
        style={{
          fontFamily: "'Calibri', sans-serif",
          fontWeight: 700,
          fontSize: `${fontSize}em`,
          color: "#00FFFF",
        }}
      >
        Ohm
      </b>
      <b
        style={{
          fontFamily: "'Calibri', sans-serif",
          fontWeight: 700,
          fontSize: `${fontSize}em`,
          color: "#800080",
        }}
      >
        swich
      </b>
    </Box>
  );
};

export default RenderLogo;
