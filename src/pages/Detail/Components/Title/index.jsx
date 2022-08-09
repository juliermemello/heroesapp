import React from "react";
import { Typography } from "@mui/material";

function Title(props) {
  return (
    <Typography variant="h5" fontWeight={700} marginBottom="20px">
      {props.children}
    </Typography>
  );
}

export default Title;
