import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function Display(props) {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card elevation={1}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {props.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={(e) => props.onReadMore()}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Display;
