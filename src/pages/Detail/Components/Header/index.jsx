import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const HeaderStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "10px",
  borderRadius: "5px",
  marginBottom: "10px",
}));

function Header(props) {
  let theme = createTheme();

  return (
    <HeaderStyled>
      <Grid container direction="row" alignItems="center" spacing={2}>
        <Grid item>
          <Avatar src={props.avatar} sx={{ height: "72px", width: "72px" }} />
        </Grid>
        <Grid item>
          <Typography
            variant="h3"
            component="div"
            color={theme.palette.primary.contrastText}
          >
            {props.name}
          </Typography>
        </Grid>
      </Grid>
    </HeaderStyled>
  );
}

export default Header;
