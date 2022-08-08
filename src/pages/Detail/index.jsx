import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import data from "data/data.json";

function Detail() {
  const { id } = useParams();

  useEffect(() => {
    console.log("id", id);
    console.log("data", data);
    console.log(data.filter((x) => x.id == id));
  }, []);

  return (
    <>
      <Grid container>
        <Grid item md={4}>
          Test
        </Grid>
        <Grid item md={8}>
          Test
        </Grid>
      </Grid>
    </>
  );
}

export default Detail;
