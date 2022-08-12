import React from "react";
import { Grid, Skeleton } from "@mui/material";

function DisplaySkeleton() {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(3)).map((item, index) => (
        <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
          <Skeleton variant="rounded" width="100%" height={200} />
        </Grid>
      ))}
    </Grid>
  );
}

export default DisplaySkeleton;
