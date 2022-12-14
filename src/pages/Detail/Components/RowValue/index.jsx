import React from "react";
import { Grid } from "@mui/material";

import Value from "../Value";

function RowValue(props) {
  return (
    <Grid item md={props.size}>
      <Value>{props.children}</Value>
    </Grid>
  );
}

export default RowValue;
