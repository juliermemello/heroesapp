import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const HeaderStyled = styled(Box)(({ theme, alignment }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "10px",
  borderRadius: "5px",
  marginBottom: "10px",
  // borderTop: `3px solid ${alignment === "good" ? blue[500] : red[500]}`,
}));

function Header(props) {
  let theme = createTheme();

  return (
    <HeaderStyled alignment={props.alignment}>
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
