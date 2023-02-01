import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { HelpTwoTone } from "@mui/icons-material";

const Input = ({
  name,
  label,
  value,
  type,
  onEdit,
  error = false,
  autoFocus = false,
  sample = "",
  clickShowSample = () => {},
  showSample = null,
  requireSample,
  fullwidth = true,
  renderHelperText = () => {},
}) => {
  return (
    <div>
      <TextField
        fullWidth={fullwidth}
        color="secondary"
        id={name}
        label={label}
        value={value}
        onChange={onEdit}
        autoFocus={autoFocus}
        type={type}
        aria-label={label}
        name={name}
        variant="standard"
        sx={{ my: 1.5 }}
        error={error && true}
        helperText={
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {error && (
              <li
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  color: "red",
                  fontSize: "11px",
                }}
              >
                {error}
              </li>
            )}
            {showSample && (
              <li
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  color: "cornflowerblue",
                  fontSize: "11px",
                }}
              >
                {sample}
              </li>
            )}
          </ul>
        }
        InputProps={{
          endAdornment: requireSample && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle sample visibility"
                onClick={clickShowSample}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                <HelpTwoTone sx={{ color: "#800080" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Input;
