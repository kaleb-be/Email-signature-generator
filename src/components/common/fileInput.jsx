import React from "react";
import { Button } from "@mui/material";

function HeadshotInput({ name, accept = "image", type, onHeadshotChange }) {
  return (
    <div>
      <Button
        fullWidth
        color="secondary"
        variant="contained"
        sx={{ my: 1.5 }}
        component="label"
      >
        Upload Professional Headshot
        <input
          type="file"
          accept={accept + "/*"}
          id={name}
          name={name}
          hidden
          autoFocus={false}
          onChange={onHeadshotChange}
        />
      </Button>
    </div>
  );
}

export default HeadshotInput;
