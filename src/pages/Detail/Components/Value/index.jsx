import React from "react";
import { Typography } from "@mui/material";

function Value(props) {
  return (
    <Typography variant="body1">
      {props.children}
    </Typography>
  );
}

export default Value;
