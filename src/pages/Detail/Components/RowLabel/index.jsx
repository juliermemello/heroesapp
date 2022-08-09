import React from "react";
import { Grid } from "@mui/material";

import Label from "../Label";

function RowLabel(props) {
  return (
    <Grid item md={props.size}>
      <Label>{props.children}</Label>
    </Grid>
  );
}

export default RowLabel;
