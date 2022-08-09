import React from "react";
import { Typography } from "@mui/material";

function Label(props) {
  return (
    <Typography variant="button" fontWeight={700}>
      {props.children}
    </Typography>
  );
}

export default Label;
