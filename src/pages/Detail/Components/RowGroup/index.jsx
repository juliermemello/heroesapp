import React from "react";
import { Grid } from "@mui/material";

function RowGroup(props) {
  return (
    <Grid container spacing={2}>
      {props.children}
    </Grid>
  );
}

export default RowGroup;
